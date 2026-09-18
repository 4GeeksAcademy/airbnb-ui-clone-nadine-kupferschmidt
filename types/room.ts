import type { ComponentType, SVGProps } from "react";
import type { Listing } from "./listing";

export interface Amenity {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
}

export interface Host {
  name: string;
  avatarUrl: string;
  yearsHosting: number;
}

export interface Room extends Listing {
  photos: string[];
  guestCount: number;
  host: Host;
  amenities: Amenity[];
}
