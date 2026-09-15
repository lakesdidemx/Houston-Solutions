export type Testimonial = {
  name: string;
  role: string;
  location: string;
  rating: 4 | 5;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Maria G.",
    role: "Homeowner",
    location: "Spring",
    rating: 5,
    quote:
      "We had a live oak leaning toward the house after a storm. They came out the next day, walked us through the options, and had it down and hauled off before the weekend. Fair price, no surprises on the invoice.",
  },
  {
    name: "James R.",
    role: "Property manager",
    location: "Cypress",
    rating: 5,
    quote:
      "I manage a handful of rentals in Cypress and Humble. Houston Solutions has handled turnovers for us for about a year — paint, drywall, junk-out. They just get it done without a lot of back and forth.",
  },
  {
    name: "Denise T.",
    role: "Homeowner",
    location: "Katy",
    rating: 5,
    quote:
      "Our driveway was a mess of cracks. The new pour looks clean and they were careful with the landscaping. Rain pushed the schedule a couple of days, but they kept us posted, which I appreciated.",
  },
  {
    name: "Priya S.",
    role: "Homeowner",
    location: "The Woodlands",
    rating: 5,
    quote:
      "Used them for a bathroom remodel in our 1970s house. They didn’t try to upsell us into a magazine kitchen. The tile work is solid and they cleaned up at the end of each day.",
  },
  {
    name: "Chris L.",
    role: "Homeowner",
    location: "Houston",
    rating: 4,
    quote:
      "Called about electrical issues in a house we just bought. They found a few things the inspection missed, fixed them, and explained it in plain English. Scheduling took a little longer than I wanted, but the work was careful.",
  },
  {
    name: "Andrea M.",
    role: "Real estate investor",
    location: "Humble",
    rating: 5,
    quote:
      "We needed a unit painted, a few drywall patches, and the garage door repaired before listing. One call, one crew, done in a few days. That’s the whole reason we keep using them.",
  },
];
