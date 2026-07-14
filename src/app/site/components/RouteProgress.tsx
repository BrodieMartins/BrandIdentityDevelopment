import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

/**
 * La tournée : une route verticale fixée au bord gauche de l'écran,
 * le camion la descend au rythme du scroll — de « Départ » à « Arrivée ».
 * Desktop uniquement, masquée si l'utilisateur réduit les animations.
 */
export function RouteProgress() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const eased = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.4 });
  const top = useTransform(eased, [0, 1], ["0%", "100%"]);

  if (reduced) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-5 top-24 bottom-16 z-40 hidden w-10 xl:block"
    >
      {/* La route : pointillés de carte routière */}
      <div
        className="absolute inset-y-0 left-1/2 w-[3px] -translate-x-1/2 rounded-full opacity-50"
        style={{
          backgroundImage:
            "repeating-linear-gradient(180deg, var(--color-navy-800) 0 10px, transparent 10px 20px)",
        }}
      />

      {/* Départ / arrivée */}
      <div className="absolute -top-1 left-1/2 size-3 -translate-x-1/2 rounded-full border-2 border-navy-800 bg-brand-yellow-400" />
      <div className="absolute -bottom-1 left-1/2 size-3 -translate-x-1/2 rounded-full border-2 border-navy-800 bg-brand-red-500" />

      {/* Le camion qui fait la tournée (vu de dessus, avant vers le bas) */}
      <motion.div style={{ top }} className="absolute left-1/2 -mt-7 -translate-x-1/2">
        <svg viewBox="0 0 34 58" className="w-7 drop-shadow-md">
          {/* Caisse */}
          <rect x="4" y="2" width="26" height="36" rx="3" fill="#f7f0e1" stroke="#1b2a3a" strokeWidth="2.5" />
          {/* Liseré rouge arrière */}
          <rect x="4" y="2" width="26" height="6" rx="3" fill="#d2352b" />
          {/* Cabine */}
          <path d="M6 38 h22 v10 q0 6 -6 6 h-10 q-6 0 -6 -6 z" fill="#3a7cc0" stroke="#1b2a3a" strokeWidth="2.5" />
          {/* Pare-brise */}
          <rect x="9" y="41" width="16" height="6" rx="2" fill="#dcebf7" stroke="#1b2a3a" strokeWidth="1.5" />
          {/* Phares */}
          <circle cx="10" cy="52" r="1.8" fill="#f2c230" />
          <circle cx="24" cy="52" r="1.8" fill="#f2c230" />
        </svg>
      </motion.div>
    </div>
  );
}
