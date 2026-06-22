"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Loader2, CheckCircle2, AlertCircle, Mail } from "lucide-react";
import { CONTACT, SITE } from "@/lib/data";
import { GithubIcon } from "./icons";

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

          <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="group mt-7 inline-flex items-center gap-2 rounded-pill bg-emerald-500 px-6 py-3.5 text-sm font-medium text-black transition-transform hover:scale-[1.02] hover:bg-emerald-400">
            Schedule a Call
            <ArrowUpRight className="size-4" />
          </a>

          <div className="my-10 flex items-center gap-4 text-ink-500">
            <span className="h-px flex-1 bg-line" />
            <span className="font-mono text-xs uppercase tracking-wider">or send a message</span>
            <span className="h-px flex-1 bg-line" />
          </div>
        </motion.div>

        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 1, 0.5, 1] }} className="glass-card p-6 sm:p-8 text-left">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name"
