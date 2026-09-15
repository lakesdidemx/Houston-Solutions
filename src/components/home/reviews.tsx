import { StarRating } from "@/components/star-rating";
import { testimonials } from "@/lib/testimonials";

export function HomeReviews() {
  return (
    <section className="bg-paper py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-sm font-medium tracking-[0.16em] text-accent uppercase">
          Reviews
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl text-navy md:text-4xl">
          What Houston-area clients say after the job.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col rounded-2xl bg-cream p-6 shadow-card"
            >
              <StarRating rating={item.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-line pt-4 text-sm">
                <span className="font-medium text-navy">{item.name}</span>
                <span className="text-muted">
                  {" "}
                  · {item.role}, {item.location}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
