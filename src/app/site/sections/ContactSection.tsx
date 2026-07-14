import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/app/components/ui/button";
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
import { company, contact, services } from "../content";

/** Formulaire de contact — front uniquement pour la maquette. */
export function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={contact.title}
      intro={contact.intro}
      tone="tinted"
    >
      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <form
            className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="contact-name">Nom</Label>
                <Input id="contact-name" name="name" autoComplete="name" placeholder="Votre nom" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-phone">Téléphone</Label>
                <Input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="+41 …" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-service">Service souhaité</Label>
              <Select name="service">
                <SelectTrigger id="contact-service" className="w-full">
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
              <Label htmlFor="contact-message">Votre demande</Label>
              <Textarea
                id="contact-message"
                name="message"
                rows={4}
                placeholder="Décrivez votre besoin — volume, étage, date souhaitée…"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full sm:w-auto bg-brand-red-600 hover:bg-brand-red-700 text-white font-semibold px-8"
            >
              {contact.primaryCta}
            </Button>
          </form>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-2">
          <div className="flex h-full flex-col justify-center rounded-2xl bg-navy-950 p-6 sm:p-8 text-white">
            <h3 className="text-xl font-bold">Vous préférez appeler ?</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-100">
              Nous répondons du lundi au samedi. Décrivez votre besoin, nous
              vous donnons une première estimation directement.
            </p>
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="mt-6 flex items-center gap-3 text-lg font-bold hover:text-brand-red-300 transition-colors"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-brand-red-600">
                <Phone className="size-5" aria-hidden />
              </span>
              {company.phone}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="mt-4 flex items-center gap-3 text-sm font-medium text-navy-100 hover:text-white transition-colors"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-white/10">
                <Mail className="size-5" aria-hidden />
              </span>
              {company.email}
            </a>
            <p className="mt-4 flex items-center gap-3 text-sm font-medium text-navy-100">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10">
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
