import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/company";

const trustItems = [
  "Written estimates",
  "Greater Houston",
  "Residential & rental work",
  "Licensed trades as required",
];

export function HomeHero() {
  return (
    <section className="relative min-h-[36rem] overflow-hidden bg-navy text-paper md:min-h-[44rem]">
      <img
        src="/images/hero.jpg"
        alt="A well-kept Houston brick home with live oaks in late afternoon light"
        className="absolute inset-0 size-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-linear-to-r from-navy-deep/92 via-navy/78 to-navy/28" />
      <div className="relative mx-auto flex min-h-[36rem] max-w-6xl flex-col justify-center px-5 py-20 md:min-h-[44rem] md:px-8 md:py-24">
        <p className="rise-in text-sm font-medium tracking-[0.16em] text-paper/80 uppercase">
          {company.trustLine}
        </p>
        <h1 className="rise-in rise-in-delay-1 mt-4 max-w-3xl font-display text-4xl leading-[1.08] md:text-6xl">
          Reliable Home Services. Quality Work. One Solution.
        </h1>
        <p className="rise-in rise-in-delay-2 mt-5 max-w-xl text-lg text-paper/80">
          Houston Solutions provides professional home improvement, remodeling,
          concrete, tree services, insulation, repairs, and property maintenance
          throughout Houston and surrounding areas.
        </p>
        <div className="rise-in rise-in-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="xl">
            <Link to="/contact">Get a Free Estimate</Link>
          </Button>
          <Button asChild size="xl" variant="inverse">
            <a href={`tel:${company.phoneTel}`}>
              <Phone className="size-4" />
              Call Houston Solutions
            </a>
          </Button>
        </div>
        <ul className="rise-in rise-in-delay-3 mt-12 flex flex-wrap gap-x-6 gap-y-2 text-sm text-paper/75">
          {trustItems.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
