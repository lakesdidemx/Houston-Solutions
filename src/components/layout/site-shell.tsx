import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { MobileCta } from "@/components/layout/mobile-cta";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col bg-paper text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-70 focus:rounded-md focus:bg-paper focus:px-3 focus:py-2 focus:text-navy"
      >
        Skip to content
      </a>
      <Header />
      <div id="main" className="flex-1 pb-20 md:pb-0">
        {children}
      </div>
      <Footer />
      <MobileCta />
    </div>
  );
}
