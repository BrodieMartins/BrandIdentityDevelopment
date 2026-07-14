import { CalendarCheck, PackageOpen, Repeat } from "lucide-react";
import { Section } from "../components/Section";
import { Stagger, StaggerItem } from "../anim";
import { MarkerNote } from "../components/decor";
import { shop } from "../content";

const OFFER_ICONS = [CalendarCheck, Repeat, PackageOpen];

/**
 * Offres à réserver — trois étiquettes de prix accrochées, comme
 * celles qu'on attache aux meubles le jour du départ.
 * Front uniquement pour la maquette, la réservation sera branchée plus tard.
 */
export function ShopSection() {
  return (
    <Section
      id="boutique"
      stop={3}
      eyebrow="à réserver en ligne"
      title={shop.title}
      intro={shop.intro}
    >
      <Stagger className="grid items-start gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {shop.products.map((p, i) => {
          const Icon = OFFER_ICONS[i % OFFER_ICONS.length];
          const highlighted = Boolean(p.badge);
          const rotation = ["-rotate-1", "rotate-[1.2deg]", "-rotate-[0.6deg]"][i % 3];
          return (
            <StaggerItem key={p.id} className="h-full">
              <article
                className={`relative flex h-full flex-col border-2 p-7 pt-10 shadow-[5px_6px_0_rgba(61,47,28,0.18)] transition-transform hover:-translate-y-1.5 hover:rotate-0 ${rotation} ${
                  highlighted
                    ? "border-navy-950 bg-ink text-kraft-50"
                    : "border-navy-950/40 bg-[#fdfaf2] text-navy-950"
                }`}
                style={{ borderRadius: "6px 6px 6px 28px" }}
              >
                {/* Œillet de l'étiquette + ficelle */}
                <span
                  aria-hidden
                  className={`absolute left-1/2 top-3 size-4 -translate-x-1/2 rounded-full border-2 ${
                    highlighted ? "border-kraft-50/70 bg-navy-950" : "border-navy-950/50 bg-kraft-100"
                  }`}
                />
                {p.badge && (
                  <span className="sticker absolute -right-3 -top-3 rotate-6 px-3 py-1.5 font-marker text-sm">
                    {p.badge}
                  </span>
                )}

                <Icon
                  className={`size-7 ${highlighted ? "text-brand-yellow-400" : "text-brand-red-600"}`}
                  aria-hidden
                />
                <h3 className="font-stencil mt-4 text-2xl font-bold uppercase">{p.name}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${highlighted ? "text-navy-100" : "text-kraft-900/80"}`}>
                  {p.description}
                </p>
                <div className="mt-auto pt-6">
                  <p className={`font-stencil text-4xl font-bold ${highlighted ? "text-brand-yellow-400" : "text-brand-red-600"}`}>
                    {p.price}
                  </p>
                  {p.priceDetail && (
                    <MarkerNote className={`mt-1 text-sm ${highlighted ? "text-navy-200" : "text-kraft-700"}`}>
                      {p.priceDetail}
                    </MarkerNote>
                  )}
                  <button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className={`font-stencil mt-5 w-full border-2 px-4 py-2.5 text-lg font-bold uppercase transition-transform hover:scale-[1.02] active:scale-95 ${
                      highlighted
                        ? "border-brand-yellow-400 bg-brand-yellow-400 text-navy-950 hover:bg-brand-yellow-300"
                        : "border-navy-950 bg-navy-950 text-kraft-50 hover:bg-navy-800"
                    }`}
                    style={{ borderRadius: "4px" }}
                  >
                    Réserver
                  </button>
                </div>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>
      <MarkerNote className="mt-8 text-base text-kraft-700">
        Abonnement à la carte : 1 ou 2 passages par mois, zéro contrainte, zéro stress.
      </MarkerNote>
    </Section>
  );
}
