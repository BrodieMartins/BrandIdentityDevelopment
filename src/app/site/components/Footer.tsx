import { Link } from "react-router";
import { Logo } from "./Logo";
import { company, services } from "../content";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo inverted />
            <p className="mt-4 text-sm leading-relaxed text-navy-200">
              {company.tagline} — {company.region}.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 space-y-2">
              {services.map((s) => (
                <li key={s.id}>
                  <Link to={`/services/${s.id}`} className="text-sm hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-white transition-colors">
                  {company.email}
                </a>
              </li>
              <li>{company.address}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Zone d'intervention</h3>
            <p className="mt-4 text-sm leading-relaxed text-navy-200">
              {company.region}, Arc jurassien et toute la Suisse romande pour les déménagements.
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-navy-800 pt-6 text-xs text-navy-300">
          © {new Date().getFullYear()} {company.name}. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
