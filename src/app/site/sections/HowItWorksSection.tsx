import { Section } from "../components/Section";
import { Stagger, StaggerItem } from "../anim";
import { howItWorks } from "../content";

/** Chip bicolore façon stickers « VOUS TRIEZ » du site actuel. */
function StickerChip({ words }: { words: string[] }) {
  const [first, second] = words;
  return (
    <p
      className="inline-flex flex-wrap items-baseline gap-1 uppercase leading-none"
      style={{ fontFamily: "var(--font-logo)", transform: "rotate(-2deg)" }}
      aria-hidden
    >
      <span className="rounded-md bg-navy-800 px-2.5 py-1.5 text-lg font-extrabold text-white shadow-sm">
        {first}
      </span>
      <span className="rounded-md bg-brand-yellow-400 px-2.5 py-1.5 text-lg font-extrabold text-navy-950 shadow-sm">
        {second}
      </span>
    </p>
  );
}

export function HowItWorksSection() {
  return (
    <Section
      id="comment-ca-marche"
      eyebrow="Simple, rapide et éco-responsable"
      title={howItWorks.title}
      intro={howItWorks.intro}
      tone="tinted"
    >
      <Stagger className="grid gap-6 sm:grid-cols-3">
        {howItWorks.steps.map((step, i) => (
          <StaggerItem key={step.title}>
            <div className="relative h-full rounded-2xl bg-white border border-navy-100 p-6 sm:p-7">
              <span className="absolute right-5 top-5 flex size-9 items-center justify-center rounded-full bg-navy-50 text-sm font-bold text-navy-700">
                {i + 1}
              </span>
              <StickerChip words={step.sticker} />
              <h3 className="mt-5 text-lg font-bold text-navy-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
