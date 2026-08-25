import { siteConfig } from "@/config/site";

const baseUrl = siteConfig.domain;

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${baseUrl}/#organization`,
    name: siteConfig.name,
    url: baseUrl,
    logo: `${baseUrl}/LOGO.png`,
    image: `${baseUrl}/og-image.jpg`,
    description:
      "Lighthouse Law cung cấp dịch vụ tư vấn pháp lý chuyên nghiệp cho cá nhân và doanh nghiệp tại Việt Nam.",
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Số 3 phố Trần Điền",
      addressLocality: "Phường Phương Liệt",
      addressRegion: "Thành phố Hà Nội",
      postalCode: "100000",
      addressCountry: "VN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.0025,
      longitude: 105.8197,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:30",
        closes: "12:00",
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "Vietnam",
    },
    priceRange: "$$",
    sameAs: siteConfig.social.map((s) => s.url),
    knowsLanguage: ["vi", "en"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Legal Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tư vấn pháp lý" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sở hữu trí tuệ" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tư vấn đầu tư & kinh doanh" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luật doanh nghiệp" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luật bất động sản" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luật dân sự" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luật hình sự" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luật hôn nhân & gia đình" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luật lao động" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luật thuế" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Soạn thảo hợp đồng" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Giải quyết tranh chấp" } },
      ],
    },
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: siteConfig.name,
    url: baseUrl,
    inLanguage: ["vi", "en"],
    publisher: { "@id": `${baseUrl}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/vi/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function getBreadcrumbSchema(
  items: { name: string; url?: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: `${baseUrl}${item.url}` } : {}),
    })),
  };
}

export function getPersonSchema(lawyer: {
  name: string;
  position: string;
  email: string;
  phone: string;
  slug: string;
  practiceAreas: string[];
  languages: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/vi/team/${lawyer.slug}#person`,
    name: lawyer.name,
    jobTitle: lawyer.position,
    email: lawyer.email,
    telephone: lawyer.phone,
    url: `${baseUrl}/vi/team/${lawyer.slug}`,
    worksFor: { "@id": `${baseUrl}/#organization` },
    knowsAbout: lawyer.practiceAreas,
    knowsLanguage: lawyer.languages,
  };
}

export function getLegalServiceSchema(service: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: service.name,
    description: service.description,
    url: `${baseUrl}/vi/services/${service.slug}`,
    provider: { "@id": `${baseUrl}/#organization` },
    areaServed: { "@type": "Country", name: "Vietnam" },
  };
}
