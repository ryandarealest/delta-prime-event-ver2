import { absoluteUrl, siteConfig } from "@/lib/site";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  logo: absoluteUrl("/images/logo.png"),
  sameAs: siteConfig.socialLinks,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteConfig.url}/#localbusiness`,
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  logo: absoluteUrl("/images/logo.png"),
  image: [
    absoluteUrl("/images/bg.jpg"),
    absoluteUrl("/images/event-1.jpg"),
    absoluteUrl("/images/event-2.jpg"),
    absoluteUrl("/images/event-3.jpg"),
  ],
  description:
    "Delta Prime Event là đơn vị tổ chức sự kiện chuyên nghiệp tại Đà Nẵng, tập trung vào sự kiện doanh nghiệp, hội nghị, hội thảo, khai trương, activation, roadshow, gala dinner và ra mắt sản phẩm.",
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    ...siteConfig.address,
  },
  areaServed: [
    { "@type": "City", name: "Đà Nẵng" },
    { "@type": "AdministrativeArea", name: "Miền Trung" },
    { "@type": "Country", name: "Việt Nam" },
  ],
  sameAs: siteConfig.socialLinks,
  knowsAbout: siteConfig.services,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  inLanguage: "vi-VN",
  publisher: {
    "@id": `${siteConfig.url}/#organization`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.url}/#event-service`,
  name: "Dịch vụ tổ chức sự kiện tại Đà Nẵng",
  provider: {
    "@id": `${siteConfig.url}/#organization`,
  },
  areaServed: {
    "@type": "City",
    name: "Đà Nẵng",
  },
  serviceType: siteConfig.services,
  description:
    "Dịch vụ tổ chức sự kiện doanh nghiệp, hội nghị, hội thảo, khai trương, activation, roadshow, gala dinner và ra mắt sản phẩm tại Đà Nẵng.",
};

export default function JsonLd() {
  const schemas = [organizationSchema, localBusinessSchema, websiteSchema, serviceSchema];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
