import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type Crumb = { label: string; to?: string };

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  image,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  image?: string;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-navy text-paper",
        className,
      )}
    >
      {image ? (
        <img
          src={image}
          alt=""
          className="absolute inset-0 size-full object-cover opacity-35"
        />
      ) : null}
      <div className="absolute inset-0 bg-linear-to-r from-navy-deep/95 via-navy/88 to-navy/70" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        {crumbs ? (
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-paper/70">
            <ol className="flex flex-wrap items-center gap-2">
              {crumbs.map((crumb, i) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  {i > 0 ? <span aria-hidden="true">/</span> : null}
                  {crumb.to ? (
                    <Link to={crumb.to} className="hover:text-paper">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-paper">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        {eyebrow ? (
          <p className="text-sm font-medium tracking-[0.16em] text-accent uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-lg text-paper/80">{description}</p>
        ) : null}
      </div>
    </section>
  );
}
