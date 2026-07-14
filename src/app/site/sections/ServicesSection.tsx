import { Link } from "react-router";
import { ArrowRight, Hammer, PackageOpen, Recycle, Truck } from "lucide-react";
import { Section } from "../components/Section";
import { Stagger, StaggerItem } from "../anim";
import { MarkerNote, Stamp, Tape, TapedCorners } from "../components/decor";
import { services, type ServiceId } from "../content";

export const SERVICE_ICONS: Record<ServiceId, typeof Recycle> = {
  "dechetterie-a-domicile": Recycle,
  demenagement: Truck,
  debarras: PackageOpen,
  renovation: Hammer,
};

/** Chaque service est une caisse prête à charger dans le camion. */
export function ServicesSection() {
  const featured = services.filter((s) => s.featured);
  const others = services.filter((s) => !s.featured);

  return (
    <Section
      id="services"
      stop={1}
      eyebrow="quatre caisses, un seul camion"
      title="Nos services"
      intro="De l'évacuation de vos déchets à la remise en état de votre logement, nous couvrons toute la chaîne."
    >
      {/* Caisses vedettes */}
      <Stagger className="grid gap-7 lg:grid-cols-2">
        {featured.map((s, i) => {
          const Icon = SERVICE_ICONS[s.id];
          return (
            <StaggerItem key={s.id} className="h-full">
              <article
                className={`crate group relative flex h-full flex-col p-7 sm:p-8 transition-transform hover:-translate-y-1.5 ${
                  i % 2 ? "rotate-[0.5deg]" : "-rotate-[0.5deg]"
                } hover:rotate-0`}
              >
                <TapedCorners />
                <div className="flex items-center justify-between gap-3">
                  <div className="flex size-12 items-center justify-center rounded-md bg-navy-950 text-kraft-50">
                    <Icon className="size-6" aria-hidden />
                  </div>
                  <Stamp tone="blue" rotate={3} className="text-[0.65rem]">
                    Vedette
                  </Stamp>
                </div>
                <h3 className="font-stencil mt-5 text-2xl font-bold uppercase text-navy-950 sm:text-3xl">
                  {s.title}
                </h3>
                <MarkerNote className="mt-2 text-lg text-brand-red-600">{s.hook}</MarkerNote>
                {s.priceNote && (
                  <Stamp rotate={-1.5} className="mt-4 self-start text-xs sm:text-sm">
                    {s.priceNote}
                  </Stamp>
                )}
                <p className="mt-4 leading-relaxed text-kraft-900/80">{s.description}</p>
                <ul className="mt-5 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-kraft-900/90">
                      <span aria-hidden className="font-marker mt-px text-brand-red-500">✔</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <Link
                    to={`/services/${s.id}`}
                    className="font-stencil inline-flex items-center gap-1.5 text-lg font-bold uppercase text-navy-700 transition-colors hover:text-brand-red-600"
                  >
                    {s.cta}
                    <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>

      {/* Caisses secondaires, plus petites */}
      <Stagger className="mt-8 grid gap-7 sm:grid-cols-2">
        {others.map((s, i) => {
          const Icon = SERVICE_ICONS[s.id];
          return (
            <StaggerItem key={s.id} className="h-full">
              <article
                className={`crate group relative flex h-full flex-col p-6 transition-transform hover:-translate-y-1 ${
                  i % 2 ? "-rotate-[0.6deg]" : "rotate-[0.6deg]"
                } hover:rotate-0`}
              >
                <Tape className="-top-3 left-1/2 h-6 w-28 -translate-x-1/2 rotate-1" />
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-md border-2 border-navy-950/20 bg-kraft-50 text-navy-800">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <h3 className="font-stencil text-xl font-bold uppercase text-navy-950">{s.title}</h3>
                </div>
                <MarkerNote className="mt-2 text-base text-brand-red-600">{s.hook}</MarkerNote>
                {s.priceNote && (
                  <Stamp rotate={-2} className="mt-3 self-start text-[0.65rem]">
                    {s.priceNote}
                  </Stamp>
                )}
                <p className="mt-3 text-sm leading-relaxed text-kraft-900/80">{s.description}</p>
                <div className="mt-auto pt-4">
                  <Link
                    to={`/services/${s.id}`}
                    className="font-stencil inline-flex items-center gap-1.5 font-bold uppercase text-navy-700 transition-colors hover:text-brand-red-600"
                  >
                    En savoir plus
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
