import { Link, Navigate, useParams } from "react-router";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "../anim";
import { SERVICE_ICONS } from "../sections/ServicesSection";
import { services, type ServiceId } from "../content";

/**
 * Page détail d'un service — version de base.
 * Les deux services vedettes recevront un traitement enrichi (galerie,
 * tarifs, FAQ) lors de la passe de contenu réel.
 */
export function ServicePage() {
  const { slug } = useParams();
  const service = services.find((s) => s.id === slug);

  if (!service) return <Navigate to="/" replace />;

  const Icon = SERVICE_ICONS[service.id as ServiceId];
  const others = services.filter((s) => s.id !== service.id);

  return (
    <>
      {/* Bandeau titre */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-20">
          <Reveal>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-200 hover:text-white transition-colors"
            >
              <ArrowLeft className="size-4" aria-hidden />
              Retour à l'accueil
            </Link>
            <div className="mt-6 flex items-start gap-4">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <Icon className="size-7 text-brand-red-300" aria-hidden />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{service.title}</h1>
                <p className="mt-2 text-lg text-brand-red-300 font-medium">{service.hook}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contenu */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" style={{ paddingBlock: "var(--section-y)" }}>
          <div className="grid gap-10 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <p className="text-lg leading-relaxed text-slate-700">{service.description}</p>
              <h2 className="mt-10 text-2xl font-bold text-navy-900">Ce qui est compris</h2>
              <Stagger className="mt-5 space-y-3">
                {service.bullets.map((b) => (
                  <StaggerItem key={b}>
                    <div className="flex items-start gap-3 rounded-xl border border-navy-100 bg-navy-50/50 p-4">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-red-600" aria-hidden />
                      <p className="text-slate-700">{b}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="sticky top-24 rounded-2xl border border-navy-100 bg-navy-50 p-6">
                <h2 className="text-lg font-bold text-navy-900">Obtenir un prix</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Décrivez votre besoin, recevez un devis ferme sous 24 h ouvrées.
                </p>
                <Button
                  asChild
                  className="mt-5 w-full bg-brand-red-600 hover:bg-brand-red-700 text-white font-semibold"
                >
                  <Link to="/#contact">{service.cta}</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Autres services */}
          <div className="mt-20 border-t border-navy-100 pt-10">
            <h2 className="text-xl font-bold text-navy-900">Nos autres services</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {others.map((s) => (
                <Link
                  key={s.id}
                  to={`/services/${s.id}`}
                  className="group rounded-xl border border-navy-100 p-5 transition-colors hover:bg-navy-50"
                >
                  <p className="font-semibold text-navy-900">{s.title}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-brand-red-600">
                    Découvrir
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
