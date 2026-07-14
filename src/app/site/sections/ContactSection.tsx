import { Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Label } from "@/app/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { Section } from "../components/Section";
import { Reveal } from "../anim";
import { MarkerNote, Stamp, TapedCorners } from "../components/decor";
import { company, contact, services } from "../content";

const labelClass = "font-stencil text-xs font-bold uppercase tracking-wider text-navy-800";
const fieldClass =
  "border-2 border-navy-950/30 bg-white rounded-[4px] focus-visible:border-navy-500 focus-visible:ring-navy-500/30";

/**
 * Contact — un bordereau d'expédition à remplir : votre demande part
 * avec la prochaine tournée. Formulaire front uniquement pour la maquette.
 */
export function ContactSection() {
  return (
    <Section
      id="contact"
      stop={7}
      eyebrow="dernier arrêt de la tournée"
      title={contact.title}
      intro={contact.intro}
      tone="ink"
    >
      <div className="grid gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <form
            className="relative -rotate-[0.4deg] space-y-5 bg-[#fdfaf2] p-6 shadow-[6px_8px_0_rgba(0,0,0,0.35)] sm:p-8"
            style={{ borderRadius: "6px" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <TapedCorners />
            <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-dashed border-navy-950/30 pb-4">
              <p className="font-stencil text-xl font-bold uppercase text-navy-950">
                Bordereau de devis
              </p>
              <Stamp rotate={4} className="text-[0.65rem]">Réponse rapide</Stamp>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="contact-name" className={labelClass}>Expéditeur — nom</Label>
                <Input id="contact-name" name="name" autoComplete="name" placeholder="Votre nom" required className={fieldClass} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-phone" className={labelClass}>Téléphone</Label>
                <Input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="+41 …" required className={fieldClass} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-service" className={labelClass}>Contenu — service souhaité</Label>
              <Select name="service">
                <SelectTrigger id="contact-service" className={`w-full ${fieldClass}`}>
                  <SelectValue placeholder="Choisir un service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((s) => (
                    <SelectItem key={s.id} value={s.id}>
                      {s.title}
                    </SelectItem>
                  ))}
                  <SelectItem value="autre">Autre demande</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-message" className={labelClass}>Instructions particulières</Label>
              <Textarea
                id="contact-message"
                name="message"
                rows={4}
                placeholder="Décrivez votre besoin — volume, étage, date souhaitée…"
                className={fieldClass}
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
              <button
                type="submit"
                className="sticker font-stencil inline-flex -rotate-1 items-center px-7 py-3 text-lg font-bold uppercase transition-transform hover:rotate-0 hover:scale-[1.03] active:scale-95"
              >
                {contact.primaryCta}
              </button>
              <MarkerNote className="text-sm text-kraft-700">gratuit &amp; sans engagement</MarkerNote>
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-2">
          <div className="crate flex h-full rotate-[0.6deg] flex-col justify-center p-6 sm:p-8">
            <h3 className="font-stencil text-2xl font-bold uppercase text-navy-950">
              Vous préférez appeler ?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-kraft-900/80">
              Nous répondons du lundi au samedi. Décrivez votre besoin, nous vous
              donnons une première estimation directement.
            </p>
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="mt-6 flex items-center gap-3 text-xl font-bold text-navy-950 transition-colors hover:text-brand-red-600"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-red-500 text-white">
                <Phone className="size-5" aria-hidden />
              </span>
              {company.phone}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="mt-4 flex items-center gap-3 text-sm font-medium text-kraft-900/90 transition-colors hover:text-brand-red-600"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-navy-950 text-kraft-50">
                <Mail className="size-5" aria-hidden />
              </span>
              {company.email}
            </a>
            <p className="mt-4 flex items-center gap-3 text-sm font-medium text-kraft-900/90">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-navy-950 text-kraft-50">
                <MapPin className="size-5" aria-hidden />
              </span>
              {company.address}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
