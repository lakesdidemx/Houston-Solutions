import { useCallback, useId, useRef, useState, type PointerEvent } from "react";
import { cn } from "@/lib/utils";

export function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel = "Before",
  afterLabel = "After",
  className,
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}) {
  const id = useId();
  const frame = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(54);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = frame.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPct(Math.min(96, Math.max(4, next)));
  }, []);

  function onPointerDown(e: PointerEvent<HTMLDivElement>) {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    setFromClientX(e.clientX);
  }

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (!dragging.current) return;
    setFromClientX(e.clientX);
  }

  function onPointerUp(e: PointerEvent<HTMLDivElement>) {
    dragging.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  }

  return (
    <div className={cn("relative", className)}>
      <div
        ref={frame}
        className="relative aspect-photo cursor-ew-resize touch-none overflow-hidden rounded-2xl bg-navy select-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        role="group"
        aria-label="Before and after photo comparison"
      >
        <img
          src={afterSrc}
          alt={afterAlt}
          draggable={false}
          className="absolute inset-0 size-full object-cover"
        />
        <img
          src={beforeSrc}
          alt={beforeAlt}
          draggable={false}
          className="absolute inset-0 size-full object-cover"
          style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
        />
        <div
          className="absolute inset-y-0 z-10 w-px bg-paper"
          style={{ left: `${pct}%` }}
          aria-hidden="true"
        >
          <span className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-navy/10 bg-paper text-navy shadow-card">
            <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden="true">
              <path
                d="M8 7 4 12l4 5M16 7l4 5-4 5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        <span className="absolute top-3 left-3 rounded-full bg-navy/90 px-3 py-1 text-xs font-medium text-paper">
          {beforeLabel}
        </span>
        <span className="absolute top-3 right-3 rounded-full bg-accent px-3 py-1 text-xs font-medium text-paper">
          {afterLabel}
        </span>
      </div>
      <label className="sr-only" htmlFor={id}>
        Drag to compare before and after
      </label>
      <input
        id={id}
        type="range"
        min={4}
        max={96}
        value={Math.round(pct)}
        onChange={(e) => setPct(Number(e.target.value))}
        className="mt-3 w-full accent-accent"
      />
    </div>
  );
}
