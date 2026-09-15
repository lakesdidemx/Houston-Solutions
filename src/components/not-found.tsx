import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-sm font-medium tracking-[0.14em] text-accent uppercase">
        404
      </p>
      <h1 className="mt-3 max-w-lg font-display text-4xl text-navy">
        That page isn’t on this property.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The link may be old, or the page may have moved. Head home or request an
        estimate and we’ll point you in the right direction.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link to="/">Back home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/contact">Request an estimate</Link>
        </Button>
      </div>
    </main>
  );
}
