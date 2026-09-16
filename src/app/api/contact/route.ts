import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  company?: string;
  email?: string;
  need?: string;
  message?: string;
  website?: string; // honeypot, must stay empty
};

const MAX = { name: 120, company: 120, email: 200, need: 80, message: 4000 };

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, code: "invalid" }, { status: 400 });
  }

  // Honeypot: bots fill every field, humans never see this one.
  if (body.website) return NextResponse.json({ ok: true });

  const name = (body.name ?? "").trim();
  const company = (body.company ?? "").trim();
  const email = (body.email ?? "").trim();
  const need = (body.need ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, code: "required" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, code: "email" }, { status: 400 });
  }
  if (
    name.length > MAX.name ||
    company.length > MAX.company ||
    email.length > MAX.email ||
    need.length > MAX.need ||
    message.length > MAX.message
  ) {
    return NextResponse.json({ ok: false, code: "long" }, { status: 400 });
  }

  // TODO: brancher l'envoi d'email (Resend, SendGrid, SMTP…) ou un CRM.
  // En attendant, la demande est journalisée côté serveur.
  console.log(`[contact] ${JSON.stringify({ at: new Date().toISOString(), name, company, email, need, message })}`);

  return NextResponse.json({ ok: true });
}
