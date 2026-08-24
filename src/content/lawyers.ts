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

// TODO: Replace with verified lawyer information
export const lawyers: LawyerData[] = [
  {
    id: "1",
    slug: "nguyen-van-a",
    name: { vi: "Nguyễn Văn A", en: "Nguyen Van A" },
    initials: "NA",
    image: "/images/team/nguyen-van-a.jpg",
    position: { vi: "Luật sư điều hành", en: "Managing Partner" },
    practiceAreas: {
      vi: ["Luật doanh nghiệp", "Tư vấn đầu tư & kinh doanh", "Luật thuế"],
      en: ["Corporate Law", "Investment & Business", "Tax Law"],
    },
    office: "Ho Chi Minh City",
    email: "nguyen.van.a@lighthouselaw.vn",
    phone: "+84 28 1234 5678",
    languages: ["Vietnamese", "English"],
    biography: {
      // TODO: Replace with verified biography
      vi: "Luật sư Nguyễn Văn A có hơn 15 năm kinh nghiệm trong lĩnh vực luật doanh nghiệp và tư vấn đầu tư. Ông đã tư vấn cho nhiều doanh nghiệp trong và ngoài nước về các giao dịch đầu tư, tái cơ cấu doanh nghiệp và tuân thủ pháp luật.",
      en: "Attorney Nguyen Van A has over 15 years of experience in corporate law and investment advisory. He has advised numerous domestic and international enterprises on investment transactions, corporate restructuring, and regulatory compliance.",
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
        "Tư vấn cho một doanh nghiệp trong nước về tái cơ cấu thỏa thuận cổ đông",
        "Hỗ trợ nhà đầu tư nước ngoài thành lập công ty 100% vốn nước ngoài tại Việt Nam",
        "Tư vấn giao dịch mua bán sáp nhập cho một tập đoàn công nghệ",
      ],
      en: [
        "Advised a domestic enterprise on restructuring its shareholder arrangements",
        "Assisted a foreign investor in establishing a wholly foreign-owned enterprise in Vietnam",
        "Provided M&A advisory for a technology group",
      ],
    },
  },
  {
    id: "2",
    slug: "tran-thi-b",
    name: { vi: "Trần Thị B", en: "Tran Thi B" },
    initials: "TB",
    image: "/images/team/tran-thi-b.jpg",
    position: { vi: "Đối tác cao cấp", en: "Senior Partner" },
    practiceAreas: {
      vi: ["Sở hữu trí tuệ", "Soạn thảo hợp đồng", "Luật doanh nghiệp"],
      en: ["Intellectual Property", "Contract Drafting", "Corporate Law"],
    },
    office: "Ho Chi Minh City",
    email: "tran.thi.b@lighthouselaw.vn",
    phone: "+84 28 1234 5679",
    languages: ["Vietnamese", "English", "French"],
    biography: {
      vi: "Luật sư Trần Thị B chuyên về sở hữu trí tuệ và soạn thảo hợp đồng thương mại. Bà có kinh nghiệm sâu rộng trong việc đăng ký và bảo hộ nhãn hiệu, bằng sáng chế tại Việt Nam và quốc tế.",
      en: "Attorney Tran Thi B specializes in intellectual property and commercial contract drafting. She has extensive experience in trademark and patent registration and protection in Vietnam and internationally.",
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
        "Đăng ký bảo hộ nhãn hiệu cho một thương hiệu thời trang tại 5 quốc gia ASEAN",
        "Tư vấn và soạn thảo hợp đồng li-xăng công nghệ cho một công ty phần mềm",
        "Đại diện khách hàng trong vụ tranh chấp vi phạm quyền sở hữu trí tuệ",
      ],
      en: [
        "Registered trademark protection for a fashion brand across 5 ASEAN countries",
        "Advised on and drafted technology licensing agreements for a software company",
        "Represented a client in an intellectual property infringement dispute",
      ],
    },
  },
  {
    id: "3",
    slug: "le-van-c",
    name: { vi: "Lê Văn C", en: "Le Van C" },
    initials: "LC",
    image: "/images/team/le-van-c.jpg",
    position: { vi: "Đối tác", en: "Partner" },
    practiceAreas: {
      vi: ["Giải quyết tranh chấp", "Luật hình sự", "Luật dân sự"],
      en: ["Dispute Resolution", "Criminal Law", "Civil Law"],
    },
    office: "Ho Chi Minh City",
    email: "le.van.c@lighthouselaw.vn",
    phone: "+84 28 1234 5680",
    languages: ["Vietnamese", "English"],
    biography: {
      vi: "Luật sư Lê Văn C có kinh nghiệm phong phú trong giải quyết tranh chấp thương mại và đại diện tố tụng. Ông đã tham gia nhiều vụ án phức tạp tại các cấp tòa án và trọng tài.",
      en: "Attorney Le Van C has extensive experience in commercial dispute resolution and litigation representation. He has been involved in numerous complex cases at various court levels and arbitration tribunals.",
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
        "Đại diện cho bên nguyên trong vụ tranh chấp hợp đồng thương mại có giá trị lớn",
        "Bào chữa thành công trong vụ án hình sự về kinh tế",
        "Giải quyết tranh chấp bất động sản thông qua trọng tài thương mại",
      ],
      en: [
        "Represented the plaintiff in a high-value commercial contract dispute",
        "Successful defense in an economic criminal case",
        "Resolved a real estate dispute through commercial arbitration",
      ],
    },
  },
];

export function getLawyerBySlug(slug: string): LawyerData | undefined {
  return lawyers.find((l) => l.slug === slug);
}
