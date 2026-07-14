import type { ReactNode } from "react";
import { Reveal } from "../anim";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  /** Fond alterné pour rythmer la page. */
  tone?: "white" | "tinted" | "navy";
  className?: string;
}

const toneClasses: Record<NonNullable<SectionProps["tone"]>, string> = {
  white: "bg-white",
  tinted: "bg-navy-50",
  navy: "bg-navy-950 text-white",
};

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = "white",
  className = "",
}: SectionProps) {
  const dark = tone === "navy";
  return (
    <section id={id} className={`${toneClasses[tone]} scroll-mt-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" style={{ paddingBlock: "var(--section-y)" }}>
        <Reveal className="max-w-2xl">
          {eyebrow && (
            <p className={`mb-3 text-sm font-semibold uppercase tracking-widest ${dark ? "text-brand-red-300" : "text-brand-red-600"}`}>
              {eyebrow}
            </p>
          )}
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${dark ? "text-white" : "text-navy-900"}`}>
            {title}
          </h2>
          {intro && (
            <p className={`mt-4 text-base sm:text-lg leading-relaxed ${dark ? "text-navy-100" : "text-slate-600"}`}>
              {intro}
            </p>
          )}
        </Reveal>
        <div className="mt-10 sm:mt-14">{children}</div>
      </div>
    </section>
  );
}
