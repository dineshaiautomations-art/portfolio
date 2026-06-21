"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Loader2, CheckCircle2, AlertCircle, Mail } from "lucide-react";
import { CONTACT, SITE } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-pad relative">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[700px] -translate-x-1/2 -translate-y-1/2 ambient-glow" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        >
          <span className="eyebrow">Contact</span>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl tracking-tight text-ink-100">
            {CONTACT.headline}
          </h2>
          <p className="mt-4 text-ink-300">{CONTACT.subheadline}</p>

          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 inline-flex items-center gap-2 rounded-pill bg-emerald-500 px-6 py-3.5 text-sm font-medium text-black transition-transform hover:scale-[1.02] hover:bg-emerald-400"
          >
            Schedule a Call
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <div className="my-10 flex items-center gap-4 text-ink-500">
            <span className="h-px flex-1 bg-line" />
            <span className="font-mono text-xs uppercase tracking-wider">
              or send a message
            </span>
            <span className="h-px flex-1 bg-line" />
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          className="glass-card p-6 sm:p-8 text-left"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" placeholder="Your name" required />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="you@company.com"
              required
            />
          </div>
          <div className="mt-4">
            <Field label="Company" name="company" placeholder="Company (optional)" />
          </div>
          <div className="mt-4">
            <label className="block">
              <span className="text-xs font-mono uppercase tracking-wider text-ink-500">
                Project Details
              </span>
              <textarea
                name="projectDetails"
                required
                rows={4}
                placeholder="What would you like to automate?"
                className="mt-2 w-full resize-none rounded-xl border border-line-strong bg-black/40 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-700 outline-none transition-colors focus:border-emerald-400"
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-pill bg-emerald-500 px-6 py-3.5 text-sm font-medium text-black transition-transform hover:scale-[1.02] hover:bg-emerald-400 disabled:opacity-60 disabled:hover:scale-100"
          >
            {status === "loading" && <Loader2 className="size-4 animate-spin" />}
            {status === "loading" ? "Sending…" : "Send Message"}
          </button>

          {status === "success" && (
            <p className="mt-4 flex items-center gap-2 text-sm text-emerald-400">
              <CheckCircle2 className="size-4" />
              Message sent — I&apos;ll get back to you within 24 hours.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 flex items-center gap-2 text-sm text-red-400">
              <AlertCircle className="size-4" />
              Something went wrong. Email me directly at {SITE.email}.
            </p>
          )}
        </motion.form>

        <div className="mt-10 flex items-center justify-center gap-5">
          <SocialLink href={`mailto:${SITE.email}`} icon={Mail}label="Email"/>
          <SocialLink href={SITE.social.github} icon={GithubIcon}label="GitHub"/>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-mono uppercase tracking-wider text-ink-500">
        {label}
      </span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-xl border border-line-strong bg-black/40 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-700 outline-none transition-colors focus:border-emerald-400"
      />
    </label>
  );
}

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="flex size-11 items-center justify-center rounded-full border border-line-strong text-ink-300 transition-colors hover:border-emerald-400 hover:text-emerald-400"
    >
      <Icon className="size-4.5" strokeWidth={1.75} />
    </a>
  );
}
