"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const MODEL_URL = "/models/dji-fpv.glb";
const DRACO_PATH = "/draco/";

/** Meshes of the source model whose triangles contain the four propellers (merged by the author). */
const BLADE_MESH = "Object_163";
const PROP_MESHES = ["Object_163", "Object_164", "Object_165", "Object_166"];
/** Meshes that make up the gimbal camera head (lens, barrel, round housing). */
const CAMERA_PARENT = "camera2002_0";
const CAMERA_EXTRA = ["Object_160", "Object_124"];

const PROP_RADIUS = 0.85;
const PROP_SPEED = 14; // rad/s — fast enough to read as spinning, slow enough not to strobe

type Rotor = { pivot: THREE.Group; dir: 1 | -1 };
type Parts = { rotors: Rotor[]; eye: THREE.Group | null };

/** drei caches the loaded scene for the page life: rig each scene object only once. */
const RIGGED = new WeakMap<THREE.Object3D, Parts>();

function rigOnce(scene: THREE.Group): Parts {
  let parts = RIGGED.get(scene);
  if (!parts) {
    parts = rig(scene);
    RIGGED.set(scene, parts);
  }
  return parts;
}

/* ------------------------------------------------------------------ */
/* Geometry helpers                                                    */
/* ------------------------------------------------------------------ */

function triangleCount(g: THREE.BufferGeometry) {
  return (g.index ? g.index.count : g.attributes.position.count) / 3;
}

function vertexIndex(g: THREE.BufferGeometry, t: number, k: number) {
  return g.index ? g.index.getX(t * 3 + k) : t * 3 + k;
}

/** New geometry sharing the vertex buffers of `g` but only containing the given triangles. */
function subGeometry(g: THREE.BufferGeometry, tris: number[]) {
  const out = new THREE.BufferGeometry();
  for (const [name, attr] of Object.entries(g.attributes)) out.setAttribute(name, attr);
  const idx = new Uint32Array(tris.length * 3);
  for (let i = 0; i < tris.length; i++) {
    idx[i * 3] = vertexIndex(g, tris[i], 0);
    idx[i * 3 + 1] = vertexIndex(g, tris[i], 1);
    idx[i * 3 + 2] = vertexIndex(g, tris[i], 2);
  }
  out.setIndex(new THREE.BufferAttribute(idx, 1));
  out.computeBoundingSphere();
  return out;
}

/** Smallest-variance direction of a point cloud (the propeller disc normal). */
function planeNormal(points: THREE.Vector3[], mean: THREE.Vector3) {
  let xx = 0, xy = 0, xz = 0, yy = 0, yz = 0, zz = 0;
  for (const p of points) {
    const x = p.x - mean.x, y = p.y - mean.y, z = p.z - mean.z;
    xx += x * x; xy += x * y; xz += x * z; yy += y * y; yz += y * z; zz += z * z;
  }
  const n = points.length || 1;
  const cov = new THREE.Matrix3().set(xx / n, xy / n, xz / n, xy / n, yy / n, yz / n, xz / n, yz / n, zz / n);
  const inv = cov.clone().invert();
  const v = new THREE.Vector3(0, 1, 0);
  for (let i = 0; i < 24; i++) v.applyMatrix3(inv).normalize();
  if (v.y < 0) v.negate();
  return v;
}

/* ------------------------------------------------------------------ */
/* One-time rig: split propellers, re-pivot the camera                 */
/* ------------------------------------------------------------------ */

function rig(scene: THREE.Group): Parts {
  scene.updateMatrixWorld(true);
  const toScene = scene.matrixWorld.clone().invert();
  const local = (m: THREE.Mesh) => m.matrixWorld.clone().premultiply(toScene);

  const byName = (n: string) => scene.getObjectByName(n) as THREE.Mesh | undefined;
  const blades = byName(BLADE_MESH);
  if (!blades) return { rotors: [], eye: null };

  // 1. Locate the four rotors from the carbon blade mesh.
  const bladeM = local(blades);
  const bladeGeo = blades.geometry;
  const box = new THREE.Box3().setFromBufferAttribute(bladeGeo.attributes.position as THREE.BufferAttribute).applyMatrix4(bladeM);
  const cx = (box.min.x + box.max.x) / 2;
  const cz = (box.min.z + box.max.z) / 2;
  const cornerOf = (p: THREE.Vector3) => (p.x > cx ? 1 : 0) + (p.z > cz ? 2 : 0);

  const clusters = [0, 1, 2, 3].map(() => ({ pts: [] as THREE.Vector3[], mean: new THREE.Vector3(), minY: Infinity, radius: 0 }));
  const centroid = (g: THREE.BufferGeometry, t: number, m: THREE.Matrix4) => {
    const c = new THREE.Vector3();
    const tmp = new THREE.Vector3();
    const pos = g.attributes.position as THREE.BufferAttribute;
    for (let k = 0; k < 3; k++) c.add(tmp.fromBufferAttribute(pos, vertexIndex(g, t, k)));
    return c.multiplyScalar(1 / 3).applyMatrix4(m);
  };
  for (let t = 0; t < triangleCount(bladeGeo); t++) {
    const c = centroid(bladeGeo, t, bladeM);
    const cl = clusters[cornerOf(c)];
    cl.pts.push(c);
    cl.mean.add(c);
    cl.minY = Math.min(cl.minY, c.y);
  }
  for (const cl of clusters) {
    cl.mean.multiplyScalar(1 / (cl.pts.length || 1));
    for (const p of cl.pts) cl.radius = Math.max(cl.radius, Math.hypot(p.x - cl.mean.x, p.z - cl.mean.z));
  }

  // 2. Pivots: one per rotor, aligned to the propeller disc normal.
  const rotors: Rotor[] = clusters.map((cl, i) => {
    const pivot = new THREE.Group();
    pivot.name = `rotor-${i}`;
    pivot.position.copy(cl.mean);
    pivot.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), planeNormal(cl.pts, cl.mean));
    scene.add(pivot);
    // spinning-blur discs (two layers: soft outer haze + brighter inner ring)
    const r = Math.min(cl.radius, PROP_RADIUS);
    const haze = new THREE.Mesh(
      new THREE.RingGeometry(0.14, r * 1.02, 72),
      new THREE.MeshBasicMaterial({ color: "#d7dee1", transparent: true, opacity: 0.22, depthWrite: false, side: THREE.DoubleSide }),
    );
    haze.rotation.x = -Math.PI / 2;
    haze.position.y = 0.012;
    pivot.add(haze);
    const streak = new THREE.Mesh(
      new THREE.RingGeometry(r * 0.55, r * 0.95, 72),
      new THREE.MeshBasicMaterial({ color: "#eef2f4", transparent: true, opacity: 0.16, depthWrite: false, side: THREE.DoubleSide }),
    );
    streak.rotation.x = -Math.PI / 2;
    streak.position.y = 0.03;
    pivot.add(streak);
    const sx = i % 2 === 0 ? -1 : 1;
    const sz = i < 2 ? -1 : 1;
    return { pivot, dir: (sx * sz) as 1 | -1 };
  });

  // 3. Move propeller triangles out of the merged meshes into the pivots.
  for (const name of PROP_MESHES) {
    const mesh = byName(name);
    if (!mesh) continue;
    const g = mesh.geometry;
    const m = local(mesh);
    const buckets: number[][] = [[], [], [], []];
    const rest: number[] = [];
    for (let t = 0; t < triangleCount(g); t++) {
      const c = centroid(g, t, m);
      const k = cornerOf(c);
      const cl = clusters[k];
      const r = Math.hypot(c.x - cl.mean.x, c.z - cl.mean.z);
      if (r <= PROP_RADIUS && c.y >= cl.minY - 0.03) buckets[k].push(t);
      else rest.push(t);
    }
    buckets.forEach((tris, k) => {
      if (!tris.length) return;
      const part = new THREE.Mesh(subGeometry(g, tris), mesh.material);
      part.applyMatrix4(m);
      scene.add(part);
      rotors[k].pivot.attach(part);
    });
    mesh.geometry = subGeometry(g, rest);
  }

  // 4. Camera head: gather its meshes under a pivot placed at the housing centre.
  const camParent = scene.getObjectByName(CAMERA_PARENT);
  const camMeshes: THREE.Mesh[] = [];
  camParent?.traverse((o) => { if ((o as THREE.Mesh).isMesh) camMeshes.push(o as THREE.Mesh); });
  for (const n of CAMERA_EXTRA) { const o = byName(n); if (o) camMeshes.push(o); }
  let eye: THREE.Group | null = null;
  if (camMeshes.length) {
    const camBox = new THREE.Box3();
    for (const mesh of camMeshes) {
      camBox.union(new THREE.Box3().setFromBufferAttribute(mesh.geometry.attributes.position as THREE.BufferAttribute).applyMatrix4(local(mesh)));
    }
    eye = new THREE.Group();
    eye.name = "gimbal-eye";
    camBox.getCenter(eye.position);
    scene.add(eye);
    for (const mesh of camMeshes) eye.attach(mesh);
  }

  // 5. Materials: a touch more reflectivity for the studio look.
  scene.traverse((o) => {
    const mesh = o as THREE.Mesh;
    if (!mesh.isMesh) return;
    const mat = mesh.material as THREE.MeshStandardMaterial;
    if (mat && "envMapIntensity" in mat) mat.envMapIntensity = 1.15;
  });

  return { rotors, eye };
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export default function Drone() {
  const { scene } = useGLTF(MODEL_URL, DRACO_PATH);
  const root = useRef<THREE.Group>(null);
  const parts = useRef<Parts | null>(null);
  const { pointer } = useThree();
  const viewport = useThree((s) => s.viewport);

  // Model spans ~5.4 units; keep it inside the frame on portrait screens.
  const aspect = viewport.width / viewport.height;
  const scale = Math.min(0.8 * aspect, 0.98);
  const baseY = -1.05 * scale;

  const target = useMemo(() => new THREE.Vector3(), []);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const parentQ = useMemo(() => new THREE.Quaternion(), []);
  const worldPos = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ clock }, dt) => {
    const g = root.current;
    if (!g) return;
    if (!parts.current) parts.current = rigOnce(scene);
    const { rotors, eye } = parts.current;
    const step = Math.min(dt, 0.05);
    const t = clock.elapsedTime;

    for (const r of rotors) r.pivot.rotateY(r.dir * step * PROP_SPEED);

    // level hover, facing the viewer
    g.position.y = baseY + Math.sin(t * 1.1) * 0.05;

    if (eye && eye.parent) {
      eye.getWorldPosition(worldPos);
      target.set(worldPos.x + pointer.x * 2.4, worldPos.y + pointer.y * 1.5, worldPos.z + 6);
      dummy.position.copy(worldPos);
      dummy.lookAt(target);
      eye.parent.getWorldQuaternion(parentQ).invert();
      const localTarget = parentQ.multiply(dummy.quaternion);
      eye.quaternion.slerp(localTarget, 1 - Math.exp(-step * 7));
    }
  });

  return (
    <group ref={root} position={[0, baseY, 0.3 * scale]} scale={scale}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(MODEL_URL, DRACO_PATH);
