export interface FAQItem {
  category: string;
  question: { vi: string; en: string };
  answer: { vi: string; en: string };
}

export const faqCategories = [
  "general",
  "fees",
  "business",
  "individual",
  "court",
  "online",
  "privacy",
] as const;

export type FAQCategory = (typeof faqCategories)[number];

export const faqs: FAQItem[] = [
  // General
  {
    category: "general",
    question: {
      vi: "Lighthouse Law cung cấp những dịch vụ pháp lý nào?",
      en: "What legal services does Lighthouse Law provide?",
    },
    answer: {
      vi: "Chúng tôi cung cấp 12 lĩnh vực dịch vụ pháp lý bao gồm tư vấn pháp lý, sở hữu trí tuệ, tư vấn đầu tư kinh doanh, luật doanh nghiệp, luật bất động sản, luật dân sự, luật hình sự, luật hôn nhân gia đình, luật lao động, luật thuế, soạn thảo hợp đồng và giải quyết tranh chấp.",
      en: "We provide 12 areas of legal services including legal consultation, intellectual property, investment and business advisory, corporate law, real estate law, civil law, criminal law, family and marriage law, labor law, tax law, contract drafting, and dispute resolution.",
    },
  },
  {
    category: "general",
    question: {
      vi: "Làm thế nào để đặt lịch tư vấn với luật sư?",
      en: "How can I schedule a consultation with a lawyer?",
    },
    answer: {
      vi: "Bạn có thể đặt lịch tư vấn qua trang web bằng cách nhấn nút 'Đặt lịch tư vấn', gọi điện trực tiếp, hoặc gửi email cho chúng tôi. Chúng tôi sẽ liên hệ lại trong vòng 24 giờ làm việc.",
      en: "You can schedule a consultation through our website by clicking the 'Book a Consultation' button, calling us directly, or sending an email. We will respond within 24 business hours.",
    },
  },
  {
    category: "general",
    question: {
      vi: "Lighthouse Law có hỗ trợ khách hàng nước ngoài không?",
      en: "Does Lighthouse Law support international clients?",
    },
    answer: {
      vi: "Có, chúng tôi hỗ trợ khách hàng quốc tế bằng cả tiếng Việt và tiếng Anh. Đội ngũ luật sư của chúng tôi có kinh nghiệm làm việc với nhà đầu tư và doanh nghiệp nước ngoài tại Việt Nam.",
      en: "Yes, we support international clients in both Vietnamese and English. Our legal team has extensive experience working with foreign investors and businesses in Vietnam.",
    },
  },
  // Fees
  {
    category: "fees",
    question: {
      vi: "Chi phí tư vấn pháp lý ban đầu là bao nhiêu?",
      en: "What is the cost of an initial legal consultation?",
    },
    answer: {
      // TODO: Replace with actual fee information when provided
      vi: "Chi phí tư vấn ban đầu phụ thuộc vào tính chất và mức độ phức tạp của vấn đề pháp lý. Vui lòng liên hệ với chúng tôi để được báo giá cụ thể cho trường hợp của bạn.",
      en: "The initial consultation fee depends on the nature and complexity of the legal matter. Please contact us for a specific quote for your case.",
    },
  },
  {
    category: "fees",
    question: {
      vi: "Lighthouse Law có những hình thức thanh toán nào?",
      en: "What payment methods does Lighthouse Law accept?",
    },
    answer: {
      // TODO: Replace with actual payment information
      vi: "Chúng tôi chấp nhận thanh toán qua chuyển khoản ngân hàng và tiền mặt tại văn phòng. Biểu phí sẽ được thông báo rõ ràng trước khi bắt đầu dịch vụ.",
      en: "We accept payment via bank transfer and cash at the office. Fees will be clearly communicated before services commence.",
    },
  },
  // Business
  {
    category: "business",
    question: {
      vi: "Quy trình thành lập doanh nghiệp tại Việt Nam mất bao lâu?",
      en: "How long does it take to establish a business in Vietnam?",
    },
    answer: {
      vi: "Thời gian thành lập doanh nghiệp tại Việt Nam thường từ 2-4 tuần tùy thuộc vào loại hình doanh nghiệp và ngành nghề kinh doanh. Chúng tôi hỗ trợ toàn bộ quy trình từ chuẩn bị hồ sơ đến nhận giấy phép.",
      en: "Business establishment in Vietnam typically takes 2-4 weeks depending on the type of entity and industry. We support the entire process from document preparation to license issuance.",
    },
  },
  {
    category: "business",
    question: {
      vi: "Nhà đầu tư nước ngoài cần những giấy tờ gì để đầu tư vào Việt Nam?",
      en: "What documents do foreign investors need to invest in Vietnam?",
    },
    answer: {
      vi: "Nhà đầu tư nước ngoài cần chuẩn bị hộ chiếu hoặc giấy tờ tùy thân hợp lệ, báo cáo tài chính, giấy chứng nhận đăng ký kinh doanh (nếu là tổ chức), và các giấy tờ theo yêu cầu của ngành nghề cụ thể. Chúng tôi sẽ hướng dẫn chi tiết cho từng trường hợp.",
      en: "Foreign investors need to prepare a valid passport or identification, financial statements, business registration certificate (if an organization), and industry-specific documentation. We provide detailed guidance for each case.",
    },
  },
  // Individual
  {
    category: "individual",
    question: {
      vi: "Tôi có thể nhờ luật sư đại diện trong vụ tranh chấp không?",
      en: "Can I have a lawyer represent me in a dispute?",
    },
    answer: {
      vi: "Có, chúng tôi cung cấp dịch vụ đại diện pháp lý cho cá nhân trong các vụ tranh chấp dân sự, hình sự, lao động và gia đình. Luật sư của chúng tôi sẽ đại diện và bảo vệ quyền lợi của bạn tại cơ quan có thẩm quyền.",
      en: "Yes, we provide legal representation for individuals in civil, criminal, labor, and family disputes. Our lawyers will represent and protect your rights before the relevant authorities.",
    },
  },
  // Court
  {
    category: "court",
    question: {
      vi: "Quy trình tố tụng tại tòa án diễn ra như thế nào?",
      en: "How does the court litigation process work?",
    },
    answer: {
      vi: "Quy trình tố tụng bao gồm: nộp đơn khởi kiện, thụ lý vụ án, hòa giải, xét xử sơ thẩm và có thể phúc thẩm. Luật sư của chúng tôi sẽ đồng hành và tư vấn chiến lược phù hợp ở mỗi giai đoạn.",
      en: "The litigation process includes: filing the case, case acceptance, mediation, first-instance trial, and potentially an appeal. Our lawyers accompany you and advise on appropriate strategy at each stage.",
    },
  },
  // Online
  {
    category: "online",
    question: {
      vi: "Tư vấn trực tuyến có hiệu quả như tư vấn trực tiếp không?",
      en: "Is online consultation as effective as in-person consultation?",
    },
    answer: {
      vi: "Tư vấn trực tuyến qua video call rất hiệu quả cho phần lớn các vấn đề pháp lý, đặc biệt trong giai đoạn tư vấn ban đầu và đánh giá pháp lý. Đối với những vấn đề yêu cầu ký kết tài liệu hoặc xem xét hồ sơ gốc, chúng tôi có thể sắp xếp buổi gặp trực tiếp.",
      en: "Online consultation via video call is very effective for most legal matters, especially during initial consultation and legal assessment phases. For matters requiring document signing or original document review, we can arrange an in-person meeting.",
    },
  },
  // Privacy
  {
    category: "privacy",
    question: {
      vi: "Thông tin của tôi có được bảo mật không?",
      en: "Is my information kept confidential?",
    },
    answer: {
      vi: "Tuyệt đối. Bảo mật thông tin khách hàng là nghĩa vụ pháp lý và cam kết nghề nghiệp của chúng tôi. Mọi thông tin bạn cung cấp đều được bảo vệ theo quy định về bảo mật luật sư - khách hàng và chính sách bảo mật của Lighthouse Law.",
      en: "Absolutely. Client confidentiality is both our legal obligation and professional commitment. All information you provide is protected under attorney-client privilege and Lighthouse Law's privacy policy.",
    },
  },
  {
    category: "privacy",
    question: {
      vi: "Lighthouse Law xử lý dữ liệu cá nhân của tôi như thế nào?",
      en: "How does Lighthouse Law handle my personal data?",
    },
    answer: {
      vi: "Chúng tôi thu thập và xử lý dữ liệu cá nhân chỉ cho mục đích cung cấp dịch vụ pháp lý. Dữ liệu được bảo vệ bằng các biện pháp bảo mật kỹ thuật và tổ chức phù hợp. Chi tiết vui lòng tham khảo Chính sách Bảo mật của chúng tôi.",
      en: "We collect and process personal data solely for the purpose of providing legal services. Data is protected by appropriate technical and organizational security measures. Please refer to our Privacy Policy for details.",
    },
  },
];

export function getFAQsByCategory(category: FAQCategory): FAQItem[] {
  return faqs.filter((faq) => faq.category === category);
}
