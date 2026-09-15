import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/company";

export function PageCta({
  title = "Need work done on your property?",
  body = "Tell us what you need and we’ll get back to you with the next steps.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-navy py-16 text-paper md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 md:flex-row md:items-center md:px-8">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
          <p className="mt-3 text-paper/75">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link to="/contact">Get a Free Estimate</Link>
          </Button>
          <Button asChild size="lg" variant="inverse">
            <a href={`tel:${company.phoneTel}`}>
              <Phone className="size-4" />
              {company.phoneDisplay}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
