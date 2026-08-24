// Services content for LIGHTHOUSE LAW
// Bilingual: Vietnamese (vi) and English (en)
// Each service includes full content for dedicated service pages

export interface BilingualText {
  vi: string;
  en: string;
}

export interface ServiceScopeItem {
  title: BilingualText;
  description: BilingualText;
}

export interface ServiceProcessStep {
  step: number;
  title: BilingualText;
  description: BilingualText;
}

export interface ServiceBenefit {
  title: BilingualText;
  description: BilingualText;
}

export interface ServiceFAQ {
  question: BilingualText;
  answer: BilingualText;
}

export interface Service {
  id: string;
  slug: string;
  icon: string;
  audiences: string[];
  keyTopics: string[];
  title: BilingualText;
  eyebrow: BilingualText;
  heroDescription: BilingualText;
  overviewTitle: BilingualText;
  overviewParagraphs: { vi: string[]; en: string[] };
  commonSituations: { vi: string[]; en: string[] };
  legalChallenges: { vi: string[]; en: string[] };
  scopeOfServices: ServiceScopeItem[];
  process: ServiceProcessStep[];
  benefits: ServiceBenefit[];
  representativeMatters: { vi: string[]; en: string[] };
  faqs: ServiceFAQ[];
  relatedServiceSlugs: string[];
}

export const services: Service[] = [
  // ─────────────────────────────────────────────
  // 1. Legal Consultation (Tư vấn pháp lý)
  // ─────────────────────────────────────────────
  {
    id: 'legal-consultation',
    slug: 'legal-consultation',
    icon: 'MessageSquare',
    audiences: ['individuals', 'businesses', 'startups', 'investors'],
    keyTopics: [
      'legal advisory',
      'compliance',
      'risk assessment',
      'regulatory guidance',
    ],
    title: {
      vi: 'Tư vấn pháp lý',
      en: 'Legal Consultation',
    },
    eyebrow: {
      vi: 'Dịch vụ tư vấn',
      en: 'Advisory Services',
    },
    heroDescription: {
      vi: 'Chúng tôi cung cấp dịch vụ tư vấn pháp lý toàn diện, giúp cá nhân và doanh nghiệp hiểu rõ quyền lợi, nghĩa vụ pháp lý và đưa ra quyết định sáng suốt trong mọi tình huống.',
      en: 'We provide comprehensive legal advisory services, helping individuals and businesses understand their rights, legal obligations, and make informed decisions in every situation.',
    },
    overviewTitle: {
      vi: 'Tư vấn pháp lý chuyên sâu cho mọi nhu cầu',
      en: 'Expert Legal Advice for Every Need',
    },
    overviewParagraphs: {
      vi: [
        'Tại Lighthouse Law, chúng tôi tin rằng tư vấn pháp lý hiệu quả là nền tảng cho mọi quyết định quan trọng. Đội ngũ luật sư của chúng tôi phân tích kỹ lưỡng từng tình huống, cung cấp đánh giá pháp lý rõ ràng và đề xuất giải pháp phù hợp với hoàn cảnh cụ thể của khách hàng.',
        'Chúng tôi hỗ trợ khách hàng trong các lĩnh vực đa dạng từ tuân thủ quy định pháp luật, đánh giá rủi ro pháp lý, đến xây dựng chiến lược pháp lý dài hạn. Mỗi lời khuyên đều dựa trên sự am hiểu sâu sắc về luật pháp Việt Nam và thực tiễn kinh doanh.',
        'Dù bạn đang khởi nghiệp, mở rộng kinh doanh hay đối mặt với vấn đề pháp lý cá nhân, đội ngũ tư vấn của chúng tôi luôn sẵn sàng đồng hành và bảo vệ quyền lợi hợp pháp của bạn.',
      ],
      en: [
        'At Lighthouse Law, we believe effective legal counsel is the foundation for every important decision. Our team of lawyers thoroughly analyzes each situation, provides clear legal assessments, and proposes solutions tailored to each client\'s specific circumstances.',
        'We support clients across diverse areas from regulatory compliance, legal risk assessment, to building long-term legal strategies. Every piece of advice is grounded in deep understanding of Vietnamese law and business practice.',
        'Whether you are starting a business, expanding operations, or facing a personal legal matter, our advisory team is always ready to accompany and protect your legitimate interests.',
      ],
    },
    commonSituations: {
      vi: [
        'Cần hiểu rõ quyền và nghĩa vụ pháp lý trước khi ký kết hợp đồng quan trọng',
        'Doanh nghiệp cần đánh giá rủi ro pháp lý khi mở rộng hoạt động kinh doanh',
        'Cá nhân cần tư vấn về quyền lợi trong tranh chấp tài sản hoặc hợp đồng',
        'Nhà đầu tư nước ngoài cần tìm hiểu khung pháp lý tại Việt Nam',
        'Doanh nghiệp cần rà soát việc tuân thủ các quy định pháp luật hiện hành',
      ],
      en: [
        'Need to understand legal rights and obligations before signing important contracts',
        'Businesses need legal risk assessment when expanding operations',
        'Individuals need advice on rights in property or contract disputes',
        'Foreign investors need to understand the legal framework in Vietnam',
        'Businesses need compliance review of current regulatory requirements',
      ],
    },
    legalChallenges: {
      vi: [
        'Hệ thống pháp luật Việt Nam thường xuyên thay đổi và cập nhật, đòi hỏi sự nắm bắt kịp thời',
        'Nhiều quy định pháp luật chồng chéo giữa các văn bản, gây khó khăn trong việc áp dụng',
        'Sự khác biệt giữa quy định trên giấy và thực tiễn thi hành tại các địa phương',
        'Rào cản ngôn ngữ và văn hóa pháp lý đối với nhà đầu tư nước ngoài',
      ],
      en: [
        'Vietnamese legal system frequently changes and updates, requiring timely awareness',
        'Many overlapping regulations across different legal documents create application difficulties',
        'Differences between written regulations and actual enforcement practices across localities',
        'Language and legal culture barriers for foreign investors',
      ],
    },
    scopeOfServices: [
      {
        title: {
          vi: 'Tư vấn pháp luật tổng quát',
          en: 'General Legal Advisory',
        },
        description: {
          vi: 'Cung cấp ý kiến pháp lý về các vấn đề pháp luật đa dạng, từ quyền sở hữu, hợp đồng đến tuân thủ quy định.',
          en: 'Providing legal opinions on diverse legal matters, from ownership rights and contracts to regulatory compliance.',
        },
      },
      {
        title: {
          vi: 'Đánh giá rủi ro pháp lý',
          en: 'Legal Risk Assessment',
        },
        description: {
          vi: 'Phân tích và đánh giá các rủi ro pháp lý tiềm ẩn trong hoạt động kinh doanh hoặc giao dịch cá nhân.',
          en: 'Analyzing and evaluating potential legal risks in business operations or personal transactions.',
        },
      },
      {
        title: {
          vi: 'Tư vấn tuân thủ',
          en: 'Compliance Advisory',
        },
        description: {
          vi: 'Hỗ trợ doanh nghiệp xây dựng và duy trì hệ thống tuân thủ pháp luật, bao gồm nội quy, quy chế và chính sách nội bộ.',
          en: 'Supporting businesses in building and maintaining legal compliance systems, including internal rules, regulations, and policies.',
        },
      },
      {
        title: {
          vi: 'Tư vấn giao dịch',
          en: 'Transaction Advisory',
        },
        description: {
          vi: 'Tư vấn pháp lý cho các giao dịch mua bán, sáp nhập, hợp tác kinh doanh và đầu tư.',
          en: 'Legal advisory for sale and purchase transactions, mergers, business cooperation, and investments.',
        },
      },
      {
        title: {
          vi: 'Soạn thảo ý kiến pháp lý',
          en: 'Legal Opinion Drafting',
        },
        description: {
          vi: 'Chuẩn bị ý kiến pháp lý chính thức cho các giao dịch, dự án và yêu cầu của cơ quan nhà nước.',
          en: 'Preparing formal legal opinions for transactions, projects, and government authority requirements.',
        },
      },
      {
        title: {
          vi: 'Đào tạo pháp lý nội bộ',
          en: 'In-house Legal Training',
        },
        description: {
          vi: 'Tổ chức các buổi đào tạo pháp lý cho nhân viên doanh nghiệp về các quy định liên quan đến hoạt động kinh doanh.',
          en: 'Organizing legal training sessions for business employees on regulations relevant to business operations.',
        },
      },
    ],
    process: [
      {
        step: 1,
        title: { vi: 'Tiếp nhận yêu cầu', en: 'Intake & Assessment' },
        description: {
          vi: 'Lắng nghe và tìm hiểu chi tiết vấn đề pháp lý của khách hàng, thu thập tài liệu và thông tin liên quan.',
          en: 'Listening and understanding the client\'s legal issue in detail, gathering relevant documents and information.',
        },
      },
      {
        step: 2,
        title: { vi: 'Nghiên cứu & phân tích', en: 'Research & Analysis' },
        description: {
          vi: 'Nghiên cứu các quy định pháp luật áp dụng, phân tích án lệ và thực tiễn thi hành liên quan.',
          en: 'Researching applicable legal regulations, analyzing case law and relevant enforcement practices.',
        },
      },
      {
        step: 3,
        title: { vi: 'Đề xuất giải pháp', en: 'Solution Proposal' },
        description: {
          vi: 'Trình bày phân tích pháp lý chi tiết và đề xuất các phương án giải quyết cùng đánh giá ưu nhược điểm.',
          en: 'Presenting detailed legal analysis and proposing resolution options with evaluation of pros and cons.',
        },
      },
      {
        step: 4,
        title: { vi: 'Triển khai', en: 'Implementation' },
        description: {
          vi: 'Hỗ trợ khách hàng thực hiện giải pháp đã chọn, chuẩn bị tài liệu pháp lý cần thiết.',
          en: 'Supporting the client in implementing the chosen solution, preparing necessary legal documents.',
        },
      },
      {
        step: 5,
        title: { vi: 'Theo dõi & hỗ trợ', en: 'Follow-up & Support' },
        description: {
          vi: 'Tiếp tục theo dõi tiến trình và hỗ trợ khách hàng xử lý các vấn đề phát sinh.',
          en: 'Continuing to monitor progress and support the client in handling arising issues.',
        },
      },
    ],
    benefits: [
      {
        title: { vi: 'Tiết kiệm chi phí', en: 'Cost Savings' },
        description: {
          vi: 'Phòng ngừa rủi ro pháp lý từ sớm giúp tránh chi phí kiện tụng và bồi thường tốn kém.',
          en: 'Early prevention of legal risks helps avoid costly litigation and compensation expenses.',
        },
      },
      {
        title: { vi: 'Quyết định sáng suốt', en: 'Informed Decisions' },
        description: {
          vi: 'Hiểu rõ khung pháp lý giúp đưa ra quyết định kinh doanh và cá nhân có cơ sở vững chắc.',
          en: 'Understanding the legal framework enables well-founded business and personal decisions.',
        },
      },
      {
        title: { vi: 'Bảo vệ quyền lợi', en: 'Rights Protection' },
        description: {
          vi: 'Đảm bảo quyền và lợi ích hợp pháp được bảo vệ đầy đủ trong mọi giao dịch và quan hệ pháp lý.',
          en: 'Ensuring legitimate rights and interests are fully protected in all transactions and legal relationships.',
        },
      },
      {
        title: { vi: 'An tâm kinh doanh', en: 'Business Confidence' },
        description: {
          vi: 'Hoạt động kinh doanh tuân thủ pháp luật, giảm thiểu rủi ro bị xử phạt hành chính hay tranh chấp.',
          en: 'Business operations in legal compliance, minimizing risks of administrative penalties or disputes.',
        },
      },
    ],
    representativeMatters: {
      vi: [
        'Tư vấn cho một tập đoàn công nghệ về cấu trúc pháp lý tối ưu khi thành lập ba công ty con tại Việt Nam.',
        'Hỗ trợ nhà đầu tư Nhật Bản đánh giá pháp lý toàn diện trước khi mua lại 40% cổ phần một doanh nghiệp sản xuất.',
        'Tư vấn cho một doanh nghiệp bán lẻ về tuân thủ quy định bảo vệ dữ liệu cá nhân theo Nghị định 13/2023.',
        'Xây dựng chương trình tuân thủ pháp luật toàn diện cho một công ty dịch vụ tài chính.',
      ],
      en: [
        'Advised a technology group on optimal legal structure for establishing three subsidiaries in Vietnam.',
        'Assisted a Japanese investor in comprehensive legal due diligence before acquiring a 40% stake in a manufacturing company.',
        'Advised a retail business on compliance with personal data protection regulations under Decree 13/2023.',
        'Developed a comprehensive legal compliance program for a financial services company.',
      ],
    },
    faqs: [
      {
        question: {
          vi: 'Chi phí tư vấn pháp lý ban đầu là bao nhiêu?',
          en: 'What is the cost of an initial legal consultation?',
        },
        answer: {
          vi: 'Chúng tôi cung cấp buổi tư vấn ban đầu miễn phí (30 phút) để đánh giá sơ bộ vấn đề pháp lý của bạn. Sau đó, phí tư vấn sẽ được thông báo rõ ràng dựa trên mức độ phức tạp và phạm vi công việc.',
          en: 'We offer a complimentary initial consultation (30 minutes) to preliminarily assess your legal issue. Thereafter, advisory fees will be clearly communicated based on complexity and scope of work.',
        },
      },
      {
        question: {
          vi: 'Tôi có thể tư vấn trực tuyến không?',
          en: 'Can I receive consultation online?',
        },
        answer: {
          vi: 'Có, chúng tôi cung cấp dịch vụ tư vấn pháp lý qua video call, điện thoại hoặc email. Hình thức tư vấn trực tuyến đặc biệt phù hợp với khách hàng ở xa hoặc nhà đầu tư nước ngoài.',
          en: 'Yes, we provide legal consultation via video call, phone, or email. Online consultation is particularly suitable for remote clients or foreign investors.',
        },
      },
      {
        question: {
          vi: 'Thông tin tư vấn có được bảo mật không?',
          en: 'Is consultation information kept confidential?',
        },
        answer: {
          vi: 'Tuyệt đối. Mọi thông tin khách hàng chia sẻ trong quá trình tư vấn đều được bảo mật nghiêm ngặt theo quy tắc đạo đức nghề nghiệp luật sư và quy định pháp luật về bảo mật thông tin.',
          en: 'Absolutely. All information shared during consultation is strictly confidential in accordance with professional ethics rules for lawyers and legal regulations on information confidentiality.',
        },
      },
      {
        question: {
          vi: 'Lighthouse Law có tư vấn bằng tiếng Anh không?',
          en: 'Does Lighthouse Law provide consultation in English?',
        },
        answer: {
          vi: 'Có, đội ngũ luật sư của chúng tôi có thể tư vấn bằng tiếng Việt và tiếng Anh. Chúng tôi cũng hỗ trợ dịch thuật tài liệu pháp lý khi cần thiết.',
          en: 'Yes, our team of lawyers can provide consultation in both Vietnamese and English. We also support legal document translation when needed.',
        },
      },
    ],
    relatedServiceSlugs: ['contract-drafting-review', 'corporate-law', 'investment-business'],
  },

  // ─────────────────────────────────────────────
  // 2. Intellectual Property (Sở hữu trí tuệ)
  // ─────────────────────────────────────────────
  {
    id: 'intellectual-property',
    slug: 'intellectual-property',
    icon: 'Lightbulb',
    audiences: ['businesses', 'startups', 'creators', 'inventors'],
    keyTopics: [
      'trademarks',
      'patents',
      'copyright',
      'trade secrets',
      'IP enforcement',
    ],
    title: {
      vi: 'Sở hữu trí tuệ',
      en: 'Intellectual Property',
    },
    eyebrow: {
      vi: 'Bảo vệ tài sản trí tuệ',
      en: 'IP Protection',
    },
    heroDescription: {
      vi: 'Chúng tôi bảo vệ tài sản trí tuệ của bạn thông qua đăng ký, quản lý và thực thi quyền sở hữu trí tuệ một cách hiệu quả tại Việt Nam và quốc tế.',
      en: 'We protect your intellectual property through effective registration, management, and enforcement of IP rights in Vietnam and internationally.',
    },
    overviewTitle: {
      vi: 'Bảo vệ giá trị sáng tạo và thương hiệu của bạn',
      en: 'Protecting Your Creative Value and Brand',
    },
    overviewParagraphs: {
      vi: [
        'Trong nền kinh tế tri thức hiện nay, tài sản trí tuệ là một trong những tài sản có giá trị nhất của doanh nghiệp. Lighthouse Law cung cấp dịch vụ sở hữu trí tuệ toàn diện, từ tư vấn chiến lược bảo hộ, đăng ký nhãn hiệu và sáng chế, đến xử lý vi phạm và tranh chấp.',
        'Đội ngũ luật sư chuyên về sở hữu trí tuệ của chúng tôi có kinh nghiệm sâu rộng trong việc làm việc với Cục Sở hữu trí tuệ Việt Nam, các cơ quan thực thi và hệ thống đăng ký quốc tế. Chúng tôi hiểu rằng mỗi loại tài sản trí tuệ cần một chiến lược bảo hộ riêng biệt.',
      ],
      en: [
        'In today\'s knowledge economy, intellectual property is among a business\'s most valuable assets. Lighthouse Law provides comprehensive IP services, from protection strategy advisory and trademark and patent registration to infringement handling and dispute resolution.',
        'Our IP-specialized legal team has extensive experience working with the National Office of Intellectual Property of Vietnam, enforcement agencies, and international registration systems. We understand that each type of intellectual property requires a distinct protection strategy.',
      ],
    },
    commonSituations: {
      vi: [
        'Doanh nghiệp cần đăng ký nhãn hiệu trước khi ra mắt sản phẩm mới',
        'Phát hiện đối thủ sử dụng nhãn hiệu hoặc kiểu dáng tương tự gây nhầm lẫn',
        'Startup cần bảo hộ sáng chế cho công nghệ mới phát triển',
        'Doanh nghiệp muốn mở rộng bảo hộ nhãn hiệu ra thị trường quốc tế',
      ],
      en: [
        'Business needs trademark registration before launching a new product',
        'Discovered competitor using confusingly similar trademark or design',
        'Startup needs patent protection for newly developed technology',
        'Business wants to extend trademark protection to international markets',
      ],
    },
    legalChallenges: {
      vi: [
        'Quy trình đăng ký sở hữu trí tuệ tại Việt Nam phức tạp và kéo dài',
        'Tình trạng xâm phạm quyền sở hữu trí tuệ phổ biến, đặc biệt trên nền tảng trực tuyến',
        'Khó khăn trong việc chứng minh và định lượng thiệt hại do vi phạm sở hữu trí tuệ',
      ],
      en: [
        'IP registration process in Vietnam is complex and lengthy',
        'IP infringement is widespread, especially on online platforms',
        'Difficulty in proving and quantifying damages from IP violations',
      ],
    },
    scopeOfServices: [
      {
        title: { vi: 'Đăng ký nhãn hiệu', en: 'Trademark Registration' },
        description: {
          vi: 'Tra cứu, đánh giá khả năng bảo hộ và thực hiện đăng ký nhãn hiệu tại Việt Nam và quốc tế thông qua hệ thống Madrid.',
          en: 'Searching, assessing protectability, and conducting trademark registration in Vietnam and internationally through the Madrid System.',
        },
      },
      {
        title: { vi: 'Đăng ký sáng chế', en: 'Patent Registration' },
        description: {
          vi: 'Soạn thảo bản mô tả sáng chế, nộp đơn và theo dõi quy trình cấp bằng sáng chế và giải pháp hữu ích.',
          en: 'Drafting patent descriptions, filing applications, and monitoring the patent and utility model granting process.',
        },
      },
      {
        title: { vi: 'Bảo hộ quyền tác giả', en: 'Copyright Protection' },
        description: {
          vi: 'Đăng ký quyền tác giả cho tác phẩm văn học, nghệ thuật, phần mềm và các sáng tạo có bản quyền khác.',
          en: 'Registering copyright for literary, artistic works, software, and other copyrightable creations.',
        },
      },
      {
        title: { vi: 'Xử lý vi phạm', en: 'Infringement Enforcement' },
        description: {
          vi: 'Phát hiện, thu thập chứng cứ và thực hiện các biện pháp xử lý vi phạm quyền sở hữu trí tuệ qua hành chính, dân sự hoặc hình sự.',
          en: 'Detecting, collecting evidence, and implementing IP infringement enforcement measures through administrative, civil, or criminal channels.',
        },
      },
      {
        title: { vi: 'Quản lý danh mục IP', en: 'IP Portfolio Management' },
        description: {
          vi: 'Quản lý, gia hạn và tối ưu hóa danh mục tài sản trí tuệ của doanh nghiệp.',
          en: 'Managing, renewing, and optimizing a business\'s intellectual property portfolio.',
        },
      },
      {
        title: { vi: 'Chuyển giao & li-xăng', en: 'Assignment & Licensing' },
        description: {
          vi: 'Tư vấn và soạn thảo hợp đồng chuyển nhượng, chuyển giao quyền sử dụng và hợp đồng li-xăng.',
          en: 'Advising and drafting assignment agreements, use rights transfers, and licensing contracts.',
        },
      },
    ],
    process: [
      {
        step: 1,
        title: { vi: 'Đánh giá tài sản IP', en: 'IP Asset Assessment' },
        description: {
          vi: 'Xác định và đánh giá tất cả tài sản trí tuệ cần bảo hộ, xây dựng chiến lược bảo vệ phù hợp.',
          en: 'Identifying and evaluating all IP assets requiring protection, developing appropriate protection strategy.',
        },
      },
      {
        step: 2,
        title: { vi: 'Tra cứu & phân tích', en: 'Search & Analysis' },
        description: {
          vi: 'Tra cứu cơ sở dữ liệu sở hữu trí tuệ, phân tích khả năng bảo hộ và rủi ro xung đột.',
          en: 'Searching IP databases, analyzing protectability and conflict risks.',
        },
      },
      {
        step: 3,
        title: { vi: 'Nộp đơn đăng ký', en: 'Filing Application' },
        description: {
          vi: 'Chuẩn bị và nộp hồ sơ đăng ký đầy đủ, theo dõi và xử lý các yêu cầu bổ sung từ cơ quan.',
          en: 'Preparing and filing complete registration dossiers, monitoring and handling additional requests from authorities.',
        },
      },
      {
        step: 4,
        title: { vi: 'Bảo vệ & thực thi', en: 'Protection & Enforcement' },
        description: {
          vi: 'Giám sát thị trường, phát hiện vi phạm và thực hiện các biện pháp bảo vệ quyền sở hữu trí tuệ.',
          en: 'Market surveillance, detecting infringements, and implementing IP protection measures.',
        },
      },
    ],
    benefits: [
      {
        title: { vi: 'Bảo vệ thương hiệu', en: 'Brand Protection' },
        description: {
          vi: 'Ngăn chặn việc sử dụng trái phép nhãn hiệu, bảo vệ uy tín và giá trị thương hiệu của doanh nghiệp.',
          en: 'Preventing unauthorized trademark use, protecting business reputation and brand value.',
        },
      },
      {
        title: { vi: 'Lợi thế cạnh tranh', en: 'Competitive Advantage' },
        description: {
          vi: 'Độc quyền khai thác sáng chế và kiểu dáng, tạo rào cản gia nhập thị trường cho đối thủ.',
          en: 'Exclusive exploitation of patents and designs, creating market entry barriers for competitors.',
        },
      },
      {
        title: { vi: 'Giá trị tài sản', en: 'Asset Value' },
        description: {
          vi: 'Tài sản trí tuệ được bảo hộ có thể được định giá, chuyển nhượng hoặc sử dụng làm tài sản đảm bảo.',
          en: 'Protected intellectual property can be valued, transferred, or used as secured assets.',
        },
      },
      {
        title: { vi: 'Mở rộng quốc tế', en: 'International Expansion' },
        description: {
          vi: 'Bảo hộ IP quốc tế giúp doanh nghiệp tự tin khi mở rộng ra thị trường nước ngoài.',
          en: 'International IP protection gives businesses confidence when expanding to foreign markets.',
        },
      },
    ],
    representativeMatters: {
      vi: [
        'Đăng ký thành công nhãn hiệu cho một chuỗi cà phê Việt Nam tại 12 quốc gia thông qua hệ thống Madrid.',
        'Xử lý vi phạm nhãn hiệu quy mô lớn cho một thương hiệu thời trang, thu hồi và tiêu hủy hàng ngàn sản phẩm giả mạo.',
        'Tư vấn chiến lược sở hữu trí tuệ toàn diện cho một công ty công nghệ sinh học, bao gồm 8 đơn sáng chế.',
      ],
      en: [
        'Successfully registered trademarks for a Vietnamese coffee chain in 12 countries through the Madrid System.',
        'Handled large-scale trademark infringement for a fashion brand, seizing and destroying thousands of counterfeit products.',
        'Advised on comprehensive IP strategy for a biotechnology company, including 8 patent applications.',
      ],
    },
    faqs: [
      {
        question: {
          vi: 'Đăng ký nhãn hiệu mất bao lâu?',
          en: 'How long does trademark registration take?',
        },
        answer: {
          vi: 'Tại Việt Nam, quy trình đăng ký nhãn hiệu thường mất từ 12-18 tháng. Tuy nhiên, quyền ưu tiên được xác lập từ ngày nộp đơn hợp lệ.',
          en: 'In Vietnam, the trademark registration process typically takes 12-18 months. However, priority rights are established from the valid filing date.',
        },
      },
      {
        question: {
          vi: 'Tôi cần bảo hộ loại sở hữu trí tuệ nào?',
          en: 'What type of IP protection do I need?',
        },
        answer: {
          vi: 'Tùy thuộc vào tài sản trí tuệ của bạn: nhãn hiệu cho tên thương hiệu và logo, sáng chế cho phát minh kỹ thuật, quyền tác giả cho tác phẩm sáng tạo, và bí mật kinh doanh cho thông tin cạnh tranh. Chúng tôi sẽ tư vấn chiến lược bảo hộ phù hợp nhất.',
          en: 'It depends on your IP assets: trademarks for brand names and logos, patents for technical inventions, copyright for creative works, and trade secrets for competitive information. We will advise on the most appropriate protection strategy.',
        },
      },
      {
        question: {
          vi: 'Phải làm gì khi phát hiện bị vi phạm sở hữu trí tuệ?',
          en: 'What to do when discovering IP infringement?',
        },
        answer: {
          vi: 'Bước đầu tiên là thu thập và bảo toàn chứng cứ vi phạm. Sau đó, chúng tôi sẽ đánh giá và đề xuất phương thức xử lý phù hợp nhất, có thể bao gồm cảnh cáo, yêu cầu hành chính, hoặc khởi kiện dân sự.',
          en: 'The first step is to collect and preserve infringement evidence. Then, we will evaluate and recommend the most appropriate enforcement approach, which may include warning letters, administrative requests, or civil litigation.',
        },
      },
    ],
    relatedServiceSlugs: ['corporate-law', 'contract-drafting-review', 'dispute-resolution'],
  },

  // ─────────────────────────────────────────────
  // 3. Investment & Business (Tư vấn đầu tư & kinh doanh)
  // ─────────────────────────────────────────────
  {
    id: 'investment-business',
    slug: 'investment-business',
    icon: 'TrendingUp',
    audiences: ['investors', 'businesses', 'startups', 'foreign-investors'],
    keyTopics: [
      'foreign investment',
      'business licensing',
      'M&A',
      'market entry',
      'joint ventures',
    ],
    title: {
      vi: 'Tư vấn đầu tư & kinh doanh',
      en: 'Investment & Business',
    },
    eyebrow: {
      vi: 'Đầu tư & kinh doanh',
      en: 'Investment Advisory',
    },
    heroDescription: {
      vi: 'Chúng tôi hỗ trợ nhà đầu tư trong và ngoài nước thiết lập, vận hành và mở rộng hoạt động kinh doanh tại Việt Nam, đảm bảo tuân thủ đầy đủ các quy định pháp luật về đầu tư.',
      en: 'We support domestic and foreign investors in establishing, operating, and expanding business activities in Vietnam, ensuring full compliance with investment regulations.',
    },
    overviewTitle: {
      vi: 'Đối tác pháp lý tin cậy cho hành trình đầu tư',
      en: 'Your Trusted Legal Partner for Investment',
    },
    overviewParagraphs: {
      vi: [
        'Việt Nam là điểm đến đầu tư hấp dẫn với tốc độ tăng trưởng kinh tế ổn định và môi trường kinh doanh ngày càng cải thiện. Tuy nhiên, khung pháp lý về đầu tư tại Việt Nam có những đặc thù riêng đòi hỏi sự am hiểu chuyên sâu.',
        'Lighthouse Law đồng hành cùng nhà đầu tư từ giai đoạn nghiên cứu thị trường, lựa chọn hình thức đầu tư phù hợp, đến hoàn tất thủ tục cấp phép và hỗ trợ vận hành. Chúng tôi cấu trúc giao dịch để bảo vệ quyền lợi của bạn và tối ưu hóa lợi ích đầu tư.',
      ],
      en: [
        'Vietnam is an attractive investment destination with stable economic growth and an increasingly improving business environment. However, Vietnam\'s investment legal framework has unique characteristics requiring specialized understanding.',
        'Lighthouse Law accompanies investors from the market research stage, selecting appropriate investment forms, to completing licensing procedures and providing operational support. We structure transactions to protect your interests and optimize investment benefits.',
      ],
    },
    commonSituations: {
      vi: [
        'Nhà đầu tư nước ngoài muốn thành lập doanh nghiệp 100% vốn nước ngoài tại Việt Nam',
        'Doanh nghiệp cần xin giấy phép đầu tư cho dự án mới',
        'Nhà đầu tư muốn mua lại hoặc góp vốn vào doanh nghiệp Việt Nam',
        'Doanh nghiệp cần tái cấu trúc hoạt động đầu tư và kinh doanh',
        'Nhà đầu tư cần tìm hiểu các ưu đãi đầu tư tại các khu kinh tế, khu công nghiệp',
      ],
      en: [
        'Foreign investor wants to establish a wholly foreign-owned enterprise in Vietnam',
        'Business needs investment license for a new project',
        'Investor wants to acquire or contribute capital to a Vietnamese company',
        'Business needs to restructure investment and business operations',
        'Investor needs to understand investment incentives in economic zones and industrial parks',
      ],
    },
    legalChallenges: {
      vi: [
        'Danh mục ngành nghề kinh doanh có điều kiện và hạn chế đối với nhà đầu tư nước ngoài',
        'Thủ tục cấp phép đầu tư phức tạp, đòi hỏi nhiều cơ quan phê duyệt',
        'Quy định về chuyển lợi nhuận ra nước ngoài và quản lý ngoại hối',
        'Sự khác biệt trong thực thi giữa các tỉnh thành và khu vực',
      ],
      en: [
        'Conditional business sectors and restrictions for foreign investors',
        'Complex investment licensing procedures requiring multiple authority approvals',
        'Regulations on profit repatriation and foreign exchange management',
        'Enforcement differences between provinces and regions',
      ],
    },
    scopeOfServices: [
      {
        title: { vi: 'Thành lập doanh nghiệp FDI', en: 'FDI Enterprise Establishment' },
        description: {
          vi: 'Hỗ trợ toàn diện quy trình thành lập doanh nghiệp có vốn đầu tư nước ngoài, từ chọn hình thức đầu tư đến hoàn tất đăng ký.',
          en: 'Comprehensive support for establishing foreign-invested enterprises, from selecting investment form to completing registration.',
        },
      },
      {
        title: { vi: 'Cấp phép đầu tư', en: 'Investment Licensing' },
        description: {
          vi: 'Xin cấp, điều chỉnh giấy chứng nhận đăng ký đầu tư và các giấy phép con liên quan.',
          en: 'Obtaining and adjusting investment registration certificates and related sub-licenses.',
        },
      },
      {
        title: { vi: 'Mua bán & sáp nhập (M&A)', en: 'Mergers & Acquisitions' },
        description: {
          vi: 'Tư vấn và thực hiện các giao dịch M&A, bao gồm thẩm định pháp lý, đàm phán và hoàn tất giao dịch.',
          en: 'Advising and executing M&A transactions, including legal due diligence, negotiation, and deal completion.',
        },
      },
      {
        title: { vi: 'Liên doanh & hợp tác', en: 'Joint Ventures & Cooperation' },
        description: {
          vi: 'Cấu trúc và thành lập liên doanh, soạn thảo hợp đồng hợp tác kinh doanh (BCC).',
          en: 'Structuring and establishing joint ventures, drafting business cooperation contracts (BCC).',
        },
      },
      {
        title: { vi: 'Ưu đãi đầu tư', en: 'Investment Incentives' },
        description: {
          vi: 'Tư vấn và hỗ trợ áp dụng các ưu đãi về thuế, đất đai và tài chính cho dự án đầu tư.',
          en: 'Advising and supporting application of tax, land, and financial incentives for investment projects.',
        },
      },
      {
        title: { vi: 'Tái cấu trúc đầu tư', en: 'Investment Restructuring' },
        description: {
          vi: 'Tư vấn tái cấu trúc, chuyển đổi hình thức đầu tư và tối ưu hóa cấu trúc doanh nghiệp.',
          en: 'Advising on restructuring, converting investment forms, and optimizing corporate structure.',
        },
      },
    ],
    process: [
      {
        step: 1,
        title: { vi: 'Tìm hiểu nhu cầu', en: 'Needs Assessment' },
        description: {
          vi: 'Tìm hiểu mục tiêu đầu tư, ngành nghề kinh doanh dự kiến và yêu cầu cụ thể của nhà đầu tư.',
          en: 'Understanding investment objectives, intended business sectors, and specific investor requirements.',
        },
      },
      {
        step: 2,
        title: { vi: 'Phân tích pháp lý', en: 'Legal Analysis' },
        description: {
          vi: 'Nghiên cứu quy định pháp luật áp dụng, đánh giá khả thi và đề xuất cấu trúc đầu tư tối ưu.',
          en: 'Researching applicable regulations, assessing feasibility, and proposing optimal investment structure.',
        },
      },
      {
        step: 3,
        title: { vi: 'Chuẩn bị hồ sơ', en: 'Dossier Preparation' },
        description: {
          vi: 'Soạn thảo và chuẩn bị đầy đủ hồ sơ pháp lý cần thiết cho việc cấp phép đầu tư.',
          en: 'Drafting and preparing complete legal dossiers required for investment licensing.',
        },
      },
      {
        step: 4,
        title: { vi: 'Nộp hồ sơ & theo dõi', en: 'Filing & Monitoring' },
        description: {
          vi: 'Nộp hồ sơ tại cơ quan có thẩm quyền, theo dõi tiến trình và xử lý các yêu cầu bổ sung.',
          en: 'Filing with competent authorities, monitoring progress, and handling additional requirements.',
        },
      },
      {
        step: 5,
        title: { vi: 'Hỗ trợ sau cấp phép', en: 'Post-licensing Support' },
        description: {
          vi: 'Hỗ trợ các thủ tục sau cấp phép như đăng ký thuế, mở tài khoản ngân hàng, thuê lao động.',
          en: 'Supporting post-licensing procedures such as tax registration, bank account opening, and hiring.',
        },
      },
    ],
    benefits: [
      {
        title: { vi: 'Gia nhập thị trường nhanh', en: 'Fast Market Entry' },
        description: {
          vi: 'Quy trình chuẩn bị chuyên nghiệp giúp rút ngắn thời gian cấp phép và bắt đầu hoạt động.',
          en: 'Professional preparation process shortens licensing time and speeds up operational commencement.',
        },
      },
      {
        title: { vi: 'Cấu trúc tối ưu', en: 'Optimal Structure' },
        description: {
          vi: 'Lựa chọn hình thức đầu tư và cấu trúc doanh nghiệp phù hợp nhất với mục tiêu kinh doanh.',
          en: 'Selecting the most suitable investment form and corporate structure for business objectives.',
        },
      },
      {
        title: { vi: 'Tận dụng ưu đãi', en: 'Maximizing Incentives' },
        description: {
          vi: 'Xác định và áp dụng tất cả ưu đãi đầu tư mà dự án đủ điều kiện được hưởng.',
          en: 'Identifying and applying all investment incentives the project is eligible for.',
        },
      },
      {
        title: { vi: 'Tuân thủ bền vững', en: 'Sustainable Compliance' },
        description: {
          vi: 'Xây dựng nền tảng pháp lý vững chắc cho hoạt động kinh doanh lâu dài tại Việt Nam.',
          en: 'Building a solid legal foundation for long-term business operations in Vietnam.',
        },
      },
    ],
    representativeMatters: {
      vi: [
        'Tư vấn cho một tập đoàn sản xuất Hàn Quốc thành lập nhà máy 50 triệu USD tại khu công nghiệp Bình Dương.',
        'Hỗ trợ quỹ đầu tư Singapore hoàn tất giao dịch mua 35% cổ phần một công ty logistics Việt Nam.',
        'Tư vấn tái cấu trúc cho một doanh nghiệp FDI chuyển đổi từ liên doanh sang 100% vốn nước ngoài.',
        'Xin cấp phép đầu tư cho dự án phát triển bất động sản thương mại trị giá 200 triệu USD.',
      ],
      en: [
        'Advised a Korean manufacturing group on establishing a USD 50 million factory in Binh Duong Industrial Park.',
        'Assisted a Singapore investment fund in completing acquisition of a 35% stake in a Vietnamese logistics company.',
        'Advised on restructuring for an FDI enterprise converting from joint venture to wholly foreign-owned.',
        'Obtained investment license for a USD 200 million commercial real estate development project.',
      ],
    },
    faqs: [
      {
        question: {
          vi: 'Nhà đầu tư nước ngoài có thể sở hữu 100% vốn doanh nghiệp tại Việt Nam không?',
          en: 'Can foreign investors own 100% of a company in Vietnam?',
        },
        answer: {
          vi: 'Có, trong hầu hết các ngành nghề. Tuy nhiên, một số ngành nghề có giới hạn tỷ lệ sở hữu vốn nước ngoài hoặc yêu cầu liên doanh với đối tác Việt Nam. Chúng tôi sẽ tư vấn cụ thể dựa trên ngành nghề dự kiến kinh doanh.',
          en: 'Yes, in most business sectors. However, some sectors have foreign ownership caps or require joint ventures with Vietnamese partners. We will advise specifically based on the intended business sector.',
        },
      },
      {
        question: {
          vi: 'Thời gian thành lập doanh nghiệp FDI mất bao lâu?',
          en: 'How long does it take to establish an FDI enterprise?',
        },
        answer: {
          vi: 'Thời gian phụ thuộc vào loại hình dự án. Dự án thông thường mất khoảng 1-3 tháng. Dự án cần phê duyệt đặc biệt (bất động sản, khai khoáng) có thể mất 3-6 tháng hoặc lâu hơn.',
          en: 'The timeline depends on the project type. Standard projects take approximately 1-3 months. Projects requiring special approval (real estate, mining) may take 3-6 months or longer.',
        },
      },
      {
        question: {
          vi: 'Vốn đầu tư tối thiểu để thành lập doanh nghiệp là bao nhiêu?',
          en: 'What is the minimum investment capital to establish a company?',
        },
        answer: {
          vi: 'Pháp luật Việt Nam không quy định mức vốn tối thiểu chung, trừ một số ngành nghề đặc thù (ngân hàng, bảo hiểm, bất động sản). Tuy nhiên, vốn đầu tư cần phù hợp với quy mô và mục tiêu dự án.',
          en: 'Vietnamese law does not stipulate a general minimum capital, except for certain specific sectors (banking, insurance, real estate). However, investment capital should be appropriate for the project\'s scale and objectives.',
        },
      },
    ],
    relatedServiceSlugs: ['corporate-law', 'tax-law', 'real-estate-law'],
  },

  // ─────────────────────────────────────────────
  // 4. Corporate Law (Luật doanh nghiệp)
  // ─────────────────────────────────────────────
  {
    id: 'corporate-law',
    slug: 'corporate-law',
    icon: 'Building2',
    audiences: ['businesses', 'startups', 'shareholders', 'board-members'],
    keyTopics: [
      'company formation',
      'corporate governance',
      'shareholder agreements',
      'restructuring',
    ],
    title: {
      vi: 'Luật doanh nghiệp',
      en: 'Corporate Law',
    },
    eyebrow: {
      vi: 'Quản trị doanh nghiệp',
      en: 'Corporate Governance',
    },
    heroDescription: {
      vi: 'Chúng tôi tư vấn toàn diện về thành lập, quản trị và vận hành doanh nghiệp, giúp doanh nghiệp xây dựng nền tảng pháp lý vững chắc cho sự phát triển bền vững.',
      en: 'We provide comprehensive advisory on company formation, governance, and operations, helping businesses build solid legal foundations for sustainable growth.',
    },
    overviewTitle: {
      vi: 'Nền tảng pháp lý cho doanh nghiệp phát triển',
      en: 'Legal Foundation for Business Growth',
    },
    overviewParagraphs: {
      vi: [
        'Luật doanh nghiệp là xương sống pháp lý cho mọi hoạt động kinh doanh. Từ việc lựa chọn loại hình doanh nghiệp phù hợp, xây dựng điều lệ công ty, đến thiết lập cơ chế quản trị hiệu quả, mỗi quyết định đều ảnh hưởng trực tiếp đến quyền lợi của các bên liên quan.',
        'Đội ngũ luật sư doanh nghiệp của Lighthouse Law hỗ trợ khách hàng trong toàn bộ vòng đời doanh nghiệp, từ khi mới thành lập cho đến các giai đoạn mở rộng, tái cấu trúc hoặc giải thể. Chúng tôi thiết kế cấu trúc quản trị phù hợp với quy mô và đặc thù của từng doanh nghiệp.',
      ],
      en: [
        'Corporate law is the legal backbone of all business operations. From selecting the appropriate business form, drafting articles of association, to establishing effective governance mechanisms, every decision directly impacts stakeholder interests.',
        'Lighthouse Law\'s corporate legal team supports clients throughout the entire business lifecycle, from initial formation to expansion, restructuring, or dissolution stages. We design governance structures appropriate to each business\'s scale and characteristics.',
      ],
    },
    commonSituations: {
      vi: [
        'Cần thành lập công ty mới và lựa chọn loại hình doanh nghiệp phù hợp',
        'Tranh chấp giữa các thành viên hoặc cổ đông về quyền biểu quyết và phân chia lợi nhuận',
        'Doanh nghiệp cần thay đổi cơ cấu vốn hoặc tiếp nhận nhà đầu tư mới',
        'Cần tái cấu trúc doanh nghiệp thông qua chia tách, sáp nhập hoặc chuyển đổi loại hình',
      ],
      en: [
        'Need to establish a new company and select appropriate business form',
        'Disputes among members or shareholders regarding voting rights and profit distribution',
        'Business needs to change capital structure or admit new investors',
        'Need to restructure through division, merger, or business form conversion',
      ],
    },
    legalChallenges: {
      vi: [
        'Sự khác biệt về quyền và nghĩa vụ giữa các loại hình doanh nghiệp theo Luật Doanh nghiệp 2020',
        'Cơ chế bảo vệ cổ đông thiểu số chưa đầy đủ trong thực tế',
        'Thủ tục thay đổi đăng ký doanh nghiệp phức tạp khi có nhiều thay đổi đồng thời',
      ],
      en: [
        'Differences in rights and obligations across business forms under the Enterprise Law 2020',
        'Incomplete minority shareholder protection mechanisms in practice',
        'Complex business registration change procedures when multiple changes occur simultaneously',
      ],
    },
    scopeOfServices: [
      {
        title: { vi: 'Thành lập doanh nghiệp', en: 'Company Formation' },
        description: {
          vi: 'Tư vấn lựa chọn loại hình, soạn thảo điều lệ và thực hiện đăng ký thành lập doanh nghiệp.',
          en: 'Advising on business form selection, drafting articles of association, and completing business registration.',
        },
      },
      {
        title: { vi: 'Quản trị công ty', en: 'Corporate Governance' },
        description: {
          vi: 'Xây dựng cơ chế quản trị, quy chế hoạt động của Hội đồng quản trị, Ban kiểm soát và các phòng ban.',
          en: 'Building governance mechanisms, operating regulations for Board of Directors, Supervisory Board, and departments.',
        },
      },
      {
        title: { vi: 'Thỏa thuận cổ đông', en: 'Shareholder Agreements' },
        description: {
          vi: 'Soạn thảo và đàm phán thỏa thuận cổ đông, thỏa thuận góp vốn và các thỏa thuận giữa các bên liên quan.',
          en: 'Drafting and negotiating shareholder agreements, capital contribution agreements, and stakeholder arrangements.',
        },
      },
      {
        title: { vi: 'Tái cấu trúc', en: 'Restructuring' },
        description: {
          vi: 'Tư vấn chia tách, sáp nhập, hợp nhất, chuyển đổi loại hình doanh nghiệp theo quy định pháp luật.',
          en: 'Advising on division, merger, consolidation, and business form conversion in accordance with regulations.',
        },
      },
      {
        title: { vi: 'Thay đổi đăng ký kinh doanh', en: 'Business Registration Changes' },
        description: {
          vi: 'Thực hiện các thủ tục thay đổi tên, địa chỉ, vốn điều lệ, ngành nghề và người đại diện pháp luật.',
          en: 'Processing changes to name, address, charter capital, business lines, and legal representative.',
        },
      },
      {
        title: { vi: 'Giải thể & phá sản', en: 'Dissolution & Bankruptcy' },
        description: {
          vi: 'Tư vấn và thực hiện thủ tục giải thể tự nguyện hoặc đại diện trong thủ tục phá sản.',
          en: 'Advising and conducting voluntary dissolution procedures or representing in bankruptcy proceedings.',
        },
      },
    ],
    process: [
      {
        step: 1,
        title: { vi: 'Tìm hiểu nhu cầu', en: 'Understanding Needs' },
        description: {
          vi: 'Trao đổi chi tiết về mục tiêu kinh doanh, cấu trúc sở hữu dự kiến và yêu cầu đặc thù.',
          en: 'Detailed discussion on business objectives, intended ownership structure, and specific requirements.',
        },
      },
      {
        step: 2,
        title: { vi: 'Tư vấn cấu trúc', en: 'Structure Advisory' },
        description: {
          vi: 'Đề xuất loại hình doanh nghiệp, cấu trúc quản trị và các thỏa thuận cần thiết.',
          en: 'Proposing business form, governance structure, and necessary agreements.',
        },
      },
      {
        step: 3,
        title: { vi: 'Chuẩn bị tài liệu', en: 'Document Preparation' },
        description: {
          vi: 'Soạn thảo điều lệ, thỏa thuận cổ đông, quy chế nội bộ và hồ sơ đăng ký.',
          en: 'Drafting articles of association, shareholder agreements, internal regulations, and registration dossiers.',
        },
      },
      {
        step: 4,
        title: { vi: 'Đăng ký & hoàn tất', en: 'Registration & Completion' },
        description: {
          vi: 'Nộp hồ sơ đăng ký, theo dõi tiến trình và hoàn tất các thủ tục sau đăng ký.',
          en: 'Filing registration dossiers, monitoring progress, and completing post-registration procedures.',
        },
      },
    ],
    benefits: [
      {
        title: { vi: 'Cấu trúc phù hợp', en: 'Right Structure' },
        description: {
          vi: 'Lựa chọn loại hình và cấu trúc doanh nghiệp tối ưu cho mục tiêu kinh doanh.',
          en: 'Selecting the optimal business form and structure for business objectives.',
        },
      },
      {
        title: { vi: 'Quản trị minh bạch', en: 'Transparent Governance' },
        description: {
          vi: 'Hệ thống quản trị rõ ràng giúp ngăn ngừa tranh chấp nội bộ và bảo vệ quyền lợi tất cả các bên.',
          en: 'Clear governance systems help prevent internal disputes and protect all parties\' interests.',
        },
      },
      {
        title: { vi: 'Tuân thủ đầy đủ', en: 'Full Compliance' },
        description: {
          vi: 'Đảm bảo doanh nghiệp tuân thủ đầy đủ nghĩa vụ đăng ký, báo cáo và công bố thông tin.',
          en: 'Ensuring the business fully complies with registration, reporting, and disclosure obligations.',
        },
      },
      {
        title: { vi: 'Linh hoạt mở rộng', en: 'Flexible Growth' },
        description: {
          vi: 'Nền tảng pháp lý vững chắc cho phép doanh nghiệp dễ dàng mở rộng, gọi vốn và tái cấu trúc.',
          en: 'Solid legal foundation allows the business to easily expand, raise capital, and restructure.',
        },
      },
    ],
    representativeMatters: {
      vi: [
        'Thành lập và cấu trúc quản trị cho một công ty công nghệ với 4 nhóm sáng lập và vesting schedule.',
        'Tư vấn chuyển đổi công ty TNHH hai thành viên thành công ty cổ phần để chuẩn bị IPO.',
        'Soạn thảo thỏa thuận cổ đông chi tiết cho liên doanh giữa doanh nghiệp Việt Nam và đối tác Nhật Bản.',
      ],
      en: [
        'Established and structured governance for a technology company with 4 founder groups and vesting schedule.',
        'Advised on conversion of a two-member LLC to a joint stock company in preparation for IPO.',
        'Drafted detailed shareholder agreement for a joint venture between a Vietnamese company and Japanese partner.',
      ],
    },
    faqs: [
      {
        question: {
          vi: 'Nên chọn loại hình doanh nghiệp nào?',
          en: 'Which business form should I choose?',
        },
        answer: {
          vi: 'Lựa chọn phụ thuộc vào số lượng thành viên, mục tiêu gọi vốn, mức độ trách nhiệm mong muốn và kế hoạch phát triển. Công ty TNHH phù hợp cho doanh nghiệp nhỏ-vừa, công ty cổ phần phù hợp khi muốn huy động vốn rộng rãi.',
          en: 'The choice depends on number of members, fundraising goals, desired liability level, and growth plans. LLCs suit small-medium businesses, while joint stock companies suit those wanting broad capital mobilization.',
        },
      },
      {
        question: {
          vi: 'Thời gian đăng ký thành lập doanh nghiệp là bao lâu?',
          en: 'How long does business registration take?',
        },
        answer: {
          vi: 'Theo quy định, cơ quan đăng ký kinh doanh cấp giấy chứng nhận trong vòng 3 ngày làm việc kể từ ngày nhận hồ sơ hợp lệ. Thực tế, toàn bộ quy trình bao gồm chuẩn bị hồ sơ thường mất 1-2 tuần.',
          en: 'By regulation, the business registration authority issues certificates within 3 working days from receiving valid dossiers. In practice, the entire process including dossier preparation typically takes 1-2 weeks.',
        },
      },
      {
        question: {
          vi: 'Có bắt buộc phải có con dấu công ty không?',
          en: 'Is a company seal mandatory?',
        },
        answer: {
          vi: 'Từ năm 2021, doanh nghiệp tự quyết định về hình thức, số lượng và nội dung con dấu. Con dấu có thể là dấu vật lý hoặc chữ ký số. Doanh nghiệp cần đăng ký mẫu dấu trước khi sử dụng.',
          en: 'Since 2021, enterprises decide their own seal form, quantity, and content. Seals can be physical stamps or digital signatures. Enterprises must register seal specimens before use.',
        },
      },
    ],
    relatedServiceSlugs: ['investment-business', 'contract-drafting-review', 'labor-law'],
  },

  // ─────────────────────────────────────────────
  // 5. Real Estate Law (Luật bất động sản)
  // ─────────────────────────────────────────────
  {
    id: 'real-estate-law',
    slug: 'real-estate-law',
    icon: 'Home',
    audiences: ['individuals', 'investors', 'developers', 'businesses'],
    keyTopics: [
      'property transactions',
      'land use rights',
      'construction permits',
      'real estate development',
    ],
    title: {
      vi: 'Luật bất động sản',
      en: 'Real Estate Law',
    },
    eyebrow: {
      vi: 'Bất động sản & đất đai',
      en: 'Property & Land',
    },
    heroDescription: {
      vi: 'Chúng tôi tư vấn chuyên sâu về các giao dịch bất động sản, quyền sử dụng đất và dự án phát triển bất động sản, bảo vệ quyền lợi của khách hàng trong mọi giao dịch.',
      en: 'We provide specialized advisory on real estate transactions, land use rights, and property development projects, protecting client interests in every transaction.',
    },
    overviewTitle: {
      vi: 'Giải pháp pháp lý toàn diện cho bất động sản',
      en: 'Comprehensive Legal Solutions for Real Estate',
    },
    overviewParagraphs: {
      vi: [
        'Pháp luật về bất động sản và đất đai tại Việt Nam có tính đặc thù cao với chế độ sở hữu toàn dân về đất đai. Mọi giao dịch liên quan đến quyền sử dụng đất đều cần tuân thủ nghiêm ngặt các quy định về điều kiện, thủ tục và hình thức.',
        'Lighthouse Law có đội ngũ luật sư giàu kinh nghiệm trong lĩnh vực bất động sản, hiểu rõ thực tiễn thị trường và cách vận hành của cơ quan quản lý đất đai tại các địa phương. Chúng tôi hỗ trợ khách hàng từ khâu thẩm định pháp lý, đàm phán giao dịch đến hoàn tất đăng ký quyền sở hữu.',
      ],
      en: [
        'Real estate and land law in Vietnam is highly unique with the all-people ownership regime for land. All transactions involving land use rights must strictly comply with regulations on conditions, procedures, and forms.',
        'Lighthouse Law has an experienced team of real estate lawyers who understand market practices and how land management authorities operate across localities. We support clients from legal due diligence, transaction negotiation to ownership registration completion.',
      ],
    },
    commonSituations: {
      vi: [
        'Cần thẩm định pháp lý trước khi mua bất động sản hoặc quyền sử dụng đất',
        'Tranh chấp ranh giới đất, quyền sử dụng đất với hàng xóm hoặc bên thứ ba',
        'Nhà đầu tư cần xin giấy phép cho dự án phát triển bất động sản',
        'Cần hỗ trợ đàm phán và soạn thảo hợp đồng mua bán, cho thuê bất động sản',
        'Khiếu nại về bồi thường giải phóng mặt bằng không thỏa đáng',
      ],
      en: [
        'Need legal due diligence before purchasing real estate or land use rights',
        'Land boundary or land use rights disputes with neighbors or third parties',
        'Investor needs permits for real estate development project',
        'Need support in negotiating and drafting sale, purchase, and lease agreements',
        'Complaints about inadequate land clearance compensation',
      ],
    },
    legalChallenges: {
      vi: [
        'Hệ thống giấy tờ về quyền sử dụng đất phức tạp với nhiều loại giấy chứng nhận qua các thời kỳ',
        'Quy hoạch sử dụng đất thường xuyên thay đổi ảnh hưởng đến giá trị và mục đích sử dụng',
        'Thủ tục chuyển nhượng, đăng ký quyền sử dụng đất khác nhau giữa các địa phương',
      ],
      en: [
        'Complex land use rights documentation system with various certificate types across different periods',
        'Land use planning frequently changes, affecting value and usage purposes',
        'Transfer and registration procedures differ across localities',
      ],
    },
    scopeOfServices: [
      {
        title: { vi: 'Thẩm định pháp lý bất động sản', en: 'Real Estate Due Diligence' },
        description: {
          vi: 'Kiểm tra toàn diện tình trạng pháp lý của bất động sản bao gồm quyền sở hữu, quy hoạch, thế chấp và tranh chấp.',
          en: 'Comprehensive review of property legal status including ownership, planning, mortgages, and disputes.',
        },
      },
      {
        title: { vi: 'Giao dịch mua bán & cho thuê', en: 'Sale, Purchase & Lease Transactions' },
        description: {
          vi: 'Tư vấn, đàm phán và soạn thảo hợp đồng cho các giao dịch mua bán, chuyển nhượng và cho thuê bất động sản.',
          en: 'Advising, negotiating, and drafting contracts for real estate sale, transfer, and lease transactions.',
        },
      },
      {
        title: { vi: 'Dự án phát triển BĐS', en: 'Property Development Projects' },
        description: {
          vi: 'Tư vấn pháp lý cho dự án phát triển bất động sản từ xin phép đầu tư đến bàn giao sản phẩm.',
          en: 'Legal advisory for property development projects from investment licensing to product handover.',
        },
      },
      {
        title: { vi: 'Đăng ký quyền sử dụng đất', en: 'Land Use Rights Registration' },
        description: {
          vi: 'Hỗ trợ đăng ký, cấp mới, cấp đổi giấy chứng nhận quyền sử dụng đất và tài sản gắn liền.',
          en: 'Supporting registration, new issuance, and reissuance of land use rights certificates and attached assets.',
        },
      },
      {
        title: { vi: 'Giải quyết tranh chấp đất đai', en: 'Land Dispute Resolution' },
        description: {
          vi: 'Đại diện và bảo vệ quyền lợi khách hàng trong các tranh chấp liên quan đến đất đai và bất động sản.',
          en: 'Representing and protecting client interests in land and real estate related disputes.',
        },
      },
      {
        title: { vi: 'Bồi thường & tái định cư', en: 'Compensation & Resettlement' },
        description: {
          vi: 'Tư vấn quyền lợi và hỗ trợ khiếu nại trong trường hợp thu hồi đất, bồi thường và tái định cư.',
          en: 'Advising on rights and supporting complaints in land recovery, compensation, and resettlement cases.',
        },
      },
    ],
    process: [
      {
        step: 1,
        title: { vi: 'Thẩm định pháp lý', en: 'Legal Due Diligence' },
        description: {
          vi: 'Kiểm tra toàn diện hồ sơ pháp lý, quy hoạch và tình trạng tranh chấp của bất động sản.',
          en: 'Comprehensive review of legal dossiers, planning status, and dispute history of the property.',
        },
      },
      {
        step: 2,
        title: { vi: 'Tư vấn & đàm phán', en: 'Advisory & Negotiation' },
        description: {
          vi: 'Đánh giá rủi ro, tư vấn điều kiện giao dịch và hỗ trợ đàm phán với các bên liên quan.',
          en: 'Risk assessment, advising on transaction conditions, and supporting negotiation with relevant parties.',
        },
      },
      {
        step: 3,
        title: { vi: 'Soạn thảo hợp đồng', en: 'Contract Drafting' },
        description: {
          vi: 'Soạn thảo hợp đồng giao dịch bất động sản bảo vệ tối đa quyền lợi của khách hàng.',
          en: 'Drafting real estate transaction contracts that maximally protect client interests.',
        },
      },
      {
        step: 4,
        title: { vi: 'Hoàn tất giao dịch', en: 'Transaction Completion' },
        description: {
          vi: 'Hỗ trợ công chứng, đăng ký quyền sở hữu và hoàn tất mọi thủ tục pháp lý.',
          en: 'Supporting notarization, ownership registration, and completing all legal procedures.',
        },
      },
    ],
    benefits: [
      {
        title: { vi: 'An toàn giao dịch', en: 'Transaction Safety' },
        description: {
          vi: 'Thẩm định kỹ lưỡng giảm thiểu rủi ro mua phải bất động sản có tranh chấp hoặc vi phạm pháp luật.',
          en: 'Thorough due diligence minimizes risk of purchasing disputed or legally non-compliant properties.',
        },
      },
      {
        title: { vi: 'Bảo vệ quyền sở hữu', en: 'Ownership Protection' },
        description: {
          vi: 'Đảm bảo quyền sở hữu được đăng ký đầy đủ và đúng quy định pháp luật.',
          en: 'Ensuring ownership rights are fully and properly registered in accordance with law.',
        },
      },
      {
        title: { vi: 'Giá trị tối ưu', en: 'Optimal Value' },
        description: {
          vi: 'Hiểu rõ tình trạng pháp lý giúp đàm phán giá cả hợp lý và tránh chi phí ẩn.',
          en: 'Understanding legal status helps negotiate fair prices and avoid hidden costs.',
        },
      },
      {
        title: { vi: 'Tuân thủ quy hoạch', en: 'Planning Compliance' },
        description: {
          vi: 'Đảm bảo dự án và giao dịch phù hợp với quy hoạch sử dụng đất hiện hành.',
          en: 'Ensuring projects and transactions comply with current land use planning.',
        },
      },
    ],
    representativeMatters: {
      vi: [
        'Thẩm định pháp lý cho dự án khu đô thị mới 100 hecta tại Long An trước khi ký hợp đồng hợp tác đầu tư.',
        'Đại diện chủ đất trong đàm phán bồi thường thu hồi đất cho dự án hạ tầng giao thông, đạt mức bồi thường cao hơn 40% so với phương án ban đầu.',
        'Tư vấn cho quỹ đầu tư mua lại tòa nhà văn phòng thương mại trị giá 15 triệu USD tại Quận 1, TP.HCM.',
      ],
      en: [
        'Conducted legal due diligence for a 100-hectare new urban area project in Long An before signing investment cooperation contract.',
        'Represented landowners in land recovery compensation negotiation for a transportation infrastructure project, achieving 40% higher compensation than the initial proposal.',
        'Advised an investment fund on acquisition of a USD 15 million commercial office building in District 1, HCMC.',
      ],
    },
    faqs: [
      {
        question: {
          vi: 'Người nước ngoài có thể mua nhà tại Việt Nam không?',
          en: 'Can foreigners buy property in Vietnam?',
        },
        answer: {
          vi: 'Có, người nước ngoài có quyền sở hữu căn hộ chung cư với thời hạn tối đa 50 năm (có thể gia hạn) và không quá 30% số căn hộ trong một tòa nhà. Đối với nhà ở riêng lẻ, giới hạn là 250 căn trong một phường.',
          en: 'Yes, foreigners can own condominium units for a maximum of 50 years (renewable) and no more than 30% of units in a building. For individual houses, the limit is 250 units in a ward.',
        },
      },
      {
        question: {
          vi: 'Cần kiểm tra những gì trước khi mua đất?',
          en: 'What should be checked before buying land?',
        },
        answer: {
          vi: 'Cần kiểm tra: giấy chứng nhận quyền sử dụng đất, quy hoạch sử dụng đất, tình trạng thế chấp, tranh chấp, nghĩa vụ tài chính chưa hoàn thành, điều kiện chuyển nhượng và mục đích sử dụng đất được phép.',
          en: 'Key checks include: land use rights certificate, land use planning, mortgage status, disputes, outstanding financial obligations, transfer conditions, and permitted land use purposes.',
        },
      },
      {
        question: {
          vi: 'Thuế và phí khi mua bán bất động sản là bao nhiêu?',
          en: 'What are the taxes and fees for real estate transactions?',
        },
        answer: {
          vi: 'Bên bán chịu thuế thu nhập cá nhân (2% giá chuyển nhượng) hoặc thuế thu nhập doanh nghiệp. Bên mua chịu phí trước bạ (0.5% giá trị). Ngoài ra có phí công chứng và phí đăng ký biến động.',
          en: 'The seller pays personal income tax (2% of transfer price) or corporate income tax. The buyer pays registration fee (0.5% of value). Additional costs include notarization fees and registration change fees.',
        },
      },
    ],
    relatedServiceSlugs: ['investment-business', 'contract-drafting-review', 'dispute-resolution'],
  },

  // ─────────────────────────────────────────────
  // 6. Civil Law (Luật dân sự)
  // ─────────────────────────────────────────────
  {
    id: 'civil-law',
    slug: 'civil-law',
    icon: 'Scale',
    audiences: ['individuals', 'businesses'],
    keyTopics: [
      'civil contracts',
      'inheritance',
      'compensation',
      'property rights',
    ],
    title: {
      vi: 'Luật dân sự',
      en: 'Civil Law',
    },
    eyebrow: {
      vi: 'Quan hệ dân sự',
      en: 'Civil Relations',
    },
    heroDescription: {
      vi: 'Chúng tôi tư vấn và đại diện trong các vấn đề dân sự bao gồm hợp đồng, thừa kế, bồi thường thiệt hại và bảo vệ quyền nhân thân, quyền tài sản của cá nhân.',
      en: 'We advise and represent in civil matters including contracts, inheritance, damage compensation, and protection of personal and property rights of individuals.',
    },
    overviewTitle: {
      vi: 'Bảo vệ quyền lợi dân sự của bạn',
      en: 'Protecting Your Civil Rights',
    },
    overviewParagraphs: {
      vi: [
        'Luật dân sự điều chỉnh các quan hệ pháp lý cơ bản nhất trong đời sống hàng ngày, từ hợp đồng mua bán, vay mượn, cho đến thừa kế, bồi thường thiệt hại và quyền sở hữu tài sản. Bộ luật Dân sự 2015 là nền tảng cho hầu hết các giao dịch và quan hệ pháp lý giữa các cá nhân và tổ chức.',
        'Lighthouse Law giúp khách hàng giải quyết hiệu quả các vấn đề dân sự phức tạp, bảo vệ quyền và lợi ích hợp pháp thông qua tư vấn chuyên sâu, đàm phán hòa giải hoặc đại diện tại tòa án khi cần thiết.',
      ],
      en: [
        'Civil law governs the most fundamental legal relationships in daily life, from sale and purchase contracts, lending, to inheritance, damage compensation, and property rights. The Civil Code 2015 is the foundation for most transactions and legal relationships between individuals and organizations.',
        'Lighthouse Law helps clients effectively resolve complex civil matters, protecting legitimate rights and interests through specialized advisory, mediation negotiation, or court representation when necessary.',
      ],
    },
    commonSituations: {
      vi: [
        'Tranh chấp hợp đồng dân sự (mua bán, vay mượn, dịch vụ)',
        'Chia thừa kế tài sản khi có tranh chấp giữa những người thừa kế',
        'Yêu cầu bồi thường thiệt hại do hành vi trái pháp luật gây ra',
        'Tranh chấp quyền sở hữu tài sản, đặc biệt là tài sản chung',
      ],
      en: [
        'Civil contract disputes (sale, purchase, lending, services)',
        'Inheritance division when disputes arise among heirs',
        'Compensation claims for damages caused by unlawful acts',
        'Property ownership disputes, especially co-owned property',
      ],
    },
    legalChallenges: {
      vi: [
        'Thời hiệu khởi kiện trong các vụ việc dân sự cần được xác định chính xác để tránh mất quyền',
        'Chứng minh thiệt hại thực tế và mối quan hệ nhân quả trong yêu cầu bồi thường',
        'Xác định tài sản chung, tài sản riêng trong các tranh chấp tài sản phức tạp',
      ],
      en: [
        'Statute of limitations in civil cases must be accurately determined to avoid loss of rights',
        'Proving actual damages and causal relationship in compensation claims',
        'Determining co-owned and separate property in complex property disputes',
      ],
    },
    scopeOfServices: [
      {
        title: { vi: 'Tranh chấp hợp đồng', en: 'Contract Disputes' },
        description: {
          vi: 'Tư vấn và đại diện trong các tranh chấp phát sinh từ hợp đồng dân sự, thương mại.',
          en: 'Advising and representing in disputes arising from civil and commercial contracts.',
        },
      },
      {
        title: { vi: 'Thừa kế tài sản', en: 'Inheritance' },
        description: {
          vi: 'Tư vấn lập di chúc, chia thừa kế theo di chúc và theo pháp luật, giải quyết tranh chấp thừa kế.',
          en: 'Advising on will drafting, testamentary and intestate inheritance division, resolving inheritance disputes.',
        },
      },
      {
        title: { vi: 'Bồi thường thiệt hại', en: 'Damage Compensation' },
        description: {
          vi: 'Đại diện yêu cầu bồi thường thiệt hại ngoài hợp đồng do tai nạn, sức khỏe, danh dự, uy tín.',
          en: 'Representing damage compensation claims for accidents, health, honor, and reputation.',
        },
      },
      {
        title: { vi: 'Quyền sở hữu tài sản', en: 'Property Rights' },
        description: {
          vi: 'Bảo vệ quyền sở hữu, quyền sử dụng và các quyền khác đối với tài sản.',
          en: 'Protecting ownership, use rights, and other rights over property.',
        },
      },
      {
        title: { vi: 'Giao dịch bảo đảm', en: 'Secured Transactions' },
        description: {
          vi: 'Tư vấn về thế chấp, cầm cố, bảo lãnh và các biện pháp bảo đảm thực hiện nghĩa vụ.',
          en: 'Advising on mortgages, pledges, guarantees, and obligation security measures.',
        },
      },
    ],
    process: [
      {
        step: 1,
        title: { vi: 'Đánh giá vụ việc', en: 'Case Evaluation' },
        description: {
          vi: 'Tìm hiểu chi tiết sự việc, thu thập chứng cứ và đánh giá triển vọng pháp lý.',
          en: 'Understanding case details, collecting evidence, and evaluating legal prospects.',
        },
      },
      {
        step: 2,
        title: { vi: 'Chiến lược giải quyết', en: 'Resolution Strategy' },
        description: {
          vi: 'Xây dựng chiến lược giải quyết tối ưu: thương lượng, hòa giải hoặc khởi kiện.',
          en: 'Developing optimal resolution strategy: negotiation, mediation, or litigation.',
        },
      },
      {
        step: 3,
        title: { vi: 'Thực hiện', en: 'Implementation' },
        description: {
          vi: 'Tiến hành đàm phán, chuẩn bị hồ sơ hoặc khởi kiện theo chiến lược đã xây dựng.',
          en: 'Conducting negotiation, preparing dossiers, or filing suit per the developed strategy.',
        },
      },
      {
        step: 4,
        title: { vi: 'Theo dõi kết quả', en: 'Result Monitoring' },
        description: {
          vi: 'Giám sát việc thực hiện thỏa thuận hoặc thi hành bản án, bảo đảm quyền lợi được thực thi.',
          en: 'Monitoring agreement implementation or judgment enforcement, ensuring rights are realized.',
        },
      },
    ],
    benefits: [
      {
        title: { vi: 'Bảo vệ toàn diện', en: 'Comprehensive Protection' },
        description: {
          vi: 'Quyền nhân thân và tài sản của bạn được bảo vệ đầy đủ theo đúng quy định pháp luật.',
          en: 'Your personal and property rights are fully protected in accordance with law.',
        },
      },
      {
        title: { vi: 'Giải quyết hiệu quả', en: 'Effective Resolution' },
        description: {
          vi: 'Chiến lược giải quyết linh hoạt, ưu tiên phương thức ít tốn kém và thời gian nhất.',
          en: 'Flexible resolution strategy, prioritizing the least costly and time-consuming approach.',
        },
      },
      {
        title: { vi: 'Bảo toàn quan hệ', en: 'Preserving Relationships' },
        description: {
          vi: 'Ưu tiên hòa giải và thương lượng khi có thể, bảo toàn các mối quan hệ quan trọng.',
          en: 'Prioritizing mediation and negotiation when possible, preserving important relationships.',
        },
      },
      {
        title: { vi: 'Phòng ngừa rủi ro', en: 'Risk Prevention' },
        description: {
          vi: 'Tư vấn phòng ngừa giúp tránh tranh chấp dân sự phát sinh trong tương lai.',
          en: 'Preventive advisory helps avoid future civil disputes from arising.',
        },
      },
    ],
    representativeMatters: {
      vi: [
        'Đại diện thành công cho khách hàng trong vụ tranh chấp thừa kế tài sản trị giá 20 tỷ đồng giữa 7 người thừa kế.',
        'Đàm phán đạt thỏa thuận bồi thường 800 triệu đồng cho nạn nhân tai nạn giao thông mà không cần khởi kiện.',
        'Bảo vệ quyền sở hữu tài sản của khách hàng trong tranh chấp ranh giới đất kéo dài 5 năm tại tòa án.',
      ],
      en: [
        'Successfully represented a client in an inheritance dispute over VND 20 billion in assets among 7 heirs.',
        'Negotiated an VND 800 million compensation agreement for a traffic accident victim without litigation.',
        'Protected client\'s property ownership rights in a 5-year land boundary dispute in court.',
      ],
    },
    faqs: [
      {
        question: {
          vi: 'Thời hiệu khởi kiện vụ án dân sự là bao lâu?',
          en: 'What is the statute of limitations for civil cases?',
        },
        answer: {
          vi: 'Thời hiệu khởi kiện chung là 3 năm kể từ ngày người có quyền yêu cầu biết hoặc phải biết quyền, lợi ích hợp pháp bị xâm phạm. Một số loại tranh chấp có thời hiệu riêng theo quy định của luật chuyên ngành.',
          en: 'The general statute of limitations is 3 years from when the entitled person knows or should know their legitimate rights and interests are infringed. Some dispute types have specific limitation periods under specialized laws.',
        },
      },
      {
        question: {
          vi: 'Có thể giải quyết tranh chấp dân sự mà không cần ra tòa không?',
          en: 'Can civil disputes be resolved without going to court?',
        },
        answer: {
          vi: 'Có, chúng tôi luôn ưu tiên các phương thức giải quyết ngoài tòa án như thương lượng trực tiếp, hòa giải với sự hỗ trợ của trung gian, hoặc trọng tài (nếu có thỏa thuận). Phương thức này thường nhanh hơn, ít tốn kém hơn và bảo mật hơn.',
          en: 'Yes, we always prioritize out-of-court resolution methods such as direct negotiation, mediation with intermediary support, or arbitration (if agreed). These methods are typically faster, less costly, and more confidential.',
        },
      },
      {
        question: {
          vi: 'Ai chịu chi phí kiện tụng?',
          en: 'Who bears litigation costs?',
        },
        answer: {
          vi: 'Nguyên tắc chung, bên thua kiện chịu án phí. Tuy nhiên, mỗi bên tự chịu phí luật sư của mình trừ khi có thỏa thuận khác. Chi phí giám định, định giá và các chi phí tố tụng khác do bên yêu cầu tạm ứng trước.',
          en: 'As a general principle, the losing party bears court fees. However, each party bears their own attorney fees unless otherwise agreed. Appraisal, valuation, and other litigation costs are advanced by the requesting party.',
        },
      },
    ],
    relatedServiceSlugs: ['contract-drafting-review', 'dispute-resolution', 'family-marriage'],
  },

  // ─────────────────────────────────────────────
  // 7. Criminal Law (Luật hình sự)
  // ─────────────────────────────────────────────
  {
    id: 'criminal-law',
    slug: 'criminal-law',
    icon: 'ShieldAlert',
    audiences: ['individuals', 'businesses', 'defendants', 'victims'],
    keyTopics: [
      'criminal defense',
      'white-collar crime',
      'victim representation',
      'corporate crime',
    ],
    title: {
      vi: 'Luật hình sự',
      en: 'Criminal Law',
    },
    eyebrow: {
      vi: 'Bào chữa & bảo vệ',
      en: 'Defense & Protection',
    },
    heroDescription: {
      vi: 'Chúng tôi cung cấp dịch vụ bào chữa và bảo vệ quyền lợi trong các vụ án hình sự, đảm bảo quyền được bào chữa và xét xử công bằng cho mọi khách hàng.',
      en: 'We provide defense and rights protection services in criminal cases, ensuring the right to defense and fair trial for every client.',
    },
    overviewTitle: {
      vi: 'Bảo vệ quyền lợi trong tố tụng hình sự',
      en: 'Protecting Rights in Criminal Proceedings',
    },
    overviewParagraphs: {
      vi: [
        'Khi đối mặt với vấn đề hình sự, mỗi quyết định đều có thể ảnh hưởng sâu sắc đến cuộc sống và tự do của bạn. Đội ngũ luật sư hình sự của Lighthouse Law có kinh nghiệm bào chữa và bảo vệ quyền lợi trong nhiều loại vụ án, từ các tội phạm kinh tế, tham nhũng đến các vụ án hình sự thông thường.',
        'Chúng tôi tham gia từ giai đoạn điều tra, truy tố đến xét xử, đảm bảo quyền lợi pháp lý của khách hàng được bảo vệ ở mọi giai đoạn tố tụng. Mỗi vụ án đều được nghiên cứu kỹ lưỡng, xây dựng chiến lược bào chữa phù hợp dựa trên bằng chứng và quy định pháp luật.',
      ],
      en: [
        'When facing criminal matters, every decision can profoundly affect your life and freedom. Lighthouse Law\'s criminal law team has experience defending and protecting rights in various case types, from economic crimes and corruption to common criminal cases.',
        'We participate from the investigation, prosecution to trial stages, ensuring the client\'s legal rights are protected at every stage of proceedings. Each case is thoroughly researched, with appropriate defense strategies built on evidence and legal provisions.',
      ],
    },
    commonSituations: {
      vi: [
        'Bị khởi tố hoặc triệu tập liên quan đến vụ án hình sự',
        'Doanh nghiệp hoặc lãnh đạo bị điều tra về tội phạm kinh tế',
        'Là nạn nhân của hành vi phạm tội và cần bảo vệ quyền lợi',
        'Cần tư vấn về quyền im lặng, quyền có luật sư trong quá trình điều tra',
      ],
      en: [
        'Being prosecuted or summoned in connection with a criminal case',
        'Business or executives under investigation for economic crimes',
        'Being a victim of criminal activity and needing rights protection',
        'Need advice on right to silence, right to counsel during investigation',
      ],
    },
    legalChallenges: {
      vi: [
        'Quy trình tố tụng hình sự phức tạp với nhiều giai đoạn và thời hạn nghiêm ngặt',
        'Quyền tiếp cận hồ sơ vụ án và gặp thân chủ bị hạn chế trong giai đoạn điều tra',
        'Cần đánh giá chính xác tình tiết giảm nhẹ và các căn cứ miễn trách nhiệm hình sự',
      ],
      en: [
        'Complex criminal procedure with multiple stages and strict deadlines',
        'Limited rights to access case files and meet clients during investigation',
        'Need accurate assessment of mitigating circumstances and criminal liability exemption grounds',
      ],
    },
    scopeOfServices: [
      {
        title: { vi: 'Bào chữa hình sự', en: 'Criminal Defense' },
        description: {
          vi: 'Bào chữa cho bị can, bị cáo trong suốt quá trình tố tụng từ điều tra đến xét xử phúc thẩm.',
          en: 'Defending the accused throughout criminal proceedings from investigation to appellate trial.',
        },
      },
      {
        title: { vi: 'Bảo vệ quyền bị hại', en: 'Victim Representation' },
        description: {
          vi: 'Đại diện và bảo vệ quyền lợi cho người bị hại, nguyên đơn dân sự trong vụ án hình sự.',
          en: 'Representing and protecting rights of victims and civil plaintiffs in criminal cases.',
        },
      },
      {
        title: { vi: 'Tội phạm kinh tế', en: 'Economic Crime' },
        description: {
          vi: 'Bào chữa trong các vụ án liên quan đến lừa đảo, trốn thuế, rửa tiền và các tội phạm kinh tế khác.',
          en: 'Defense in cases involving fraud, tax evasion, money laundering, and other economic crimes.',
        },
      },
      {
        title: { vi: 'Tư vấn phòng ngừa', en: 'Preventive Advisory' },
        description: {
          vi: 'Tư vấn doanh nghiệp xây dựng chính sách tuân thủ để phòng ngừa rủi ro hình sự.',
          en: 'Advising businesses on building compliance policies to prevent criminal risks.',
        },
      },
      {
        title: { vi: 'Kháng cáo & giám đốc thẩm', en: 'Appeals & Cassation' },
        description: {
          vi: 'Chuẩn bị và thực hiện kháng cáo, đề nghị giám đốc thẩm hoặc tái thẩm khi có căn cứ.',
          en: 'Preparing and executing appeals, requesting cassation or retrial when grounds exist.',
        },
      },
    ],
    process: [
      {
        step: 1,
        title: { vi: 'Tiếp nhận khẩn cấp', en: 'Emergency Intake' },
        description: {
          vi: 'Tiếp nhận vụ việc nhanh chóng, đăng ký tham gia tố tụng và gặp thân chủ tại cơ sở giam giữ nếu cần.',
          en: 'Rapid case intake, registering participation in proceedings, and meeting client at detention facility if needed.',
        },
      },
      {
        step: 2,
        title: { vi: 'Nghiên cứu hồ sơ', en: 'Case File Review' },
        description: {
          vi: 'Nghiên cứu kỹ hồ sơ vụ án, đánh giá chứng cứ và xác định các vấn đề pháp lý quan trọng.',
          en: 'Thoroughly reviewing case files, evaluating evidence, and identifying key legal issues.',
        },
      },
      {
        step: 3,
        title: { vi: 'Xây dựng chiến lược', en: 'Strategy Development' },
        description: {
          vi: 'Xây dựng chiến lược bào chữa dựa trên phân tích chứng cứ, pháp luật và thực tiễn xét xử.',
          en: 'Building defense strategy based on evidence analysis, law, and trial practice.',
        },
      },
      {
        step: 4,
        title: { vi: 'Đại diện tại tòa', en: 'Court Representation' },
        description: {
          vi: 'Bào chữa tại phiên tòa, tranh luận với Viện Kiểm sát và bảo vệ quyền lợi tốt nhất cho thân chủ.',
          en: 'Defending at trial, arguing against the Procuracy, and protecting the best interests of the client.',
        },
      },
    ],
    benefits: [
      {
        title: { vi: 'Bảo vệ quyền tự do', en: 'Freedom Protection' },
        description: {
          vi: 'Bào chữa chuyên nghiệp giúp bảo vệ quyền tự do và giảm thiểu hình phạt.',
          en: 'Professional defense helps protect freedom rights and minimize penalties.',
        },
      },
      {
        title: { vi: 'Đảm bảo công bằng', en: 'Ensuring Fairness' },
        description: {
          vi: 'Giám sát quy trình tố tụng, đảm bảo cơ quan tiến hành tố tụng tuân thủ đúng pháp luật.',
          en: 'Monitoring proceedings, ensuring authorities conducting proceedings comply with law.',
        },
      },
      {
        title: { vi: 'Hỗ trợ tâm lý', en: 'Psychological Support' },
        description: {
          vi: 'Đồng hành và hỗ trợ thân chủ vượt qua áp lực tâm lý trong suốt quá trình tố tụng.',
          en: 'Accompanying and supporting clients through psychological pressure throughout proceedings.',
        },
      },
      {
        title: { vi: 'Phòng ngừa tái phạm', en: 'Recurrence Prevention' },
        description: {
          vi: 'Tư vấn biện pháp phòng ngừa để tránh tái phạm và các rủi ro hình sự trong tương lai.',
          en: 'Advising on preventive measures to avoid recurrence and future criminal risks.',
        },
      },
    ],
    representativeMatters: {
      vi: [
        'Bào chữa thành công cho giám đốc doanh nghiệp bị cáo buộc trốn thuế, tòa tuyên không phạm tội do chứng cứ không đủ.',
        'Đại diện nạn nhân trong vụ án lừa đảo chiếm đoạt tài sản quy mô lớn, đạt phán quyết bồi thường toàn bộ thiệt hại.',
        'Bào chữa cho khách hàng trong vụ án liên quan đến vi phạm quy định về quản lý đất đai, đạt mức hình phạt thấp nhất.',
      ],
      en: [
        'Successfully defended a business director accused of tax evasion; court ruled not guilty due to insufficient evidence.',
        'Represented victims in a large-scale fraud case, achieving a full damage compensation verdict.',
        'Defended client in a land management violation case, achieving the minimum possible penalty.',
      ],
    },
    faqs: [
      {
        question: {
          vi: 'Khi nào tôi nên liên hệ luật sư hình sự?',
          en: 'When should I contact a criminal lawyer?',
        },
        answer: {
          vi: 'Ngay khi nhận được triệu tập, quyết định khởi tố hoặc biết mình có liên quan đến vụ án hình sự. Càng sớm có luật sư, quyền lợi của bạn càng được bảo vệ tốt hơn, đặc biệt trong giai đoạn điều tra.',
          en: 'Immediately upon receiving a summons, prosecution decision, or learning of involvement in a criminal case. The sooner you have a lawyer, the better your rights are protected, especially during the investigation stage.',
        },
      },
      {
        question: {
          vi: 'Luật sư có thể gặp thân chủ đang bị tạm giam không?',
          en: 'Can a lawyer meet a client in pre-trial detention?',
        },
        answer: {
          vi: 'Có, luật sư bào chữa có quyền gặp và trao đổi riêng với thân chủ tại cơ sở giam giữ. Tuy nhiên, trong một số trường hợp đặc biệt, cơ quan điều tra có thể yêu cầu có mặt của người giám sát.',
          en: 'Yes, defense counsel has the right to meet and communicate privately with clients at detention facilities. However, in certain special cases, the investigation agency may require a supervisor to be present.',
        },
      },
      {
        question: {
          vi: 'Có thể xin tại ngoại khi đang bị tạm giam không?',
          en: 'Can bail be requested during pre-trial detention?',
        },
        answer: {
          vi: 'Có thể, trong một số trường hợp. Pháp luật Việt Nam cho phép thay đổi biện pháp tạm giam bằng cấm đi khỏi nơi cư trú, đặt tiền bảo đảm hoặc bảo lĩnh. Luật sư sẽ đánh giá khả năng và chuẩn bị hồ sơ đề nghị.',
          en: 'Possible in some cases. Vietnamese law allows replacing detention with travel restrictions, security deposit, or personal guarantee. The lawyer will assess the possibility and prepare the application.',
        },
      },
    ],
    relatedServiceSlugs: ['dispute-resolution', 'civil-law', 'corporate-law'],
  },

  // ─────────────────────────────────────────────
  // 8. Family & Marriage (Luật hôn nhân & gia đình)
  // ─────────────────────────────────────────────
  {
    id: 'family-marriage',
    slug: 'family-marriage',
    icon: 'Heart',
    audiences: ['individuals', 'families', 'expatriates'],
    keyTopics: [
      'divorce',
      'child custody',
      'prenuptial agreements',
      'adoption',
      'marital property',
    ],
    title: {
      vi: 'Luật hôn nhân & gia đình',
      en: 'Family & Marriage Law',
    },
    eyebrow: {
      vi: 'Hôn nhân & gia đình',
      en: 'Family Law',
    },
    heroDescription: {
      vi: 'Chúng tôi hỗ trợ tư vấn và giải quyết các vấn đề pháp lý về hôn nhân, gia đình với sự thấu hiểu và tôn trọng, bảo vệ quyền lợi của tất cả các thành viên trong gia đình.',
      en: 'We provide advisory and resolution for marriage and family legal matters with empathy and respect, protecting the interests of all family members.',
    },
    overviewTitle: {
      vi: 'Giải quyết nhẹ nhàng những vấn đề nhạy cảm',
      en: 'Sensitive Matters Handled with Care',
    },
    overviewParagraphs: {
      vi: [
        'Các vấn đề pháp lý về hôn nhân và gia đình luôn đan xen giữa luật pháp và cảm xúc. Đội ngũ luật sư gia đình của Lighthouse Law tiếp cận mỗi vụ việc với sự chuyên nghiệp, thấu hiểu và tế nhị, luôn ưu tiên giải pháp hòa bình và bảo vệ lợi ích tốt nhất của trẻ em.',
        'Chúng tôi tư vấn toàn diện từ thỏa thuận trước hôn nhân, thủ tục ly hôn, phân chia tài sản, quyền nuôi con đến nhận con nuôi và các vấn đề hôn nhân có yếu tố nước ngoài.',
      ],
      en: [
        'Marriage and family legal matters always interweave law and emotion. Lighthouse Law\'s family law team approaches each case with professionalism, empathy, and sensitivity, always prioritizing peaceful solutions and the best interests of children.',
        'We provide comprehensive advisory from prenuptial agreements, divorce procedures, property division, child custody to adoption and cross-border marriage issues.',
      ],
    },
    commonSituations: {
      vi: [
        'Vợ chồng muốn ly hôn thuận tình hoặc đơn phương',
        'Tranh chấp về quyền nuôi con sau ly hôn',
        'Cần phân chia tài sản chung vợ chồng khi ly hôn',
        'Muốn lập thỏa thuận tiền hôn nhân',
        'Thủ tục nhận con nuôi trong nước hoặc quốc tế',
      ],
      en: [
        'Spouses want mutual or unilateral divorce',
        'Child custody disputes after divorce',
        'Need to divide marital property upon divorce',
        'Want to establish prenuptial agreement',
        'Domestic or international adoption procedures',
      ],
    },
    legalChallenges: {
      vi: [
        'Xác định tài sản chung, tài sản riêng của vợ chồng khi không có thỏa thuận rõ ràng',
        'Bảo vệ quyền lợi của trẻ em khi cha mẹ không thống nhất về quyền nuôi con',
        'Hôn nhân có yếu tố nước ngoài đặt ra nhiều vấn đề về luật áp dụng và thẩm quyền',
      ],
      en: [
        'Determining marital and separate property when there is no clear agreement',
        'Protecting children\'s interests when parents disagree on custody',
        'International marriages raise many issues about applicable law and jurisdiction',
      ],
    },
    scopeOfServices: [
      {
        title: { vi: 'Ly hôn & hòa giải', en: 'Divorce & Mediation' },
        description: {
          vi: 'Tư vấn thủ tục ly hôn thuận tình và đơn phương, hỗ trợ hòa giải và đại diện tại tòa.',
          en: 'Advising on mutual and unilateral divorce procedures, supporting mediation and court representation.',
        },
      },
      {
        title: { vi: 'Quyền nuôi con', en: 'Child Custody' },
        description: {
          vi: 'Bảo vệ quyền nuôi con, thỏa thuận cấp dưỡng và quyền thăm nom sau ly hôn.',
          en: 'Protecting custody rights, child support agreements, and post-divorce visitation rights.',
        },
      },
      {
        title: { vi: 'Phân chia tài sản', en: 'Property Division' },
        description: {
          vi: 'Xác định và phân chia tài sản chung vợ chồng, bao gồm bất động sản, cổ phần và tài sản tài chính.',
          en: 'Identifying and dividing marital property, including real estate, shares, and financial assets.',
        },
      },
      {
        title: { vi: 'Thỏa thuận tiền hôn nhân', en: 'Prenuptial Agreements' },
        description: {
          vi: 'Soạn thảo thỏa thuận về chế độ tài sản trước hôn nhân, bảo vệ quyền lợi tài sản của mỗi bên.',
          en: 'Drafting pre-marital property regime agreements, protecting each party\'s property interests.',
        },
      },
      {
        title: { vi: 'Nhận con nuôi', en: 'Adoption' },
        description: {
          vi: 'Hỗ trợ thủ tục nhận con nuôi trong nước và quốc tế theo quy định pháp luật.',
          en: 'Supporting domestic and international adoption procedures in accordance with regulations.',
        },
      },
    ],
    process: [
      {
        step: 1,
        title: { vi: 'Tư vấn riêng tư', en: 'Private Consultation' },
        description: {
          vi: 'Lắng nghe tình huống của khách hàng trong không gian riêng tư, đánh giá quyền lợi và lựa chọn pháp lý.',
          en: 'Listening to the client\'s situation in a private setting, evaluating rights and legal options.',
        },
      },
      {
        step: 2,
        title: { vi: 'Lựa chọn phương thức', en: 'Method Selection' },
        description: {
          vi: 'Đề xuất phương thức giải quyết phù hợp: thương lượng, hòa giải hoặc tố tụng tại tòa.',
          en: 'Proposing appropriate resolution method: negotiation, mediation, or court proceedings.',
        },
      },
      {
        step: 3,
        title: { vi: 'Chuẩn bị & nộp hồ sơ', en: 'Preparation & Filing' },
        description: {
          vi: 'Chuẩn bị đầy đủ hồ sơ, đơn yêu cầu ly hôn, thỏa thuận và nộp tại tòa án có thẩm quyền.',
          en: 'Preparing complete dossiers, divorce petitions, agreements, and filing with the competent court.',
        },
      },
      {
        step: 4,
        title: { vi: 'Đại diện & bảo vệ', en: 'Representation & Defense' },
        description: {
          vi: 'Đại diện tại phiên tòa hoặc phiên hòa giải, bảo vệ quyền lợi tốt nhất cho khách hàng và con trẻ.',
          en: 'Representing at trial or mediation sessions, protecting the best interests of clients and children.',
        },
      },
    ],
    benefits: [
      {
        title: { vi: 'Bảo vệ trẻ em', en: 'Child Protection' },
        description: {
          vi: 'Luôn đặt lợi ích tốt nhất của trẻ em lên hàng đầu trong mọi quyết định.',
          en: 'Always placing children\'s best interests first in every decision.',
        },
      },
      {
        title: { vi: 'Giảm xung đột', en: 'Reduced Conflict' },
        description: {
          vi: 'Phương thức hòa giải giúp giảm căng thẳng và tìm giải pháp chấp nhận được cho cả hai bên.',
          en: 'Mediation approach helps reduce tension and find acceptable solutions for both parties.',
        },
      },
      {
        title: { vi: 'Bảo mật tuyệt đối', en: 'Absolute Confidentiality' },
        description: {
          vi: 'Mọi thông tin được bảo mật nghiêm ngặt, tôn trọng sự riêng tư của gia đình.',
          en: 'All information is strictly confidential, respecting family privacy.',
        },
      },
      {
        title: { vi: 'Giải pháp bền vững', en: 'Sustainable Solutions' },
        description: {
          vi: 'Xây dựng thỏa thuận khả thi và bền vững, giảm thiểu tranh chấp trong tương lai.',
          en: 'Building feasible and sustainable agreements, minimizing future disputes.',
        },
      },
    ],
    representativeMatters: {
      vi: [
        'Đại diện trong vụ ly hôn phức tạp có tài sản chung trị giá hàng chục tỷ đồng, đạt thỏa thuận phân chia công bằng.',
        'Bảo vệ thành công quyền nuôi con cho mẹ trong vụ tranh chấp quyền nuôi con có yếu tố nước ngoài.',
        'Hỗ trợ cặp vợ chồng Việt-Pháp hoàn tất thủ tục nhận con nuôi quốc tế.',
      ],
      en: [
        'Represented in a complex divorce with marital assets worth tens of billions VND, achieving fair division agreement.',
        'Successfully protected mother\'s custody rights in an international custody dispute.',
        'Assisted a Vietnamese-French couple in completing international adoption procedures.',
      ],
    },
    faqs: [
      {
        question: {
          vi: 'Thủ tục ly hôn thuận tình mất bao lâu?',
          en: 'How long does a mutual divorce take?',
        },
        answer: {
          vi: 'Ly hôn thuận tình thường mất 1-3 tháng kể từ ngày nộp đơn. Tòa án sẽ tổ chức hòa giải và nếu hai bên vẫn đồng ý ly hôn, tòa sẽ ra quyết định công nhận thuận tình ly hôn.',
          en: 'Mutual divorce typically takes 1-3 months from filing date. The court will organize mediation and if both parties still agree to divorce, the court will issue a decision recognizing the mutual divorce.',
        },
      },
      {
        question: {
          vi: 'Ai sẽ được quyền nuôi con sau ly hôn?',
          en: 'Who gets child custody after divorce?',
        },
        answer: {
          vi: 'Tòa án quyết định dựa trên lợi ích tốt nhất của trẻ, xem xét điều kiện kinh tế, tinh thần, môi trường sống. Trẻ từ 7 tuổi trở lên có quyền bày tỏ nguyện vọng. Trẻ dưới 36 tháng thường được giao cho mẹ nuôi.',
          en: 'The court decides based on the child\'s best interests, considering economic conditions, emotional well-being, and living environment. Children aged 7 and above may express their wishes. Children under 36 months are typically placed with the mother.',
        },
      },
      {
        question: {
          vi: 'Thỏa thuận tiền hôn nhân có hiệu lực pháp lý không?',
          en: 'Are prenuptial agreements legally valid?',
        },
        answer: {
          vi: 'Có, Luật Hôn nhân và Gia đình 2014 cho phép vợ chồng thỏa thuận về chế độ tài sản trước hôn nhân bằng văn bản có công chứng. Thỏa thuận này có hiệu lực nếu tuân thủ đúng hình thức và nội dung theo quy định.',
          en: 'Yes, the Marriage and Family Law 2014 allows spouses to agree on pre-marital property regimes through notarized written agreements. Such agreements are valid if they comply with prescribed form and content requirements.',
        },
      },
    ],
    relatedServiceSlugs: ['civil-law', 'real-estate-law', 'dispute-resolution'],
  },

  // ─────────────────────────────────────────────
  // 9. Labor Law (Luật lao động)
  // ─────────────────────────────────────────────
  {
    id: 'labor-law',
    slug: 'labor-law',
    icon: 'Users',
    audiences: ['businesses', 'employees', 'HR-professionals', 'unions'],
    keyTopics: [
      'employment contracts',
      'labor disputes',
      'workplace regulations',
      'social insurance',
      'termination',
    ],
    title: {
      vi: 'Luật lao động',
      en: 'Labor Law',
    },
    eyebrow: {
      vi: 'Quan hệ lao động',
      en: 'Employment Relations',
    },
    heroDescription: {
      vi: 'Chúng tôi tư vấn cho cả doanh nghiệp và người lao động về quyền và nghĩa vụ trong quan hệ lao động, xây dựng môi trường làm việc hài hòa và tuân thủ pháp luật.',
      en: 'We advise both businesses and employees on rights and obligations in employment relationships, building harmonious and legally compliant workplaces.',
    },
    overviewTitle: {
      vi: 'Xây dựng quan hệ lao động bền vững',
      en: 'Building Sustainable Employment Relations',
    },
    overviewParagraphs: {
      vi: [
        'Luật lao động Việt Nam đã trải qua nhiều thay đổi quan trọng với Bộ luật Lao động 2019, tạo ra cả cơ hội và thách thức cho doanh nghiệp và người lao động. Lighthouse Law giúp khách hàng hiểu rõ và tuân thủ các quy định mới về hợp đồng lao động, thời giờ làm việc, tiền lương, bảo hiểm xã hội và giải quyết tranh chấp.',
        'Chúng tôi hỗ trợ doanh nghiệp xây dựng chính sách nhân sự phù hợp và đại diện cho cả người sử dụng lao động và người lao động trong các tranh chấp lao động.',
      ],
      en: [
        'Vietnamese labor law has undergone significant changes with the Labor Code 2019, creating both opportunities and challenges for businesses and employees. Lighthouse Law helps clients understand and comply with new regulations on labor contracts, working hours, wages, social insurance, and dispute resolution.',
        'We support businesses in building appropriate HR policies and represent both employers and employees in labor disputes.',
      ],
    },
    commonSituations: {
      vi: [
        'Doanh nghiệp cần xây dựng hoặc cập nhật nội quy lao động và hợp đồng lao động',
        'Người lao động bị chấm dứt hợp đồng lao động trái pháp luật',
        'Tranh chấp về tiền lương, phụ cấp, thưởng hoặc bảo hiểm xã hội',
        'Doanh nghiệp cần tư vấn về quy trình kỷ luật lao động đúng pháp luật',
        'Cần xử lý tình huống sa thải hàng loạt hoặc cắt giảm nhân sự',
      ],
      en: [
        'Business needs to develop or update labor regulations and employment contracts',
        'Employee was unlawfully terminated',
        'Disputes about wages, allowances, bonuses, or social insurance',
        'Business needs advice on lawful labor discipline procedures',
        'Need to handle mass layoffs or workforce reduction',
      ],
    },
    legalChallenges: {
      vi: [
        'Quy trình chấm dứt hợp đồng lao động nghiêm ngặt, sai sót nhỏ có thể dẫn đến khiếu kiện',
        'Tính toán phức tạp về bảo hiểm xã hội, bảo hiểm y tế và bảo hiểm thất nghiệp',
        'Cân bằng giữa quyền quản lý của doanh nghiệp và quyền lợi của người lao động',
      ],
      en: [
        'Strict employment termination procedures where minor errors can lead to claims',
        'Complex calculations for social insurance, health insurance, and unemployment insurance',
        'Balancing management rights of businesses and employee rights',
      ],
    },
    scopeOfServices: [
      {
        title: { vi: 'Hợp đồng lao động', en: 'Employment Contracts' },
        description: {
          vi: 'Soạn thảo, rà soát hợp đồng lao động và các phụ lục, thỏa thuận liên quan đến quan hệ lao động.',
          en: 'Drafting and reviewing employment contracts and annexes, agreements related to employment relationships.',
        },
      },
      {
        title: { vi: 'Nội quy & chính sách HR', en: 'Rules & HR Policies' },
        description: {
          vi: 'Xây dựng nội quy lao động, quy chế tiền lương, thỏa ước lao động tập thể và chính sách nhân sự.',
          en: 'Developing labor regulations, salary schemes, collective bargaining agreements, and HR policies.',
        },
      },
      {
        title: { vi: 'Chấm dứt & kỷ luật', en: 'Termination & Discipline' },
        description: {
          vi: 'Tư vấn quy trình chấm dứt hợp đồng, xử lý kỷ luật lao động và tính toán chế độ cho người lao động.',
          en: 'Advising on contract termination procedures, labor discipline handling, and calculating employee entitlements.',
        },
      },
      {
        title: { vi: 'Bảo hiểm xã hội', en: 'Social Insurance' },
        description: {
          vi: 'Tư vấn tuân thủ quy định bảo hiểm xã hội, bảo hiểm y tế, bảo hiểm thất nghiệp và xử lý tranh chấp.',
          en: 'Advising on social insurance, health insurance, unemployment insurance compliance and dispute handling.',
        },
      },
      {
        title: { vi: 'Giải quyết tranh chấp lao động', en: 'Labor Dispute Resolution' },
        description: {
          vi: 'Đại diện trong hòa giải, trọng tài lao động và tố tụng tại tòa án liên quan đến tranh chấp lao động.',
          en: 'Representing in mediation, labor arbitration, and court proceedings related to labor disputes.',
        },
      },
    ],
    process: [
      {
        step: 1,
        title: { vi: 'Rà soát hiện trạng', en: 'Current Status Review' },
        description: {
          vi: 'Đánh giá hệ thống hợp đồng, nội quy và chính sách lao động hiện tại của doanh nghiệp.',
          en: 'Evaluating the business\'s current contract system, labor regulations, and policies.',
        },
      },
      {
        step: 2,
        title: { vi: 'Tư vấn giải pháp', en: 'Solution Advisory' },
        description: {
          vi: 'Đề xuất giải pháp cụ thể để tuân thủ pháp luật và tối ưu hóa quản lý nhân sự.',
          en: 'Proposing specific solutions for legal compliance and optimizing HR management.',
        },
      },
      {
        step: 3,
        title: { vi: 'Triển khai', en: 'Implementation' },
        description: {
          vi: 'Soạn thảo tài liệu, hỗ trợ đăng ký nội quy và triển khai các chính sách mới.',
          en: 'Drafting documents, supporting regulation registration, and implementing new policies.',
        },
      },
      {
        step: 4,
        title: { vi: 'Hỗ trợ liên tục', en: 'Ongoing Support' },
        description: {
          vi: 'Cập nhật khi có thay đổi pháp luật, hỗ trợ xử lý các vấn đề phát sinh trong thực tế.',
          en: 'Updating when legislation changes, supporting handling of issues arising in practice.',
        },
      },
    ],
    benefits: [
      {
        title: { vi: 'Giảm rủi ro kiện tụng', en: 'Reduced Litigation Risk' },
        description: {
          vi: 'Hệ thống tài liệu và quy trình chuẩn giúp giảm đáng kể rủi ro bị khiếu kiện lao động.',
          en: 'Standardized documentation and procedures significantly reduce labor claim risks.',
        },
      },
      {
        title: { vi: 'Môi trường hài hòa', en: 'Harmonious Environment' },
        description: {
          vi: 'Chính sách rõ ràng, công bằng tạo ra môi trường làm việc tích cực và hiệu quả.',
          en: 'Clear, fair policies create a positive and productive working environment.',
        },
      },
      {
        title: { vi: 'Tuân thủ tự động', en: 'Automatic Compliance' },
        description: {
          vi: 'Hệ thống quản lý lao động được thiết kế để tự động tuân thủ các quy định pháp luật.',
          en: 'Labor management systems designed to automatically comply with legal regulations.',
        },
      },
      {
        title: { vi: 'Thu hút nhân tài', en: 'Talent Attraction' },
        description: {
          vi: 'Chính sách lao động chuyên nghiệp giúp doanh nghiệp thu hút và giữ chân nhân tài.',
          en: 'Professional labor policies help businesses attract and retain talent.',
        },
      },
    ],
    representativeMatters: {
      vi: [
        'Xây dựng toàn bộ hệ thống nội quy lao động và hợp đồng cho doanh nghiệp sản xuất 2.000 nhân viên.',
        'Đại diện doanh nghiệp trong vụ tranh chấp tập thể với 150 công nhân về điều kiện làm thêm giờ.',
        'Tư vấn quy trình sa thải hợp pháp cho chương trình tái cấu trúc ảnh hưởng đến 300 nhân viên.',
      ],
      en: [
        'Built complete labor regulation and contract systems for a manufacturing enterprise with 2,000 employees.',
        'Represented the employer in a collective dispute with 150 workers regarding overtime conditions.',
        'Advised on lawful termination procedures for a restructuring program affecting 300 employees.',
      ],
    },
    faqs: [
      {
        question: {
          vi: 'Doanh nghiệp có thể đơn phương chấm dứt hợp đồng lao động khi nào?',
          en: 'When can an employer unilaterally terminate an employment contract?',
        },
        answer: {
          vi: 'Theo Bộ luật Lao động 2019, doanh nghiệp có thể đơn phương chấm dứt trong các trường hợp cụ thể như người lao động thường xuyên không hoàn thành công việc, ốm đau kéo dài, hoặc do thiên tai, dịch bệnh buộc phải thu hẹp sản xuất. Phải tuân thủ nghiêm ngặt về thời hạn báo trước.',
          en: 'Under the Labor Code 2019, employers can unilaterally terminate in specific cases such as repeated failure to perform duties, prolonged illness, or force majeure requiring production reduction. Strict advance notice requirements must be observed.',
        },
      },
      {
        question: {
          vi: 'Người lao động nước ngoài cần giấy phép lao động gì?',
          en: 'What work permits do foreign workers need?',
        },
        answer: {
          vi: 'Người lao động nước ngoài cần giấy phép lao động do Sở Lao động cấp, trừ một số trường hợp miễn giấy phép theo quy định. Thời hạn giấy phép tối đa 2 năm, có thể gia hạn một lần.',
          en: 'Foreign workers need a work permit issued by the Department of Labor, except in certain exempt cases as prescribed. The maximum permit duration is 2 years, renewable once.',
        },
      },
      {
        question: {
          vi: 'Mức bồi thường khi chấm dứt hợp đồng trái pháp luật là bao nhiêu?',
          en: 'What is the compensation for unlawful contract termination?',
        },
        answer: {
          vi: 'Người sử dụng lao động phải trả tiền lương cho những ngày không làm việc, trợ cấp thôi việc, và bồi thường ít nhất 2 tháng tiền lương. Ngoài ra, có thể phải nhận người lao động trở lại làm việc theo yêu cầu.',
          en: 'The employer must pay wages for days not worked, severance allowance, and compensation of at least 2 months\' salary. Additionally, the employer may be required to reinstate the employee upon request.',
        },
      },
    ],
    relatedServiceSlugs: ['contract-drafting-review', 'dispute-resolution', 'corporate-law'],
  },

  // ─────────────────────────────────────────────
  // 10. Tax Law (Luật thuế)
  // ─────────────────────────────────────────────
  {
    id: 'tax-law',
    slug: 'tax-law',
    icon: 'Calculator',
    audiences: ['businesses', 'individuals', 'foreign-investors', 'accountants'],
    keyTopics: [
      'corporate tax',
      'personal income tax',
      'VAT',
      'transfer pricing',
      'tax compliance',
    ],
    title: {
      vi: 'Luật thuế',
      en: 'Tax Law',
    },
    eyebrow: {
      vi: 'Thuế & tài chính',
      en: 'Tax & Finance',
    },
    heroDescription: {
      vi: 'Chúng tôi tư vấn chiến lược thuế hợp pháp và hỗ trợ tuân thủ nghĩa vụ thuế, giúp doanh nghiệp và cá nhân tối ưu hóa nghĩa vụ thuế trong khuôn khổ pháp luật.',
      en: 'We advise on lawful tax strategies and support tax compliance, helping businesses and individuals optimize tax obligations within the legal framework.',
    },
    overviewTitle: {
      vi: 'Tối ưu hóa thuế trong khuôn khổ pháp luật',
      en: 'Tax Optimization Within Legal Boundaries',
    },
    overviewParagraphs: {
      vi: [
        'Hệ thống thuế Việt Nam bao gồm nhiều loại thuế phức tạp với các quy định thường xuyên thay đổi. Việc tuân thủ đúng và đủ nghĩa vụ thuế không chỉ là trách nhiệm pháp lý mà còn là nền tảng cho hoạt động kinh doanh bền vững.',
        'Lighthouse Law cung cấp dịch vụ tư vấn thuế chuyên sâu, từ lập kế hoạch thuế, rà soát tuân thủ, đến đại diện trong thanh tra và giải quyết tranh chấp thuế. Chúng tôi giúp khách hàng tận dụng tối đa các ưu đãi thuế hợp pháp.',
      ],
      en: [
        'Vietnam\'s tax system encompasses many complex tax types with frequently changing regulations. Proper and complete tax compliance is not only a legal obligation but also the foundation for sustainable business operations.',
        'Lighthouse Law provides specialized tax advisory services, from tax planning and compliance review to representation in audits and tax dispute resolution. We help clients maximize legitimate tax incentives.',
      ],
    },
    commonSituations: {
      vi: [
        'Doanh nghiệp bị thanh tra thuế và cần hỗ trợ pháp lý',
        'Cần lập kế hoạch thuế cho giao dịch mua bán sáp nhập hoặc tái cấu trúc',
        'Doanh nghiệp FDI cần tư vấn về chuyển giá và thuế nhà thầu nước ngoài',
        'Cá nhân cần tư vấn về thuế thu nhập cá nhân từ chuyển nhượng tài sản',
      ],
      en: [
        'Business is under tax audit and needs legal support',
        'Need tax planning for M&A or restructuring transactions',
        'FDI enterprise needs advice on transfer pricing and foreign contractor tax',
        'Individual needs advice on personal income tax from asset transfers',
      ],
    },
    legalChallenges: {
      vi: [
        'Quy định thuế thay đổi thường xuyên với nhiều nghị định và thông tư hướng dẫn',
        'Chuyển giá bị cơ quan thuế giám sát chặt chẽ với quy định ngày càng phức tạp',
        'Khác biệt trong cách áp dụng giữa cơ quan thuế các địa phương',
      ],
      en: [
        'Tax regulations frequently change with numerous implementing decrees and circulars',
        'Transfer pricing is closely monitored by tax authorities with increasingly complex regulations',
        'Differences in application between local tax authorities',
      ],
    },
    scopeOfServices: [
      {
        title: { vi: 'Lập kế hoạch thuế', en: 'Tax Planning' },
        description: {
          vi: 'Xây dựng chiến lược thuế tối ưu cho doanh nghiệp và cá nhân trong khuôn khổ pháp luật.',
          en: 'Building optimal tax strategies for businesses and individuals within the legal framework.',
        },
      },
      {
        title: { vi: 'Tuân thủ thuế', en: 'Tax Compliance' },
        description: {
          vi: 'Rà soát và hỗ trợ tuân thủ nghĩa vụ kê khai, nộp thuế đúng hạn và đúng quy định.',
          en: 'Reviewing and supporting compliance with filing and tax payment obligations on time and per regulations.',
        },
      },
      {
        title: { vi: 'Tư vấn chuyển giá', en: 'Transfer Pricing Advisory' },
        description: {
          vi: 'Xây dựng chính sách chuyển giá, chuẩn bị hồ sơ xác định giá giao dịch liên kết theo quy định.',
          en: 'Building transfer pricing policies, preparing related-party transaction pricing documentation per regulations.',
        },
      },
      {
        title: { vi: 'Hỗ trợ thanh tra thuế', en: 'Tax Audit Support' },
        description: {
          vi: 'Đại diện và hỗ trợ doanh nghiệp trong quá trình thanh tra, kiểm tra thuế của cơ quan thuế.',
          en: 'Representing and supporting businesses during tax authority audits and inspections.',
        },
      },
      {
        title: { vi: 'Khiếu nại & tranh chấp thuế', en: 'Tax Appeals & Disputes' },
        description: {
          vi: 'Đại diện khiếu nại quyết định truy thu thuế, xử phạt thuế và giải quyết tranh chấp thuế tại tòa.',
          en: 'Representing appeals against tax assessment decisions, tax penalties, and resolving tax disputes in court.',
        },
      },
      {
        title: { vi: 'Thuế cá nhân', en: 'Personal Tax' },
        description: {
          vi: 'Tư vấn thuế thu nhập cá nhân cho người Việt Nam và người nước ngoài làm việc tại Việt Nam.',
          en: 'Personal income tax advisory for Vietnamese nationals and foreigners working in Vietnam.',
        },
      },
    ],
    process: [
      {
        step: 1,
        title: { vi: 'Đánh giá thuế', en: 'Tax Assessment' },
        description: {
          vi: 'Rà soát tình hình tuân thủ thuế hiện tại, xác định rủi ro và cơ hội tối ưu.',
          en: 'Reviewing current tax compliance status, identifying risks and optimization opportunities.',
        },
      },
      {
        step: 2,
        title: { vi: 'Lập kế hoạch', en: 'Planning' },
        description: {
          vi: 'Xây dựng chiến lược thuế phù hợp với cấu trúc kinh doanh và mục tiêu tài chính.',
          en: 'Building tax strategy aligned with business structure and financial objectives.',
        },
      },
      {
        step: 3,
        title: { vi: 'Triển khai', en: 'Implementation' },
        description: {
          vi: 'Thực hiện các biện pháp tối ưu thuế, chuẩn bị hồ sơ và đào tạo nhân viên.',
          en: 'Implementing tax optimization measures, preparing documentation, and training staff.',
        },
      },
      {
        step: 4,
        title: { vi: 'Giám sát & cập nhật', en: 'Monitoring & Updates' },
        description: {
          vi: 'Theo dõi tuân thủ thường xuyên và cập nhật chiến lược khi có thay đổi pháp luật.',
          en: 'Regular compliance monitoring and strategy updates when legislation changes.',
        },
      },
    ],
    benefits: [
      {
        title: { vi: 'Tiết kiệm thuế hợp pháp', en: 'Lawful Tax Savings' },
        description: {
          vi: 'Tận dụng tối đa ưu đãi thuế và cấu trúc giao dịch hiệu quả về thuế.',
          en: 'Maximizing tax incentives and structuring transactions tax-efficiently.',
        },
      },
      {
        title: { vi: 'Tránh rủi ro truy thu', en: 'Avoiding Back-tax Risk' },
        description: {
          vi: 'Tuân thủ đúng quy định giúp tránh bị truy thu thuế và phạt vi phạm hành chính.',
          en: 'Proper compliance helps avoid back-tax assessments and administrative penalties.',
        },
      },
      {
        title: { vi: 'An tâm kinh doanh', en: 'Business Peace of Mind' },
        description: {
          vi: 'Hệ thống tuân thủ thuế vững chắc giúp doanh nghiệp tập trung vào hoạt động kinh doanh cốt lõi.',
          en: 'Solid tax compliance system allows businesses to focus on core operations.',
        },
      },
      {
        title: { vi: 'Sẵn sàng thanh tra', en: 'Audit Readiness' },
        description: {
          vi: 'Hồ sơ và tài liệu luôn sẵn sàng cho bất kỳ cuộc thanh tra thuế nào.',
          en: 'Documentation always ready for any tax audit.',
        },
      },
    ],
    representativeMatters: {
      vi: [
        'Tư vấn cấu trúc thuế tối ưu cho giao dịch M&A trị giá 30 triệu USD, tiết kiệm thuế đáng kể cho khách hàng.',
        'Đại diện doanh nghiệp sản xuất trong thanh tra thuế, giảm 60% khoản truy thu thuế ban đầu do cơ quan thuế đề xuất.',
        'Xây dựng chính sách chuyển giá và hồ sơ xác định giá cho tập đoàn đa quốc gia có 5 pháp nhân tại Việt Nam.',
      ],
      en: [
        'Advised on optimal tax structure for a USD 30 million M&A transaction, achieving significant tax savings for the client.',
        'Represented a manufacturing enterprise in a tax audit, reducing the initial back-tax assessment by 60%.',
        'Built transfer pricing policy and documentation for a multinational group with 5 entities in Vietnam.',
      ],
    },
    faqs: [
      {
        question: {
          vi: 'Thuế suất thuế thu nhập doanh nghiệp hiện tại là bao nhiêu?',
          en: 'What is the current corporate income tax rate?',
        },
        answer: {
          vi: 'Thuế suất thuế thu nhập doanh nghiệp phổ thông là 20%. Một số ngành nghề như dầu khí, khoáng sản có thuế suất cao hơn. Doanh nghiệp đủ điều kiện có thể được hưởng ưu đãi thuế suất 10-17% trong thời gian nhất định.',
          en: 'The standard corporate income tax rate is 20%. Certain sectors like oil and gas, minerals have higher rates. Qualifying enterprises may enjoy preferential rates of 10-17% for certain periods.',
        },
      },
      {
        question: {
          vi: 'Doanh nghiệp FDI có được ưu đãi thuế không?',
          en: 'Do FDI enterprises get tax incentives?',
        },
        answer: {
          vi: 'Có, tùy thuộc vào ngành nghề, địa bàn và quy mô đầu tư. Ưu đãi có thể bao gồm miễn thuế 2-4 năm đầu, giảm 50% thuế trong 4-9 năm tiếp theo, và thuế suất ưu đãi 10% trong 15 năm.',
          en: 'Yes, depending on sector, location, and investment scale. Incentives may include 2-4 year tax exemption, 50% reduction for 4-9 subsequent years, and preferential rate of 10% for 15 years.',
        },
      },
      {
        question: {
          vi: 'Khi bị thanh tra thuế, doanh nghiệp cần làm gì?',
          en: 'What should a business do when facing a tax audit?',
        },
        answer: {
          vi: 'Cần liên hệ luật sư thuế ngay khi nhận được quyết định thanh tra. Không nên tự ý cung cấp tài liệu ngoài phạm vi yêu cầu. Chuẩn bị hồ sơ, sổ sách kế toán đầy đủ và có người phụ trách đối ứng chuyên trách.',
          en: 'Contact a tax lawyer immediately upon receiving the audit decision. Do not voluntarily provide documents beyond the requested scope. Prepare complete records and accounting books, and designate a dedicated counterpart.',
        },
      },
    ],
    relatedServiceSlugs: ['corporate-law', 'investment-business', 'contract-drafting-review'],
  },

  // ─────────────────────────────────────────────
  // 11. Contract Drafting & Review
  // ─────────────────────────────────────────────
  {
    id: 'contract-drafting-review',
    slug: 'contract-drafting-review',
    icon: 'FileText',
    audiences: ['businesses', 'individuals', 'startups', 'enterprises'],
    keyTopics: [
      'contract drafting',
      'contract review',
      'negotiation support',
      'commercial agreements',
    ],
    title: {
      vi: 'Soạn thảo & rà soát hợp đồng',
      en: 'Contract Drafting & Review',
    },
    eyebrow: {
      vi: 'Hợp đồng pháp lý',
      en: 'Legal Contracts',
    },
    heroDescription: {
      vi: 'Chúng tôi soạn thảo, rà soát và đàm phán hợp đồng chặt chẽ, bảo vệ quyền lợi và giảm thiểu rủi ro pháp lý cho khách hàng trong mọi giao dịch.',
      en: 'We draft, review, and negotiate rigorous contracts, protecting interests and minimizing legal risks for clients in every transaction.',
    },
    overviewTitle: {
      vi: 'Hợp đồng chặt chẽ - Nền tảng giao dịch an toàn',
      en: 'Tight Contracts - The Foundation of Safe Transactions',
    },
    overviewParagraphs: {
      vi: [
        'Hợp đồng là công cụ pháp lý quan trọng nhất trong mọi giao dịch kinh doanh và dân sự. Một hợp đồng được soạn thảo kỹ lưỡng không chỉ bảo vệ quyền lợi mà còn ngăn ngừa tranh chấp, tiết kiệm chi phí và thời gian trong dài hạn.',
        'Lighthouse Law soạn thảo và rà soát hợp đồng bằng cả tiếng Việt và tiếng Anh, phục vụ đa dạng loại giao dịch từ mua bán, dịch vụ, hợp tác kinh doanh, đầu tư, đến các thỏa thuận phức tạp trong M&A và tài chính.',
      ],
      en: [
        'Contracts are the most important legal instrument in all business and civil transactions. A carefully drafted contract not only protects interests but also prevents disputes, saving costs and time in the long term.',
        'Lighthouse Law drafts and reviews contracts in both Vietnamese and English, serving diverse transaction types from sale and purchase, services, business cooperation, investment, to complex agreements in M&A and finance.',
      ],
    },
    commonSituations: {
      vi: [
        'Cần soạn thảo hợp đồng cho giao dịch kinh doanh quan trọng',
        'Muốn rà soát hợp đồng do đối tác cung cấp trước khi ký kết',
        'Cần hỗ trợ đàm phán các điều khoản hợp đồng có lợi hơn',
        'Phát hiện hợp đồng hiện tại có lỗ hổng pháp lý cần sửa đổi',
        'Cần chuẩn hóa hệ thống hợp đồng mẫu cho doanh nghiệp',
      ],
      en: [
        'Need to draft contract for an important business transaction',
        'Want to review a contract provided by counterparty before signing',
        'Need support negotiating more favorable contract terms',
        'Discovered current contracts have legal gaps requiring amendment',
        'Need to standardize contract template system for the business',
      ],
    },
    legalChallenges: {
      vi: [
        'Điều khoản hợp đồng mẫu thường có lợi cho bên soạn thảo, cần rà soát cẩn thận',
        'Sự khác biệt ngôn ngữ giữa bản tiếng Việt và tiếng Anh có thể tạo ra tranh chấp',
        'Nhiều hợp đồng thiếu điều khoản bồi thường thiệt hại và cơ chế giải quyết tranh chấp phù hợp',
      ],
      en: [
        'Template contract terms typically favor the drafting party, requiring careful review',
        'Language differences between Vietnamese and English versions can create disputes',
        'Many contracts lack appropriate damage compensation clauses and dispute resolution mechanisms',
      ],
    },
    scopeOfServices: [
      {
        title: { vi: 'Soạn thảo hợp đồng', en: 'Contract Drafting' },
        description: {
          vi: 'Soạn thảo hợp đồng mới theo yêu cầu, đảm bảo tuân thủ pháp luật và bảo vệ tối đa quyền lợi khách hàng.',
          en: 'Drafting new contracts per requirements, ensuring legal compliance and maximum client interest protection.',
        },
      },
      {
        title: { vi: 'Rà soát hợp đồng', en: 'Contract Review' },
        description: {
          vi: 'Rà soát toàn diện hợp đồng do đối tác cung cấp, phát hiện rủi ro và đề xuất sửa đổi.',
          en: 'Comprehensive review of counterparty-provided contracts, identifying risks and proposing amendments.',
        },
      },
      {
        title: { vi: 'Đàm phán hợp đồng', en: 'Contract Negotiation' },
        description: {
          vi: 'Hỗ trợ đàm phán các điều khoản hợp đồng, cân bằng lợi ích các bên.',
          en: 'Supporting negotiation of contract terms, balancing parties\' interests.',
        },
      },
      {
        title: { vi: 'Hợp đồng mẫu', en: 'Template Contracts' },
        description: {
          vi: 'Xây dựng hệ thống hợp đồng mẫu chuẩn hóa cho các loại giao dịch thường xuyên của doanh nghiệp.',
          en: 'Building standardized template contract systems for businesses\' recurring transaction types.',
        },
      },
      {
        title: { vi: 'Hợp đồng song ngữ', en: 'Bilingual Contracts' },
        description: {
          vi: 'Soạn thảo và dịch thuật hợp đồng song ngữ Việt-Anh, đảm bảo nhất quán về nội dung.',
          en: 'Drafting and translating bilingual Vietnamese-English contracts, ensuring content consistency.',
        },
      },
      {
        title: { vi: 'Quản lý hợp đồng', en: 'Contract Management' },
        description: {
          vi: 'Tư vấn xây dựng quy trình quản lý hợp đồng, theo dõi thời hạn và nghĩa vụ.',
          en: 'Advising on building contract management processes, tracking deadlines and obligations.',
        },
      },
    ],
    process: [
      {
        step: 1,
        title: { vi: 'Tìm hiểu giao dịch', en: 'Transaction Understanding' },
        description: {
          vi: 'Tìm hiểu chi tiết mục đích, phạm vi giao dịch và mối quan hệ giữa các bên.',
          en: 'Understanding transaction purpose, scope, and relationships between parties in detail.',
        },
      },
      {
        step: 2,
        title: { vi: 'Soạn thảo / rà soát', en: 'Drafting / Review' },
        description: {
          vi: 'Soạn thảo hợp đồng mới hoặc rà soát toàn diện hợp đồng hiện có với báo cáo chi tiết.',
          en: 'Drafting new contracts or comprehensively reviewing existing ones with detailed reports.',
        },
      },
      {
        step: 3,
        title: { vi: 'Đàm phán & hoàn thiện', en: 'Negotiation & Finalization' },
        description: {
          vi: 'Hỗ trợ đàm phán với đối tác, xử lý phản hồi và hoàn thiện bản cuối cùng.',
          en: 'Supporting negotiation with counterparty, processing feedback, and finalizing the final version.',
        },
      },
      {
        step: 4,
        title: { vi: 'Ký kết & lưu trữ', en: 'Execution & Archival' },
        description: {
          vi: 'Hỗ trợ quy trình ký kết và hướng dẫn lưu trữ, quản lý hợp đồng sau ký.',
          en: 'Supporting execution process and guiding post-signing contract storage and management.',
        },
      },
    ],
    benefits: [
      {
        title: { vi: 'Bảo vệ quyền lợi', en: 'Interest Protection' },
        description: {
          vi: 'Hợp đồng được soạn thảo chặt chẽ bảo vệ tối đa quyền và lợi ích hợp pháp của bạn.',
          en: 'Tightly drafted contracts maximally protect your legitimate rights and interests.',
        },
      },
      {
        title: { vi: 'Ngăn ngừa tranh chấp', en: 'Dispute Prevention' },
        description: {
          vi: 'Điều khoản rõ ràng, đầy đủ giúp các bên hiểu rõ quyền và nghĩa vụ, giảm tranh chấp.',
          en: 'Clear, comprehensive terms help parties understand rights and obligations, reducing disputes.',
        },
      },
      {
        title: { vi: 'Tiết kiệm chi phí', en: 'Cost Savings' },
        description: {
          vi: 'Đầu tư vào hợp đồng chất lượng tiết kiệm chi phí tranh chấp và kiện tụng sau này.',
          en: 'Investing in quality contracts saves future dispute and litigation costs.',
        },
      },
      {
        title: { vi: 'Thực thi hiệu quả', en: 'Effective Enforcement' },
        description: {
          vi: 'Hợp đồng tuân thủ pháp luật Việt Nam đảm bảo khả năng thực thi tại tòa án.',
          en: 'Contracts complying with Vietnamese law ensure enforceability in court.',
        },
      },
    ],
    representativeMatters: {
      vi: [
        'Soạn thảo bộ hợp đồng hoàn chỉnh cho giao dịch hợp tác kinh doanh trị giá 10 triệu USD giữa doanh nghiệp Việt Nam và Singapore.',
        'Rà soát và đàm phán thành công hợp đồng EPC cho dự án nhà máy điện mặt trời 50 MW.',
        'Xây dựng hệ thống 20 hợp đồng mẫu cho chuỗi nhượng quyền thương mại F&B.',
        'Rà soát hợp đồng thuê văn phòng 10 năm cho tập đoàn công nghệ, đàm phán giảm 15% chi phí thuê.',
      ],
      en: [
        'Drafted complete contract suite for a USD 10 million business cooperation between Vietnamese and Singaporean companies.',
        'Successfully reviewed and negotiated an EPC contract for a 50 MW solar power plant project.',
        'Built a system of 20 template contracts for an F&B franchise chain.',
        'Reviewed 10-year office lease for a technology group, negotiating 15% rental cost reduction.',
      ],
    },
    faqs: [
      {
        question: {
          vi: 'Rà soát hợp đồng mất bao lâu?',
          en: 'How long does contract review take?',
        },
        answer: {
          vi: 'Thời gian phụ thuộc vào độ phức tạp và độ dài của hợp đồng. Hợp đồng thông thường mất 2-3 ngày làm việc. Hợp đồng phức tạp (M&A, dự án lớn) có thể mất 1-2 tuần. Dịch vụ rà soát khẩn cấp cũng có sẵn.',
          en: 'Timeline depends on contract complexity and length. Standard contracts take 2-3 business days. Complex contracts (M&A, large projects) may take 1-2 weeks. Expedited review service is also available.',
        },
      },
      {
        question: {
          vi: 'Hợp đồng bằng tiếng nước ngoài có hiệu lực tại Việt Nam không?',
          en: 'Are foreign language contracts valid in Vietnam?',
        },
        answer: {
          vi: 'Có, tuy nhiên nên có bản song ngữ (Việt-Anh) và quy định rõ bản nào có giá trị pháp lý ưu tiên trong trường hợp có mâu thuẫn. Tại tòa án Việt Nam, bản tiếng Việt thường được ưu tiên.',
          en: 'Yes, however it is recommended to have bilingual versions (Vietnamese-English) and clearly specify which version takes legal precedence in case of conflict. In Vietnamese courts, the Vietnamese version typically takes priority.',
        },
      },
      {
        question: {
          vi: 'Hợp đồng có cần công chứng mới có hiệu lực không?',
          en: 'Must contracts be notarized to be valid?',
        },
        answer: {
          vi: 'Không phải tất cả hợp đồng đều cần công chứng. Tuy nhiên, một số loại giao dịch bắt buộc công chứng theo pháp luật, ví dụ: mua bán nhà đất, chuyển nhượng quyền sử dụng đất, hợp đồng thế chấp. Chúng tôi sẽ tư vấn cụ thể cho từng trường hợp.',
          en: 'Not all contracts require notarization. However, certain transaction types require notarization by law, for example: real estate sale and purchase, land use rights transfer, mortgage contracts. We will advise specifically for each case.',
        },
      },
    ],
    relatedServiceSlugs: ['legal-consultation', 'corporate-law', 'dispute-resolution'],
  },

  // ─────────────────────────────────────────────
  // 12. Dispute Resolution (Giải quyết tranh chấp)
  // ─────────────────────────────────────────────
  {
    id: 'dispute-resolution',
    slug: 'dispute-resolution',
    icon: 'Gavel',
    audiences: ['businesses', 'individuals', 'international-parties'],
    keyTopics: [
      'litigation',
      'arbitration',
      'mediation',
      'enforcement',
      'commercial disputes',
    ],
    title: {
      vi: 'Giải quyết tranh chấp',
      en: 'Dispute Resolution',
    },
    eyebrow: {
      vi: 'Tranh tụng & trọng tài',
      en: 'Litigation & Arbitration',
    },
    heroDescription: {
      vi: 'Chúng tôi đại diện và bảo vệ quyền lợi của khách hàng trong các tranh chấp thương mại, dân sự thông qua thương lượng, hòa giải, trọng tài và tố tụng tại tòa án.',
      en: 'We represent and protect client interests in commercial and civil disputes through negotiation, mediation, arbitration, and court litigation.',
    },
    overviewTitle: {
      vi: 'Giải quyết tranh chấp hiệu quả và chiến lược',
      en: 'Effective and Strategic Dispute Resolution',
    },
    overviewParagraphs: {
      vi: [
        'Tranh chấp kinh doanh và dân sự là điều không thể tránh khỏi trong môi trường kinh tế năng động. Điều quan trọng là lựa chọn phương thức giải quyết phù hợp và xây dựng chiến lược hiệu quả để bảo vệ quyền lợi tốt nhất.',
        'Đội ngũ tranh tụng của Lighthouse Law có kinh nghiệm đại diện tại các tòa án cấp quận, tỉnh, phúc thẩm và Tòa án Nhân dân Tối cao, cũng như tại Trung tâm Trọng tài Quốc tế Việt Nam (VIAC) và các tổ chức trọng tài quốc tế khác.',
        'Chúng tôi đánh giá kỹ lưỡng từng vụ việc để đề xuất phương thức giải quyết tối ưu, luôn ưu tiên giải pháp ngoài tòa án khi có thể, nhưng sẵn sàng tranh tụng quyết liệt khi cần thiết.',
      ],
      en: [
        'Business and civil disputes are unavoidable in a dynamic economic environment. What matters is choosing the appropriate resolution method and building an effective strategy to protect the best interests.',
        'Lighthouse Law\'s litigation team has experience representing at district, provincial, appellate courts, and the Supreme People\'s Court, as well as at the Vietnam International Arbitration Centre (VIAC) and other international arbitration institutions.',
        'We thoroughly evaluate each case to propose the optimal resolution method, always prioritizing out-of-court solutions when possible, but ready to litigate vigorously when necessary.',
      ],
    },
    commonSituations: {
      vi: [
        'Tranh chấp hợp đồng thương mại về vi phạm nghĩa vụ thanh toán hoặc giao hàng',
        'Tranh chấp cổ đông, tranh chấp nội bộ doanh nghiệp',
        'Tranh chấp xây dựng giữa chủ đầu tư và nhà thầu',
        'Cần thi hành phán quyết trọng tài hoặc bản án tòa án',
        'Tranh chấp thương mại có yếu tố nước ngoài',
      ],
      en: [
        'Commercial contract disputes over payment or delivery obligation breaches',
        'Shareholder disputes, internal corporate disputes',
        'Construction disputes between investors and contractors',
        'Need to enforce arbitral awards or court judgments',
        'Cross-border commercial disputes',
      ],
    },
    legalChallenges: {
      vi: [
        'Thi hành án dân sự tại Việt Nam thường chậm và gặp nhiều khó khăn trong thực tế',
        'Lựa chọn giữa tòa án và trọng tài đòi hỏi đánh giá cẩn thận về ưu nhược điểm',
        'Tranh chấp có yếu tố nước ngoài đặt ra câu hỏi về luật áp dụng và công nhận phán quyết',
      ],
      en: [
        'Civil judgment enforcement in Vietnam is often slow and faces practical difficulties',
        'Choosing between court and arbitration requires careful evaluation of pros and cons',
        'Cross-border disputes raise questions about applicable law and award recognition',
      ],
    },
    scopeOfServices: [
      {
        title: { vi: 'Tố tụng tại tòa án', en: 'Court Litigation' },
        description: {
          vi: 'Đại diện khách hàng tại tòa án các cấp trong các vụ kiện dân sự, thương mại, hành chính và lao động.',
          en: 'Representing clients at courts of all levels in civil, commercial, administrative, and labor cases.',
        },
      },
      {
        title: { vi: 'Trọng tài thương mại', en: 'Commercial Arbitration' },
        description: {
          vi: 'Đại diện tại VIAC, ICC, SIAC và các tổ chức trọng tài trong và ngoài nước.',
          en: 'Representing at VIAC, ICC, SIAC, and domestic and international arbitration institutions.',
        },
      },
      {
        title: { vi: 'Thương lượng & hòa giải', en: 'Negotiation & Mediation' },
        description: {
          vi: 'Đại diện đàm phán và tham gia hòa giải để giải quyết tranh chấp nhanh chóng và hiệu quả.',
          en: 'Representing in negotiations and participating in mediation for quick and effective dispute resolution.',
        },
      },
      {
        title: { vi: 'Thi hành án & phán quyết', en: 'Judgment & Award Enforcement' },
        description: {
          vi: 'Hỗ trợ thi hành bản án tòa án và phán quyết trọng tài tại Việt Nam và nước ngoài.',
          en: 'Supporting enforcement of court judgments and arbitral awards in Vietnam and abroad.',
        },
      },
      {
        title: { vi: 'Tư vấn phòng ngừa tranh chấp', en: 'Dispute Prevention Advisory' },
        description: {
          vi: 'Tư vấn cơ chế giải quyết tranh chấp trong hợp đồng và chiến lược phòng ngừa tranh chấp.',
          en: 'Advising on dispute resolution mechanisms in contracts and dispute prevention strategies.',
        },
      },
    ],
    process: [
      {
        step: 1,
        title: { vi: 'Đánh giá vụ việc', en: 'Case Assessment' },
        description: {
          vi: 'Phân tích toàn diện sự kiện, chứng cứ, cơ sở pháp lý và đánh giá triển vọng.',
          en: 'Comprehensive analysis of facts, evidence, legal basis, and prospect evaluation.',
        },
      },
      {
        step: 2,
        title: { vi: 'Xây dựng chiến lược', en: 'Strategy Building' },
        description: {
          vi: 'Lựa chọn phương thức giải quyết và xây dựng chiến lược tranh tụng hoặc đàm phán.',
          en: 'Selecting resolution method and building litigation or negotiation strategy.',
        },
      },
      {
        step: 3,
        title: { vi: 'Chuẩn bị & thực hiện', en: 'Preparation & Execution' },
        description: {
          vi: 'Chuẩn bị hồ sơ, chứng cứ và đại diện tại phiên tòa, phiên trọng tài hoặc phiên đàm phán.',
          en: 'Preparing dossiers, evidence, and representing at court hearings, arbitration sessions, or negotiations.',
        },
      },
      {
        step: 4,
        title: { vi: 'Kháng cáo (nếu cần)', en: 'Appeal (if needed)' },
        description: {
          vi: 'Đánh giá và thực hiện kháng cáo nếu kết quả sơ thẩm chưa thỏa đáng.',
          en: 'Evaluating and pursuing appeal if the first-instance result is unsatisfactory.',
        },
      },
      {
        step: 5,
        title: { vi: 'Thi hành', en: 'Enforcement' },
        description: {
          vi: 'Hỗ trợ thi hành phán quyết cuối cùng và theo dõi việc thực hiện nghĩa vụ.',
          en: 'Supporting enforcement of final judgment and monitoring obligation fulfillment.',
        },
      },
    ],
    benefits: [
      {
        title: { vi: 'Chiến lược tối ưu', en: 'Optimal Strategy' },
        description: {
          vi: 'Lựa chọn phương thức giải quyết phù hợp nhất với hoàn cảnh cụ thể của vụ việc.',
          en: 'Selecting the most appropriate resolution method for the specific circumstances of the case.',
        },
      },
      {
        title: { vi: 'Kinh nghiệm tranh tụng', en: 'Litigation Experience' },
        description: {
          vi: 'Đội ngũ luật sư có kinh nghiệm tranh tụng thực tế tại nhiều tòa án và tổ chức trọng tài.',
          en: 'Team of lawyers with practical litigation experience at multiple courts and arbitration institutions.',
        },
      },
      {
        title: { vi: 'Kết quả khả thi', en: 'Achievable Results' },
        description: {
          vi: 'Đánh giá thực tế về triển vọng vụ việc, không hứa hẹn kết quả không thể đạt được.',
          en: 'Realistic assessment of case prospects, never promising unachievable results.',
        },
      },
      {
        title: { vi: 'Hiệu quả chi phí', en: 'Cost Effectiveness' },
        description: {
          vi: 'Cân nhắc chi phí-lợi ích trong mọi quyết định, tối ưu nguồn lực cho khách hàng.',
          en: 'Considering cost-benefit in every decision, optimizing resources for clients.',
        },
      },
    ],
    representativeMatters: {
      vi: [
        'Đại diện nguyên đơn trong vụ kiện thương mại trị giá 5 triệu USD tại VIAC, đạt phán quyết có lợi.',
        'Đàm phán hòa giải thành công tranh chấp xây dựng trị giá 30 tỷ đồng giữa chủ đầu tư và nhà thầu.',
        'Đại diện doanh nghiệp Việt Nam trong vụ trọng tài quốc tế tại Singapore (SIAC) với đối tác nước ngoài.',
        'Thi hành thành công phán quyết trọng tài nước ngoài tại Việt Nam theo Công ước New York.',
      ],
      en: [
        'Represented claimant in a USD 5 million commercial arbitration at VIAC, achieving favorable award.',
        'Successfully mediated a VND 30 billion construction dispute between investor and contractor.',
        'Represented Vietnamese company in international arbitration at SIAC against foreign counterparty.',
        'Successfully enforced foreign arbitral award in Vietnam under the New York Convention.',
      ],
    },
    faqs: [
      {
        question: {
          vi: 'Nên chọn tòa án hay trọng tài?',
          en: 'Should I choose court or arbitration?',
        },
        answer: {
          vi: 'Tùy thuộc vào nhiều yếu tố: trọng tài nhanh hơn, bảo mật hơn và phán quyết dễ thi hành quốc tế hơn. Tòa án có chi phí thấp hơn, có quyền áp dụng biện pháp khẩn cấp mạnh hơn. Chúng tôi sẽ tư vấn phương thức phù hợp nhất dựa trên hoàn cảnh cụ thể.',
          en: 'It depends on many factors: arbitration is faster, more confidential, and awards are more easily enforced internationally. Courts have lower costs and stronger interim measure powers. We will advise on the most appropriate method based on specific circumstances.',
        },
      },
      {
        question: {
          vi: 'Chi phí giải quyết tranh chấp ước tính là bao nhiêu?',
          en: 'What are the estimated dispute resolution costs?',
        },
        answer: {
          vi: 'Chi phí phụ thuộc vào giá trị tranh chấp, mức độ phức tạp và phương thức giải quyết. Chúng tôi cung cấp báo giá minh bạch trước khi bắt đầu và có thể thỏa thuận phí theo giai đoạn hoặc phí thành công cho một số loại vụ việc.',
          en: 'Costs depend on dispute value, complexity, and resolution method. We provide transparent quotes before starting and can arrange staged fees or success fees for certain case types.',
        },
      },
      {
        question: {
          vi: 'Thời gian giải quyết tranh chấp tại tòa án mất bao lâu?',
          en: 'How long does court dispute resolution take?',
        },
        answer: {
          vi: 'Vụ kiện dân sự thường mất 6-12 tháng ở cấp sơ thẩm. Nếu có kháng cáo, tổng thời gian có thể kéo dài 1-2 năm. Trọng tài thường nhanh hơn, trung bình 6-9 tháng. Hòa giải có thể giải quyết trong vài tuần đến vài tháng.',
          en: 'Civil lawsuits typically take 6-12 months at first instance. If appealed, total time can extend to 1-2 years. Arbitration is usually faster, averaging 6-9 months. Mediation can resolve in weeks to months.',
        },
      },
    ],
    relatedServiceSlugs: ['contract-drafting-review', 'civil-law', 'corporate-law'],
  },
];
