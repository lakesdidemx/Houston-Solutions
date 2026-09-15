import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BeforeAfter } from "@/components/before-after";
import { Lightbox, type LightboxItem } from "@/components/lightbox";
import { PageCta } from "@/components/page-cta";
import { PageHero } from "@/components/page-hero";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Houston Solutions Home Services" },
      {
        name: "description",
        content:
          "Recent Houston Solutions projects — tree removal, concrete driveways, kitchen and bath remodels, painting, drywall, and exterior repairs around Houston, TX.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [items, setItems] = useState<LightboxItem[]>([]);
  const [index, setIndex] = useState(0);

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="A look at completed work."
        description="Tree removal, concrete, kitchens, baths, paint, drywall, and exterior repairs for Houston-area homes and rentals."
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Projects" },
        ]}
        image="/images/kitchen.jpg"
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-10">
          {projects.map((project) => (
            <article
              key={project.id}
              className="grid overflow-hidden rounded-2xl bg-cream shadow-card md:grid-cols-2"
            >
              <div className="p-3 md:p-4">
                {project.beforeImage ? (
                  <BeforeAfter
                    beforeSrc={project.beforeImage}
                    afterSrc={project.image}
                    beforeAlt={`${project.title} before work in ${project.location}`}
                    afterAlt={`${project.title} after work in ${project.location}`}
                  />
                ) : (
                  <button
                    type="button"
                    className="block w-full overflow-hidden rounded-xl"
                    onClick={() => {
                      setItems([
                        {
                          src: project.image,
                          alt: `${project.title} in ${project.location}`,
                          caption: `${project.title} — ${project.location}. ${project.summary}`,
                        },
                      ]);
                      setIndex(0);
                    }}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} in ${project.location}`}
                      className="aspect-photo w-full object-cover"
                    />
                  </button>
                )}
              </div>
              <div className="flex flex-col justify-center p-6 md:p-8">
                <p className="text-xs font-medium tracking-[0.12em] text-muted uppercase">
                  {project.service} · {project.location}
                </p>
                <h2 className="mt-1 font-display text-2xl text-navy md:text-3xl">
                  {project.title}
                </h2>
                <p className="mt-3 text-muted">{project.summary}</p>
                <Link
                  to="/services/$slug"
                  params={{ slug: project.slug }}
                  className="mt-5 inline-flex text-sm font-medium text-accent hover:text-accent-hover"
                >
                  About this service
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <PageCta />
      <Lightbox
        open={items.length > 0}
        onClose={() => setItems([])}
        items={items}
        index={index}
        onIndex={setIndex}
      />
    </>
  );
}
