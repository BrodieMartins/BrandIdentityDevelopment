import { MapPin } from "lucide-react";
import { Section } from "../components/Section";
import { Stagger, StaggerItem } from "../anim";
import { secteurs } from "../content";

export function SecteursSection() {
  return (
    <Section
      id="secteurs"
      eyebrow="Zone d'intervention"
      title={secteurs.title}
      intro={secteurs.intro}
    >
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {secteurs.zones.map((zone) => (
          <StaggerItem key={zone.name}>
            <div className="flex items-start gap-3 rounded-xl border border-navy-100 bg-white p-5">
              <MapPin className="mt-0.5 size-5 shrink-0 text-brand-red-600" aria-hidden />
              <div>
                <p className="font-semibold text-navy-900">{zone.name}</p>
                <p className="mt-0.5 text-sm text-slate-500">{zone.note}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
