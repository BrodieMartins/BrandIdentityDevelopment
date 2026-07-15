import { useState } from "react";
import { Link } from "react-router";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Phone, Recycle, Truck } from "lucide-react";
import { company } from "../content";
import { BoxSVG, Stamp, TapeMarquee, TapedCorners, TruckSVG } from "../components/decor";

const TRUST = ["Devis gratuit", "Intervention rapide", "Entreprise locale", "Tarifs transparents"];

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Hero « jour de déménagement » : le tampon claque, le titre pochoir
 * s'affiche, le camion entre en scène et décharge les deux offres
 * vedettes comme des caisses.
 */
export function Hero() {
  const reduced = useReducedMotion();
  const [rolling, setRolling] = useState(true);

  /** Apparition « tamponnée » : l'élément claque sur la page. */
  const stampIn = (delay: number, rotate = 0) => ({
    initial: reduced ? undefined : { opacity: 0, scale: 1.45, rotate: rotate - 4 },
    animate: { opacity: 1, scale: 1, rotate },
    transition: { duration: 0.42, delay, ease: EASE },
  });

  /** Caisse déchargée : tombe du haut avec un rebond. */
  const crateDrop = (delay: number, rotate: number) => ({
    initial: reduced ? undefined : { opacity: 0, y: -110, rotate: rotate - 7 },
    animate: { opacity: 1, y: 0, rotate },
    transition: reduced
      ? undefined
      : { delay, type: "spring" as const, stiffness: 260, damping: 17, mass: 0.9 },
  });

  return (
    <>
      <section className="bg-kraft relative overflow-hidden text-navy-950">
        {/* Stickers d'ambiance, hors flux */}
        <div aria-hidden className="pointer-events-none absolute right-[6%] top-24 hidden rotate-12 lg:block">
          <Stamp tone="blue" rotate={10} className="text-sm opacity-70">Fragile</Stamp>
        </div>
        <div aria-hidden className="pointer-events-none absolute right-[16%] top-48 hidden -rotate-6 lg:block">
          <Stamp rotate={-8} className="text-sm opacity-60">Haut ↑</Stamp>
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pt-28 sm:px-6 sm:pt-36 lg:px-8">
          {/* Tampon de provenance */}
          <motion.div {...stampIn(0.15, -2)} className="inline-block">
            <Stamp tone="ink" rotate={-2} className="text-xs sm:text-sm">
              {company.region}
            </Stamp>
          </motion.div>

          {/* Titre pochoir, tamponné ligne par ligne */}
          <h1 className="stencil-title mt-6 text-[12vw] leading-[0.9] sm:text-7xl lg:text-8xl">
            <motion.span {...stampIn(0.35)} className="block">
              Stop à la
            </motion.span>
            <motion.span {...stampIn(0.55)} className="block text-brand-red-500">
              déchetterie.
            </motion.span>
          </h1>

          <motion.p
            {...stampIn(0.8, -1)}
            className="font-marker mt-5 origin-left text-2xl text-navy-800 sm:text-4xl"
          >
            on vient <span className="marker-underline">chez vous</span> !
          </motion.p>

          <motion.p
            initial={reduced ? undefined : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6, ease: EASE }}
            className="mt-6 max-w-xl text-base leading-relaxed text-kraft-900/80 sm:text-lg"
          >
            Déchetterie à domicile, déménagement avec équipe ou véhicule avec chauffeur,
            débarras et rénovation. Une entreprise locale, un seul interlocuteur.
          </motion.p>

          {/* Les deux caisses vedettes, déchargées du camion */}
          <div className="relative z-10 mt-10 grid max-w-2xl gap-5 sm:grid-cols-2">
            <motion.div {...crateDrop(1.25, -1.2)}>
              <Link
                to="/services/dechetterie-a-domicile"
                className="crate group block p-5 transition-transform hover:-translate-y-1 hover:rotate-0 focus-visible:outline-2 focus-visible:outline-brand-red-500"
              >
                <TapedCorners />
                <Recycle className="size-7 text-navy-500" aria-hidden />
                <p className="font-stencil mt-3 text-xl font-bold uppercase">Déchetterie à domicile</p>
                <p className="mt-1 text-sm text-kraft-900/75">
                  Vous triez, on passe chez vous, on s'occupe du reste.
                </p>
                <p className="font-marker mt-2 text-brand-red-600">dès CHF 25.– le passage</p>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-navy-700">
                  Découvrir
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            </motion.div>
            <motion.div {...crateDrop(1.45, 1.4)}>
              <Link
                to="/services/demenagement"
                className="crate group block p-5 transition-transform hover:-translate-y-1 hover:rotate-0 focus-visible:outline-2 focus-visible:outline-brand-red-500"
              >
                <TapedCorners />
                <Truck className="size-7 text-navy-500" aria-hidden />
                <p className="font-stencil mt-3 text-xl font-bold uppercase">Déménagement & véhicule</p>
                <p className="mt-1 text-sm text-kraft-900/75">
                  Équipe complète ou véhicule avec chauffeur, sans stress.
                </p>
                <p className="font-marker mt-2 text-brand-red-600">devis gratuit en un appel</p>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-navy-700">
                  Découvrir
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* CTA + réassurance */}
          <motion.div
            initial={reduced ? undefined : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.6, ease: EASE }}
            className="relative z-10 mt-9 flex flex-col gap-5 sm:flex-row sm:items-center"
          >
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="sticker font-stencil inline-flex -rotate-1 items-center gap-2 self-start px-7 py-3.5 text-lg font-bold uppercase transition-transform hover:rotate-0 hover:scale-[1.03] active:scale-95"
            >
              Devis gratuit
              <ArrowRight className="size-5" aria-hidden />
            </button>
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="font-marker inline-flex items-center gap-2 text-lg text-navy-800 hover:text-brand-red-600"
            >
              <Phone className="size-5" aria-hidden />
              {company.phone}
            </a>
          </motion.div>

          <motion.ul
            initial={reduced ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.6 }}
            className="relative z-10 mt-7 flex flex-wrap gap-x-6 gap-y-2 pb-40 sm:pb-48"
          >
            {TRUST.map((t) => (
              <li key={t} className="font-marker flex items-center gap-1.5 text-sm text-kraft-900/80">
                <span aria-hidden className="text-brand-red-500">✔</span>
                {t}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* La route : asphalte + ligne jaune, le camion entre en scène */}
        <div aria-hidden className="absolute inset-x-0 bottom-0">
          {/* Cartons qui attendent au bord de la route */}
          <div className="absolute bottom-[74px] left-[4%] hidden items-end gap-1 md:flex">
            <motion.div {...crateDrop(2.1, -2)}>
              <BoxSVG className="w-20" label="cave" />
            </motion.div>
            <motion.div {...crateDrop(2.25, 1.5)}>
              <BoxSVG className="w-16" label="fragile" />
            </motion.div>
          </div>

          <motion.div
            initial={reduced ? undefined : { x: "-70vw" }}
            animate={{ x: 0 }}
            transition={reduced ? undefined : { delay: 0.5, duration: 1.6, ease: [0.3, 0.8, 0.4, 1] }}
            onAnimationComplete={() => setRolling(false)}
            className="absolute bottom-[26px] right-[6%] w-52 sm:w-64 lg:w-72"
          >
            <TruckSVG rolling={!reduced && rolling} className="w-full" />
          </motion.div>

          {/* Asphalte */}
          <div className="relative h-16 bg-[#232f3b] sm:h-[72px]">
            <div
              className="absolute inset-x-0 top-1/2 h-[5px] -translate-y-1/2"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, #f2c230 0 46px, transparent 46px 86px)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Le ruban qui ferme le carton du hero */}
      <TapeMarquee />
    </>
  );
}
