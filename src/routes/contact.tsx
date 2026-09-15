import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { EstimateForm } from "@/components/estimate-form";
import { PageHero } from "@/components/page-hero";
import { company } from "@/lib/company";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Free Estimate | Houston Solutions" },
      {
        name: "description",
        content:
          "Request a free estimate from Houston Solutions. Call, email, or send project details for home services in Houston, Spring, The Woodlands, Katy, and nearby cities.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what the property needs."
        description="Call, email, or send the form. We’ll follow up with the next step — usually within one business day."
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Contact" },
        ]}
        image="/images/neighborhood.jpg"
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-5 md:px-8 md:py-20">
        <div className="md:col-span-2">
          <h2 className="font-display text-3xl text-navy">Get in touch</h2>
          <ul className="mt-6 space-y-4 text-ink">
            <li>
              <a
                href={`tel:${company.phoneTel}`}
                className="inline-flex items-center gap-3 font-medium hover:text-accent"
              >
                <span className="flex size-10 items-center justify-center rounded-md bg-navy text-paper">
                  <Phone className="size-4" />
                </span>
                {company.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.leadsEmail}`}
                className="inline-flex items-center gap-3 font-medium hover:text-accent"
              >
                <span className="flex size-10 items-center justify-center rounded-md bg-navy text-paper">
                  <Mail className="size-4" />
                </span>
                {company.email}
              </a>
            </li>
            <li className="inline-flex items-start gap-3">
              <span className="flex size-10 items-center justify-center rounded-md bg-navy text-paper">
                <MapPin className="size-4" />
              </span>
              <span>
                {company.city}
                <br />
                <span className="text-sm text-muted">
                  {company.hoursWeekday}
                  <br />
                  {company.hoursSunday}
                </span>
              </span>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3" id="estimate">
          <EstimateForm />
        </div>
      </section>
    </>
  );
}
