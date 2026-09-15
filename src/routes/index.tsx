import { createFileRoute } from "@tanstack/react-router";
import { HomeAreas } from "@/components/home/areas";
import { HomeAudience } from "@/components/home/audience";
import { HomeGallery } from "@/components/home/gallery";
import { HomeHero } from "@/components/home/hero";
import { HomeLead } from "@/components/home/lead";
import { HomeProcess } from "@/components/home/process";
import { HomeReviews } from "@/components/home/reviews";
import { HomeServices } from "@/components/home/services";
import { HomeWhy } from "@/components/home/why";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Houston Solutions | Home Services & Property Improvements in Houston, TX",
      },
      {
        name: "description",
        content:
          "Reliable home services in Houston, TX. Tree removal, concrete, remodeling, painting, drywall, plumbing, electrical, and property maintenance. Free estimates.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <HomeHero />
      <HomeAudience />
      <HomeServices />
      <HomeWhy />
      <HomeGallery />
      <HomeProcess />
      <HomeAreas />
      <HomeReviews />
      <HomeLead />
    </>
  );
}
