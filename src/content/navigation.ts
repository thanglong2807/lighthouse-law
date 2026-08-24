// Navigation content for LIGHTHOUSE LAW
// Bilingual: Vietnamese (vi) and English (en)

export interface NavItem {
  label: { vi: string; en: string };
  href: string;
  children?: NavItem[];
}

export interface FooterColumn {
  title: { vi: string; en: string };
  links: {
    label: { vi: string; en: string };
    href: string;
  }[];
}

export const mainNavigation: NavItem[] = [
  {
    label: { vi: 'Công ty', en: 'Company' },
    href: '/about',
    children: [
      {
        label: { vi: 'Giới thiệu', en: 'About Us' },
        href: '/about',
      },
      {
        label: { vi: 'Giá trị cốt lõi', en: 'Core Values' },
        href: '/about/values',
      },
      {
        label: { vi: 'Lịch sử hình thành', en: 'Our History' },
        href: '/about/history',
      },
      {
        label: { vi: 'Cam kết cộng đồng', en: 'Community Commitment' },
        href: '/about/community',
      },
    ],
  },
  {
    label: { vi: 'Dịch vụ', en: 'Services' },
    href: '/services',
    children: [
      {
        label: { vi: 'Tư vấn pháp lý', en: 'Legal Consultation' },
        href: '/services/legal-consultation',
      },
      {
        label: { vi: 'Sở hữu trí tuệ', en: 'Intellectual Property' },
        href: '/services/intellectual-property',
      },
      {
        label: {
          vi: 'Tư vấn đầu tư & kinh doanh',
          en: 'Investment & Business',
        },
        href: '/services/investment-business',
      },
      {
        label: { vi: 'Luật doanh nghiệp', en: 'Corporate Law' },
        href: '/services/corporate-law',
      },
      {
        label: { vi: 'Luật bất động sản', en: 'Real Estate Law' },
        href: '/services/real-estate-law',
      },
      {
        label: { vi: 'Luật dân sự', en: 'Civil Law' },
        href: '/services/civil-law',
      },
      {
        label: { vi: 'Luật hình sự', en: 'Criminal Law' },
        href: '/services/criminal-law',
      },
      {
        label: {
          vi: 'Luật hôn nhân & gia đình',
          en: 'Family & Marriage',
        },
        href: '/services/family-marriage',
      },
      {
        label: { vi: 'Luật lao động', en: 'Labor Law' },
        href: '/services/labor-law',
      },
      {
        label: { vi: 'Luật thuế', en: 'Tax Law' },
        href: '/services/tax-law',
      },
      {
        label: {
          vi: 'Soạn thảo & rà soát hợp đồng',
          en: 'Contract Drafting & Review',
        },
        href: '/services/contract-drafting-review',
      },
      {
        label: { vi: 'Giải quyết tranh chấp', en: 'Dispute Resolution' },
        href: '/services/dispute-resolution',
      },
    ],
  },
  {
    label: { vi: 'Đội ngũ', en: 'Team' },
    href: '/team',
  },
  {
    label: { vi: 'Văn phòng', en: 'Offices' },
    href: '/offices',
  },
  {
    label: { vi: 'Kiến thức pháp lý', en: 'Legal Insights' },
    href: '/insights',
    children: [
      {
        label: { vi: 'Bài viết', en: 'Articles' },
        href: '/insights/articles',
      },
      {
        label: { vi: 'Bản tin pháp luật', en: 'Legal Updates' },
        href: '/insights/legal-updates',
      },
      {
        label: { vi: 'Hướng dẫn pháp lý', en: 'Legal Guides' },
        href: '/insights/guides',
      },
      {
        label: { vi: 'Sự kiện & Hội thảo', en: 'Events & Seminars' },
        href: '/insights/events',
      },
    ],
  },
  {
    label: { vi: 'Dành cho khách hàng', en: 'For Clients' },
    href: '/clients',
    children: [
      {
        label: { vi: 'Quy trình làm việc', en: 'How We Work' },
        href: '/clients/process',
      },
      {
        label: { vi: 'Biểu phí dịch vụ', en: 'Fee Structure' },
        href: '/clients/fees',
      },
      {
        label: { vi: 'Câu hỏi thường gặp', en: 'FAQs' },
        href: '/clients/faqs',
      },
      {
        label: { vi: 'Tài liệu cần chuẩn bị', en: 'Document Checklist' },
        href: '/clients/documents',
      },
    ],
  },
  {
    label: { vi: 'Tuyển dụng', en: 'Careers' },
    href: '/careers',
  },
  {
    label: { vi: 'Liên hệ', en: 'Contact' },
    href: '/contact',
  },
];

export const footerNavigation: FooterColumn[] = [
  {
    title: { vi: 'Dịch vụ', en: 'Services' },
    links: [
      {
        label: { vi: 'Tư vấn pháp lý', en: 'Legal Consultation' },
        href: '/services/legal-consultation',
      },
      {
        label: { vi: 'Sở hữu trí tuệ', en: 'Intellectual Property' },
        href: '/services/intellectual-property',
      },
      {
        label: { vi: 'Luật doanh nghiệp', en: 'Corporate Law' },
        href: '/services/corporate-law',
      },
      {
        label: { vi: 'Luật bất động sản', en: 'Real Estate Law' },
        href: '/services/real-estate-law',
      },
      {
        label: {
          vi: 'Soạn thảo & rà soát hợp đồng',
          en: 'Contract Drafting & Review',
        },
        href: '/services/contract-drafting-review',
      },
      {
        label: { vi: 'Giải quyết tranh chấp', en: 'Dispute Resolution' },
        href: '/services/dispute-resolution',
      },
    ],
  },
  {
    title: { vi: 'Công ty', en: 'Company' },
    links: [
      {
        label: { vi: 'Giới thiệu', en: 'About Us' },
        href: '/about',
      },
      {
        label: { vi: 'Đội ngũ luật sư', en: 'Our Team' },
        href: '/team',
      },
      {
        label: { vi: 'Văn phòng', en: 'Offices' },
        href: '/offices',
      },
      {
        label: { vi: 'Tuyển dụng', en: 'Careers' },
        href: '/careers',
      },
      {
        label: { vi: 'Liên hệ', en: 'Contact' },
        href: '/contact',
      },
    ],
  },
  {
    title: { vi: 'Tài nguyên', en: 'Resources' },
    links: [
      {
        label: { vi: 'Bài viết pháp lý', en: 'Legal Articles' },
        href: '/insights/articles',
      },
      {
        label: { vi: 'Bản tin pháp luật', en: 'Legal Updates' },
        href: '/insights/legal-updates',
      },
      {
        label: { vi: 'Hướng dẫn pháp lý', en: 'Legal Guides' },
        href: '/insights/guides',
      },
      {
        label: { vi: 'Câu hỏi thường gặp', en: 'FAQs' },
        href: '/clients/faqs',
      },
      {
        label: { vi: 'Sự kiện & Hội thảo', en: 'Events & Seminars' },
        href: '/insights/events',
      },
    ],
  },
  {
    title: { vi: 'Pháp lý', en: 'Legal' },
    links: [
      {
        label: { vi: 'Chính sách bảo mật', en: 'Privacy Policy' },
        href: '/legal/privacy',
      },
      {
        label: { vi: 'Điều khoản sử dụng', en: 'Terms of Use' },
        href: '/legal/terms',
      },
      {
        label: { vi: 'Tuyên bố miễn trừ', en: 'Disclaimer' },
        href: '/legal/disclaimer',
      },
      {
        label: {
          vi: 'Chính sách cookie',
          en: 'Cookie Policy',
        },
        href: '/legal/cookies',
      },
    ],
  },
];
