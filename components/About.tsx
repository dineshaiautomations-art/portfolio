"use client";

import { motion } from "framer-motion";
import { ABOUT } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-7"
          >
            <span className="eyebrow">About</span>
            <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight text-ink-100 text-balance">
              {ABOUT.title}
            </h2>

            <div className="mt-6 space-y-4 text-ink-300 leading-relaxed">
              {ABOUT.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {ABOUT.expertise.map((item) => (
                <span
                  key={item}
                  className="rounded-pill border border-line-strong px-3.5 py-1.5 text-xs font-mono text-ink-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {ABOUT.stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card px-6 py-6 flex items-center justify-between"
              >
                <span className="font-display font-semibold text-4xl text-emerald-400">
                  {stat.value}
                </span>
                <span className="max-w-[10rem] text-right text-sm text-ink-300 leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
