import { Link } from "react-router";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, CheckCircle2, Recycle, Truck } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { company } from "../content";

const TRUST = [
  "Devis sous 24 h ouvrées",
  "Prix ferme, sans surprise",
  "Entreprise locale et assurée",
];

/**
 * Hero centré sur les deux offres vedettes :
 * déchetterie à domicile + déménagement / location de véhicule.
 */
export function Hero() {
  const reduced = useReducedMotion();
  const fadeUp = (delay: number) => ({
    initial: reduced ? undefined : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      {/* Texture géométrique discrète */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div aria-hidden className="absolute -top-40 -right-40 size-[480px] rounded-full bg-navy-700/40 blur-3xl" />
      <div aria-hidden className="absolute -bottom-48 -left-32 size-[420px] rounded-full bg-brand-red-700/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <motion.p {...fadeUp(0)} className="text-sm font-semibold uppercase tracking-widest text-brand-red-300">
          {company.region}
        </motion.p>

        <motion.h1
          {...fadeUp(0.1)}
          className="mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]"
        >
          La déchetterie vient chez vous.
          <br />
          <span className="text-navy-200">Le déménagement aussi.</span>
        </motion.h1>

        <motion.p {...fadeUp(0.2)} className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-navy-100">
          Évacuation de déchets à domicile, déménagement avec ou sans équipe,
          débarras et rénovation. Un seul interlocuteur, un prix annoncé à
          l'avance.
        </motion.p>

        {/* Double CTA vers les deux services vedettes */}
        <motion.div {...fadeUp(0.3)} className="mt-10 grid gap-4 sm:grid-cols-2 max-w-2xl">
          <Link
            to="/services/dechetterie-a-domicile"
            className="group rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            <Recycle className="size-7 text-brand-red-300" aria-hidden />
            <p className="mt-3 font-semibold text-lg">Déchetterie à domicile</p>
            <p className="mt-1 text-sm text-navy-200">
              On dépose, vous remplissez, on trie et on évacue.
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-red-300">
              Découvrir
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </span>
          </Link>
          <Link
            to="/services/demenagement"
            className="group rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            <Truck className="size-7 text-brand-red-300" aria-hidden />
            <p className="mt-3 font-semibold text-lg">Déménagement & véhicule</p>
            <p className="mt-1 text-sm text-navy-200">
              Équipe complète ou véhicule avec chauffeur, au choix.
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-red-300">
              Découvrir
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </span>
          </Link>
        </motion.div>

        <motion.div {...fadeUp(0.4)} className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
          <Button
            size="lg"
            className="bg-brand-red-600 hover:bg-brand-red-700 text-white font-semibold text-base px-7"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Demander un devis gratuit
          </Button>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {TRUST.map((t) => (
              <li key={t} className="flex items-center gap-1.5 text-sm text-navy-100">
                <CheckCircle2 className="size-4 text-brand-red-300" aria-hidden />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
