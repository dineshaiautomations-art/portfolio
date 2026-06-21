"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, Plug, Database, ArrowRight, type LucideIcon } from "lucide-react";
import { SERVICES, type Service } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const ICONS: Record<Service["icon"], LucideIcon> = {
  bot: Bot,
  workflow: Workflow,
  plug: Plug,
  database: Database,
};

export default function Services() {
  return (
    <section id="services" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="What I Can Automate For You"
          description="From AI agents to data pipelines — systems designed to remove manual work at every layer of the business."
        />

        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.25, 1, 0.5, 1] }}
                className="glass-card group relative p-7 sm:p-8 flex flex-col"
              >
                <div className="flex size-12 items-center justify-center rounded-xl border border-line-strong text-emerald-400 group-hover:border-emerald-400/60 transition-colors">
                  <Icon className="size-5.5" strokeWidth={1.75} />
                </div>

                <h3 className="mt-6 font-display font-semibold text-xl text-ink-100">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-300">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2.5 pt-6 border-t border-line">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-ink-300"
                    >
                      <ArrowRight className="size-3.5 shrink-0 text-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
