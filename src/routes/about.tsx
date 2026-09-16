import { createFileRoute, Link } from "@tanstack/react-router";
import { PageCta } from "@/components/page-cta";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/company";

const clients = [
  "Homeowners in Houston and the north and west suburbs",
  "Landlords and small portfolio investors",
  "Property managers who need make-ready work on a date",
  "Agents and investors preparing a house to list or rent",
];

const principles = [
  {
    title: "Show up",
    body: "We put a time on the calendar and keep it. If weather or a part delays the day, you hear it from us first.",
  },
  {
    title: "Quote the work",
    body: "Estimates are in writing. Allowances and owner-supplied items are called out so the number means something.",
  },
  {
    title: "Finish the job we agreed to",
    body: "We’d rather do a defined scope well than sell a renovation you didn’t ask for.",
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Houston Solutions" },
      {
        name: "description",
        content:
          "Houston Solutions is a local home services and property improvement company serving Houston homeowners, landlords, property managers, and real estate investors.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A Houston company for the work houses actually need."
        description="We handle the jobs that keep properties livable and listings ready — without turning every call into a sales pitch."
        crumbs={[
          { label: "Home", to: "/" },
          { label: "About Us" },
        ]}
        image="/images/neighborhood.jpg"
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
        <div className="md:col-span-7">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/maintenance.jpg"
              alt="Houston Solutions technician repairing trim on a local brick home"
              className="aspect-photo w-full object-cover"
            />
          </div>
          <h2 className="mt-10 font-display text-3xl text-navy">Who we are</h2>
          <div className="mt-5 space-y-4 text-muted leading-relaxed">
            <p>
              Houston Solutions is a local home services and property
              improvement company serving Houston and surrounding communities.
              We handle the work that keeps houses livable and investment
              properties ready — from tree removal and concrete to remodeling,
              painting, insulation, repairs, and turnovers.
            </p>
            <p>
              Homeowners call us when they want one team they can reach.
              Property managers and investors call us when a unit needs to be
              turned without juggling five vendors. Real estate agents call when
              a listing needs a punch list finished before photos.
            </p>
            <p>
              We don’t claim to be the largest contractor in Harris County. We
              show up, we quote the work in writing, and we finish the job we
              agreed to. Licensed trades are used where plumbing and electrical
              require it. The rest is careful residential work.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {principles.map((item) => (
              <li key={item.title} className="rounded-2xl bg-cream p-5">
                <h3 className="font-display text-xl text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
        <aside className="md:col-span-5">
          <div className="rounded-2xl bg-cream p-6 shadow-card md:sticky md:top-28">
            <h3 className="font-display text-2xl text-navy">Who we work with</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {clients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink">
              {company.hoursWeekday}
              <br />
              {company.hoursSunday}
            </p>
            <Button asChild className="mt-6">
              <Link to="/contact">Get a Free Estimate</Link>
            </Button>
          </div>
        </aside>
      </section>
      <PageCta />
    </>
  );
}
