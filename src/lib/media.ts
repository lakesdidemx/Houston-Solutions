export type Photo = {
  src: string;
  alt: string;
  caption?: string;
};

export type JobVideo = {
  src: string;
  poster: string;
  title: string;
  caption?: string;
};

export type ServiceMedia = {
  before?: Photo;
  after?: Photo;
  gallery: Photo[];
  videos?: JobVideo[];
};

const serviceMedia: Record<string, ServiceMedia> = {
  "tree-removal": {
    before: {
      src: "/images/tree-before.jpg",
      alt: "Large front-yard tree crowding a Houston brick home before removal",
      caption: "Before — tree crowding the house",
    },
    after: {
      src: "/images/tree.jpg",
      alt: "Houston brick home after front-yard tree removal, yard cleaned",
      caption: "After — tree down, debris hauled, yard open",
    },
    gallery: [
      {
        src: "/images/tree-work-1.jpg",
        alt: "Climber taking down a tree in sections in a Houston neighborhood",
        caption: "Sectional takedown",
      },
      {
        src: "/images/tree-work-2.jpg",
        alt: "Crew removing a large oak with a skid steer and dump trailer",
        caption: "Limbs down, debris loaded",
      },
      {
        src: "/images/tree-work-3.jpg",
        alt: "Skid steer hauling brush after residential tree removal",
        caption: "Yard cleanup underway",
      },
      {
        src: "/images/tree-work-4.jpg",
        alt: "Stump grinder working a stump after tree removal in Houston",
        caption: "Stump grinding",
      },
      {
        src: "/images/tree-work-5.jpg",
        alt: "Stump being ground below grade after tree removal",
        caption: "Stump ground below grade",
      },
    ],
  },
  concrete: {
    before: {
      src: "/images/concrete-before.jpg",
      alt: "Cracked, stained residential concrete driveway before replacement",
      caption: "Before — cracked slabs and worn surface",
    },
    after: {
      src: "/images/concrete.jpg",
      alt: "Newly poured concrete driveway with clean joints at a Houston home",
      caption: "After — new pour, clean joints, even finish",
    },
    gallery: [
      {
        src: "/images/concrete-work.jpg",
        alt: "Bobcat and wheelbarrow during a Houston driveway tear-out",
        caption: "Driveway demo in progress",
      },
      {
        src: "/images/concrete-work-2.jpg",
        alt: "Skid steer removing old driveway concrete at a Houston home",
        caption: "Old slab coming out",
      },
    ],
  },
  remodeling: {
    before: {
      src: "/images/kitchen-before.jpg",
      alt: "Dated builder-grade Houston kitchen before remodeling",
    },
    after: {
      src: "/images/kitchen.jpg",
      alt: "Remodeled Houston kitchen with shaker cabinets and quartz counters",
    },
    gallery: [
      {
        src: "/images/bathroom.jpg",
        alt: "Remodeled Houston hall bathroom with walk-in shower",
      },
      {
        src: "/images/kitchen-work.jpg",
        alt: "Kitchen cabinet installation during a Houston remodel",
      },
    ],
  },
  "kitchen-remodeling": {
    before: {
      src: "/images/kitchen-before.jpg",
      alt: "1990s oak-cabinet Houston kitchen before remodel",
      caption: "Builder-grade oak and laminate",
    },
    after: {
      src: "/images/kitchen.jpg",
      alt: "Finished Houston kitchen remodel with white shaker cabinets",
      caption: "Same footprint, new cabinets and counters",
    },
    gallery: [
      {
        src: "/images/kitchen-work.jpg",
        alt: "New kitchen cabinets being installed in a Houston home",
      },
    ],
  },
  "bathroom-remodeling": {
    before: {
      src: "/images/bathroom-before.jpg",
      alt: "Dated Houston bathroom with fiberglass tub surround",
      caption: "Hall bath before",
    },
    after: {
      src: "/images/bathroom.jpg",
      alt: "Walk-in tiled shower and new vanity in a Houston bathroom",
      caption: "Tub-to-shower conversion",
    },
    gallery: [],
  },
  painting: {
    before: {
      src: "/images/paint-before.jpg",
      alt: "Two-story Houston home with peeling siding and fascia before exterior painting",
      caption: "Before — peeling paint on siding and trim",
    },
    after: {
      src: "/images/paint.jpg",
      alt: "Same Houston home after a full exterior paint, clean siding and shutters",
      caption: "After — fresh exterior paint",
    },
    gallery: [
      {
        src: "/images/paint-interior-before.jpg",
        alt: "Two-story living room with worn beige walls before interior painting",
        caption: "Interior before",
      },
      {
        src: "/images/paint-interior.jpg",
        alt: "Same living room after a fresh light interior paint",
        caption: "Interior after",
      },
    ],
  },
  drywall: {
    before: {
      src: "/images/drywall-before.jpg",
      alt: "Water-damaged drywall with a hole and peeling paper above the baseboard",
      caption: "Before — water damage and broken sheetrock",
    },
    after: {
      src: "/images/drywall.jpg",
      alt: "Same wall after drywall repair, texture match, and paint",
      caption: "After — patched, textured, and painted",
    },
    gallery: [
      {
        src: "/images/drywall-ceiling-before.jpg",
        alt: "Water-damaged ceiling with a hole and stained, peeling texture",
        caption: "Ceiling before — leak damage",
      },
      {
        src: "/images/drywall-ceiling.jpg",
        alt: "Same ceiling after drywall repair, texture, and paint",
        caption: "Ceiling after — repaired and blended",
      },
    ],
  },
  plumbing: {
    before: {
      src: "/images/plumbing-before.jpg",
      alt: "Cracked kitchen sink P-trap leaking under a Houston cabinet",
      caption: "Before — cracked trap, active leak",
    },
    after: {
      src: "/images/plumbing.jpg",
      alt: "New kitchen sink P-trap installed with no leak",
      caption: "After — trap replaced, leak stopped",
    },
    gallery: [
      {
        src: "/images/plumbing-work.jpg",
        alt: "Plumber repairing a kitchen sink drain under the cabinet",
        caption: "On-site plumbing repair",
      },
    ],
  },
  electrical: {
    before: {
      src: "/images/electrical-before.jpg",
      alt: "Burned, hanging outlet pulled from the wall before electrical repair",
      caption: "Before — damaged outlet",
    },
    after: {
      src: "/images/electrical.jpg",
      alt: "New outlet and cover plate installed after electrical repair",
      caption: "After — new outlet, clean plate",
    },
    gallery: [
      {
        src: "/images/electrical-work.jpg",
        alt: "Houston Solutions electrician installing a ceiling fan",
        caption: "Fixture and fan installation",
      },
    ],
  },
  insulation: {
    gallery: [
      {
        src: "/images/insulation.jpg",
        alt: "Fresh blown-in fiberglass packed around HVAC ductwork in a Houston attic",
        caption: "Blown-in install around ducts",
      },
      {
        src: "/images/insulation-work.jpg",
        alt: "Blowing hose filling joist bays with fiberglass insulation",
        caption: "Blowing into the bays",
      },
      {
        src: "/images/insulation-work-2.jpg",
        alt: "Insulation hose packing blown-in fiberglass next to a flexible duct",
        caption: "Packing around HVAC",
      },
      {
        src: "/images/insulation-removal.jpg",
        alt: "Vacuum hose pulling old attic insulation from between joists",
        caption: "Old insulation coming out",
      },
      {
        src: "/images/insulation-removal-2.jpg",
        alt: "Attic insulation removal in progress with vacuum hose and cleared joist bays",
        caption: "Removal in progress",
      },
    ],
    videos: [
      {
        src: "/videos/insulation-install.mp4",
        poster: "/images/insulation-work.jpg",
        title: "Blown-in insulation install",
        caption: "Fiberglass blown into the attic around ducts, pipes, and joists.",
      },
      {
        src: "/videos/insulation-removal.mp4",
        poster: "/images/insulation-removal.jpg",
        title: "Insulation removal",
        caption: "Old attic insulation vacuumed out of the bays before a clean install.",
      },
    ],
  },
  "property-maintenance": {
    gallery: [
      {
        src: "/images/maintenance.jpg",
        alt: "Houston Solutions technician painting porch trim at a Houston home",
        caption: "On-site property maintenance",
      },
      {
        src: "/images/exterior.jpg",
        alt: "Houston home after exterior upkeep",
      },
    ],
  },
  "junk-removal": {
    gallery: [
      {
        src: "/images/junk.jpg",
        alt: "Junk and debris being hauled from a Houston garage",
      },
    ],
  },
  "garage-exterior": {
    before: {
      src: "/images/garage-before.jpg",
      alt: "Crushed residential garage door hanging off the tracks",
      caption: "Before — damaged garage door",
    },
    after: {
      src: "/images/garage.jpg",
      alt: "New garage door installed on a Houston brick home",
      caption: "After — new door, aligned and working",
    },
    gallery: [
      {
        src: "/images/exterior.jpg",
        alt: "Houston home after exterior upkeep",
        caption: "Exterior repair work",
      },
    ],
  },
  handyman: {
    gallery: [
      {
        src: "/images/handyman.jpg",
        alt: "Houston Solutions handyman repairing porch trim at a Houston home",
      },
    ],
  },
  "rental-turnovers": {
    gallery: [
      {
        src: "/images/turnover.jpg",
        alt: "Freshly painted empty Houston rental ready for move-in",
      },
      {
        src: "/images/paint.jpg",
        alt: "Interior paint after a Houston rental turnover",
      },
      {
        src: "/images/junk.jpg",
        alt: "Cleanout during a Houston rental turnover",
      },
    ],
  },
};

export function mediaFor(slug: string): ServiceMedia {
  return serviceMedia[slug] ?? { gallery: [] };
}

export function allPhotosFor(slug: string, fallback: Photo): Photo[] {
  const media = mediaFor(slug);
  const items: Photo[] = [];
  if (media.before) items.push(media.before);
  if (media.after) items.push(media.after);
  items.push(...media.gallery);
  if (!items.length) items.push(fallback);
  return items;
}
