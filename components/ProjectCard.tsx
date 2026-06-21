"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

export default function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const cover = project.images[0];

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
      className="group relative w-full text-left"
      aria-haspopup="dialog"
    >
      {/* browser mockup frame */}
      <div className="relative overflow-hidden rounded-card border border-line-strong bg-raised shadow-[0_30px_60px_-25px_rgba(0,0,0,0.7)] transition-colors duration-300 group-hover:border-emerald-400/40">
        <div className="flex items-center gap-1.5 border-b border-line bg-surface px-4 py-3">
          <span className="size-2.5 rounded-full bg-ink-700" />
          <span className="size-2.5 rounded-full bg-ink-700" />
          <span className="size-2.5 rounded-full bg-ink-700" />
          <span className="ml-3 truncate rounded-pill bg-black/40 px-3 py-1 font-mono text-[11px] text-ink-500">
            n8n — {project.slug}
          </span>
        </div>

        <div className="relative aspect-[2/1] overflow-hidden">
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute inset-x-5 bottom-5 flex translate-y-2 items-center gap-1.5 text-sm font-medium text-emerald-400 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            View Case Study
            <ArrowUpRight className="size-4" />
          </div>
        </div>
      </div>

      <div className="mt-5 px-1">
        <span className="eyebrow">{project.category}</span>
        <h3 className="mt-2 font-display font-semibold text-lg leading-snug text-ink-100">
          {project.title}
        </h3>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-pill border border-line px-2.5 py-1 font-mono text-[11px] text-ink-500"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}
