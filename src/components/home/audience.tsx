const audiences = [
  "Homeowners",
  "Landlords",
  "Property managers",
  "Real estate investors",
  "Real estate agents",
];

export function HomeAudience() {
  return (
    <section className="border-y border-line bg-paper-warm">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-6 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="text-sm font-medium tracking-[0.14em] text-muted uppercase">
          Who we work with
        </p>
        <ul className="flex flex-wrap gap-2">
          {audiences.map((item) => (
            <li
              key={item}
              className="rounded-full border border-line bg-paper px-4 py-2 text-sm text-navy"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
