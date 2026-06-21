"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";
import type { Project } from "@/lib/data";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setImageIndex(0);
  }, [project]);

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setImageIndex((i) => Math.min(i + 1, project.images.length - 1));
      if (e.key === "ArrowLeft") setImageIndex((i) => Math.max(i - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center overflow-y-auto bg-black/80 backdrop-blur-md p-4 sm:p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="relative my-auto w-full max-w-4xl rounded-card border border-line-strong bg-raised shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-full border border-line-strong bg-black/60 text-ink-100 backdrop-blur transition-colors hover:border-emerald-400 hover:text-emerald-400"
            >
              <X className="size-4" />
            </button>

            {/* image stage */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-t-card bg-black">
              <AnimatePresence mode="wait">
                <motion.div
                  key={imageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={project.images[imageIndex].src}
                    alt={project.images[imageIndex].alt}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {project.images.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Previous screenshot"
                    onClick={() => setImageIndex((i) => Math.max(i - 1, 0))}
                    disabled={imageIndex === 0}
                    className="absolute left-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-line-strong bg-black/60 text-ink-100 backdrop-blur transition-colors hover:border-emerald-400 hover:text-emerald-400 disabled:opacity-30"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next screenshot"
                    onClick={() =>
                      setImageIndex((i) => Math.min(i + 1, project.images.length - 1))
                    }
                    disabled={imageIndex === project.images.length - 1}
                    className="absolute right-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-line-strong bg-black/60 text-ink-100 backdrop-blur transition-colors hover:border-emerald-400 hover:text-emerald-400 disabled:opacity-30"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                    {project.images.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 rounded-pill transition-all ${
                          i === imageIndex ? "w-5 bg-emerald-400" : "w-1.5 bg-ink-700"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            <p className="border-b border-line px-6 py-3 text-center font-mono text-xs text-ink-500 sm:px-8">
              {project.images[imageIndex].caption}
            </p>

            {/* content */}
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <span className="eyebrow">{project.category}</span>
                <h3 className="mt-2 font-display font-semibold text-2xl text-ink-100">
                  {project.title}
                </h3>

                {project.problem && (
                  <p className="mt-4 text-sm leading-relaxed text-ink-300">
                    <span className="text-ink-100 font-medium">The problem: </span>
                    {project.problem}
                  </p>
                )}

                {project.workflow && (
                  <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-ink-300">
                    {project.workflow.split(" → ").map((step, i, arr) => (
                      <span key={step} className="flex items-center gap-2">
                        <span className="rounded-pill border border-line-strong px-2.5 py-1">
                          {step}
                        </span>
                        {i < arr.length - 1 && (
                          <ArrowRight className="size-3 text-emerald-500" />
                        )}
                      </span>
                    ))}
                  </div>
                )}

                {project.solution && project.solution.length > 0 && (
                  <ul className="mt-5 space-y-2.5">
                    {project.solution.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-ink-300"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="lg:col-span-2 flex flex-col gap-6">
                {project.benefits && (
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-ink-500">
                      Business Outcome
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {project.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="rounded-xl border border-line bg-surface px-3.5 py-2.5 text-sm text-ink-300"
                        >
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-ink-500">
                    Tech Stack
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-pill border border-line-strong px-3 py-1.5 font-mono text-xs text-emerald-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
