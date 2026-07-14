import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet";
import { Logo } from "./Logo";
import { company } from "../content";

const NAV = [
  { label: "Services", anchor: "services" },
  { label: "Comment ça marche", anchor: "comment-ca-marche" },
  { label: "Boutique", anchor: "boutique" },
  { label: "Réalisations", anchor: "realisations" },
  { label: "Méthode", anchor: "methode" },
  { label: "Secteurs", anchor: "secteurs" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (anchor: string) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${anchor}`);
    } else {
      document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-white/0"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label={`${company.name} — accueil`} onClick={() => window.scrollTo({ top: 0 })}>
          <Logo inverted={!scrolled} />
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {NAV.map((item) => (
            <button
              key={item.anchor}
              onClick={() => goTo(item.anchor)}
              className={`text-sm font-medium whitespace-nowrap transition-colors ${
                scrolled ? "text-navy-800 hover:text-brand-red-600" : "text-white/90 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${company.phone.replace(/\s/g, "")}`}
            className={`hidden xl:flex items-center gap-2 text-sm font-semibold whitespace-nowrap transition-colors ${
              scrolled ? "text-navy-900 hover:text-brand-red-600" : "text-white hover:text-brand-red-300"
            }`}
          >
            <Phone className="size-4" aria-hidden />
            {company.phone}
          </a>
          <Button
            onClick={() => goTo("contact")}
            className="bg-brand-red-600 hover:bg-brand-red-700 text-white font-semibold"
          >
            Devis gratuit
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`lg:hidden ${scrolled ? "text-navy-900" : "text-white hover:bg-white/10 hover:text-white"}`}
                aria-label="Ouvrir le menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-white">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="mt-8 flex flex-col gap-1 px-4">
                {NAV.map((item) => (
                  <button
                    key={item.anchor}
                    onClick={() => goTo(item.anchor)}
                    className="rounded-md px-3 py-3 text-left text-base font-medium text-navy-900 hover:bg-navy-50 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  onClick={() => goTo("contact")}
                  className="mt-4 bg-brand-red-600 hover:bg-brand-red-700 text-white font-semibold"
                >
                  Devis gratuit
                </Button>
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="mt-2 flex items-center justify-center gap-2 py-2 text-sm font-semibold text-navy-900"
                >
                  <Phone className="size-4" aria-hidden />
                  {company.phone}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
