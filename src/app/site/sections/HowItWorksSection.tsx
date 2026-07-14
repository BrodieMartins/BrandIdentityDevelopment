import { Section } from "../components/Section";
import { Stagger, StaggerItem } from "../anim";
import { Tape } from "../components/decor";
import { howItWorks } from "../content";

/** Chip bicolore façon stickers « VOUS TRIEZ » du site actuel. */
function StickerChip({ words }: { words: string[] }) {
  const [first, second] = words;
  return (
    <span
      className="inline-flex flex-wrap items-baseline gap-1 uppercase leading-none"
      style={{ fontFamily: "var(--font-logo)", transform: "rotate(-2deg)" }}
    >
      <span className="rounded-md bg-navy-800 px-2.5 py-1.5 text-lg font-extrabold text-white shadow-sm">
        {first}
      </span>
      <span className="rounded-md bg-brand-yellow-400 px-2.5 py-1.5 text-lg font-extrabold text-navy-950 shadow-sm">
        {second}
      </span>
    </span>
  );
}

/** Les trois étapes, épinglées comme des consignes sur le carton. */
export function HowItWorksSection() {
  return (
    <Section
      id="comment-ca-marche"
      stop={2}
      eyebrow="simple, rapide et éco-responsable"
      title={howItWorks.title}
      intro={howItWorks.intro}
      tone="paper"
    >
      <Stagger className="grid gap-8 sm:grid-cols-3">
        {howItWorks.steps.map((step, i) => (
          <StaggerItem key={step.title} className="h-full">
            <div
              className={`crate relative h-full p-6 sm:p-7 ${
                i === 1 ? "rotate-[0.8deg]" : "-rotate-[0.8deg]"
              }`}
            >
              <Tape className="-top-3.5 left-1/2 h-7 w-32 -translate-x-1/2 -rotate-2" />
              {/* Ordre de la tournée : les étapes se suivent vraiment */}
              <span
                aria-hidden
                className="sticker absolute -right-3 -top-4 flex size-11 rotate-6 items-center justify-center font-stencil text-lg font-bold"
              >
                {i + 1}
              </span>
              <h3>
                <span className="sr-only">{step.title}</span>
                <StickerChip words={step.sticker} />
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-kraft-900/80">{step.text}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
