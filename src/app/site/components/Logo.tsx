/**
 * Logo T'chaux Devant recréé en SVG d'après la capture du logo réel :
 * « T'chaux » bleu / « devant » rouge, lettres arrondies (Baloo 2),
 * contour blanc style sticker, légère rotation.
 */
export function Logo({ inverted = false, className = "h-11 w-auto" }: { inverted?: boolean; className?: string }) {
  const stroke = "#ffffff";
  return (
    <svg
      viewBox="0 0 150 76"
      className={className}
      role="img"
      aria-label="T'chaux Devant"
      style={{
        filter: inverted
          ? "drop-shadow(0 1px 2px rgba(0,0,0,0.45))"
          : "drop-shadow(0 1px 1.5px rgba(14,44,78,0.35))",
      }}
    >
      <g transform="rotate(-4 75 38)">
        <text
          x="75"
          y="33"
          textAnchor="middle"
          fontFamily="'Baloo 2', 'Arial Rounded MT Bold', system-ui, sans-serif"
          fontWeight="800"
          fontSize="31"
          fill="#3a7cc0"
          stroke={stroke}
          strokeWidth="5"
          strokeLinejoin="round"
          paintOrder="stroke"
        >
          T&#8217;chaux
        </text>
        <text
          x="75"
          y="63"
          textAnchor="middle"
          fontFamily="'Baloo 2', 'Arial Rounded MT Bold', system-ui, sans-serif"
          fontWeight="800"
          fontSize="31"
          fill="#d2352b"
          stroke={stroke}
          strokeWidth="5"
          strokeLinejoin="round"
          paintOrder="stroke"
        >
          devant
        </text>
      </g>
    </svg>
  );
}
