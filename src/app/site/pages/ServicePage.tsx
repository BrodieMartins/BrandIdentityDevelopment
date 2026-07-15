import { Link, Navigate, useParams } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { Reveal, Stagger, StaggerItem } from "../anim";
import { MarkerNote, Stamp, TapedCorners } from "../components/decor";
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
      {/* Bandeau titre — étiquette géante tamponnée */}
      <section className="bg-ink text-kraft-50">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
          <Reveal>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-200 transition-colors hover:text-white"
            >
              <ArrowLeft className="size-4" aria-hidden />
              Retour à l'accueil
            </Link>
            <div className="mt-7 flex items-start gap-4">
              <div className="flex size-11 shrink-0 -rotate-2 items-center justify-center rounded-md border-2 border-kraft-50/30 bg-kraft-50/10 sm:size-14">
                <Icon className="size-6 text-brand-yellow-400 sm:size-7" aria-hidden />
              </div>
              {/* min-w-0 + break-words : les titres longs (« Déménagement… »)
                  doivent plier dans la colonne, pas déborder de l'écran. */}
              <div className="min-w-0">
                <h1 className="stencil-title break-words text-[7.4vw] sm:text-5xl lg:text-6xl">
                  {detail.heroTitle}
                </h1>
                <MarkerNote className="mt-3 text-xl text-brand-yellow-400 sm:text-2xl">
                  {detail.heroSubtitle}
                </MarkerNote>
              </div>
            </div>
            {service.priceNote && (
              <Stamp tone="light" rotate={-2} className="mt-7 text-sm">
                {service.priceNote}
              </Stamp>
            )}
          </Reveal>
        </div>
      </section>

      {/* Contenu */}
      <section className="bg-kraft">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" style={{ paddingBlock: "var(--section-y)" }}>
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Reveal>
                {detail.intro.map((p) => (
                  <p key={p} className="mt-4 text-lg leading-relaxed text-kraft-900/85 first:mt-0">
                    {p}
                  </p>
                ))}
              </Reveal>

              {detail.sections.map((sec) => (
                <Reveal key={sec.title}>
                  <h2 className="font-stencil mt-12 text-2xl font-bold uppercase text-navy-950 sm:text-3xl">
                    {sec.title}
                  </h2>
                  {sec.paragraphs?.map((p) => (
                    <p key={p} className="mt-3 leading-relaxed text-kraft-900/85">
                      {p}
                    </p>
                  ))}
                  {sec.bullets && (
                    <Stagger className="mt-5 grid gap-3 sm:grid-cols-2">
                      {sec.bullets.map((b) => (
                        <StaggerItem key={b}>
                          <div className="shipping-label flex items-start gap-2.5 px-4 py-3">
                            <span aria-hidden className="font-marker text-brand-red-500">✔</span>
                            <p className="text-sm text-navy-950">{b}</p>
                          </div>
                        </StaggerItem>
                      ))}
                    </Stagger>
                  )}
                </Reveal>
              ))}

              {detail.faq && detail.faq.length > 0 && (
                <Reveal>
                  <h2 className="font-stencil mt-12 text-2xl font-bold uppercase text-navy-950 sm:text-3xl">
                    Questions fréquentes
                  </h2>
                  <Accordion type="single" collapsible className="mt-4">
                    {detail.faq.map((item) => (
                      <AccordionItem key={item.q} value={item.q} className="border-navy-950/20">
                        <AccordionTrigger className="text-left font-bold text-navy-950">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="leading-relaxed text-kraft-900/80">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Reveal>
              )}
            </div>

            <Reveal delay={0.15}>
              <div className="crate sticky top-24 rotate-[0.6deg] p-6">
                <TapedCorners />
                <h2 className="font-stencil text-xl font-bold uppercase text-navy-950">
                  Demandez votre devis gratuit
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-kraft-900/80">
                  Contactez-nous dès aujourd'hui — devis gratuit, clair et sans engagement.
                </p>
                <Link
                  to="/#contact"
                  className="sticker font-stencil mt-5 block px-4 py-3 text-center text-base font-bold uppercase transition-transform hover:scale-[1.02]"
                >
                  {service.cta}
                </Link>
                <a
                  href="tel:+41763291619"
                  className="font-marker mt-4 block text-center text-lg text-navy-800 hover:text-brand-red-600"
                >
                  ou appelez-nous : +41 76 329 16 19
                </a>
              </div>
            </Reveal>
          </div>

          {/* Autres services */}
          <div className="mt-20 border-t-2 border-dashed border-navy-950/25 pt-10">
            <h2 className="font-stencil text-2xl font-bold uppercase text-navy-950">Nos autres services</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {others.map((s, i) => (
                <Link
                  key={s.id}
                  to={`/services/${s.id}`}
                  className={`crate group p-5 transition-transform hover:-translate-y-1 hover:rotate-0 ${
                    i % 2 ? "rotate-[0.5deg]" : "-rotate-[0.5deg]"
                  }`}
                >
                  <p className="font-stencil font-bold uppercase text-navy-950">{s.title}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-brand-red-600">
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
