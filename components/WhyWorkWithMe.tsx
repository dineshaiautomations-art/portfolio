"use client";

import { motion } from "framer-motion";
import { Target, Zap, Server, Layers } from "lucide-react";
import { WHY_WORK_WITH_ME } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const ICONS = [Target, Zap, Server, Layers];

export default function WhyWorkWithMe() {
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Work With Me"
          title="A Data Engineer's Approach to Automation"
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_WORK_WITH_ME.map((card, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.25, 1, 0.5, 1] }}
                className="glass-card p-6 sm:p-7"
              >
                <Icon className="size-5 text-emerald-400" strokeWidth={1.75} />
                <h3 className="mt-5 font-display font-semibold text-base text-ink-100 leading-snug">
                  {card.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-300">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
