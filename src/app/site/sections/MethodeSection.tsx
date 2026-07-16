import { motion, useReducedMotion } from "motion/react";
import { Section } from "../components/Section";
import { Reveal } from "../anim";
import { methode } from "../content";

/**
 * Méthode déménagement — la feuille de route de la tournée :
 * itinéraire en pointillés, chaque étape est un arrêt numéroté.
 * Les pastilles se posent en douceur (ressort), comme un tampon qu'on appuie.
 */
export function MethodeSection() {
  const reduced = useReducedMotion();

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
            <motion.span
              aria-hidden
              className="font-stencil absolute -left-5 top-0 flex size-10 items-center justify-center rounded-full border-[3px] border-kraft-50 bg-brand-red-500 text-base font-bold text-white shadow-md"
              initial={reduced ? undefined : { scale: 0.3, rotate: i % 2 ? 24 : -24, opacity: 0 }}
              whileInView={{ scale: 1, rotate: i % 2 ? 4 : -4, opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -60px 0px" }}
              transition={
                reduced
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 160, damping: 19, mass: 0.8, delay: 0.12 }
              }
            >
              {i + 1}
            </motion.span>
            <Reveal delay={0.05}>
              <h3 className="font-stencil text-2xl font-bold uppercase text-kraft-50">{step.title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-navy-100">{step.text}</p>
            </Reveal>
          </li>
        ))}
        {/* Point d'arrivée */}
        <li aria-hidden className="relative mt-2 pl-10 sm:pl-12">
          <motion.span
            className="font-marker absolute -left-5 -top-1 inline-block text-2xl text-brand-yellow-400"
            initial={reduced ? undefined : { scale: 0.3, rotate: -20, opacity: 0 }}
            whileInView={{ scale: 1, rotate: -4, opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
            transition={
              reduced
                ? { duration: 0 }
                : { type: "spring", stiffness: 160, damping: 19, mass: 0.8, delay: 0.12 }
            }
          >
            ⌂
          </motion.span>
          <Reveal delay={0.05}>
            <p className="font-marker text-lg text-brand-yellow-400">chez vous, clés rendues.</p>
          </Reveal>
        </li>
      </ol>
    </Section>
  );
}
