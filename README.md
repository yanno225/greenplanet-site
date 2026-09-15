# GreenPlanet Technology — Site corporate

Site vitrine de GreenPlanet Technology (drones, satellites, monitoring).
Direction artistique : corporate, futuriste, esprit startup américaine.
Palette issue du logo : vert profond `#085055`, jaune doré `#F9CA15`.

## Stack

- **Next.js 16** (App Router, TypeScript) + **Tailwind CSS 4**
- **three.js + @react-three/fiber + @react-three/drei** : drone 3D procédural (hélices animées, caméra-œil qui suit le curseur)
- **motion** (Framer Motion) : animations d'interface, menu, entrées de section
- **lenis** : scroll fluide
- Polices Google via `next/font` : Manrope (texte) et Geist Mono (données/horloge)

## Lancer

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000.

## Structure

```
src/
  app/
    layout.tsx            # polices, métadonnées, scroll fluide
    page.tsx              # page d'accueil (header + hero + aperçu des 3 piliers)
    globals.css           # tokens couleur (@theme), watermark, grille, coins
  components/
    layout/Header.tsx     # logo, tagline, horloge, bouton menu
    layout/MenuOverlay.tsx# menu plein écran (panneau haut, "close", liens)
    hero/Hero.tsx         # panneau visuel + titre
    sections/Services.tsx # 4 cartes services + diaporama (drone, satellite)
    sections/Sectors.tsx  # 6 secteurs, image qui change au survol
    sections/Realisations.tsx # réalisations pilotées au scroll (arc numéroté)
    sections/Stats.tsx    # chiffres clés animés (suite des réalisations)
    layout/Footer.tsx     # pied de page complet (logo, navigation, bureaux, réseaux, crédits)
    sections/Trusted.tsx  # « Ils nous ont fait confiance » : logos clients en défilement continu
    sections/Contact.tsx  # bandeau vert « Parlons de votre projet » + formulaire
  app/api/contact/route.ts # réception du formulaire (validation, journal ; envoi email à brancher)
  app/mentions-legales, app/confidentialite # pages légales (textes à compléter)
  app/realisations/[slug]/page.tsx # page de détail d'un projet (5 pages statiques)
  lib/projects.ts         # données des réalisations (accueil + pages de détail)
    hero/DroneScene.tsx   # Canvas R3F, lumières, environnement, ombre
    hero/Drone.tsx        # modèle du drone (rotors, bras, pieds, gimbal-œil)
    providers/SmoothScroll.tsx
  lib/site.ts             # nom, tagline, navigation
public/brand/             # logo (mark.png, logo.png, logo-white.png)
```

## Notes

- Les textes et liens de navigation se modifient dans `src/lib/site.ts` et `src/app/page.tsx`.
- Le hero affiche le panneau clair « greenplanet » puis bascule sur deux clips vidéo 4K en boucle (satellite Landsat 9 par NASA SVS, drone DJI en vol stationnaire, gros plan, Pixabay) dans `public/video/` (mp4 H.264 3840×2160 + poster, muets, ~10 s chacun). Les composants du drone 3D (`Drone.tsx`, `DroneScene.tsx`) restent dans le projet mais ne sont plus utilisés. Le modèle GLB réaliste (`public/models/dji-fpv.glb`, compressé Draco, décodeurs dans `public/draco/`).
  Le modèle fusionne les quatre hélices dans un seul maillage : `Drone.tsx` découpe ces triangles au chargement,
  les place sous quatre pivots alignés sur le plan de chaque hélice, et regroupe les pièces de la caméra sous un
  pivot centré sur la nacelle pour qu'elle suive le curseur.

## Crédits

- Modèle 3D « DJI FPV by SDC (High performance drone) » par SDC PERFORMANCE™, Sketchfab,
  licence [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — attribution affichée dans le pied de page.
  https://sketchfab.com/3d-models/dji-fpv-by-sdc-high-performance-drone-d471ea8c6235457b8e131842e2cf3783
