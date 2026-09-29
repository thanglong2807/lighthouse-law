import "server-only";

import Database from "better-sqlite3";
import { chmodSync, mkdirSync } from "fs";
import path from "path";
import type { Metadata } from "next";

export type PageSeoInput = {
  route: string;
  locale: "vi" | "en";
  title: string;
  description: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  robots: string;
};

const defaultPageSeo: Record<string, { vi: Omit<PageSeoInput, "route" | "locale" | "canonical">; en: Omit<PageSeoInput, "route" | "locale" | "canonical"> }> = {
  "/": {
    vi: { title: "Lighthouse Law | Tư vấn pháp lý chuyên nghiệp", description: "Lighthouse Law cung cấp dịch vụ tư vấn pháp lý, sở hữu trí tuệ và đầu tư kinh doanh chuyên nghiệp tại Việt Nam.", primaryKeyword: "hãng luật uy tín", secondaryKeywords: ["tư vấn pháp lý", "luật sư doanh nghiệp"], ogTitle: "Lighthouse Law - Hãng luật uy tín tại Việt Nam", ogDescription: "Giải pháp pháp lý chiến lược cho cá nhân, doanh nghiệp và nhà đầu tư.", ogImage: "/og-image.jpg", robots: "index,follow" },
    en: { title: "Lighthouse Law | Professional Legal Consulting", description: "Lighthouse Law provides professional legal, intellectual property and investment advisory services in Vietnam.", primaryKeyword: "law firm Vietnam", secondaryKeywords: ["legal consulting", "business lawyers"], ogTitle: "Lighthouse Law - Trusted Law Firm in Vietnam", ogDescription: "Strategic legal solutions for individuals, businesses and investors.", ogImage: "/og-image.jpg", robots: "index,follow" },
  },
  "/company": { vi: { title: "Giới thiệu Lighthouse Law", description: "Tìm hiểu về Lighthouse Law và đội ngũ luật sư cung cấp dịch vụ pháp lý chuyên nghiệp tại Việt Nam.", primaryKeyword: "giới thiệu Lighthouse Law", secondaryKeywords: ["công ty luật", "đội ngũ luật sư"], ogTitle: "Giới thiệu Lighthouse Law", ogDescription: "Đội ngũ luật sư tận tâm và giàu kinh nghiệm.", ogImage: "/og-image.jpg", robots: "index,follow" }, en: { title: "About Lighthouse Law", description: "Learn about Lighthouse Law and our team providing professional legal services in Vietnam.", primaryKeyword: "about Lighthouse Law", secondaryKeywords: ["Vietnam law firm", "legal team"], ogTitle: "About Lighthouse Law", ogDescription: "A dedicated and experienced legal team.", ogImage: "/og-image.jpg", robots: "index,follow" } },
  "/services": { vi: { title: "Dịch vụ pháp lý | Lighthouse Law", description: "Khám phá các dịch vụ tư vấn pháp lý, doanh nghiệp, đầu tư, sở hữu trí tuệ và giải quyết tranh chấp.", primaryKeyword: "dịch vụ pháp lý", secondaryKeywords: ["luật doanh nghiệp", "luật đầu tư", "sở hữu trí tuệ"], ogTitle: "Dịch vụ pháp lý Lighthouse Law", ogDescription: "Giải pháp pháp lý toàn diện cho cá nhân và doanh nghiệp.", ogImage: "/og-image.jpg", robots: "index,follow" }, en: { title: "Legal Services | Lighthouse Law", description: "Explore our legal, corporate, investment, intellectual property and dispute resolution services.", primaryKeyword: "legal services Vietnam", secondaryKeywords: ["corporate law", "investment law", "intellectual property"], ogTitle: "Lighthouse Law Legal Services", ogDescription: "Comprehensive legal solutions for individuals and businesses.", ogImage: "/og-image.jpg", robots: "index,follow" } },
  "/team": { vi: { title: "Đội ngũ luật sư | Lighthouse Law", description: "Gặp gỡ đội ngũ luật sư giàu kinh nghiệm và tận tâm của Lighthouse Law.", primaryKeyword: "đội ngũ luật sư", secondaryKeywords: ["luật sư Việt Nam", "luật sư tư vấn"], ogTitle: "Đội ngũ luật sư Lighthouse Law", ogDescription: "Kinh nghiệm, chuyên môn và tận tâm.", ogImage: "/og-image.jpg", robots: "index,follow" }, en: { title: "Our Legal Team | Lighthouse Law", description: "Meet the experienced and dedicated legal team at Lighthouse Law.", primaryKeyword: "legal team Vietnam", secondaryKeywords: ["Vietnam lawyers", "legal advisors"], ogTitle: "Lighthouse Law Legal Team", ogDescription: "Experience, expertise and dedication.", ogImage: "/og-image.jpg", robots: "index,follow" } },
  "/offices": { vi: { title: "Văn phòng Lighthouse Law", description: "Địa chỉ và thông tin liên hệ các văn phòng của Lighthouse Law tại Việt Nam.", primaryKeyword: "văn phòng luật sư", secondaryKeywords: ["địa chỉ hãng luật", "liên hệ luật sư"], ogTitle: "Văn phòng Lighthouse Law", ogDescription: "Thông tin địa chỉ và liên hệ.", ogImage: "/og-image.jpg", robots: "index,follow" }, en: { title: "Lighthouse Law Offices", description: "Locations and contact information for Lighthouse Law offices in Vietnam.", primaryKeyword: "law firm offices Vietnam", secondaryKeywords: ["law office locations", "contact lawyers"], ogTitle: "Lighthouse Law Offices", ogDescription: "Office locations and contact information.", ogImage: "/og-image.jpg", robots: "index,follow" } },
  "/insights": { vi: { title: "Bài viết pháp lý | Lighthouse Law", description: "Cập nhật tin tức pháp luật và phân tích chuyên sâu từ đội ngũ luật sư Lighthouse Law.", primaryKeyword: "bài viết pháp luật", secondaryKeywords: ["tin tức pháp luật", "phân tích pháp lý"], ogTitle: "Bài viết pháp lý Lighthouse Law", ogDescription: "Kiến thức pháp lý cập nhật và chuyên sâu.", ogImage: "/og-image.jpg", robots: "index,follow" }, en: { title: "Legal Insights | Lighthouse Law", description: "Legal news updates and in-depth analysis from the Lighthouse Law team.", primaryKeyword: "legal insights Vietnam", secondaryKeywords: ["legal news", "law analysis"], ogTitle: "Lighthouse Law Legal Insights", ogDescription: "Updated and practical legal knowledge.", ogImage: "/og-image.jpg", robots: "index,follow" } },
  "/for-clients": { vi: { title: "Dành cho khách hàng | Lighthouse Law", description: "Tài liệu, hướng dẫn và nguồn lực hữu ích dành cho khách hàng của Lighthouse Law.", primaryKeyword: "tài liệu pháp lý cho khách hàng", secondaryKeywords: ["quy trình tư vấn pháp lý", "hướng dẫn pháp lý"], ogTitle: "Dành cho khách hàng", ogDescription: "Nguồn lực hữu ích cho khách hàng.", ogImage: "/og-image.jpg", robots: "index,follow" }, en: { title: "For Clients | Lighthouse Law", description: "Resources, guides and useful materials for Lighthouse Law clients.", primaryKeyword: "legal resources for clients", secondaryKeywords: ["legal consultation process", "legal guides"], ogTitle: "For Clients", ogDescription: "Useful resources for our clients.", ogImage: "/og-image.jpg", robots: "index,follow" } },
  "/careers": { vi: { title: "Tuyển dụng | Lighthouse Law", description: "Khám phá cơ hội nghề nghiệp và tham gia đội ngũ Lighthouse Law trong lĩnh vực pháp lý.", primaryKeyword: "tuyển dụng luật sư", secondaryKeywords: ["việc làm pháp lý", "cơ hội nghề nghiệp luật"], ogTitle: "Tuyển dụng Lighthouse Law", ogDescription: "Cơ hội nghề nghiệp trong lĩnh vực pháp lý.", ogImage: "/og-image.jpg", robots: "index,follow" }, en: { title: "Careers | Lighthouse Law", description: "Explore career opportunities and join the Lighthouse Law legal team.", primaryKeyword: "legal jobs Vietnam", secondaryKeywords: ["lawyer careers", "legal employment"], ogTitle: "Careers at Lighthouse Law", ogDescription: "Career opportunities in the legal field.", ogImage: "/og-image.jpg", robots: "index,follow" } },
  "/contact": { vi: { title: "Liên hệ | Lighthouse Law", description: "Liên hệ với Lighthouse Law để được tư vấn pháp lý chuyên nghiệp và phù hợp với nhu cầu của bạn.", primaryKeyword: "liên hệ luật sư", secondaryKeywords: ["tư vấn pháp lý", "hãng luật tại Việt Nam"], ogTitle: "Liên hệ Lighthouse Law", ogDescription: "Gửi yêu cầu tư vấn pháp lý cho đội ngũ của chúng tôi.", ogImage: "/og-image.jpg", robots: "index,follow" }, en: { title: "Contact | Lighthouse Law", description: "Contact Lighthouse Law for professional legal consultation tailored to your needs.", primaryKeyword: "contact lawyers Vietnam", secondaryKeywords: ["legal consultation", "Vietnam law firm"], ogTitle: "Contact Lighthouse Law", ogDescription: "Send your legal consultation request to our team.", ogImage: "/og-image.jpg", robots: "index,follow" } },
  "/consultation": { vi: { title: "Đặt lịch tư vấn pháp lý | Lighthouse Law", description: "Đặt lịch tư vấn pháp lý với đội ngũ luật sư giàu kinh nghiệm của Lighthouse Law.", primaryKeyword: "đặt lịch tư vấn pháp lý", secondaryKeywords: ["tư vấn luật sư", "tư vấn pháp luật"], ogTitle: "Đặt lịch tư vấn pháp lý", ogDescription: "Nhận tư vấn phù hợp với vấn đề pháp lý của bạn.", ogImage: "/og-image.jpg", robots: "index,follow" }, en: { title: "Book a Legal Consultation | Lighthouse Law", description: "Schedule a legal consultation with the experienced lawyers at Lighthouse Law.", primaryKeyword: "book legal consultation", secondaryKeywords: ["legal advice", "speak to a lawyer"], ogTitle: "Book a Legal Consultation", ogDescription: "Get advice tailored to your legal needs.", ogImage: "/og-image.jpg", robots: "index,follow" } },
  "/faq": { vi: { title: "Câu hỏi thường gặp | Lighthouse Law", description: "Tìm câu trả lời cho những thắc mắc phổ biến về dịch vụ pháp lý của Lighthouse Law.", primaryKeyword: "câu hỏi pháp lý thường gặp", secondaryKeywords: ["FAQ luật", "tư vấn pháp luật"], ogTitle: "Câu hỏi thường gặp", ogDescription: "Giải đáp các câu hỏi phổ biến về dịch vụ pháp lý.", ogImage: "/og-image.jpg", robots: "index,follow" }, en: { title: "FAQ | Lighthouse Law", description: "Find answers to common questions about Lighthouse Law's legal services.", primaryKeyword: "legal FAQ Vietnam", secondaryKeywords: ["law questions", "legal advice"], ogTitle: "Frequently Asked Questions", ogDescription: "Answers to common legal service questions.", ogImage: "/og-image.jpg", robots: "index,follow" } },
  "/privacy-policy": { vi: { title: "Chính sách bảo mật | Lighthouse Law", description: "Chính sách bảo mật của Lighthouse Law về việc thu thập, sử dụng và bảo vệ thông tin cá nhân.", primaryKeyword: "chính sách bảo mật", secondaryKeywords: ["bảo vệ dữ liệu cá nhân"], ogTitle: "Chính sách bảo mật", ogDescription: "Cách Lighthouse Law bảo vệ thông tin của bạn.", ogImage: "/og-image.jpg", robots: "index,follow" }, en: { title: "Privacy Policy | Lighthouse Law", description: "Lighthouse Law's policy for collecting, using and protecting personal information.", primaryKeyword: "privacy policy law firm", secondaryKeywords: ["personal data protection"], ogTitle: "Privacy Policy", ogDescription: "How Lighthouse Law protects your information.", ogImage: "/og-image.jpg", robots: "index,follow" } },
  "/terms-of-use": { vi: { title: "Điều khoản sử dụng | Lighthouse Law", description: "Điều khoản và điều kiện sử dụng website và dịch vụ của Lighthouse Law.", primaryKeyword: "điều khoản sử dụng website", secondaryKeywords: ["điều kiện dịch vụ pháp lý"], ogTitle: "Điều khoản sử dụng", ogDescription: "Điều kiện sử dụng website Lighthouse Law.", ogImage: "/og-image.jpg", robots: "index,follow" }, en: { title: "Terms of Use | Lighthouse Law", description: "Terms and conditions for using the Lighthouse Law website and services.", primaryKeyword: "website terms of use", secondaryKeywords: ["legal service terms"], ogTitle: "Terms of Use", ogDescription: "Terms for using the Lighthouse Law website.", ogImage: "/og-image.jpg", robots: "index,follow" } },
  "/search": { vi: { title: "Tìm kiếm | Lighthouse Law", description: "Tìm kiếm dịch vụ, bài viết pháp lý và thông tin hữu ích trên Lighthouse Law.", primaryKeyword: "tìm kiếm Lighthouse Law", secondaryKeywords: ["tìm bài viết pháp luật"], ogTitle: "Tìm kiếm Lighthouse Law", ogDescription: "Tìm nhanh thông tin pháp lý bạn cần.", ogImage: "/og-image.jpg", robots: "noindex,follow" }, en: { title: "Search | Lighthouse Law", description: "Search Lighthouse Law services, legal insights and useful information.", primaryKeyword: "search Lighthouse Law", secondaryKeywords: ["search legal articles"], ogTitle: "Search Lighthouse Law", ogDescription: "Find the legal information you need.", ogImage: "/og-image.jpg", robots: "noindex,follow" } },
};

const dbDir = path.join(process.cwd(), "data");
const dbFile = path.join(dbDir, "security.sqlite");

function getDb() {
  mkdirSync(dbDir, { recursive: true });
  const db = new Database(dbFile);
  db.exec(`CREATE TABLE IF NOT EXISTS pageSeo (
    route TEXT NOT NULL,
    locale TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    primaryKeyword TEXT NOT NULL DEFAULT '',
    secondaryKeywords TEXT NOT NULL DEFAULT '[]',
    canonical TEXT NOT NULL,
    ogTitle TEXT NOT NULL,
    ogDescription TEXT NOT NULL,
    ogImage TEXT NOT NULL DEFAULT '',
    robots TEXT NOT NULL DEFAULT 'index,follow',
    updatedAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (route, locale)
  )`);
  try { chmodSync(dbFile, 0o600); } catch { /* Windows does not support POSIX mode bits. */ }
  return db;
}

export function getPageSeo(route: string, locale: "vi" | "en") {
  const db = getDb();
  try {
    const row = db.prepare("SELECT * FROM pageSeo WHERE route = ? AND locale = ?").get(route, locale) as (PageSeoInput & { secondaryKeywords: string }) | undefined;
    if (!row) return null;
    return { ...row, secondaryKeywords: JSON.parse(row.secondaryKeywords || "[]") as string[] };
  } finally { db.close(); }
}

export function getDefaultPageSeo(route: string, locale: "vi" | "en"): PageSeoInput {
  const defaults = defaultPageSeo[route]?.[locale] ?? defaultPageSeo["/"][locale];
  return { route, locale, ...defaults, canonical: `/${locale}${route === "/" ? "" : route}` };
}

export function savePageSeo(input: PageSeoInput) {
  const db = getDb();
  try {
    db.prepare(`INSERT INTO pageSeo (route, locale, title, description, primaryKeyword, secondaryKeywords, canonical, ogTitle, ogDescription, ogImage, robots)
      VALUES (@route, @locale, @title, @description, @primaryKeyword, @secondaryKeywords, @canonical, @ogTitle, @ogDescription, @ogImage, @robots)
      ON CONFLICT(route, locale) DO UPDATE SET title=@title, description=@description, primaryKeyword=@primaryKeyword, secondaryKeywords=@secondaryKeywords, canonical=@canonical, ogTitle=@ogTitle, ogDescription=@ogDescription, ogImage=@ogImage, robots=@robots, updatedAt=CURRENT_TIMESTAMP`).run({ ...input, secondaryKeywords: JSON.stringify(input.secondaryKeywords) });
  } finally { db.close(); }
}

export function listPageSeo() {
  const db = getDb();
  try { return db.prepare("SELECT * FROM pageSeo ORDER BY route, locale").all() as (PageSeoInput & { secondaryKeywords: string; updatedAt: string })[]; }
  finally { db.close(); }
}

export function applyPageSeo(route: string, locale: "vi" | "en", fallback: Metadata): Metadata {
  const seo = getPageSeo(route, locale);
  if (!seo) return fallback;
  const noIndex = seo.robots.includes("noindex");
  const noFollow = seo.robots.includes("nofollow");
  return {
    ...fallback,
    title: seo.title,
    description: seo.description,
    keywords: [seo.primaryKeyword, ...seo.secondaryKeywords].filter(Boolean),
    alternates: { ...(fallback.alternates ?? {}), canonical: seo.canonical || undefined },
    openGraph: { ...(fallback.openGraph ?? {}), title: seo.ogTitle || seo.title, description: seo.ogDescription || seo.description, images: seo.ogImage ? [seo.ogImage] : fallback.openGraph?.images },
    robots: { index: !noIndex, follow: !noFollow },
  };
}
