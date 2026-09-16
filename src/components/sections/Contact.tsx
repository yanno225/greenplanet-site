"use client";

import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import { useLang } from "@/components/providers/LanguageProvider";

const ease = [0.22, 1, 0.36, 1] as const;

type Status = "idle" | "sending" | "sent" | "error";
type ErrorCode = "required" | "email" | "long" | "invalid" | "generic";

const field =
  "w-full rounded-md border border-white/15 bg-white/[0.06] px-4 py-3.5 text-[15px] text-white placeholder:text-white/40 outline-none transition-colors focus:border-gp-yellow/70 focus:bg-white/[0.09]";

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<ErrorCode | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok: boolean; code?: ErrorCode };
      if (!res.ok || !json.ok) {
        setStatus("error");
        setError(json.code ?? "generic");
        return;
      }
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setError("generic");
    }
  }

  return (
    <section id="contact" className="w-full bg-gp-green-deep text-white">
      <div className="mx-auto w-full max-w-[1880px] px-6 py-20 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-[1480px] gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-20">
          {/* Left: pitch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }}
          >
            <h2 className="section-title !text-white">
              {c.title1}
              <br />
              {c.title2}
            </h2>
            <p className="mt-8 max-w-[46ch] text-[17px] leading-relaxed text-white/75">{c.text}</p>
          </motion.div>

          {/* Right: form */}
          <motion.form
            onSubmit={onSubmit}
            className="rounded-[24px] bg-white/[0.04] p-6 ring-1 ring-white/10 md:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-[13px] font-medium text-white/70">
                {c.name}
                <input name="name" required autoComplete="name" placeholder={c.namePh} className={field} />
              </label>
              <label className="flex flex-col gap-2 text-[13px] font-medium text-white/70">
                {c.company}
                <input name="company" autoComplete="organization" placeholder={c.companyPh} className={field} />
              </label>
              <label className="flex flex-col gap-2 text-[13px] font-medium text-white/70 sm:col-span-2">
                {c.email}
                <input name="email" type="email" required autoComplete="email" placeholder={c.emailPh} className={field} />
              </label>
              <label className="flex flex-col gap-2 text-[13px] font-medium text-white/70 sm:col-span-2">
                {c.need}
                <select name="need" defaultValue="" className={`${field} appearance-none`}>
                  <option value="" disabled className="text-ink">
                    {c.choose}
                  </option>
                  {c.needs.map((n) => (
                    <option key={n} value={n} className="text-ink">
                      {n}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-2 text-[13px] font-medium text-white/70 sm:col-span-2">
                {c.message}
                <textarea name="message" required rows={5} placeholder={c.messagePh} className={`${field} resize-y`} />
              </label>
              {/* honeypot */}
              <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
            </div>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gp-yellow px-7 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:bg-gp-yellow-deep disabled:opacity-60"
              >
                {status === "sending" ? c.sending : c.submit}
                <span aria-hidden>→</span>
              </button>
              <p className="text-[13px] leading-relaxed text-white/50" aria-live="polite">
                {status === "sent" && <span className="text-gp-yellow">{c.sent}</span>}
                {status === "error" && <span className="text-red-300">{c.errors[error ?? "generic"]}</span>}
                {(status === "idle" || status === "sending") && c.hint}
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
