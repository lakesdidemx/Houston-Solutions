import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type LightboxItem = {
  src: string;
  alt: string;
  caption?: string;
};

export function Lightbox({
  open,
  onClose,
  items,
  index,
  onIndex,
}: {
  open: boolean;
  onClose: () => void;
  items: LightboxItem[];
  index: number;
  onIndex: (next: number) => void;
}) {
  const item = items[index];
  const hasMany = items.length > 1;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && hasMany)
        onIndex((index + 1) % items.length);
      if (e.key === "ArrowLeft" && hasMany)
        onIndex((index - 1 + items.length) % items.length);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose, hasMany, index, items.length, onIndex]);

  if (!open || !item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      className="fixed inset-0 z-80 flex items-center justify-center bg-navy-deep/90 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 flex size-11 items-center justify-center rounded-md bg-paper/10 text-paper hover:bg-paper/20"
        aria-label="Close"
      >
        <X className="size-5" />
      </button>
      {hasMany ? (
        <>
          <button
            type="button"
            className="absolute left-3 z-10 flex size-11 items-center justify-center rounded-md bg-paper/10 text-paper hover:bg-paper/20 md:left-6"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              onIndex((index - 1 + items.length) % items.length);
            }}
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            className="absolute right-3 z-10 flex size-11 items-center justify-center rounded-md bg-paper/10 text-paper hover:bg-paper/20 md:right-6"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              onIndex((index + 1) % items.length);
            }}
          >
            <ChevronRight className="size-5" />
          </button>
        </>
      ) : null}
      <figure
        className={cn("max-h-[90vh] max-w-5xl")}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.alt}
          className="max-h-[80vh] w-full rounded-lg object-contain"
        />
        {item.caption ? (
          <figcaption className="mt-3 text-center text-sm text-paper/80">
            {item.caption}
          </figcaption>
        ) : null}
      </figure>
    </div>
  );
}
