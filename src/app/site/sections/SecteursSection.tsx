import { MapPin } from "lucide-react";
import { Section } from "../components/Section";
import { Stagger, StaggerItem } from "../anim";
import { MarkerNote } from "../components/decor";
import { secteurs } from "../content";

/** Zones desservies — les destinations écrites sur les cartons de la tournée. */
export function SecteursSection() {
  return (
    <Section
      id="secteurs"
      stop={6}
      eyebrow="on roule pour vous"
      title={secteurs.title}
      intro={secteurs.intro}
    >
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {secteurs.zones.map((zone, i) => (
          <StaggerItem key={zone.name} className="h-full">
            <div
              className={`shipping-label flex h-full items-start gap-3 p-5 transition-transform hover:-translate-y-0.5 ${
                i % 2 ? "rotate-[0.5deg]" : "-rotate-[0.5deg]"
              }`}
            >
              <MapPin className="mt-1 size-5 shrink-0 text-brand-red-600" aria-hidden />
              <div>
                <p className="font-stencil text-lg font-bold uppercase leading-tight text-navy-950">
                  {zone.name}
                </p>
                <MarkerNote className="mt-1 text-sm text-kraft-700">{zone.note}</MarkerNote>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <p className="mt-8 max-w-2xl text-sm leading-relaxed text-kraft-900/70">{secteurs.outro}</p>
    </Section>
  );
}
