"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, FolderGit2 } from "lucide-react";
import { HERO, SITE } from "@/lib/data";
import WorkflowPipeline from "./WorkflowPipeline";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32"
    >
      {/* ambient backdrop — single restrained accent, not a busy gradient mesh */}
      <div className="pointer-events-none absolute inset-0 grain opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 ambient-glow" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-ink-100) 1px, transparent 1px), linear-gradient(to bottom, var(--color-ink-100) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, black, transparent)",
        }}
      />

      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.12, delayChildren: 0.05 }}
        className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center"
      >
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="inline-flex items-center gap-2 rounded-pill border border-line-strong bg-raised px-4 py-1.5 mb-7"
        >
          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="eyebrow">{HERO.eyebrow}</span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="font-display font-semibold text-[2.5rem] leading-[1.08] sm:text-6xl sm:leading-[1.06] tracking-tight text-ink-100"
        >
          {HERO.headline.split("Scale Without Hiring.")[0]}
          <span className="text-emerald-400">Scale Without Hiring.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="mx-auto mt-6 max-w-2xl text-balance text-base sm:text-lg leading-relaxed text-ink-300"
        >
          {HERO.subheadline}
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-pill bg-emerald-500 px-6 py-3.5 text-sm font-medium text-black transition-transform hover:scale-[1.02] hover:bg-emerald-400"
          >
            Book a Discovery Call
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#projects"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-pill border border-line-strong px-6 py-3.5 text-sm font-medium text-ink-100 transition-colors hover:border-emerald-400 hover:text-emerald-400"
          >
            <FolderGit2 className="size-4" />
            View Projects
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="mt-20 sm:mt-24"
        >
          <WorkflowPipeline stages={HERO.pipeline} />
        </motion.div>

        <motion.ul
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          {HERO.badges.map((badge) => (
            <li
              key={badge}
              className="flex items-center gap-1.5 text-sm text-ink-300"
            >
              <Check className="size-3.5 text-emerald-500" strokeWidth={2.5} />
              {badge}
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
