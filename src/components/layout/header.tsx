import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { ServiceGlyph } from "@/components/service-icon";
import { Button } from "@/components/ui/button";
import { company, nav } from "@/lib/company";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden border-b border-navy-mid bg-navy-deep text-paper/80 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2 text-sm md:px-8">
          <p>{company.trustLine}</p>
          <div className="flex items-center gap-6">
            <span>{company.hoursShort}</span>
            <a
              href={`tel:${company.phoneTel}`}
              className="inline-flex items-center gap-2 font-medium text-paper hover:text-paper"
            >
              <Phone className="size-3.5" />
              {company.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
      <div className="border-b border-navy-mid/60 bg-navy text-paper">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
          <Logo inverted />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {nav.map((item) =>
              item.to === "/services" ? (
                <div
                  key={item.to}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    to="/services"
                    className={cn(
                      "inline-flex h-11 items-center gap-1 rounded-md px-3 text-sm font-medium text-paper/80 transition-colors duration-150 hover:bg-paper/8 hover:text-paper",
                      pathname.startsWith("/services") && "text-paper",
                    )}
                  >
                    Services
                    <ChevronDown className="size-3.5" />
                  </Link>
                  <div
                    className={cn(
                      "absolute top-full left-0 w-[34rem] origin-top pt-2 transition-[opacity,transform] duration-200 ease-out",
                      servicesOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible pointer-events-none -translate-y-1 opacity-0",
                    )}
                    aria-hidden={!servicesOpen}
                  >
                    <div className="rounded-2xl bg-paper p-3 text-ink shadow-card">
                      <div className="grid grid-cols-2 gap-1">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            to="/services/$slug"
                            params={{ slug: service.slug }}
                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm hover:bg-paper-warm"
                          >
                            <span className="flex size-8 items-center justify-center rounded-md bg-navy/6 text-navy">
                              <ServiceGlyph name={service.icon} className="size-4" />
                            </span>
                            {service.shortName}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "inline-flex h-11 items-center rounded-md px-3 text-sm font-medium text-paper/80 transition-colors duration-150 hover:bg-paper/8 hover:text-paper",
                    pathname === item.to && "text-paper",
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${company.phoneTel}`}
              className="inline-flex size-11 items-center justify-center rounded-md text-paper hover:bg-paper/10 lg:hidden"
              aria-label={`Call ${company.phoneDisplay}`}
            >
              <Phone className="size-5" />
            </a>
            <Button asChild className="hidden sm:inline-flex">
              <Link to="/contact">Get a Free Estimate</Link>
            </Button>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-md text-paper hover:bg-paper/10 lg:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {open ? (
          <div className="border-t border-navy-mid/60 bg-navy px-5 py-4 lg:hidden">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="flex h-12 items-center rounded-md px-3 text-paper hover:bg-paper/10"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 grid grid-cols-1 gap-1 border-t border-paper/10 pt-3">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    onClick={() => setOpen(false)}
                    className="flex h-11 items-center rounded-md px-3 text-sm text-paper/80 hover:bg-paper/10 hover:text-paper"
                  >
                    {service.shortName}
                  </Link>
                ))}
              </div>
              <Button asChild className="mt-4">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Get a Free Estimate
                </Link>
              </Button>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
