import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { company } from "@/lib/company";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-mid bg-navy pb-[env(safe-area-inset-bottom)] md:hidden">
      <div className="grid grid-cols-2 gap-2 p-2">
        <a
          href={`tel:${company.phoneTel}`}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-paper text-sm font-semibold text-navy"
        >
          <Phone className="size-4" />
          Call Now
        </a>
        <Link
          to="/contact"
          className="inline-flex h-12 items-center justify-center rounded-md bg-accent text-sm font-semibold text-paper"
        >
          Get Free Estimate
        </Link>
      </div>
    </div>
  );
}
