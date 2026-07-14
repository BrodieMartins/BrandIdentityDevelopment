import { MapPin } from "lucide-react";
import { Section } from "../components/Section";
import { Stagger, StaggerItem } from "../anim";
import { MarkerNote, Tape } from "../components/decor";
import { realisations } from "../content";

/** Dégradés placeholder en attendant les photos réelles des chantiers. */
const PLACEHOLDER_BG = [
  "from-navy-800 to-navy-600",
  "from-navy-700 to-navy-500",
  "from-navy-900 to-navy-700",
  "from-navy-600 to-navy-400",
];

const ROTATIONS = ["-rotate-2", "rotate-[1.4deg]", "-rotate-1", "rotate-2"];

/** Photos de chantier scotchées sur le carton, façon album de tournée. */
export function RealisationsSection() {
  return (
    <Section
      id="realisations"
      stop={4}
      eyebrow="sur le terrain"
      title={realisations.title}
      intro={realisations.intro}
      tone="paper"
    >
      <Stagger className="grid gap-9 sm:grid-cols-2 lg:grid-cols-4">
        {realisations.items.map((item, i) => (
          <StaggerItem key={item.title} className="h-full">
            <figure
              className={`group relative h-full bg-white p-3 pb-4 shadow-[4px_6px_14px_rgba(61,47,28,0.25)] transition-transform hover:z-10 hover:scale-[1.04] hover:rotate-0 ${ROTATIONS[i % ROTATIONS.length]}`}
            >
              <Tape className="-top-3 left-1/2 h-7 w-24 -translate-x-1/2 rotate-1" />
              <div
                className={`h-40 bg-gradient-to-br ${PLACEHOLDER_BG[i % PLACEHOLDER_BG.length]}`}
                role="img"
                aria-label={`Photo à venir — ${item.title}`}
              >
                <MarkerNote className="flex h-full items-center justify-center text-sm text-white/60">
                  photo à venir
                </MarkerNote>
              </div>
              <figcaption className="px-1 pt-3">
                <span className="font-stencil text-[0.7rem] font-bold uppercase tracking-wider text-brand-red-600">
                  {item.tag}
                </span>
                <p className="font-marker mt-1 leading-snug text-navy-950">{item.title}</p>
                <p className="mt-1.5 flex items-center gap-1 text-xs text-kraft-700">
                  <MapPin className="size-3.5" aria-hidden />
                  {item.place}
                </p>
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
