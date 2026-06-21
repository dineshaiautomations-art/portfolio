"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function TechStack() {
  return (
    <section id="tech-stack" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I Build With"
          description="A blend of automation platforms, AI models, and enterprise data engineering tooling."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TECH_STACK.map((category, i) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.25, 1, 0.5, 1] }}
              className={`glass-card p-6 sm:p-7 ${
                i === 3 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                {category.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-line-strong bg-surface px-3 py-1.5 text-sm text-ink-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
