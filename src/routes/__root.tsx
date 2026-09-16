import { useEffect } from "react";
import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { LocalBusinessJsonLd } from "@/components/json-ld";
import { SiteShell } from "@/components/layout/site-shell";
import appCss from "../styles.css?url";

const APP_NAME = "Houston Solutions";
const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&display=swap";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title:
          "Houston Solutions | Home Services & Property Improvements in Houston, TX",
      },
      {
        name: "description",
        content:
          "Houston Solutions provides home improvement, remodeling, concrete, tree removal, painting, repairs, and property maintenance throughout Houston, Spring, The Woodlands, Katy, and surrounding areas.",
      },
      { name: "theme-color", content: "#0C2340" },
      { name: "author", content: APP_NAME },
      {
        name: "keywords",
        content:
          "Houston home services, home improvement Houston TX, tree removal Houston, tree removal Spring TX, concrete contractors Houston, concrete driveway Houston, home remodeling Houston, remodeling contractor Houston, bathroom remodeling Houston, kitchen remodeling Houston, blown in insulation Houston, attic insulation removal Houston, property maintenance Houston, handyman Houston TX",
      },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicon-192.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
    ],
  }),
  component: RootComponent,
});

function LoadFonts() {
  useEffect(() => {
    if (document.querySelector(`link[href="${FONT_HREF}"]`)) return;
    const preGoogle = document.createElement("link");
    preGoogle.rel = "preconnect";
    preGoogle.href = "https://fonts.googleapis.com";
    const preGstatic = document.createElement("link");
    preGstatic.rel = "preconnect";
    preGstatic.href = "https://fonts.gstatic.com";
    preGstatic.crossOrigin = "anonymous";
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = FONT_HREF;
    document.head.append(preGoogle, preGstatic, stylesheet);
  }, []);
  return null;
}

function RootComponent() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-paper font-sans text-ink">
        <LoadFonts />
        <PreviewHostBridge />
        <AuthProvider>
          <LocalBusinessJsonLd />
          <SiteShell>
            <Outlet />
          </SiteShell>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
