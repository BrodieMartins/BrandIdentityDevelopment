import { Link, Navigate, useParams } from "react-router";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { Reveal, Stagger, StaggerItem } from "../anim";
import { SERVICE_ICONS } from "../sections/ServicesSection";
import { services, type ServiceId } from "../content";

/** Page détail d'un service — contenu complet repris du site actuel. */
export function ServicePage() {
  const { slug } = useParams();
  const service = services.find((s) => s.id === slug);

  if (!service) return <Navigate to="/" replace />;

  const Icon = SERVICE_ICONS[service.id as ServiceId];
  const others = services.filter((s) => s.id !== service.id);
  const { detail } = service;

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
                <Icon className="size-7 text-brand-yellow-400" aria-hidden />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  {detail.heroTitle}
                </h1>
                <p className="mt-2 text-lg text-brand-yellow-400 font-medium">{detail.heroSubtitle}</p>
              </div>
            </div>
            {service.priceNote && (
              <p className="mt-6 inline-flex rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white">
                {service.priceNote}
              </p>
            )}
          </Reveal>
        </div>
      </section>

      {/* Contenu */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" style={{ paddingBlock: "var(--section-y)" }}>
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Reveal>
                {detail.intro.map((p) => (
                  <p key={p} className="mt-4 first:mt-0 text-lg leading-relaxed text-slate-700">
                    {p}
                  </p>
                ))}
              </Reveal>

              {detail.sections.map((sec) => (
                <Reveal key={sec.title}>
                  <h2 className="mt-12 text-2xl font-bold text-navy-900">{sec.title}</h2>
                  {sec.paragraphs?.map((p) => (
                    <p key={p} className="mt-3 leading-relaxed text-slate-700">
                      {p}
                    </p>
                  ))}
                  {sec.bullets && (
                    <Stagger className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {sec.bullets.map((b) => (
                        <StaggerItem key={b}>
                          <div className="flex items-start gap-2.5 rounded-lg border border-navy-100 bg-navy-50/50 px-4 py-3">
                            <CheckCircle2 className="mt-0.5 size-4.5 shrink-0 text-brand-red-600" aria-hidden />
                            <p className="text-sm text-slate-700">{b}</p>
                          </div>
                        </StaggerItem>
                      ))}
                    </Stagger>
                  )}
                </Reveal>
              ))}

              {detail.faq && detail.faq.length > 0 && (
                <Reveal>
                  <h2 className="mt-12 text-2xl font-bold text-navy-900">Questions fréquentes</h2>
                  <Accordion type="single" collapsible className="mt-4">
                    {detail.faq.map((item) => (
                      <AccordionItem key={item.q} value={item.q}>
                        <AccordionTrigger className="text-left font-semibold text-navy-900">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="leading-relaxed text-slate-600">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Reveal>
              )}
            </div>

            <Reveal delay={0.15}>
              <div className="sticky top-24 rounded-2xl border border-navy-100 bg-navy-50 p-6">
                <h2 className="text-lg font-bold text-navy-900">Demandez votre devis gratuit</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Contactez-nous dès aujourd'hui — devis gratuit, clair et sans engagement.
                </p>
                <Button
                  asChild
                  className="mt-5 w-full bg-brand-red-600 hover:bg-brand-red-700 text-white font-semibold"
                >
                  <Link to="/#contact">{service.cta}</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="mt-3 w-full border-navy-200 font-semibold text-navy-900 hover:bg-white"
                >
                  <a href="tel:+41763291619">Appelez-nous</a>
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
