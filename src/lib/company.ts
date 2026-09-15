export const company = {
  name: "Houston Solutions",
  tagline: "Professional Home Services & Property Improvements",
  shortTagline: "Reliable home services. Quality work. One solution.",
  phoneDisplay: "(713) 234-0556",
  phoneTel: "+17132340556",
  email: "email@solutionshouston.com",
  leadsEmail: "mail4diego@gmail.com",
  website: "https://www.solutionshouston.com",
  city: "Houston, Texas",
  hoursWeekday: "Monday–Saturday, 7:00 AM – 7:00 PM",
  hoursSunday: "Sunday by appointment",
  hoursShort: "Mon–Sat 7 AM–7 PM",
  serviceAreaLine:
    "Serving Houston, Spring, The Woodlands, Cypress, Tomball, Katy, Humble, Conroe, Magnolia, and surrounding areas.",
  trustLine: "Serving Houston Homeowners, Property Managers & Investors",
} as const;

export const cities = [
  "Houston",
  "Spring",
  "The Woodlands",
  "Cypress",
  "Tomball",
  "Katy",
  "Humble",
  "Conroe",
  "Magnolia",
] as const;

export const nav = [
  { label: "Home", to: "/" as const },
  { label: "Services", to: "/services" as const },
  { label: "About Us", to: "/about" as const },
  { label: "Projects", to: "/projects" as const },
  { label: "Service Areas", to: "/service-areas" as const },
  { label: "Contact", to: "/contact" as const },
];

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: company.name,
  description:
    "Houston Solutions provides residential home services and property improvements throughout Houston, Texas and surrounding areas — including tree removal, concrete, remodeling, painting, drywall, plumbing, electrical, and property maintenance.",
  telephone: company.phoneTel,
  email: company.email,
  url: company.website,
  image: "/images/hero.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Houston",
    addressRegion: "TX",
    addressCountry: "US",
  },
  areaServed: cities.map((name) => ({
    "@type": "City",
    name: `${name}, TX`,
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "07:00",
      closes: "19:00",
    },
  ],
  priceRange: "$$",
};
