import { Link } from "react-router";
import { ArrowRight, CheckCircle2, Hammer, PackageOpen, Recycle, Truck } from "lucide-react";
import { Section } from "../components/Section";
import { Stagger, StaggerItem } from "../anim";
import { services, type ServiceId } from "../content";

export const SERVICE_ICONS: Record<ServiceId, typeof Recycle> = {
  "dechetterie-a-domicile": Recycle,
  demenagement: Truck,
  debarras: PackageOpen,
  renovation: Hammer,
};

export function ServicesSection() {
  const featured = services.filter((s) => s.featured);
  const others = services.filter((s) => !s.featured);

  return (
    <Section
      id="services"
      eyebrow="Nos services"
      title="Quatre services, un seul interlocuteur"
      intro="De l'évacuation de vos déchets à la remise en état de votre logement, nous couvrons toute la chaîne."
    >
      {/* Services vedettes — cartes larges et détaillées */}
      <Stagger className="grid gap-6 lg:grid-cols-2">
        {featured.map((s) => {
          const Icon = SERVICE_ICONS[s.id];
          return (
            <StaggerItem key={s.id}>
              <article className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-7 sm:p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex size-12 items-center justify-center rounded-xl bg-navy-900 text-white">
                  <Icon className="size-6" aria-hidden />
                </div>
                <h3 className="mt-5 text-xl sm:text-2xl font-bold text-navy-900">{s.title}</h3>
                <p className="mt-1 text-sm font-medium text-brand-red-600">{s.hook}</p>
                <p className="mt-3 leading-relaxed text-slate-600">{s.description}</p>
                <ul className="mt-5 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-red-500" aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <Link
                    to={`/services/${s.id}`}
                    className="inline-flex items-center gap-1.5 font-semibold text-navy-800 hover:text-brand-red-600 transition-colors"
                  >
                    {s.cta}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>

      {/* Services secondaires — cartes compactes */}
      <Stagger className="mt-6 grid gap-6 sm:grid-cols-2">
        {others.map((s) => {
          const Icon = SERVICE_ICONS[s.id];
          return (
            <StaggerItem key={s.id}>
              <article className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-navy-50/60 p-6 transition-colors hover:bg-navy-50">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-white text-navy-800 border border-navy-100">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.description}</p>
                <div className="mt-auto pt-4">
                  <Link
                    to={`/services/${s.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 hover:text-brand-red-600 transition-colors"
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
