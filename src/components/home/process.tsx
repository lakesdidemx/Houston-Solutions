const steps = [
  {
    n: "01",
    title: "Request an Estimate",
    body: "Tell us what your property needs — a photo and the address go a long way. Call, or use the form.",
  },
  {
    n: "02",
    title: "Get a Quote",
    body: "We’ll evaluate the project and send a clear estimate: scope, timing, and what’s included.",
  },
  {
    n: "03",
    title: "We Get the Job Done",
    body: "Our team completes the work professionally and efficiently, then leaves the site ready to use.",
  },
];

export function HomeProcess() {
  return (
    <section className="bg-paper py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-sm font-medium tracking-[0.16em] text-accent uppercase">
          How it works
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl text-navy md:text-4xl">
          Three steps. No runaround.
        </h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.n} className="relative rounded-2xl bg-cream p-6 shadow-card">
              {i < steps.length - 1 ? (
                <span
                  className="absolute top-10 -right-3 hidden h-px w-6 bg-line md:block"
                  aria-hidden="true"
                />
              ) : null}
              <span className="font-display text-3xl text-accent">{step.n}</span>
              <h3 className="mt-3 font-display text-2xl text-navy">{step.title}</h3>
              <p className="mt-2 text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
