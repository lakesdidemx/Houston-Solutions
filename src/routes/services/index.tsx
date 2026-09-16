import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ServiceGlyph } from "@/components/service-icon";
import { services } from "@/lib/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Home Services in Houston TX | Houston Solutions" },
      {
        name: "description",
        content:
          "Tree removal, concrete, remodeling, painting, drywall, plumbing, electrical, blown-in insulation, property maintenance, junk removal, and handyman work in Houston and surrounding areas.",
      },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Complete home solutions under one roof."
        description="Residential and property improvement work for Houston homeowners, landlords, managers, and investors."
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Services" },
        ]}
        image="/images/exterior.jpg"
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
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
                />
              </div>
              <div className="p-5">
                <span className="inline-flex size-9 items-center justify-center rounded-md bg-navy text-paper">
                  <ServiceGlyph name={service.icon} />
                </span>
                <h2 className="mt-3 font-display text-xl text-navy">
                  {service.name}
                </h2>
                <p className="mt-2 text-sm text-muted">
                  {service.cardDescription}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Learn more
                  <ArrowRight className="size-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
