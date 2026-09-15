import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ServiceGlyph } from "@/components/service-icon";
import { featuredServices } from "@/lib/services";

export function HomeServices() {
  return (
    <section className="bg-paper py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-sm font-medium tracking-[0.16em] text-accent uppercase">
          What we do
        </p>
        <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="max-w-xl font-display text-3xl text-navy md:text-4xl">
            Complete Home Solutions Under One Roof
          </h2>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-accent"
          >
            All services
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service) => (
            <Link
              key={service.slug}
              to="/services/$slug"
              params={{ slug: service.slug }}
              className="group overflow-hidden rounded-2xl bg-cream shadow-card transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <div className="aspect-photo overflow-hidden">
                <img
                  src={service.image}
                  alt=""
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <span className="inline-flex size-9 items-center justify-center rounded-md bg-navy text-paper">
                  <ServiceGlyph name={service.icon} />
                </span>
                <h3 className="mt-3 font-display text-xl text-navy">
                  {service.shortName}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.cardDescription}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Learn more
                  <ArrowRight className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
