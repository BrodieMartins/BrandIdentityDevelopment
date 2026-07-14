import { company } from "../content";

/**
 * ⚠️ Logo placeholder — sera remplacé par la recréation SVG du logo réel
 * (couleurs bleu/rouge) dès réception de la capture.
 */
export function Logo({ inverted = false }: { inverted?: boolean }) {
  const [first, ...rest] = company.name.split(" ");
  return (
    <span
      className={`inline-flex items-baseline gap-1.5 font-bold tracking-tight text-xl leading-none select-none ${
        inverted ? "text-white" : "text-navy-900"
      }`}
    >
      <span>{first}</span>
      <span className="text-brand-red-500">{rest.join(" ")}</span>
    </span>
  );
}
