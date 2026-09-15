import { cities, company, localBusinessJsonLd } from "@/lib/company";
import type { Service } from "@/lib/services";

export function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessJsonLd),
      }}
    />
  );
}

export function ServiceJsonLd({ service }: { service: Service }) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.name,
        serviceType: service.name,
        description: service.seoDescription,
        url: `${company.website}/services/${service.slug}`,
        image: service.image,
        areaServed: cities.map((name) => ({
          "@type": "City",
          name: `${name}, TX`,
        })),
        provider: {
          "@type": "HomeAndConstructionBusiness",
          name: company.name,
          telephone: company.phoneTel,
          email: company.email,
          url: company.website,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Houston",
            addressRegion: "TX",
            addressCountry: "US",
          },
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${company.website}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${company.website}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.shortName,
            item: `${company.website}/services/${service.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
