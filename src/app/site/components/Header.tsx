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
import { scrollToAnchor, scrollToTop } from "../scroll";

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

  /* Les pages services ouvrent sur un bandeau d'encre sombre :
     tant qu'on n'a pas scrollé, le header passe en clair. */
  const onDark = !scrolled && location.pathname.startsWith("/services");

  const goTo = (anchor: string) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${anchor}`);
    } else {
      scrollToAnchor(anchor);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-kraft shadow-[0_2px_10px_rgba(61,47,28,0.25)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label={`${company.name} — accueil`} onClick={() => scrollToTop()}>
          <Logo className="h-11 w-auto" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((item) => (
            <button
              key={item.anchor}
              onClick={() => goTo(item.anchor)}
              className={`whitespace-nowrap text-sm font-bold transition-colors ${
                onDark ? "text-kraft-50/90 hover:text-white" : "text-navy-900 hover:text-brand-red-600"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${company.phone.replace(/\s/g, "")}`}
            className={`font-marker hidden items-center gap-2 whitespace-nowrap transition-colors xl:flex ${
              onDark ? "text-kraft-50 hover:text-brand-yellow-400" : "text-navy-900 hover:text-brand-red-600"
            }`}
          >
            <Phone className="size-4" aria-hidden />
            {company.phone}
          </a>
          <button
            onClick={() => goTo("contact")}
            className="sticker font-stencil -rotate-1 px-4 py-2 text-sm font-bold uppercase transition-transform hover:rotate-0 hover:scale-105 active:scale-95"
          >
            Devis gratuit
          </button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`lg:hidden ${
                  onDark ? "text-kraft-50 hover:bg-white/10 hover:text-white" : "text-navy-950 hover:bg-navy-950/10"
                }`}
                aria-label="Ouvrir le menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-kraft w-72 border-l-2 border-navy-950/20">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="mt-8 flex flex-col gap-1 px-4">
                {NAV.map((item) => (
                  <button
                    key={item.anchor}
                    onClick={() => goTo(item.anchor)}
                    className="rounded-md px-3 py-3 text-left text-base font-bold text-navy-950 transition-colors hover:bg-navy-950/5"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => goTo("contact")}
                  className="sticker font-stencil mt-4 px-4 py-3 text-base font-bold uppercase"
                >
                  Devis gratuit
                </button>
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="font-marker mt-3 flex items-center justify-center gap-2 py-2 text-navy-950"
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
