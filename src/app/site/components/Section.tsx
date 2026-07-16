import type { ReactNode } from "react";
import { Reveal } from "../anim";
import { Stamp } from "./decor";

interface SectionProps {
  id?: string;
  /** Numéro d'arrêt sur la tournée — tamponné à côté du titre. */
  stop?: number;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  /** Matière du fond pour rythmer la page. */
  tone?: "kraft" | "paper" | "ink";
  className?: string;
}

const toneClasses: Record<NonNullable<SectionProps["tone"]>, string> = {
  kraft: "bg-kraft",
  paper: "bg-[#f9f4e6]",
  ink: "bg-ink text-kraft-50",
};

export function Section({
  id,
  stop,
  eyebrow,
  title,
  intro,
  children,
  tone = "kraft",
  className = "",
}: SectionProps) {
  const dark = tone === "ink";
  return (
    <section id={id} className={`${toneClasses[tone]} relative scroll-mt-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" style={{ paddingBlock: "var(--section-y)" }}>
        <Reveal className="max-w-3xl">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            {stop !== undefined && (
              <Stamp tone={dark ? "light" : "blue"} rotate={-2} className="text-xs sm:text-sm">
                Arrêt n°{stop}
              </Stamp>
            )}
            {eyebrow && (
              <span className={`font-marker text-base sm:text-lg ${dark ? "text-brand-yellow-400" : "text-brand-red-600"}`}>
                {eyebrow}
              </span>
            )}
          </div>
          <h2 className={`stencil-title text-4xl sm:text-5xl ${dark ? "text-kraft-50" : "text-navy-950"}`}>
            {title}
          </h2>
          {intro && (
            <p className={`mt-5 max-w-2xl text-base sm:text-lg leading-relaxed ${dark ? "text-navy-100" : "text-kraft-900/80"}`}>
              {intro}
            </p>
          )}
        </Reveal>
        <div className="mt-10 sm:mt-14">{children}</div>
      </div>
    </section>
  );
}
