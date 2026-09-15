import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { company, nav } from "@/lib/company";
import { featuredServices } from "@/lib/services";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-1">
          <Logo inverted />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/70">
            {company.tagline}. Local crews for Houston homes, rentals, and
            investment properties.
          </p>
        </div>
        <div>
          <h2 className="font-sans text-sm font-semibold tracking-[0.12em] text-paper/50 uppercase">
            Navigate
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-paper/80 hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-sans text-sm font-semibold tracking-[0.12em] text-paper/50 uppercase">
            Services
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {featuredServices.map((service) => (
              <li key={service.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="text-paper/80 hover:text-paper"
                >
                  {service.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-sans text-sm font-semibold tracking-[0.12em] text-paper/50 uppercase">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-paper/80">
            <li>
              <a
                href={`tel:${company.phoneTel}`}
                className="inline-flex items-center gap-2 hover:text-paper"
              >
                <Phone className="size-4" />
                {company.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.leadsEmail}`}
                className="inline-flex items-center gap-2 hover:text-paper"
              >
                <Mail className="size-4" />
                {company.email}
              </a>
            </li>
            <li className="inline-flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>
                {company.city}
                <br />
                {company.hoursWeekday}
                <br />
                {company.hoursSunday}
              </span>
            </li>
          </ul>
          <div className="mt-5 flex gap-2">
            <a
              href="https://www.facebook.com"
              className="flex size-10 items-center justify-center rounded-md bg-paper/8 text-paper hover:bg-paper/15"
              aria-label="Facebook"
            >
              <Facebook className="size-4" />
            </a>
            <a
              href="https://www.instagram.com"
              className="flex size-10 items-center justify-center rounded-md bg-paper/8 text-paper hover:bg-paper/15"
              aria-label="Instagram"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href="https://www.linkedin.com"
              className="flex size-10 items-center justify-center rounded-md bg-paper/8 text-paper hover:bg-paper/15"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-paper/50 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Houston Solutions. All rights reserved.</p>
          <p>Licensed trades coordinated as required. Insured residential work.</p>
        </div>
      </div>
    </footer>
  );
}
