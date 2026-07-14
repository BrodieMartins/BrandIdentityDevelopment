import { Section } from "../components/Section";
import { Stagger, StaggerItem } from "../anim";
import { howItWorks } from "../content";

export function HowItWorksSection() {
  return (
    <Section
      id="comment-ca-marche"
      eyebrow="Simple et transparent"
      title={howItWorks.title}
      intro={howItWorks.intro}
      tone="tinted"
    >
      <Stagger className="grid gap-6 sm:grid-cols-3">
        {howItWorks.steps.map((step, i) => (
          <StaggerItem key={step.title}>
            <div className="relative h-full rounded-2xl bg-white border border-navy-100 p-6 sm:p-7">
              <span className="flex size-10 items-center justify-center rounded-full bg-brand-red-600 text-white font-bold">
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
