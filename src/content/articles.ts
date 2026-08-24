export interface ArticleData {
  id: string;
  slug: string;
  title: { vi: string; en: string };
  excerpt: { vi: string; en: string };
  image: string;
  category: string;
  author: string;
  authorSlug: string;
  publishedAt: string;
  readingTime: number;
  content?: { vi: string; en: string };
  seo?: { title?: { vi: string; en: string }; description?: { vi: string; en: string }; keywords?: string[] };
}

// TODO: Replace with real article content
export const articles: ArticleData[] = [
  {
    id: "1",
    slug: "huong-dan-thanh-lap-doanh-nghiep-2024",
    title: {
      vi: "Hướng dẫn thành lập doanh nghiệp tại Việt Nam năm 2024",
      en: "Guide to Establishing a Business in Vietnam in 2024",
    },
    excerpt: {
      vi: "Tìm hiểu quy trình và các bước cần thiết để thành lập doanh nghiệp tại Việt Nam, bao gồm các loại hình doanh nghiệp và yêu cầu pháp lý.",
      en: "Learn about the process and necessary steps to establish a business in Vietnam, including business entity types and legal requirements.",
    },
    image: "/images/articles/huong-dan-thanh-lap-doanh-nghiep.jpg",
    category: "corporate",
    author: "Nguyễn Văn A",
    authorSlug: "nguyen-van-a",
    publishedAt: "2024-03-15",
    readingTime: 8,
  },
  {
    id: "2",
    slug: "bao-ho-nhan-hieu-tai-viet-nam",
    title: {
      vi: "Bảo hộ nhãn hiệu tại Việt Nam: Những điều cần biết",
      en: "Trademark Protection in Vietnam: What You Need to Know",
    },
    excerpt: {
      vi: "Nhãn hiệu là tài sản trí tuệ quan trọng của doanh nghiệp. Bài viết giải thích quy trình đăng ký và bảo hộ nhãn hiệu tại Việt Nam.",
      en: "Trademarks are vital intellectual property for businesses. This article explains the registration and protection process in Vietnam.",
    },
    image: "/images/articles/bao-ho-nhan-hieu.jpg",
    category: "ip",
    author: "Trần Thị B",
    authorSlug: "tran-thi-b",
    publishedAt: "2024-02-20",
    readingTime: 6,
  },
  {
    id: "3",
    slug: "giai-quyet-tranh-chap-hop-dong",
    title: {
      vi: "Giải quyết tranh chấp hợp đồng thương mại hiệu quả",
      en: "Effective Commercial Contract Dispute Resolution",
    },
    excerpt: {
      vi: "Tổng quan các phương thức giải quyết tranh chấp hợp đồng thương mại tại Việt Nam: thương lượng, hòa giải, trọng tài và tòa án.",
      en: "Overview of commercial contract dispute resolution methods in Vietnam: negotiation, mediation, arbitration, and litigation.",
    },
    image: "/images/articles/giai-quyet-tranh-chap.jpg",
    category: "dispute",
    author: "Lê Văn C",
    authorSlug: "le-van-c",
    publishedAt: "2024-01-10",
    readingTime: 10,
  },
];

export const articleCategories = [
  "corporate",
  "ip",
  "dispute",
  "investment",
  "tax",
  "labor",
  "realestate",
] as const;

export function getArticleBySlug(slug: string): ArticleData | undefined {
  return articles.find((a) => a.slug === slug);
}
