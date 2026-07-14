import { Section } from "../components/Section";
import { Reveal } from "../anim";
import { methode } from "../content";

/**
 * Méthode déménagement — la feuille de route de la tournée :
 * itinéraire en pointillés, chaque étape est un arrêt numéroté.
 */
export function MethodeSection() {
  return (
    <Section
      id="methode"
      stop={5}
      eyebrow={methode.subtitle}
      title={methode.title}
      intro={methode.intro}
      tone="ink"
    >
      <ol
        className="relative ml-4 sm:ml-6"
        style={{
          backgroundImage:
            "repeating-linear-gradient(180deg, rgba(247,240,225,0.5) 0 10px, transparent 10px 20px)",
          backgroundSize: "3px 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {methode.steps.map((step, i) => (
          <li key={step.title} className="relative pb-12 pl-10 last:pb-0 sm:pl-12">
            <Reveal>
              <span
                aria-hidden
                className="font-stencil absolute -left-5 top-0 flex size-10 items-center justify-center rounded-full border-[3px] border-kraft-50 bg-brand-red-500 text-base font-bold text-white shadow-md"
                style={{ transform: `rotate(${i % 2 ? 4 : -4}deg)` }}
              >
                {i + 1}
              </span>
              <h3 className="font-stencil text-2xl font-bold uppercase text-kraft-50">{step.title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-navy-100">{step.text}</p>
            </Reveal>
          </li>
        ))}
        {/* Point d'arrivée */}
        <li aria-hidden className="relative mt-2 pl-10 sm:pl-12">
          <span className="font-marker absolute -left-5 -top-1 rotate-[-4deg] text-2xl text-brand-yellow-400">⌂</span>
          <p className="font-marker text-lg text-brand-yellow-400">chez vous, clés rendues.</p>
        </li>
      </ol>
    </Section>
  );
}
