import { Section } from "../components/Section";
import { Reveal } from "../anim";
import { methode } from "../content";

/** Méthode déménagement — timeline verticale. */
export function MethodeSection() {
  return (
    <Section
      id="methode"
      eyebrow="Déménagement"
      title={methode.title}
      intro={methode.intro}
      tone="navy"
    >
      <ol className="relative ml-4 border-l border-navy-700 sm:ml-6">
        {methode.steps.map((step, i) => (
          <li key={step.title} className="relative pb-10 pl-8 sm:pl-10 last:pb-0">
            <Reveal>
              <span
                aria-hidden
                className="absolute -left-3.5 top-0 flex size-7 items-center justify-center rounded-full bg-brand-red-600 text-xs font-bold text-white ring-4 ring-navy-950"
              >
                {i + 1}
              </span>
              <h3 className="text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-navy-100">{step.text}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
