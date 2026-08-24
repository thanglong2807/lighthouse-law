import type { WorkingHours } from "./common";

export interface OfficeCoordinates {
  lat: number;
  lng: number;
}

export interface Office {
  name: string;
  slug: string;
  address: string;
  phone: string;
  email: string;
  workingHours: WorkingHours;
  coordinates: OfficeCoordinates;
  mapUrl: string;
  image: string;
  services: string[];
  lawyers: string[];
}
