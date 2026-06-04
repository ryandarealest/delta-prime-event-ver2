export const siteConfig = {
  name: "Delta Prime Event",
  legalName: "Delta Prime Group",
  shortName: "Delta Prime",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://delta-prime-event-ver2.vercel.app",
  locale: "vi_VN",
  language: "vi",
  phone: "+84 000 000 000",
  email: "contact@deltaprimegroup.vn",
  address: {
    streetAddress: "Hải Châu",
    addressLocality: "Đà Nẵng",
    addressRegion: "Đà Nẵng",
    postalCode: "550000",
    addressCountry: "VN",
  },
  socialLinks: [
    "https://www.facebook.com/deltaprimegroup",
    "https://www.instagram.com/delta.prime",
  ],
  keywords: [
    "Delta Prime Event",
    "tổ chức sự kiện Đà Nẵng",
    "công ty tổ chức sự kiện Đà Nẵng",
    "event agency Đà Nẵng",
    "event production Đà Nẵng",
    "tổ chức sự kiện doanh nghiệp Đà Nẵng",
    "tổ chức hội nghị Đà Nẵng",
    "tổ chức hội thảo Đà Nẵng",
    "tổ chức khai trương Đà Nẵng",
    "brand activation Đà Nẵng",
    "roadshow Đà Nẵng",
    "ra mắt sản phẩm Đà Nẵng",
    "gala dinner Đà Nẵng",
  ],
  services: [
    "Tổ chức sự kiện doanh nghiệp",
    "Tổ chức hội nghị hội thảo",
    "Tổ chức lễ khai trương",
    "Tổ chức ra mắt sản phẩm",
    "Brand activation",
    "Roadshow",
    "Gala dinner",
    "Thiết kế concept sự kiện",
    "Sản xuất và vận hành sự kiện",
  ],
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
