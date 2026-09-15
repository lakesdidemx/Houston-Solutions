import { Phone } from "lucide-react";
import { EstimateForm } from "@/components/estimate-form";
import { company } from "@/lib/company";

export function HomeLead() {
  return (
    <section id="estimate" className="bg-navy py-20 text-paper md:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 md:grid-cols-2 md:px-8">
        <div>
          <p className="text-sm font-medium tracking-[0.16em] text-accent uppercase">
            Free estimate
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">
            Need Work Done on Your Property?
          </h2>
          <p className="mt-4 text-lg text-paper/75">
            Tell us what you need and we’ll get back to you with the next steps.
          </p>
          <p className="mt-6 text-paper/70">
            Prefer to talk? Call{" "}
            <a
              href={`tel:${company.phoneTel}`}
              className="inline-flex items-center gap-2 font-medium text-paper underline-offset-4 hover:underline"
            >
              <Phone className="size-4" />
              {company.phoneDisplay}
            </a>
            . {company.hoursWeekday}. {company.hoursSunday}.
          </p>
        </div>
        <div className="text-ink">
          <EstimateForm />
        </div>
      </div>
    </section>
  );
}
