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
    name: { vi: "Văn phòng Hà Nội", en: "Hanoi Office" },
    address: {
      vi: "Số 3 phố Trần Điền, Phường Phương Liệt, Thành phố Hà Nội, Việt Nam",
      en: "No. 3 Tran Dien Street, Phuong Liet Ward, Hanoi City, Vietnam",
    },
    phone: "+84 28 1234 5678",
    email: "hcm@lighthouselaw.vn",
    mapUrl: "https://maps.google.com/?q=21.0025,105.8197",
    coordinates: { lat: 21.0025, lng: 105.8197 },
    isHeadquarters: true,
  },
];
