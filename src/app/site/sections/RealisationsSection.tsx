import { MapPin } from "lucide-react";
import { Section } from "../components/Section";
import { Stagger, StaggerItem } from "../anim";
import { realisations } from "../content";

/** Dégradés placeholder en attendant les photos réelles des chantiers. */
const PLACEHOLDER_BG = [
  "from-navy-800 to-navy-600",
  "from-navy-700 to-navy-500",
  "from-navy-900 to-navy-700",
  "from-navy-600 to-navy-400",
];

export function RealisationsSection() {
  return (
    <Section
      id="realisations"
      eyebrow="Sur le terrain"
      title={realisations.title}
      intro={realisations.intro}
      tone="tinted"
    >
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {realisations.items.map((item, i) => (
          <StaggerItem key={item.title}>
            <article className="group h-full overflow-hidden rounded-2xl border border-navy-100 bg-white">
              <div
                className={`h-40 bg-gradient-to-br ${PLACEHOLDER_BG[i % PLACEHOLDER_BG.length]} transition-transform duration-500 group-hover:scale-[1.03]`}
                role="img"
                aria-label={`Photo à venir — ${item.title}`}
              />
              <div className="p-5">
                <span className="inline-block rounded-full bg-brand-red-50 px-2.5 py-0.5 text-xs font-semibold text-brand-red-700">
                  {item.tag}
                </span>
                <h3 className="mt-3 font-semibold leading-snug text-navy-900">{item.title}</h3>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
                  <MapPin className="size-3.5" aria-hidden />
                  {item.place}
                </p>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
