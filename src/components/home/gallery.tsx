import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { BeforeAfter } from "@/components/before-after";
import { Lightbox, type LightboxItem } from "@/components/lightbox";
import { featuredProject, projects } from "@/lib/projects";

export function HomeGallery() {
  const [items, setItems] = useState<LightboxItem[]>([]);
  const [index, setIndex] = useState(0);
  const rest = projects.filter((p) => p.id !== featuredProject.id);

  return (
    <section className="bg-paper-warm py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-sm font-medium tracking-[0.16em] text-accent uppercase">
          Before & after gallery
        </p>
        <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="max-w-xl font-display text-3xl text-navy md:text-4xl">
            Work around Houston, Spring, Katy, and The Woodlands.
          </h2>
          <Link
            to="/projects"
            className="text-sm font-medium text-navy hover:text-accent"
          >
            View all projects
          </Link>
        </div>

        <div className="mt-10">
          {featuredProject.beforeImage ? (
            <BeforeAfter
              beforeSrc={featuredProject.beforeImage}
              afterSrc={featuredProject.image}
              beforeAlt={`${featuredProject.title} before work in ${featuredProject.location}`}
              afterAlt={`${featuredProject.title} after work in ${featuredProject.location}`}
            />
          ) : null}
          <p className="mt-4 text-xs font-medium tracking-[0.12em] text-muted uppercase">
            {featuredProject.service} · {featuredProject.location}
          </p>
          <h3 className="mt-1 font-display text-2xl text-navy">
            {featuredProject.title}
          </h3>
          <p className="mt-2 max-w-2xl text-muted">{featuredProject.summary}</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => {
                const next: LightboxItem[] = [];
                if (project.beforeImage) {
                  next.push({
                    src: project.beforeImage,
                    alt: `${project.title} before`,
                    caption: `Before — ${project.location}`,
                  });
                }
                next.push({
                  src: project.image,
                  alt: `${project.title} after`,
                  caption: `${project.title} — ${project.location}. ${project.summary}`,
                });
                setItems(next);
                setIndex(next.length > 1 ? 1 : 0);
              }}
              className="group overflow-hidden rounded-2xl bg-paper text-left shadow-card transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <div className="grid grid-cols-2">
                {project.beforeImage ? (
                  <div className="relative aspect-photo overflow-hidden">
                    <img
                      src={project.beforeImage}
                      alt=""
                      className="size-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute bottom-2 left-2 rounded-full bg-navy/90 px-2 py-0.5 text-[10px] font-medium tracking-wide text-paper uppercase">
                      Before
                    </span>
                  </div>
                ) : null}
                <div className="relative aspect-photo overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} in ${project.location}`}
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <span className="absolute bottom-2 left-2 rounded-full bg-accent px-2 py-0.5 text-[10px] font-medium tracking-wide text-paper uppercase">
                    After
                  </span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs font-medium tracking-[0.12em] text-muted uppercase">
                  {project.service} · {project.location}
                </p>
                <h3 className="mt-1 font-display text-lg text-navy">
                  {project.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>
      <Lightbox
        open={items.length > 0}
        onClose={() => setItems([])}
        items={items}
        index={index}
        onIndex={setIndex}
      />
    </section>
  );
}
