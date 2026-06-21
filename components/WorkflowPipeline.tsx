"use client";

import { motion } from "framer-motion";
import { User, Bot, Database, Bell, BarChart3, type LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Lead: User,
  "AI Agent": Bot,
  CRM: Database,
  Notification: Bell,
  Analytics: BarChart3,
};

export default function WorkflowPipeline({ stages }: { stages: string[] }) {
  return (
    <div
      className="relative w-full max-w-3xl mx-auto"
      role="img"
      aria-label={`Automated workflow: ${stages.join(" leads to ")}`}
    >
      {/* horizontal layout (sm and up) */}
      <div className="hidden sm:flex items-center">
        {stages.map((stage, i) => {
          const Icon = ICONS[stage] ?? Bot;
          const isLast = i === stages.length - 1;
          return (
            <div key={stage} className="flex items-center flex-1 last:flex-none">
              <Node stage={stage} Icon={Icon} index={i} />
              {!isLast && <Connector index={i} />}
            </div>
          );
        })}
      </div>

      {/* vertical layout (mobile) */}
      <div className="sm:hidden flex flex-col items-center gap-1">
        {stages.map((stage, i) => {
          const Icon = ICONS[stage] ?? Bot;
          const isLast = i === stages.length - 1;
          return (
            <div key={stage} className="flex flex-col items-center">
              <Node stage={stage} Icon={Icon} index={i} />
              {!isLast && <ConnectorVertical index={i} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Node({
  stage,
  Icon,
  index,
}: {
  stage: string;
  Icon: LucideIcon;
  index: number;
}) {
  return (
    <div className="flex flex-col items-center gap-3 shrink-0">
      <div className="relative">
        <motion.span
          className="absolute inset-0 rounded-full border border-emerald-400/50"
          animate={{ scale: [1, 1.55], opacity: [0.55, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.4,
            ease: "easeOut",
          }}
        />
        <div className="relative flex size-14 sm:size-16 items-center justify-center rounded-full glass-card border-line-accent text-emerald-400">
          <Icon className="size-6 sm:size-7" strokeWidth={1.75} />
        </div>
      </div>
      <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-ink-300 text-center whitespace-nowrap">
        {stage}
      </span>
    </div>
  );
}

function Connector({ index }: { index: number }) {
  return (
    <div className="relative h-px flex-1 min-w-[28px] mx-1 sm:mx-2 -translate-y-3.5 bg-line-strong overflow-visible">
      <motion.span
        className="absolute top-1/2 -translate-y-1/2 size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]"
        initial={{ left: "0%", opacity: 0 }}
        animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          delay: index * 0.4,
          ease: "linear",
        }}
      />
    </div>
  );
}

function ConnectorVertical({ index }: { index: number }) {
  return (
    <div className="relative w-px h-7 bg-line-strong overflow-visible">
      <motion.span
        className="absolute left-1/2 -translate-x-1/2 size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]"
        initial={{ top: "0%", opacity: 0 }}
        animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          delay: index * 0.4,
          ease: "linear",
        }}
      />
    </div>
  );
}
