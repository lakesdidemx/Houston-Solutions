export type Faq = { q: string; a: string };
export type Bullet = { title: string; body: string };

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: ServiceIcon;
  featured: boolean;
  image: string;
  cardDescription: string;
  headline: string;
  intro: string[];
  benefits: Bullet[];
  types: Bullet[];
  faqs: Faq[];
  seoTitle: string;
  seoDescription: string;
  related: string[];
};

export type ServiceIcon =
  | "tree"
  | "concrete"
  | "remodel"
  | "kitchen"
  | "bathroom"
  | "paint"
  | "drywall"
  | "plumbing"
  | "electrical"
  | "maintenance"
  | "junk"
  | "garage"
  | "handyman"
  | "turnover"
  | "insulation";

export const services: Service[] = [
  {
    slug: "tree-removal",
    name: "Tree Removal & Trimming",
    shortName: "Tree Removal",
    icon: "tree",
    featured: true,
    image: "/images/tree.jpg",
    cardDescription:
      "Safe removal, trimming, and stump grinding for Houston oaks, pines, and storm-damaged trees.",
    headline: "Tree Removal in Houston, Spring & Surrounding Areas",
    intro: [
      "Houston yards are full of live oaks, pines, and pecan trees that do a lot of good — until a storm, a lean toward the roof, or a dead limb makes them a problem. Houston Solutions handles residential tree removal and trimming for homeowners and property managers who want the work done carefully, not rushed.",
      "We take trees down in sections when they sit close to a house, fence, or power line, haul the debris, and grind stumps when you want the yard usable again. If a tree can be saved with a trim, we’ll say so.",
    ],
    benefits: [
      {
        title: "Work around the house, not through it",
        body: "Most Houston lots are tight. We plan the drop, protect landscaping where we can, and clean up before we leave.",
      },
      {
        title: "Storm and lean assessments",
        body: "If a tree shifted after a Gulf storm, we’ll look at the lean, the root plate, and whether removal or reduction is the better call.",
      },
      {
        title: "Stump grinding included when you want it",
        body: "Leaving a stump is fine if you’re not ready. Grinding it makes mowing and future planting easier.",
      },
      {
        title: "Clear pricing before we start",
        body: "You get a written estimate that covers the tree, haul-off, and any stump work — not a surprise after the chipper leaves.",
      },
    ],
    types: [
      {
        title: "Full tree removal",
        body: "Dead, dying, or poorly placed trees taken down and hauled off, including large oaks near structures.",
      },
      {
        title: "Trimming and canopy reduction",
        body: "Clearing limbs off roofs, thinning dense canopies, and raising lower branches over drives and walks.",
      },
      {
        title: "Storm cleanup",
        body: "Downed limbs, hung-up branches, and trees that failed in high wind.",
      },
      {
        title: "Stump grinding",
        body: "Grinding below grade so the area can be sodded, graveled, or left to settle.",
      },
      {
        title: "Lot clearing for small residential sites",
        body: "Selective clearing when a house, driveway, or fence needs room — not a commercial land scrape.",
      },
    ],
    faqs: [
      {
        q: "Do I need a permit to remove a tree in Houston?",
        a: "It depends on the tree and where it sits. Trees in the public right-of-way and some protected situations can require a permit. We’ll flag that during the estimate so you’re not guessing.",
      },
      {
        q: "How much does tree removal cost in Houston?",
        a: "Price follows size, access, and how close the tree is to the house or power lines. A small backyard tree is a different job than a mature oak over a roof. We quote after seeing the site.",
      },
      {
        q: "Can you remove a tree close to the house?",
        a: "Yes. Those come down in sections, not as a single drop. That’s slower, and it’s the right way to do it.",
      },
      {
        q: "Do you take the wood and debris?",
        a: "Haul-off is part of a standard removal unless you want to keep firewood. We don’t leave a pile in the driveway.",
      },
    ],
    seoTitle: "Tree Removal Houston TX | Trimming & Stump Grinding",
    seoDescription:
      "Tree removal and trimming in Houston, Spring, The Woodlands, and nearby cities. Safe takedowns, storm cleanup, and stump grinding. Free estimates from Houston Solutions.",
    related: ["junk-removal", "property-maintenance", "garage-exterior"],
  },
  {
    slug: "concrete",
    name: "Concrete Services",
    shortName: "Concrete Work",
    icon: "concrete",
    featured: true,
    image: "/images/concrete.jpg",
    cardDescription:
      "Driveways, patios, walkways, and slab repairs poured and finished for Houston homes.",
    headline: "Concrete Contractors in Houston — Driveways, Patios & Slabs",
    intro: [
      "Houston clay moves. Driveways crack, patio corners settle, and old broom finishes wear down to aggregate. Houston Solutions pours and repairs residential concrete so the new work matches the house and drains the way it should.",
      "We handle driveway replacements, patio slabs, walkways, and smaller repairs. If a section can be saw-cut and replaced instead of a full tear-out, we’ll tell you.",
    ],
    benefits: [
      {
        title: "Built for this soil",
        body: "Base prep and joint layout matter more here than in drier climates. We don’t skip the dirt work to get a pour on the calendar.",
      },
      {
        title: "Clean edges against existing landscaping",
        body: "Forms, grade, and finish are set so the new slab meets grass, beds, and the garage apron without a ragged lip.",
      },
      {
        title: "Driveways you can actually use",
        body: "Thickness, reinforcement, and cure time are part of the quote — not extras mentioned after the truck leaves.",
      },
      {
        title: "Straightforward schedule",
        body: "Weather delays happen. You’ll know when demo starts, when we pour, and when you can park on it.",
      },
    ],
    types: [
      {
        title: "Concrete driveways",
        body: "Full replacements and new drives with broom or other residential finishes.",
      },
      {
        title: "Patios and outdoor slabs",
        body: "Rear patios, side yards, and pads for sheds or HVAC equipment.",
      },
      {
        title: "Walkways and steps",
        body: "Front walks and short runs of steps that match the house.",
      },
      {
        title: "Repair and replacement sections",
        body: "Saw-cutting failed panels instead of replacing a whole drive when that’s the better spend.",
      },
    ],
    faqs: [
      {
        q: "How long before I can park on a new driveway?",
        a: "Light foot traffic is usually fine the next day. Vehicles typically wait about a week, longer in cool or wet weather. We’ll give you a date with the quote.",
      },
      {
        q: "Why do Houston driveways crack?",
        a: "Expansive clay, poor base, and missing control joints are the usual mix. A new pour won’t make the soil stop moving, but good prep and joints keep cracks from becoming failures.",
      },
      {
        q: "Can you match my existing concrete color?",
        a: "New concrete starts lighter and weathers. We can get close on finish and joint pattern. Exact color match to 20-year-old concrete is rarely honest to promise.",
      },
      {
        q: "Do you demo the old slab?",
        a: "Yes. Tear-out, haul-off, and the new pour are quoted together so you’re not coordinating two companies.",
      },
    ],
    seoTitle: "Concrete Contractors Houston | Driveways & Patios",
    seoDescription:
      "Concrete driveway, patio, and slab work in Houston and surrounding areas. Residential pours, repairs, and replacements. Request a free estimate from Houston Solutions.",
    related: ["garage-exterior", "remodeling", "property-maintenance"],
  },
  {
    slug: "remodeling",
    name: "Home Remodeling",
    shortName: "Remodeling",
    icon: "remodel",
    featured: true,
    image: "/images/kitchen.jpg",
    cardDescription:
      "Kitchens, baths, and interior updates for Houston houses that need more than a patch.",
    headline: "Home Remodeling in Houston TX",
    intro: [
      "Most Houston remodeling jobs are not blank-slate custom homes. They’re 1970s ranch houses, 1990s builders, and townhomes that need a kitchen, a bath, or a set of rooms brought up to how people actually live now.",
      "Houston Solutions handles residential remodels with a single point of contact — carpentry, drywall, paint, and coordination of plumbing and electrical. We’d rather do a defined scope well than sell a renovation you didn’t ask for.",
    ],
    benefits: [
      {
        title: "One company for the messy middle",
        body: "Remodels fail when five trades don’t talk. We keep the sequence, the site, and the decisions in one place.",
      },
      {
        title: "Scope you can read",
        body: "The estimate lists what’s included. Allowances and owner-supplied items are called out so the number means something.",
      },
      {
        title: "Houses people still live in",
        body: "We plan dust control, bathroom access, and work hours around occupied homes — not just empty flips.",
      },
      {
        title: "Local product and code reality",
        body: "Houston humidity, slab-on-grade details, and city permitting are part of how we plan, not an afterthought.",
      },
    ],
    types: [
      {
        title: "Kitchen remodeling",
        body: "Cabinets, counters, layout tweaks, lighting, and finish work. See our kitchen page for the full picture.",
      },
      {
        title: "Bathroom remodeling",
        body: "Showers, tile, vanities, and the plumbing that has to move with them.",
      },
      {
        title: "Interior refreshes",
        body: "Flooring, trim, paint, and room reconfigurations that don’t require a full gut.",
      },
      {
        title: "Investment and resale work",
        body: "Targeted updates that help a listing or a rental without overbuilding the neighborhood.",
      },
    ],
    faqs: [
      {
        q: "Do you take on whole-house remodels?",
        a: "We take defined residential projects — kitchens, baths, interiors, and grouped repairs. A full custom rebuild is a different kind of job; we’ll tell you if that’s what you’re describing.",
      },
      {
        q: "Will I need permits?",
        a: "Plumbing, electrical, and some structural changes typically do. We identify that up front and work with licensed trades where the city requires it.",
      },
      {
        q: "How long does a typical remodel take?",
        a: "A hall bath is often a couple of weeks. A kitchen is longer, especially if cabinets are ordered. We put a schedule on the estimate and update you if lead times shift.",
      },
      {
        q: "Can you work from my designer’s plans?",
        a: "Yes, if the drawings are complete enough to build from. We’ll review them before we quote so gaps don’t show up mid-job.",
      },
    ],
    seoTitle: "Home Remodeling Houston TX | Remodeling Contractor",
    seoDescription:
      "Home remodeling in Houston, TX — kitchens, bathrooms, and interior updates for homeowners and investors. Clear estimates from Houston Solutions.",
    related: ["kitchen-remodeling", "bathroom-remodeling", "painting", "insulation"],
  },
  {
    slug: "kitchen-remodeling",
    name: "Kitchen Remodeling",
    shortName: "Kitchen Remodeling",
    icon: "kitchen",
    featured: false,
    image: "/images/kitchen.jpg",
    cardDescription:
      "Cabinet, counter, tile, and layout updates for Houston kitchens that still have to function during the work.",
    headline: "Kitchen Remodeling in Houston TX",
    intro: [
      "A Houston kitchen remodel is usually about making a working room better: cabinets that close, counters you can prep on, lighting you can cook under, and a layout that doesn’t fight the slab.",
      "We replace cabinets and counters, update tile and lighting, and coordinate plumbing and electrical. If keeping the existing footprint saves a lot of money for almost the same result, we’ll say that.",
    ],
    benefits: [
      {
        title: "Live-in friendly sequencing",
        body: "We plan a temporary setup when we can so you’re not without a sink for the whole job.",
      },
      {
        title: "Honest cabinet and counter options",
        body: "We’ll price what you asked for and note where a spec change actually moves the budget.",
      },
      {
        title: "The hidden work is in the quote",
        body: "Out-of-level floors, out-of-square walls, and old plumbing are common in this market. We look before we promise a number.",
      },
      {
        title: "Finish that matches the rest of the house",
        body: "The kitchen shouldn’t look like it was dropped in from a catalog if the rest of the house is 1985 brick ranch.",
      },
    ],
    types: [
      {
        title: "Cabinet replacement",
        body: "New boxes and doors, or refacing when the boxes are sound.",
      },
      {
        title: "Counters and backsplash",
        body: "Quartz, granite, and tile work with clean sink and cooktop cutouts.",
      },
      {
        title: "Lighting and electrical",
        body: "Pendants, under-cabinet lighting, and dedicated circuits where the load needs it.",
      },
      {
        title: "Layout adjustments",
        body: "Moving a range or opening a pass-through when the plumbing and structure allow it.",
      },
    ],
    faqs: [
      {
        q: "Do I have to replace the cabinets?",
        a: "Not always. If boxes are square and solid, paint or new doors can be the better spend. We’ll look before we default to a full tear-out.",
      },
      {
        q: "Can you install counters I buy myself?",
        a: "Often yes. We still need to see the cabinets and the template timing so the install doesn’t stall.",
      },
      {
        q: "Will the kitchen be usable during the remodel?",
        a: "There will be days it isn’t. We try to keep a sink and a microwave path, and we tell you which days are the disruptive ones.",
      },
    ],
    seoTitle: "Kitchen Remodeling Houston TX | Houston Solutions",
    seoDescription:
      "Kitchen remodeling in Houston and surrounding areas. Cabinets, counters, tile, and lighting with a clear scope. Free estimates from Houston Solutions.",
    related: ["remodeling", "bathroom-remodeling", "painting", "electrical"],
  },
  {
    slug: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    shortName: "Bathroom Remodeling",
    icon: "bathroom",
    featured: false,
    image: "/images/bathroom.jpg",
    cardDescription:
      "Showers, tile, vanities, and the plumbing behind them — built for Houston humidity.",
    headline: "Bathroom Remodeling in Houston TX",
    intro: [
      "Bathrooms in this climate fail at the wet walls first: old surround panels, tired grout, vanities that have seen one too many leaks. Houston Solutions remodels hall baths and primary baths with waterproofing that belongs in Houston, not a dry-climate brochure.",
      "We handle showers, tub-to-shower conversions, tile, vanities, lighting, and the plumbing moves those changes require.",
    ],
    benefits: [
      {
        title: "Waterproofing before tile",
        body: "The part you never see is the part that matters. We don’t skip membranes to save a day.",
      },
      {
        title: "One bath at a time in occupied homes",
        body: "If you have a second bathroom, we use it. If you don’t, we plan the outage instead of surprising you.",
      },
      {
        title: "Tile that can be cleaned",
        body: "Grout color, joint size, and shower geometry are chosen so the room still looks decent in two years.",
      },
      {
        title: "Plumbing and electrical in the same job",
        body: "Moving a valve or adding a fan is part of the remodel, not a separate scavenger hunt.",
      },
    ],
    types: [
      {
        title: "Walk-in showers",
        body: "Tub-to-shower conversions and new shower builds with glass and tile.",
      },
      {
        title: "Full bath remodels",
        body: "Floor, wet walls, vanity, lighting, and fixtures in one sequence.",
      },
      {
        title: "Vanity and fixture updates",
        body: "Smaller scopes when the wet walls are still sound.",
      },
      {
        title: "Rental and resale baths",
        body: "Durable finishes that photograph well and hold up to tenants.",
      },
    ],
    faqs: [
      {
        q: "How long is a hall bathroom out of service?",
        a: "A straightforward shower and vanity job is often one to two weeks. Tile dry times and fixture lead times can stretch that. You’ll get a schedule with the estimate.",
      },
      {
        q: "Can you keep the existing tub?",
        a: "Sometimes. If the tub is sound and the surround is the failure, we can work around it. If the pan or drain is the problem, replacement is the honest path.",
      },
      {
        q: "Do you handle the plumbing permit?",
        a: "When a permit is required, we coordinate it with licensed plumbing. That’s identified before work starts.",
      },
    ],
    seoTitle: "Bathroom Remodeling Houston TX | Showers & Tile",
    seoDescription:
      "Bathroom remodeling in Houston, TX — walk-in showers, tile, vanities, and plumbing. Built for local humidity. Request a free estimate.",
    related: ["remodeling", "kitchen-remodeling", "plumbing", "drywall"],
  },
  {
    slug: "painting",
    name: "Interior & Exterior Painting",
    shortName: "Painting",
    icon: "paint",
    featured: true,
    image: "/images/paint.jpg",
    cardDescription:
      "Prep, prime, and paint for Houston interiors and exteriors — including rental turnovers.",
    headline: "Interior & Exterior Painting in Houston TX",
    intro: [
      "Paint jobs in Houston fail on prep, not on the color chip. Humidity, sun on west elevations, and the way older drywall takes paint all show up if you skip the dull parts.",
      "Houston Solutions paints interiors and exteriors for homeowners, landlords, and agents who need rooms that look finished — not just covered. We patch, caulk, prime stains, and then paint.",
    ],
    benefits: [
      {
        title: "Prep is in the price",
        body: "Nail pops, hairline cracks, and smoke or water stains get treated before color goes on.",
      },
      {
        title: "Products that survive this climate",
        body: "We spec coatings that can handle Gulf humidity and Houston sun, especially on exterior trim and siding.",
      },
      {
        title: "Occupied homes and empty units",
        body: "Furniture gets covered, floors get protected, and rental units get a schedule that respects move-in dates.",
      },
      {
        title: "Color help without the theater",
        body: "If you already have a color, we use it. If you don’t, we’ll sample a few that fit the light in the room.",
      },
    ],
    types: [
      {
        title: "Interior painting",
        body: "Walls, ceilings, and trim in living areas, bedrooms, and whole-house jobs.",
      },
      {
        title: "Exterior painting",
        body: "Siding, trim, doors, and fascia after scraping and priming failed areas.",
      },
      {
        title: "Cabinets and doors",
        body: "Kitchen cabinets and interior doors when a full remodel isn’t the plan.",
      },
      {
        title: "Turnover painting",
        body: "Fast, clean coats between tenants with patching included.",
      },
    ],
    faqs: [
      {
        q: "Do I need to move all the furniture?",
        a: "Pull smaller items and wall hangings. We’ll shift larger pieces and cover them. Empty rooms are faster if you can do that.",
      },
      {
        q: "How long does exterior paint last in Houston?",
        a: "Sun and moisture are hard on west and south walls. Good prep and the right coating last years; cheap paint over failed caulk does not. We’ll be specific to your elevation.",
      },
      {
        q: "Can you paint over water stains?",
        a: "After the leak is fixed. Stain-blocking primer first, then paint. Painting over an active leak is a waste of both our time.",
      },
    ],
    seoTitle: "Painting Houston TX | Interior & Exterior Painters",
    seoDescription:
      "Interior and exterior painting in Houston, Spring, Katy, and nearby cities. Prep, prime, and paint for homes and rentals. Free estimates from Houston Solutions.",
    related: ["drywall", "remodeling", "rental-turnovers", "property-maintenance"],
  },
  {
    slug: "drywall",
    name: "Drywall & Sheetrock Repair",
    shortName: "Drywall Repair",
    icon: "drywall",
    featured: true,
    image: "/images/drywall.jpg",
    cardDescription:
      "Patches, water damage, texture match, and new board — finished so paint actually hides the repair.",
    headline: "Drywall & Sheetrock Repair in Houston TX",
    intro: [
      "Most drywall calls in Houston are not new construction. They’re a leak that stained a ceiling, a doorknob hole, a bad patch from the last tenant, or texture that doesn’t match the rest of the room.",
      "We cut out damaged board, hang, tape, float, and texture so the paint coat can disappear the repair. If the texture is a 1990s knockdown, we match that — not a smooth wall from a video.",
    ],
    benefits: [
      {
        title: "Texture matching",
        body: "Houston houses are full of knockdown and orange peel. A smooth patch in the middle of that reads as a repair forever.",
      },
      {
        title: "Water damage done in the right order",
        body: "We don’t close a wet cavity. Dry, replace, then finish — especially after AC pan or roof leaks.",
      },
      {
        title: "Paint-ready or painted",
        body: "We can leave it primed for your painter or finish the coat ourselves so you don’t juggle two schedules.",
      },
      {
        title: "Small jobs are still jobs",
        body: "A single hole or a hallway ceiling is worth doing correctly. You don’t need a whole-house remodel to call.",
      },
    ],
    types: [
      {
        title: "Hole and crack repair",
        body: "Doorknob holes, nail pops, settlement cracks, and failed tape joints.",
      },
      {
        title: "Water-damaged ceilings and walls",
        body: "Cut-out, dry, replace, and finish after plumbing or roof leaks.",
      },
      {
        title: "Texture match",
        body: "Knockdown, orange peel, and smooth finishes blended into existing walls.",
      },
      {
        title: "New board for remodels",
        body: "Hanging and finishing when a kitchen, bath, or room layout changes.",
      },
    ],
    faqs: [
      {
        q: "Will I see the patch after it’s painted?",
        a: "That’s the test. Lighting in Houston houses is often raking afternoon sun, which is unforgiving. We float and texture with that in mind, then prime.",
      },
      {
        q: "Can you repair popcorn ceilings?",
        a: "Sometimes. Older popcorn can contain asbestos, and we won’t scrape a suspect ceiling without testing. We’ll talk through that before anyone touches it.",
      },
      {
        q: "How fast can a small patch be done?",
        a: "A simple hole is often same-day hang and a return for finish and paint, because compound has to dry. Humidity stretches dry times here.",
      },
    ],
    seoTitle: "Drywall Repair Houston TX | Sheetrock Patching",
    seoDescription:
      "Drywall and sheetrock repair in Houston, TX — water damage, holes, texture match, and paint-ready finishes. Call Houston Solutions for a free estimate.",
    related: ["painting", "plumbing", "remodeling", "insulation"],
  },
  {
    slug: "plumbing",
    name: "Plumbing Repairs",
    shortName: "Plumbing",
    icon: "plumbing",
    featured: true,
    image: "/images/plumbing.jpg",
    cardDescription:
      "Leaks, fixtures, clogged drains, and the repairs that show up after a Houston slab house ages.",
    headline: "Plumbing Repairs in Houston TX",
    intro: [
      "Houston plumbing problems are often quiet until they’re not: a supply line under the sink, a slow shower drain, a water heater that’s been making noise for months. Houston Solutions handles residential plumbing repairs for homeowners and rental properties.",
      "We fix leaks, replace fixtures, clear drains, and coordinate licensed plumbing where the job requires it. If the right answer is a specialist (a full sewer replacement, for example), we won’t pretend otherwise.",
    ],
    benefits: [
      {
        title: "Find the leak, then fix it",
        body: "We don’t start with a ceiling patch. Water gets traced so you’re not painting over the same stain in six weeks.",
      },
      {
        title: "Fixtures that actually shut off",
        body: "Angle stops, supply lines, and faucets get replaced when they’re the failure — not just tightened until the next drip.",
      },
      {
        title: "Rental-ready turnaround",
        body: "Property managers get a clear note on what failed and what was replaced, not a vague ‘plumbing issue.’",
      },
      {
        title: "Honest about slab and sewer work",
        body: "Some Houston repairs belong with a sewer or slab specialist. We’ll say that instead of taking a job we shouldn’t.",
      },
    ],
    types: [
      {
        title: "Leak repair",
        body: "Supply lines, shutoffs, faucet bodies, and fittings under sinks and behind toilets.",
      },
      {
        title: "Fixture replacement",
        body: "Faucets, toilets, disposal units, and shower valves.",
      },
      {
        title: "Drain clearing",
        body: "Kitchen and bath drains that have slowed down, before they stop entirely.",
      },
      {
        title: "Water heater issues",
        body: "Diagnosis, repair, and replacement coordination for standard residential units.",
      },
    ],
    faqs: [
      {
        q: "Do you work on slab leaks?",
        a: "We can help diagnose. Full slab-leak reroutes are a specialized job in Houston, and we’ll point you to that path if that’s what you have.",
      },
      {
        q: "Can you replace a water heater?",
        a: "Yes, for standard residential tanks and many tankless units, with the permits and venting the installation requires.",
      },
      {
        q: "Is a dripping faucet worth a service call?",
        a: "If it’s wasting water or staining a vanity, yes. Sometimes it’s a cartridge. Sometimes the whole faucet is done. We’ll tell you which before we order parts.",
      },
    ],
    seoTitle: "Plumbing Repairs Houston TX | Leaks, Fixtures & Drains",
    seoDescription:
      "Residential plumbing repairs in Houston and surrounding areas — leaks, fixtures, drains, and water heaters. Request a free estimate from Houston Solutions.",
    related: ["drywall", "bathroom-remodeling", "property-maintenance", "handyman"],
  },
  {
    slug: "electrical",
    name: "Electrical Repairs",
    shortName: "Electrical",
    icon: "electrical",
    featured: true,
    image: "/images/electrical-work.jpg",
    cardDescription:
      "Outlets, fixtures, fans, and the electrical odds and ends that inspections and old houses turn up.",
    headline: "Electrical Repairs in Houston TX",
    intro: [
      "A lot of Houston electrical work is small until it isn’t: a dead outlet in the kitchen, a bathroom fan that never got a damper, a panel that’s full when you want to add a circuit. Houston Solutions handles residential electrical repairs and coordinates licensed electrical work where the job requires it.",
      "We replace fixtures, add outlets and fans, and fix the issues that show up on a resale inspection. We don’t treat a flickering circuit as a lightbulb problem if it isn’t one.",
    ],
    benefits: [
      {
        title: "Inspection items, done in a batch",
        body: "Buyers and agents often have a list. We can work through GFCI, smoke detectors, and fixture issues in one visit when that’s the job.",
      },
      {
        title: "Licensed work where it counts",
        body: "Panel changes, new circuits, and permitted work go through licensed electricians. Cosmetic fixture swaps are handled accordingly.",
      },
      {
        title: "No mystery add-ons",
        body: "If opening a box shows burned insulation or an undersized circuit, we stop and quote the real repair.",
      },
      {
        title: "Rental and occupied homes",
        body: "We schedule around tenants and homeowners and leave the space usable the same day whenever the job allows.",
      },
    ],
    types: [
      {
        title: "Fixtures and fans",
        body: "Ceiling lights, vanities, and ceiling fans installed so they don’t wobble or hum.",
      },
      {
        title: "Outlets and GFCI",
        body: "Dead receptacles, kitchen and bath GFCI, and USB or dedicated outlets where you actually need them.",
      },
      {
        title: "Switches and dimmers",
        body: "Three-ways that never worked right, and dimmers that match the bulb type.",
      },
      {
        title: "Inspection repairs",
        body: "The punch list from a home inspection, quoted as a group.",
      },
    ],
    faqs: [
      {
        q: "Can you add a circuit for a range or AC?",
        a: "That’s licensed electrical work and often a permit. We coordinate it; we don’t treat it like hanging a sconce.",
      },
      {
        q: "My breaker keeps tripping. Can you look at that?",
        a: "Yes. Sometimes it’s a bad breaker, sometimes it’s a load, sometimes it’s a fault. We diagnose before we replace parts.",
      },
      {
        q: "Do you install EV chargers?",
        a: "We can evaluate the panel and coordinate a licensed install when the service can support it. Not every 1970s panel can.",
      },
    ],
    seoTitle: "Electrical Repairs Houston TX | Outlets, Fixtures & Fans",
    seoDescription:
      "Electrical repairs in Houston, TX — outlets, fixtures, fans, and inspection items for homes and rentals. Get a free estimate from Houston Solutions.",
    related: ["remodeling", "handyman", "property-maintenance", "plumbing"],
  },
  {
    slug: "insulation",
    name: "Blown-In Insulation & Removal",
    shortName: "Insulation",
    icon: "insulation",
    featured: true,
    image: "/images/insulation.jpg",
    cardDescription:
      "Attic blown-in install, old insulation removal, and the prep that helps Houston houses keep up in the heat.",
    headline: "Blown-In Insulation Install & Removal in Houston TX",
    intro: [
      "Houston attics take a beating. Roof decks run well over 130 degrees in summer, and thin or settled insulation is why a lot of houses never catch up after 2 p.m. Houston Solutions installs blown-in cellulose and fiberglass and removes the old material when it’s compacted, wet, or contaminated.",
      "We don’t just dump a few inches on top of a mess. If the existing insulation is failing, we pull it, check baffles and recessed-light boxes, then blow an even depth you can actually live with.",
    ],
    benefits: [
      {
        title: "Quoted to a depth, not a guess",
        body: "The estimate names the material and the finished depth. You know what you’re buying before the machine shows up.",
      },
      {
        title: "Removal when the old stuff shouldn’t stay",
        body: "Wet, rodent-soiled, or compacted insulation gets pulled and hauled — not buried under a new layer.",
      },
      {
        title: "Prep that matters in Houston heat",
        body: "Soffit baffles, hatch dams, and boxes around recessed lights so the new insulation doesn’t choke the attic or sit against hot fixtures.",
      },
      {
        title: "Same company if the attic turns up more work",
        body: "A roof leak, a wet ceiling, or a bad can light can stay in-house instead of becoming three extra vendors.",
      },
    ],
    types: [
      {
        title: "Blown-in attic insulation",
        body: "Cellulose or fiberglass blown to a consistent depth across the attic floor, including tight bays and around HVAC.",
      },
      {
        title: "Insulation removal and haul-off",
        body: "Old batts and blown-in material vacuumed or bagged, hauled, and disposed of so the deck is ready for a clean install.",
      },
      {
        title: "Top-off over existing insulation",
        body: "When the current layer is dry and clean but short of what the house needs, we add material instead of starting over.",
      },
      {
        title: "Dense-pack walls",
        body: "Where access allows, we fill empty wall cavities through small holes and patch the openings.",
      },
      {
        title: "Attic prep",
        body: "Baffles at the eaves, dams around the hatch, and covering that keeps insulation out of the living space.",
      },
    ],
    faqs: [
      {
        q: "How much insulation do I need in a Houston attic?",
        a: "Most Houston houses do well in the R-38 to R-49 range in the attic. We look at what’s already there, how settled it is, and quote a finished depth instead of a generic bag count.",
      },
      {
        q: "Do you have to remove the old insulation first?",
        a: "Not always. If it’s dry, reasonably even, and not contaminated, a top-off is often the right job. Wet, compacted, or soiled material should come out. We’ll say which after we see the attic.",
      },
      {
        q: "Cellulose or fiberglass?",
        a: "Both work in Houston attics. Cellulose packs well around wiring and bays. Fiberglass is lighter and doesn’t hold moisture the same way. We’ll recommend based on the attic, not a brand pitch.",
      },
      {
        q: "What if the old insulation might contain asbestos?",
        a: "Vermiculite and some older materials need testing before anyone disturbs them. We won’t pull a suspect attic until that’s cleared. Same rule we use on popcorn ceilings.",
      },
      {
        q: "Will this lower my electric bill?",
        a: "A thin attic is one of the reasons Houston AC never shuts off. Proper depth and even coverage helps the system keep up. We don’t quote a made-up percentage — the house and the ductwork still have to do their part.",
      },
    ],
    seoTitle: "Blown-In Insulation Houston TX | Install & Removal",
    seoDescription:
      "Blown-in attic insulation install and insulation removal in Houston, Spring, Katy, and nearby cities. Free estimates from Houston Solutions.",
    related: ["drywall", "electrical", "property-maintenance", "remodeling"],
  },
  {
    slug: "property-maintenance",
    name: "Property Maintenance",
    shortName: "Property Maintenance",
    icon: "maintenance",
    featured: true,
    image: "/images/maintenance.jpg",
    cardDescription:
      "Ongoing upkeep for Houston rentals, homes, and small portfolios — one call instead of five vendors.",
    headline: "Property Maintenance in Houston TX",
    intro: [
      "Property maintenance is the unglamorous work that keeps a house from sliding: gutters, minor repairs, paint touch-ups, a fence board, a sticking door, a/c disconnect that’s full of debris. Houston Solutions does that work for homeowners, landlords, and managers who don’t want a different contractor for every small thing.",
      "We can work as-needed or on a simple recurring visit for rental portfolios in Houston, Spring, Cypress, Humble, and nearby cities.",
    ],
    benefits: [
      {
        title: "One number for mixed work",
        body: "Paint, drywall, exterior, and punch-list repairs can live on the same work order.",
      },
      {
        title: "Notes you can file",
        body: "Property managers get a short written summary of what was found and what was done — useful at renewal and at sale.",
      },
      {
        title: "Occupied unit etiquette",
        body: "We schedule with tenants when you ask us to, and we don’t treat a rental like a vacant demo.",
      },
      {
        title: "Catch small things early",
        body: "A soft fascia board or a dripping hose bib is cheaper in March than after summer.",
      },
    ],
    types: [
      {
        title: "Exterior upkeep",
        body: "Gutters, trim, caulk, fence boards, and the small carpentry Houston weather picks at.",
      },
      {
        title: "Interior punch lists",
        body: "Doors, hardware, patches, and the items tenants report between turnovers.",
      },
      {
        title: "Seasonal checks",
        body: "Walkthroughs before hurricane season or before a listing goes live.",
      },
      {
        title: "Vendor coordination",
        body: "When a specialist is the right call, we help you get that lined up instead of guessing.",
      },
    ],
    faqs: [
      {
        q: "Do you offer monthly maintenance plans?",
        a: "We can set a recurring visit for portfolios that want it. Many clients just call as work comes up. Either is fine.",
      },
      {
        q: "Can you handle after-hours lockouts or leaks?",
        a: "Call the number on this site. Urgent leaks and unsafe electrical issues get triaged; true emergencies may still need 911 or the utility.",
      },
      {
        q: "Do you work with HOAs?",
        a: "Yes. We’ll follow access rules and keep the exterior looking like it belongs on the street.",
      },
    ],
    seoTitle: "Property Maintenance Houston TX | Rentals & Homes",
    seoDescription:
      "Property maintenance in Houston, TX for homeowners, landlords, and managers. One company for repairs, upkeep, and punch lists. Free estimates.",
    related: ["rental-turnovers", "handyman", "insulation", "painting"],
  },
  {
    slug: "junk-removal",
    name: "Junk & Debris Removal",
    shortName: "Junk Removal",
    icon: "junk",
    featured: false,
    image: "/images/junk.jpg",
    cardDescription:
      "Haul-out for cleanouts, remodel debris, storm piles, and the stuff that never made it to the curb.",
    headline: "Junk & Debris Removal in Houston TX",
    intro: [
      "Sometimes the job is just getting things out of the house: a garage that’s been a storage unit, remodel debris, a tenant’s leftover furniture, storm branches the city won’t take. Houston Solutions hauls junk and debris for homeowners, investors, and managers.",
      "We load, haul, and leave the space broom-clean. If the pile is mixed with something we can’t take (paint, chemicals), we’ll sort that out before we start.",
    ],
    benefits: [
      {
        title: "Priced by the job, not a mystery truck",
        body: "You get a number after we see the pile — volume, access, and anything that needs a special dump.",
      },
      {
        title: "Remodel and tree debris",
        body: "We already do the work that creates the pile. Haul-off can be part of that same job.",
      },
      {
        title: "Estate and rental cleanouts",
        body: "We can work room by room and leave what you mark to keep.",
      },
      {
        title: "No curb-side leftover",
        body: "If it came out of the house, it leaves the property unless you ask us to stage it for bulk pickup.",
      },
    ],
    types: [
      {
        title: "Household junk",
        body: "Furniture, mattresses, general clutter from garages, sheds, and rooms.",
      },
      {
        title: "Construction debris",
        body: "Drywall, lumber, tile, and the leftovers from a remodel.",
      },
      {
        title: "Yard and storm debris",
        body: "Limbs and brush after a storm or a tree job.",
      },
      {
        title: "Appliance and bulky items",
        body: "When they can be taken legally — we’ll say if something needs a different drop-off.",
      },
    ],
    faqs: [
      {
        q: "Do you take hazardous materials?",
        a: "Not as mixed junk. Paint, chemicals, and some electronics need a proper drop-off. We’ll separate those and tell you where they go.",
      },
      {
        q: "Can you empty a whole unit before a turnover?",
        a: "Yes. That’s a common request from managers and investors. We can combine it with paint and repair work if you want one schedule.",
      },
      {
        q: "Is this cheaper than a dumpster?",
        a: "Sometimes. Dumpsters make sense for long remodels. A haul-out makes sense when you don’t want a box sitting on the driveway for a week.",
      },
    ],
    seoTitle: "Junk Removal Houston TX | Debris & Cleanouts",
    seoDescription:
      "Junk and debris removal in Houston, Spring, and surrounding areas. Cleanouts, remodel debris, and storm piles. Request a free estimate.",
    related: ["rental-turnovers", "tree-removal", "property-maintenance", "remodeling"],
  },
  {
    slug: "garage-exterior",
    name: "Garage & Exterior Repairs",
    shortName: "Garage & Exterior",
    icon: "garage",
    featured: false,
    image: "/images/garage.jpg",
    cardDescription:
      "Garage doors, siding, fascia, and the outside repairs Houston weather finds first.",
    headline: "Garage & Exterior Repairs in Houston TX",
    intro: [
      "The outside of a Houston house takes sun, rain, and the occasional tropical system. Garage doors go out of balance, fascia boards soften, siding pulls, and the front of the house starts to look tired even when the inside is fine.",
      "Houston Solutions repairs garages and exteriors so the house looks looked-after and sheds water the way it should.",
    ],
    benefits: [
      {
        title: "The leak is usually at the detail",
        body: "We look at flashing, caulk joints, and door weatherseal — not just the paint.",
      },
      {
        title: "Garage doors that close",
        body: "Springs, tracks, and panels get diagnosed before anyone orders a whole new door you may not need.",
      },
      {
        title: "Curb appeal that isn’t a full remodel",
        body: "A door, some siding, and a paint coat often do more for a listing than a new kitchen.",
      },
      {
        title: "Tied into other trades",
        body: "If the fascia repair should include gutter work or paint, we quote it as one sequence.",
      },
    ],
    types: [
      {
        title: "Garage door repair and replacement",
        body: "Off-track doors, failed springs, dented panels, and full door swaps.",
      },
      {
        title: "Siding and trim",
        body: "Rotten boards, pulled panels, and exterior carpentry.",
      },
      {
        title: "Fascia, soffit, and eaves",
        body: "The edges that fail first in this climate.",
      },
      {
        title: "Exterior doors and hardware",
        body: "Entry and side doors that stick, leak air, or no longer latch.",
      },
    ],
    faqs: [
      {
        q: "Can you repair a dented garage door panel?",
        a: "Sometimes. If the track and springs are fine, a panel swap is cheaper than a new door. If the door is old and several panels are gone, replacement is cleaner.",
      },
      {
        q: "Do you paint after exterior repairs?",
        a: "Yes. Leaving new wood unpainted in Houston is how you do the job twice. Paint can be in the same quote.",
      },
      {
        q: "Will this help with insurance after a storm?",
        a: "We can document damage and complete covered repairs. We don’t inflate scopes for claims.",
      },
    ],
    seoTitle: "Garage & Exterior Repairs Houston TX",
    seoDescription:
      "Garage door, siding, fascia, and exterior repairs in Houston and surrounding areas. Practical fixes for weather and wear. Free estimates.",
    related: ["painting", "concrete", "property-maintenance", "handyman"],
  },
  {
    slug: "handyman",
    name: "General Handyman Services",
    shortName: "Handyman",
    icon: "handyman",
    featured: false,
    image: "/images/handyman.jpg",
    cardDescription:
      "The mixed punch list: doors, hardware, mounts, small carpentry, and the jobs that never need a full crew.",
    headline: "Handyman Services in Houston TX",
    intro: [
      "Not every call is a remodel. A lot of Houston houses need a door planed, a TV mounted, a lockset replaced, a shelf built, or six small things done on the same afternoon. That’s the handyman work we take.",
      "If the list turns into plumbing, electrical, or a larger repair, we can usually keep it in-house instead of sending you back to the internet.",
    ],
    benefits: [
      {
        title: "Bring the list",
        body: "We’d rather quote a grouped punch list than make four separate trips for four small items.",
      },
      {
        title: "No theater around small jobs",
        body: "You don’t need a sales process to get a door to latch. You need someone who shows up with the right bits.",
      },
      {
        title: "Same company if it grows",
        body: "If the ‘quick patch’ is actually a wet wall, we already do drywall, paint, and plumbing.",
      },
      {
        title: "Homeowners and agents",
        body: "Pre-listing punch lists and inspection items are a normal week for us.",
      },
    ],
    types: [
      {
        title: "Doors, locks, and hardware",
        body: "Sticking doors, failed closers, locksets, and cabinet hardware.",
      },
      {
        title: "Mounting and hanging",
        body: "TVs, shelves, curtain rods, and the anchors that belong in Houston drywall.",
      },
      {
        title: "Small carpentry",
        body: "Trim, closet rods, gates, and fence boards.",
      },
      {
        title: "Inspection punch lists",
        body: "The odds and ends a buyer’s inspector wrote down.",
      },
    ],
    faqs: [
      {
        q: "Is there a minimum charge?",
        a: "Small jobs are quoted with a trip in mind. Bundling a list is almost always a better use of the visit. We’ll say so on the estimate.",
      },
      {
        q: "Can you assemble furniture?",
        a: "We can. It’s not the most interesting work we do, but it gets done square and complete.",
      },
      {
        q: "Do you work evenings?",
        a: "Weekdays and Saturdays cover most of it. Evening windows are possible when the job and the household need it — ask when you call.",
      },
    ],
    seoTitle: "Handyman Houston TX | Punch Lists & Small Repairs",
    seoDescription:
      "Handyman services in Houston, TX — doors, hardware, mounts, small carpentry, and inspection punch lists. Request a free estimate from Houston Solutions.",
    related: ["property-maintenance", "drywall", "electrical", "plumbing"],
  },
  {
    slug: "rental-turnovers",
    name: "Rental Property Turnovers",
    shortName: "Rental Turnovers",
    icon: "turnover",
    featured: false,
    image: "/images/turnover.jpg",
    cardDescription:
      "Paint, patch, cleanout, and repairs between tenants — scheduled around your next move-in.",
    headline: "Rental Property Turnovers in Houston TX",
    intro: [
      "A turnover has a date on it. Paint, drywall, a junk-out, a couple of plumbing fixes, and a garage door that finally gets replaced — all before the new lease starts. Houston Solutions runs those jobs as one sequence for landlords, managers, and small investors.",
      "We work in Houston, Spring, Cypress, Humble, Katy, and nearby cities, and we’re used to units that are empty for a short window.",
    ],
    benefits: [
      {
        title: "One schedule, one invoice",
        body: "You don’t have to line up a painter, a hauler, and a handyman and hope they don’t overlap.",
      },
      {
        title: "Built around move-in dates",
        body: "Tell us the date. We’ll tell you what’s realistic and what should wait until after occupancy.",
      },
      {
        title: "Notes for the file",
        body: "What we replaced, what we patched, and what we flagged for later — useful at the next inspection.",
      },
      {
        title: "Durable, not decorative",
        body: "Turnover finishes are chosen to survive the next tenant, not to win a design award.",
      },
    ],
    types: [
      {
        title: "Paint and patch",
        body: "Walls, trim, and the dings every move-out leaves.",
      },
      {
        title: "Cleanout and debris",
        body: "Whatever didn’t leave with the last occupant.",
      },
      {
        title: "Punch-list repairs",
        body: "Blinds, hardware, fixtures, and the small carpentry that fails between leases.",
      },
      {
        title: "Make-ready packages",
        body: "A defined scope you can reuse across a small portfolio.",
      },
    ],
    faqs: [
      {
        q: "How fast can you turn a unit?",
        a: "A paint-and-patch with a light cleanout is often a few days. Add a bath repair or a junk-out and it stretches. Give us the keys and the date; we’ll be specific.",
      },
      {
        q: "Do you work with property managers?",
        a: "Yes. We can use your work-order process, send photos, and invoice the way your office needs.",
      },
      {
        q: "Can you handle occupied notice-to-vacate walkthroughs?",
        a: "We can walk a unit before the tenant leaves and quote the likely make-ready so you’re not starting from zero on move-out day.",
      },
    ],
    seoTitle: "Rental Property Turnovers Houston TX | Make-Ready",
    seoDescription:
      "Rental turnovers in Houston, TX — paint, drywall, junk-out, and repairs between tenants. One company for landlords and property managers.",
    related: ["painting", "drywall", "junk-removal", "property-maintenance"],
  },
];

export const featuredServices = services.filter((s) => s.featured);

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getRelated(service: Service) {
  return service.related
    .map((slug) => getService(slug))
    .filter((s): s is Service => Boolean(s));
}
