import { Mail } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/data";
import { GithubIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="relative border-t border-line">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          <div>
            <a
              href="#home"
              className="font-display font-semibold text-lg text-ink-100"
            >
              {SITE.name}
              <span className="text-emerald-500">.</span>
            </a>
            <p className="mt-2 text-sm text-ink-500">{SITE.role}</p>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ink-300 transition-colors hover:text-emerald-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${SITE.email}`}
              aria-label="Email"
              className="flex size-10 items-center justify-center rounded-full border border-line-strong text-ink-300 transition-colors hover:border-emerald-400 hover:text-emerald-400"
            >
              <Mail className="size-4" strokeWidth={1.75} />
            </a>
            
            <a
              href={SITE.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex size-10 items-center justify-center rounded-full border border-line-strong text-ink-300 transition-colors hover:border-emerald-400 hover:text-emerald-400"
            >
              <GithubIcon className="size-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-line pt-6 font-mono text-xs text-ink-700">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span>Built with Next.js · n8n-powered automation</span>
        </div>
      </div>
    </footer>
  );
}
