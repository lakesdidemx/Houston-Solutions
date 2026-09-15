export type Project = {
  id: string;
  title: string;
  location: string;
  service: string;
  slug: string;
  image: string;
  beforeImage?: string;
  summary: string;
};

export const projects: Project[] = [
  {
    id: "tree-spring",
    title: "Front-yard tree removal",
    location: "Houston, TX",
    service: "Tree Removal",
    slug: "tree-removal",
    image: "/images/tree.jpg",
    beforeImage: "/images/tree-before.jpg",
    summary:
      "A large front-yard tree was crowding the house and covering the lawn. We took it down, hauled the debris, and left the landscaping and driveway clean.",
  },
  {
    id: "driveway-katy",
    title: "New concrete driveway",
    location: "Houston, TX",
    service: "Concrete",
    slug: "concrete",
    image: "/images/concrete.jpg",
    beforeImage: "/images/concrete-before.jpg",
    summary:
      "A cracked, stained driveway was torn out and replaced with a new pour, even joints, and a clean edge at the street.",
  },
  {
    id: "kitchen-woodlands",
    title: "Kitchen remodel",
    location: "The Woodlands, TX",
    service: "Kitchen Remodeling",
    slug: "kitchen-remodeling",
    image: "/images/kitchen.jpg",
    beforeImage: "/images/kitchen-before.jpg",
    summary:
      "Builder-grade cabinets and laminate counters came out. New shaker cabinets, quartz, tile, and lighting went in without changing the footprint.",
  },
  {
    id: "bath-houston",
    title: "Hall bath renovation",
    location: "Houston, TX",
    service: "Bathroom Remodeling",
    slug: "bathroom-remodeling",
    image: "/images/bathroom.jpg",
    beforeImage: "/images/bathroom-before.jpg",
    summary:
      "A dated tub surround and vanity were replaced with a walk-in shower, new tile, and a darker vanity that fits the rest of the house.",
  },
  {
    id: "paint-exterior",
    title: "Exterior painting",
    location: "Houston, TX",
    service: "Painting",
    slug: "painting",
    image: "/images/paint.jpg",
    beforeImage: "/images/paint-before.jpg",
    summary:
      "Peeling siding, fascia, and trim were scraped, primed, and painted. The house went from failed coating to a clean, even finish that matches the street.",
  },
  {
    id: "paint-interior",
    title: "Interior painting",
    location: "Houston, TX",
    service: "Painting",
    slug: "painting",
    image: "/images/paint-interior.jpg",
    beforeImage: "/images/paint-interior-before.jpg",
    summary:
      "A two-story living room was patched, primed, and painted a clean light color. Trim and walls were left even, bright, and ready for furniture.",
  },
  {
    id: "drywall-tomball",
    title: "Drywall repair after a leak",
    location: "Houston, TX",
    service: "Drywall Repair",
    slug: "drywall",
    image: "/images/drywall.jpg",
    beforeImage: "/images/drywall-before.jpg",
    summary:
      "Water-damaged sheetrock was cut out, replaced, taped, textured, and painted so the wall blended with the rest of the room.",
  },
  {
    id: "garage-houston",
    title: "Garage door replacement",
    location: "Houston, TX",
    service: "Garage & Exterior",
    slug: "garage-exterior",
    image: "/images/garage.jpg",
    beforeImage: "/images/garage-before.jpg",
    summary:
      "A crushed garage door was taken out and replaced with a new door, squared in the opening and working on the tracks.",
  },
];

export const featuredProject = projects[2];
