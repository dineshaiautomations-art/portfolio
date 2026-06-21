"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl tracking-tight text-ink-100 text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-ink-300 leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
