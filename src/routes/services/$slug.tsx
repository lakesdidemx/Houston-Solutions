import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { BeforeAfter } from "@/components/before-after";
import { EstimateForm } from "@/components/estimate-form";
import { JobVideos } from "@/components/job-videos";
import { ServiceJsonLd } from "@/components/json-ld";
import { Lightbox } from "@/components/lightbox";
import { PageHero } from "@/components/page-hero";
import { ServiceGlyph } from "@/components/service-icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/company";
import { allPhotosFor, mediaFor } from "@/lib/media";
import { getRelated, getService } from "@/lib/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service, related: getRelated(service) };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title:
          loaderData?.service.seoTitle ??
          "Home Services in Houston TX | Houston Solutions",
      },
      {
        name: "description",
        content:
          loaderData?.service.seoDescription ??
          "Residential home services and property improvements throughout Houston and surrounding areas.",
      },
    ],
  }),
  component: ServicePage,
});

function ServicePage() {
  const { service, related } = Route.useLoaderData();
  const media = mediaFor(service.slug);
  const photos = useMemo(
    () =>
      allPhotosFor(service.slug, {
        src: service.image,
        alt: `${service.name} in the Houston area`,
      }),
    [service],
  );
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <ServiceJsonLd service={service} />
      <PageHero
        eyebrow={service.shortName}
        title={service.headline}
        description={service.cardDescription}
        image={service.image}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: service.shortName },
        ]}
      />
      <article className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
        <div className="md:col-span-7">
          {media.before && media.after ? (
            <BeforeAfter
              beforeSrc={media.before.src}
              afterSrc={media.after.src}
              beforeAlt={media.before.alt}
              afterAlt={media.after.alt}
            />
          ) : !media.videos?.length ? (
            <div className="overflow-hidden rounded-2xl">
              <img
                src={service.image}
                alt={service.name}
                className="aspect-photo w-full object-cover"
              />
            </div>
          ) : null}
          {media.videos?.length ? (
            <div className={media.before && media.after ? "mt-6" : undefined}>
              <JobVideos videos={media.videos} />
            </div>
          ) : null}
          <div className="mt-8 space-y-4 leading-relaxed text-muted">
            {service.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <h2 className="mt-12 font-display text-3xl text-navy">
            Why homeowners call us
          </h2>
          <ul className="mt-6 grid gap-4">
            {service.benefits.map((item) => (
              <li key={item.title} className="rounded-2xl bg-cream p-5">
                <h3 className="font-display text-xl text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.body}</p>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-display text-3xl text-navy">
            Types of {service.shortName.toLowerCase()}
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {service.types.map((item) => (
              <li key={item.title} className="rounded-2xl border border-line p-5">
                <h3 className="font-medium text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.body}</p>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-display text-3xl text-navy">
            Project photos
          </h2>
          <div className={photos.length === 1 ? "mt-6" : "mt-6 grid grid-cols-2 gap-3"}>
            {photos.map((photo, i) => (
              <button
                key={`${photo.src}-${i}`}
                type="button"
                className="overflow-hidden rounded-xl"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="aspect-photo w-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
          <Lightbox
            open={open}
            onClose={() => setOpen(false)}
            items={photos}
            index={index}
            onIndex={setIndex}
          />

          <h2 className="mt-12 font-display text-3xl text-navy">
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="mt-4">
            {service.faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={`faq-${i}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 rounded-2xl bg-cream p-6">
            <h2 className="font-display text-2xl text-navy">
              Serving Greater Houston
            </h2>
            <p className="mt-2 text-muted">{company.serviceAreaLine}</p>
            <Link
              to="/service-areas"
              className="mt-3 inline-flex text-sm font-medium text-navy hover:text-accent"
            >
              See cities we serve
            </Link>
          </div>
        </div>

        <aside className="md:col-span-5">
          <div className="md:sticky md:top-28">
            <div className="mb-6 rounded-2xl bg-navy p-6 text-paper">
              <p className="text-sm tracking-[0.14em] text-paper/60 uppercase">
                Next step
              </p>
              <h2 className="mt-2 font-display text-2xl">
                Request a free estimate
              </h2>
              <p className="mt-2 text-sm text-paper/70">
                Photos help. So does the property address. We’ll follow up with
                the next step.
              </p>
              <Button asChild variant="default" className="mt-4">
                <a href="#service-estimate">Jump to the form</a>
              </Button>
            </div>
            <div id="service-estimate">
              <EstimateForm defaultService={service.slug} compact />
            </div>
            {related.length ? (
              <div className="mt-8">
                <h2 className="font-display text-xl text-navy">
                  Related services
                </h2>
                <ul className="mt-3 space-y-2">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link
                        to="/services/$slug"
                        params={{ slug: item.slug }}
                        className="flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-paper-warm"
                      >
                        <span className="flex size-8 items-center justify-center rounded-md bg-navy text-paper">
                          <ServiceGlyph name={item.icon} className="size-4" />
                        </span>
                        <span className="text-sm font-medium text-navy">
                          {item.shortName}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </aside>
      </article>
    </>
  );
}
