import { CalendarCheck, PackageOpen, Repeat } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Section } from "../components/Section";
import { Stagger, StaggerItem } from "../anim";
import { shop } from "../content";

const OFFER_ICONS = [CalendarCheck, Repeat, PackageOpen];

/**
 * Offres à réserver — reprend les 3 produits du shop Odoo actuel
 * (passage unique, abonnement, débarras). Front uniquement pour la
 * maquette, la réservation en ligne sera branchée plus tard.
 */
export function ShopSection() {
  return (
    <Section
      id="boutique"
      eyebrow="Nos offres"
      title={shop.title}
      intro={shop.intro}
    >
      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shop.products.map((p, i) => {
          const Icon = OFFER_ICONS[i % OFFER_ICONS.length];
          const highlighted = Boolean(p.badge);
          return (
            <StaggerItem key={p.id} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-2xl border p-7 transition-shadow hover:shadow-md ${
                  highlighted
                    ? "border-navy-800 bg-navy-950 text-white shadow-lg"
                    : "border-navy-100 bg-white"
                }`}
              >
                {p.badge && (
                  <span className="absolute -top-3 right-6 rounded-full bg-brand-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy-950">
                    {p.badge}
                  </span>
                )}
                <Icon
                  className={`size-7 ${highlighted ? "text-brand-yellow-400" : "text-brand-red-600"}`}
                  aria-hidden
                />
                <h3 className={`mt-4 text-xl font-bold ${highlighted ? "text-white" : "text-navy-900"}`}>
                  {p.name}
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${highlighted ? "text-navy-100" : "text-slate-600"}`}>
                  {p.description}
                </p>
                <div className="mt-auto pt-6">
                  <p className={`text-2xl font-bold ${highlighted ? "text-white" : "text-navy-900"}`}>
                    {p.price}
                  </p>
                  {p.priceDetail && (
                    <p className={`text-sm ${highlighted ? "text-navy-200" : "text-slate-500"}`}>
                      {p.priceDetail}
                    </p>
                  )}
                  <Button
                    className={`mt-4 w-full font-semibold ${
                      highlighted
                        ? "bg-brand-red-600 hover:bg-brand-red-700 text-white"
                        : "bg-navy-900 hover:bg-navy-800 text-white"
                    }`}
                  >
                    Réserver
                  </Button>
                </div>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>
      <p className="mt-6 text-sm text-slate-500">
        Abonnement à la carte : 1 ou 2 passages par mois, zéro contrainte, zéro stress.
      </p>
    </Section>
  );
}
