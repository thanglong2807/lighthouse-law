import { services } from "./services";

export const SERVICE_SLUGS = [
  "tu-van-phap-ly",
  "so-huu-tri-tue",
  "dau-tu-kinh-doanh",
  "luat-doanh-nghiep",
  "luat-bat-dong-san",
  "luat-dan-su",
  "luat-hinh-su",
  "luat-hon-nhan-gia-dinh",
  "luat-lao-dong",
  "luat-thue",
  "soan-thao-hop-dong",
  "giai-quyet-tranh-chap",
] as const;

export type ServiceUrlSlug = (typeof SERVICE_SLUGS)[number];

export const URL_TO_CONTENT_SLUG: Record<string, string> = {
  "tu-van-phap-ly": "legal-consultation",
  "so-huu-tri-tue": "intellectual-property",
  "dau-tu-kinh-doanh": "investment-business",
  "luat-doanh-nghiep": "corporate-law",
  "luat-bat-dong-san": "real-estate-law",
  "luat-dan-su": "civil-law",
  "luat-hinh-su": "criminal-law",
  "luat-hon-nhan-gia-dinh": "family-marriage",
  "luat-lao-dong": "labor-law",
  "luat-thue": "tax-law",
  "soan-thao-hop-dong": "contract-drafting-review",
  "giai-quyet-tranh-chap": "dispute-resolution",
};

export const CONTENT_TO_URL_SLUG: Record<string, string> = Object.fromEntries(
  Object.entries(URL_TO_CONTENT_SLUG).map(([url, content]) => [content, url])
);

export function getServiceBySlug(contentSlug: string) {
  return services.find((s) => s.slug === contentSlug) ?? null;
}

export function getServiceIndex(contentSlug: string): number {
  const urlSlug = CONTENT_TO_URL_SLUG[contentSlug];
  return SERVICE_SLUGS.indexOf(urlSlug as ServiceUrlSlug);
}
