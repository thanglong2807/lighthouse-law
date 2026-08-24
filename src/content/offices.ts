export interface OfficeData {
  id: string;
  slug: string;
  name: { vi: string; en: string };
  address: { vi: string; en: string };
  phone: string;
  email: string;
  mapUrl: string;
  coordinates: { lat: number; lng: number };
  isHeadquarters: boolean;
}

// TODO: Replace with verified office information
export const offices: OfficeData[] = [
  {
    id: "1",
    slug: "ho-chi-minh",
    name: { vi: "Văn phòng TP. Hồ Chí Minh", en: "Ho Chi Minh City Office" },
    address: {
      vi: "Tầng 12, Tòa nhà ABC, 123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh",
      en: "12th Floor, ABC Building, 123 Nguyen Hue, District 1, Ho Chi Minh City",
    },
    phone: "+84 28 1234 5678",
    email: "hcm@lighthouselaw.vn",
    mapUrl: "https://maps.google.com/?q=10.7769,106.7009",
    coordinates: { lat: 10.7769, lng: 106.7009 },
    isHeadquarters: true,
  },
];
