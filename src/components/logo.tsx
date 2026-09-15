import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <Link
      to="/"
      className={cn("group flex items-center gap-3", className)}
      aria-label="Houston Solutions home"
    >
      <span
        className={cn(
          "flex size-10 items-center justify-center rounded-md",
          inverted ? "bg-paper text-navy" : "bg-navy text-paper",
        )}
        aria-hidden="true"
      >
        <svg viewBox="0 0 32 32" className="size-6" fill="none">
          <path
            d="M5 16.5 16 7l11 9.5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M9 15.5V25h14V15.5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M13.2 25v-6.2h5.6V25"
            fill="currentColor"
            className={inverted ? "text-accent" : "text-accent"}
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg tracking-tight",
            inverted ? "text-paper" : "text-navy",
          )}
        >
          Houston Solutions
        </span>
        <span
          className={cn(
            "mt-1 text-xs font-medium tracking-[0.12em] uppercase",
            inverted ? "text-paper/70" : "text-muted",
          )}
        >
          Home Services
        </span>
      </span>
    </Link>
  );
}
