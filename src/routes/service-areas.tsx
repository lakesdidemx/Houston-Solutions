import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { HoustonMap } from "@/components/houston-map";
import { PageCta } from "@/components/page-cta";
import { PageHero } from "@/components/page-hero";
import { cities, company } from "@/lib/company";

const areaNotes: Record<string, string> = {
  Houston:
    "Inside the Loop, the Heights, Meyerland, Energy Corridor, and neighborhoods across the city.",
  Spring: "Tree-heavy lots, storm cleanup, and established suburban homes.",
  "The Woodlands":
    "HOA-conscious exterior work, remodeling, and property upkeep.",
  Cypress: "Newer builds and rentals that need punch lists and turnovers.",
  Tomball: "Acreage edges, trees, and older houses with mixed repair needs.",
  Katy: "Driveways, patios, and interior updates on west-side homes.",
  Humble: "Investment properties and make-ready work near the airport corridor.",
  Conroe: "North-corridor homes, trees, and exterior repairs.",
  Magnolia: "Larger lots, tree work, and exterior projects.",
};

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: [
      {
        title:
          "Service Areas | Houston, Spring, The Woodlands, Katy & Nearby",
      },
      {
        name: "description",
        content:
          "Houston Solutions serves Houston, Spring, The Woodlands, Cypress, Tomball, Katy, Humble, Conroe, Magnolia, and surrounding Texas communities.",
      },
    ],
  }),
  component: ServiceAreasPage,
});

function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service areas"
        title="Greater Houston, and the cities around it."
        description={company.serviceAreaLine}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Service Areas" },
        ]}
        image="/images/neighborhood.jpg"
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <HoustonMap />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => (
            <li key={city} className="rounded-2xl bg-cream p-5 shadow-card">
              <p className="flex items-center gap-2 font-display text-xl text-navy">
                <MapPin className="size-4 text-accent" />
                {city}, TX
              </p>
              <p className="mt-2 text-sm text-muted">{areaNotes[city]}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-muted">
          Don’t see your city? If you’re in the Houston metro, call{" "}
          <a
            href={`tel:${company.phoneTel}`}
            className="font-medium text-navy hover:text-accent"
          >
            {company.phoneDisplay}
          </a>{" "}
          — we likely serve it.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-flex text-sm font-medium text-navy hover:text-accent"
        >
          Request an estimate
        </Link>
      </section>
      <PageCta title="Working on a property in the Houston area?" />
    </>
  );
}
