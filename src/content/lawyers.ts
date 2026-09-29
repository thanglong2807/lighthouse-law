export interface LawyerData {
  id: string;
  slug: string;
  name: { vi: string; en: string };
  initials: string;
  image: string;
  position: { vi: string; en: string };
  practiceAreas: { vi: string[]; en: string[] };
  office: string;
  email: string;
  phone: string;
  languages: string[];
  biography: { vi: string; en: string };
  education: { institution: string; degree: { vi: string; en: string }; year: string }[];
  memberships: { vi: string[]; en: string[] };
  representativeMatters: { vi: string[]; en: string[] };
}

export const lawyers: LawyerData[] = [
  {
    id: "1",
    slug: "vu-van-dung",
    name: { vi: "Vũ Văn Dũng", en: "Vu Van Dung" },
    initials: "VD",
    image: "/images/team/nguyen-van-a.jpg",
    position: { vi: "Luật sư điều hành", en: "Managing Lawyer" },
    practiceAreas: {
      vi: ["Luật doanh nghiệp", "Tư vấn đầu tư & kinh doanh", "Luật thuế"],
      en: ["Corporate Law", "Investment & Business", "Tax Law"],
    },
    office: "Ho Chi Minh City",
    email: "vu.van.dung@lighthouselaw.vn",
    phone: "0923927777",
    languages: ["Vietnamese", "English"],
    biography: {
      vi: "Luật sư Vũ Văn Dũng phụ trách tư vấn doanh nghiệp, đầu tư và tuân thủ pháp lý cho khách hàng của Lighthouse Law.",
      en: "Lawyer Vu Van Dung leads corporate, investment, and compliance advisory matters at Lighthouse Law.",
    },
    education: [
      {
        institution: "",
        degree: { vi: "Cử nhân Luật", en: "Bachelor of Laws (LL.B.)" },
        year: "",
      },
    ],
    memberships: {
      vi: ["Đoàn Luật sư TP. Hồ Chí Minh"],
      en: ["Ho Chi Minh City Bar Association"],
    },
    representativeMatters: {
      vi: [
        "Tư vấn cho doanh nghiệp về cơ cấu pháp lý và vận hành nội bộ",
        "Hỗ trợ nhà đầu tư hoàn thiện thủ tục thành lập doanh nghiệp tại Việt Nam",
        "Tư vấn hợp đồng và tuân thủ pháp lý cho dự án kinh doanh",
      ],
      en: [
        "Advised a business on legal structure and internal governance",
        "Assisted an investor with business establishment procedures in Vietnam",
        "Provided contract and compliance advisory for a business project",
      ],
    },
  },
  {
    id: "2",
    slug: "truong-giang",
    name: { vi: "Trường Giang", en: "Truong Giang" },
    initials: "TG",
    image: "/images/team/tran-thi-b.jpg",
    position: { vi: "Luật sư", en: "Lawyer" },
    practiceAreas: {
      vi: ["Sở hữu trí tuệ", "Soạn thảo hợp đồng", "Giải quyết tranh chấp"],
      en: ["Intellectual Property", "Contract Drafting", "Corporate Law"],
    },
    office: "Ho Chi Minh City",
    email: "truong.giang@lighthouselaw.vn",
    phone: "0912355969",
    languages: ["Vietnamese", "English", "French"],
    biography: {
      vi: "Luật sư Trường Giang phụ trách sở hữu trí tuệ, hợp đồng và tranh chấp thương mại.",
      en: "Lawyer Truong Giang handles intellectual property, contracts, and commercial disputes.",
    },
    education: [
      {
        institution: "",
        degree: { vi: "Thạc sĩ Luật", en: "Master of Laws (LL.M.)" },
        year: "",
      },
    ],
    memberships: {
      vi: ["Đoàn Luật sư TP. Hồ Chí Minh", "Hiệp hội Sở hữu trí tuệ Việt Nam"],
      en: ["Ho Chi Minh City Bar Association", "Vietnam Intellectual Property Association"],
    },
    representativeMatters: {
      vi: [
        "Tư vấn đăng ký và bảo hộ nhãn hiệu cho doanh nghiệp",
        "Soạn thảo và rà soát hợp đồng thương mại, hợp đồng dịch vụ",
        "Hỗ trợ xử lý tranh chấp liên quan đến quyền sở hữu trí tuệ",
      ],
      en: [
        "Advised on trademark registration and protection for businesses",
        "Drafted and reviewed commercial and service agreements",
        "Supported disputes involving intellectual property rights",
      ],
    },
  },
];

export function getLawyerBySlug(slug: string): LawyerData | undefined {
  return lawyers.find((l) => l.slug === slug);
}
