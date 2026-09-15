import { CalendarClock, Hammer, MapPinned, MessagesSquare, Layers } from "lucide-react";

const benefits = [
  {
    icon: MessagesSquare,
    title: "Reliable Service",
    body: "We show up when we say we will and communicate throughout the project. If weather or a part delays the day, you hear it from us first.",
  },
  {
    icon: Hammer,
    title: "Quality Workmanship",
    body: "We focus on materials that belong in Houston, attention to the details that show later, and a site that’s left cleaner than we found it.",
  },
  {
    icon: Layers,
    title: "One Company for Multiple Needs",
    body: "From tree removal to remodeling and repairs, we make property projects easier — especially when a rental or listing has more than one problem.",
  },
  {
    icon: CalendarClock,
    title: "Fast Estimates",
    body: "Tell us what the property needs. We’ll follow up with the next step, not a long sales process.",
  },
  {
    icon: MapPinned,
    title: "Local Houston Company",
    body: "We understand Houston homes, clay soil, Gulf storms, and the way landlords and agents actually schedule work.",
  },
];

export function HomeWhy() {
  return (
    <section className="bg-navy py-20 text-paper md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-12 md:px-8">
        <div className="md:col-span-4">
          <p className="text-sm font-medium tracking-[0.16em] text-accent uppercase">
            Why Houston Solutions
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">
            A crew you can actually reach.
          </h2>
          <p className="mt-4 text-paper/75">
            Homeowners, property managers, and investors call us when they want
            one team for the work that keeps a house livable — not a stack of
            vendors and unanswered texts.
          </p>
        </div>
        <ul className="grid gap-4 md:col-span-8 sm:grid-cols-2">
          {benefits.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-paper/10 bg-paper/5 p-5"
            >
              <item.icon className="size-5 text-accent" strokeWidth={1.75} />
              <h3 className="mt-3 font-display text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/70">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
