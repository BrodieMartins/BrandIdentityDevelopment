import { ShoppingCart } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Section } from "../components/Section";
import { Stagger, StaggerItem } from "../anim";
import { shop } from "../content";

/**
 * Boutique — vitrine front uniquement pour la maquette.
 * Le panier/paiement sera branché plus tard si le client valide.
 */
export function ShopSection() {
  return (
    <Section
      id="boutique"
      eyebrow="Matériel & prestations"
      title={shop.title}
      intro={shop.intro}
    >
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {shop.products.map((p) => (
          <StaggerItem key={p.id}>
            <article className="flex h-full flex-col rounded-2xl border border-navy-100 bg-white overflow-hidden transition-shadow hover:shadow-md">
              {/* Visuel produit — placeholder en attendant les photos réelles */}
              <div className="flex h-36 items-center justify-center bg-navy-50 text-navy-300">
                <ShoppingCart className="size-8" aria-hidden />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-semibold text-navy-900">{p.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{p.description}</p>
                <div className="mt-auto pt-4 flex items-center justify-between gap-2">
                  <p className="font-bold text-navy-900">
                    {p.price}
                    {p.unit && <span className="ml-1 text-xs font-normal text-slate-500">/ {p.unit}</span>}
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-navy-200 text-navy-800 hover:bg-navy-50 hover:text-navy-900"
                  >
                    Ajouter
                  </Button>
                </div>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
      <p className="mt-6 text-sm text-slate-500">
        Retrait sur place ou livraison avec votre prestation.
      </p>
    </Section>
  );
}
