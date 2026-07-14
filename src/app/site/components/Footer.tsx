import { Link } from "react-router";
import { Logo } from "./Logo";
import { TruckSVG } from "./decor";
import { company, services } from "../content";

export function Footer() {
  return (
    <footer className="bg-ink text-navy-100">
      {/* Chant de carton ondulé entre la page et le pied */}
      <div aria-hidden className="bg-corrugated h-4 opacity-80" />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo inverted className="h-14 w-auto" />
            <p className="mt-4 text-sm leading-relaxed text-navy-200">{company.about}</p>
            <p className="mt-3 text-sm leading-relaxed text-navy-200">{company.tagline}.</p>
          </div>
          <div>
            <h3 className="font-stencil text-sm font-bold uppercase tracking-wider text-kraft-50">Services</h3>
            <ul className="mt-4 space-y-2">
              {services.map((s) => (
                <li key={s.id}>
                  <Link to={`/services/${s.id}`} className="text-sm transition-colors hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-stencil text-sm font-bold uppercase tracking-wider text-kraft-50">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-white">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="transition-colors hover:text-white">
                  {company.email}
                </a>
              </li>
              <li>{company.address}</li>
              <li>{company.website}</li>
            </ul>
          </div>
          <div>
            <h3 className="font-stencil text-sm font-bold uppercase tracking-wider text-kraft-50">Zone d'intervention</h3>
            <p className="mt-4 text-sm leading-relaxed text-navy-200">
              La Chaux-de-Fonds, Le Locle, Neuchâtel, Val-de-Ruz, Val-de-Travers, Boudry,
              Littoral neuchâtelois — et Berne sur demande pour les déménagements.
            </p>
            <TruckSVG className="mt-6 w-36 opacity-80" />
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-navy-800 pt-6 text-xs text-navy-300">
          <span>© {new Date().getFullYear()} {company.name}. Tous droits réservés.</span>
          <span className="font-marker text-sm text-navy-200">chaud devant !</span>
        </div>
      </div>
    </footer>
  );
}
