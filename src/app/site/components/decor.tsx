import type { CSSProperties, ReactNode } from "react";

/**
 * Objets du métier — ruban adhésif, tampon encreur, camion.
 * Tout est dessiné en local (SVG/CSS), aucun asset externe.
 */

/** Bande de ruban adhésif positionnée en absolu sur son parent. */
export function Tape({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return <span aria-hidden className={`tape ${className}`} style={style} />;
}

/** Deux morceaux de ruban sur les coins hauts d'une carte. */
export function TapedCorners() {
  return (
    <>
      <Tape className="-top-3 -left-5 h-7 w-24 -rotate-[38deg]" />
      <Tape className="-top-3 -right-5 h-7 w-24 rotate-[38deg]" />
    </>
  );
}

/** Tampon encreur (rouge par défaut, bleu ou encre via tone). */
export function Stamp({
  children,
  tone = "red",
  className = "",
  rotate,
}: {
  children: ReactNode;
  tone?: "red" | "blue" | "ink";
  className?: string;
  rotate?: number;
}) {
  const toneClass = tone === "blue" ? "stamp-blue" : tone === "ink" ? "stamp-ink" : "";
  return (
    <span
      className={`stamp ${toneClass} ${className}`}
      style={rotate !== undefined ? { transform: `rotate(${rotate}deg)` } : undefined}
    >
      {children}
    </span>
  );
}

/** Annotation au marqueur, légèrement inclinée comme sur un carton. */
export function MarkerNote({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`font-marker inline-block -rotate-2 ${className}`}>{children}</span>
  );
}

/**
 * Le camion T'chaux Devant, vu de profil, roulant vers la droite.
 * `rolling` fait tourner les roues (CSS), désactivé par prefers-reduced-motion.
 */
export function TruckSVG({
  className = "",
  rolling = false,
}: {
  className?: string;
  rolling?: boolean;
}) {
  const wheelClass = rolling ? "truck-wheel truck-wheel-rolling" : "truck-wheel";
  return (
    <svg viewBox="0 0 330 150" className={className} role="img" aria-label="Le camion T'chaux Devant">
      <style>{`
        .truck-wheel { transform-box: fill-box; transform-origin: center; }
        .truck-wheel-rolling { animation: truck-wheel-spin 0.9s linear infinite; }
        @keyframes truck-wheel-spin { to { transform: rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) { .truck-wheel-rolling { animation: none; } }
      `}</style>

      {/* Ombre au sol */}
      <ellipse cx="160" cy="136" rx="140" ry="7" fill="rgba(61,47,28,0.18)" />

      {/* Caisse du camion */}
      <g>
        <rect x="12" y="18" width="196" height="88" rx="5" fill="#f7f0e1" stroke="#1b2a3a" strokeWidth="3" />
        {/* Cannelures discrètes */}
        <line x1="12" y1="36" x2="208" y2="36" stroke="rgba(27,42,58,0.12)" strokeWidth="2" />
        <line x1="12" y1="92" x2="208" y2="92" stroke="rgba(27,42,58,0.12)" strokeWidth="2" />
        {/* Liseré rouge bas de caisse */}
        <rect x="12" y="96" width="196" height="10" fill="#d2352b" opacity="0.9" />
        {/* Logo peint sur la caisse */}
        <g transform="rotate(-2 110 58)">
          <text
            x="110"
            y="55"
            textAnchor="middle"
            fontFamily="'Baloo 2', system-ui, sans-serif"
            fontWeight="800"
            fontSize="30"
            fill="#3a7cc0"
            stroke="#ffffff"
            strokeWidth="5"
            paintOrder="stroke"
          >
            T&#8217;chaux
          </text>
          <text
            x="110"
            y="84"
            textAnchor="middle"
            fontFamily="'Baloo 2', system-ui, sans-serif"
            fontWeight="800"
            fontSize="30"
            fill="#d2352b"
            stroke="#ffffff"
            strokeWidth="5"
            paintOrder="stroke"
          >
            devant
          </text>
        </g>
      </g>

      {/* Cabine */}
      <g>
        <path
          d="M208 40 h44 q8 0 12 7 l16 28 q3 6 3 12 v14 q0 5 -5 5 h-70 z"
          fill="#3a7cc0"
          stroke="#1b2a3a"
          strokeWidth="3"
        />
        {/* Vitre */}
        <path d="M216 46 h32 q5 0 8 5 l12 22 h-52 z" fill="#dcebf7" stroke="#1b2a3a" strokeWidth="2.5" />
        {/* Phare */}
        <rect x="276" y="94" width="7" height="8" rx="2" fill="#f2c230" stroke="#1b2a3a" strokeWidth="1.5" />
        {/* Pare-chocs */}
        <rect x="204" y="104" width="82" height="7" rx="3" fill="#1b2a3a" />
      </g>

      {/* Roues */}
      <g className={wheelClass}>
        <circle cx="62" cy="116" r="18" fill="#1b2a3a" />
        <circle cx="62" cy="116" r="8" fill="#b9d6ee" />
        <rect x="60.5" y="109" width="3" height="14" rx="1.5" fill="#1b2a3a" />
      </g>
      <g className={wheelClass}>
        <circle cx="152" cy="116" r="18" fill="#1b2a3a" />
        <circle cx="152" cy="116" r="8" fill="#b9d6ee" />
        <rect x="150.5" y="109" width="3" height="14" rx="1.5" fill="#1b2a3a" />
      </g>
      <g className={wheelClass}>
        <circle cx="246" cy="116" r="18" fill="#1b2a3a" />
        <circle cx="246" cy="116" r="8" fill="#b9d6ee" />
        <rect x="244.5" y="109" width="3" height="14" rx="1.5" fill="#1b2a3a" />
      </g>

      {/* Fumée d'échappement, trois petits ronds */}
      <g fill="rgba(27,42,58,0.18)">
        <circle cx="4" cy="102" r="5" />
        <circle cx="-6" cy="96" r="7" />
      </g>
    </svg>
  );
}

/** Petit carton fermé, pour empiler dans le hero. */
export function BoxSVG({
  className = "",
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <svg viewBox="0 0 90 66" className={className} aria-hidden>
      <rect x="3" y="3" width="84" height="60" rx="3" fill="#e8d8b4" stroke="#1b2a3a" strokeWidth="2.5" />
      {/* Rabats */}
      <line x1="45" y1="3" x2="45" y2="18" stroke="#1b2a3a" strokeWidth="2" />
      <line x1="3" y1="18" x2="87" y2="18" stroke="#1b2a3a" strokeWidth="2" />
      {/* Ruban central */}
      <rect x="39" y="3" width="12" height="60" fill="rgba(214,181,126,0.9)" stroke="rgba(61,47,28,0.3)" strokeWidth="1" />
      {label && (
        <text
          x="45"
          y="47"
          textAnchor="middle"
          fontFamily="'Permanent Marker', cursive"
          fontSize="13"
          fill="#1b2a3a"
          transform="rotate(-2 45 47)"
        >
          {label}
        </text>
      )}
    </svg>
  );
}

/**
 * Bande adhésive géante qui défile — « CHAUD DEVANT ! » crié en continu,
 * comme le ruban qui ferme les cartons.
 */
export function TapeMarquee({ flip = false }: { flip?: boolean }) {
  const phrase = (
    <>
      <span className="font-stencil font-bold">CHAUD DEVANT&nbsp;!</span>
      <span aria-hidden className="mx-5 text-brand-red-600">◆</span>
      <span className="font-marker">on vient chez vous</span>
      <span aria-hidden className="mx-5 text-navy-500">◆</span>
    </>
  );
  const run = Array.from({ length: 6 });
  return (
    <div
      aria-hidden
      className={`relative z-10 overflow-hidden border-y-2 border-kraft-700/30 bg-gradient-to-b from-[#d6b57e]/90 via-[#c7a369]/80 to-[#d6b57e]/90 py-2.5 shadow-md ${
        flip ? "rotate-[1.2deg]" : "-rotate-[1.2deg]"
      } scale-x-105`}
    >
      <div className="tape-marquee flex w-max whitespace-nowrap text-xl sm:text-2xl text-navy-950">
        <div className="flex shrink-0">
          {run.map((_, i) => (
            <span key={i} className="inline-flex items-center px-2">{phrase}</span>
          ))}
        </div>
        <div className="flex shrink-0">
          {run.map((_, i) => (
            <span key={i} className="inline-flex items-center px-2">{phrase}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
