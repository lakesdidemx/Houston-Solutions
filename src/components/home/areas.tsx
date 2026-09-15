import { Link } from "@tanstack/react-router";
import { HoustonMap } from "@/components/houston-map";
import { cities } from "@/lib/company";

export function HomeAreas() {
  return (
    <section className="bg-cream py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2 md:px-8">
        <HoustonMap />
        <div>
          <p className="text-sm font-medium tracking-[0.16em] text-accent uppercase">
            Service area
          </p>
          <h2 className="mt-3 font-display text-3xl text-navy md:text-4xl">
            Houston and the communities around it.
          </h2>
          <p className="mt-4 text-muted">
            We work throughout Houston, Spring, The Woodlands, Cypress, Tomball,
            Katy, Humble, Conroe, Magnolia, and surrounding areas. If you’re
            nearby and don’t see your city, call — we likely cover it.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {cities.map((city) => (
              <li
                key={city}
                className="rounded-full border border-line bg-paper px-4 py-2 text-sm text-navy"
              >
                {city}
              </li>
            ))}
          </ul>
          <Link
            to="/service-areas"
            className="mt-6 inline-flex text-sm font-medium text-navy hover:text-accent"
          >
            See the full service area
          </Link>
        </div>
      </div>
    </section>
  );
}
