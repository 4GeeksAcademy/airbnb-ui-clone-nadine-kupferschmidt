import { AcIcon, KitchenIcon, ParkingIcon, WifiIcon } from "@/components/icons";
import type { Room } from "@/types/room";

const amenities = [
  { icon: WifiIcon, label: "Wifi" },
  { icon: KitchenIcon, label: "Cocina" },
  { icon: ParkingIcon, label: "Estacionamiento" },
  { icon: AcIcon, label: "Aire acondicionado" },
];

export const mockRooms: Room[] = [
  {
    id: "1",
    title: "Cabaña acogedora en el bosque",
    subtitle: "Cabaña entera · Monteverde",
    imageUrl: "https://picsum.photos/seed/cabana-bosque/600/400",
    pricePerNight: 45000,
    originalPrice: 55000,
    rating: 4.9,
    reviewCount: 128,
    isFavoriteBadge: true,
    bedrooms: 2,
    beds: 3,
    bathrooms: 1,
    photos: [
      "https://picsum.photos/seed/cabana-sala/800/600",
      "https://picsum.photos/seed/cabana-dormitorio/800/600",
      "https://picsum.photos/seed/cabana-terraza/800/600",
      "https://picsum.photos/seed/cabana-bano/800/600",
    ],
    guestCount: 4,
    host: {
      name: "Sofía",
      avatarUrl: "https://i.pravatar.cc/150?img=32",
      yearsHosting: 4,
    },
    amenities,
  },
  {
    id: "2",
    title: "Apartamento moderno en el centro",
    subtitle: "Apartamento entero · San José",
    imageUrl: "https://picsum.photos/seed/apartamento-centro/600/400",
    pricePerNight: 38000,
    rating: 4.7,
    reviewCount: 64,
    isFreeCancellation: true,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    photos: [
      "https://picsum.photos/seed/apartamento-sala/800/600",
      "https://picsum.photos/seed/apartamento-cocina/800/600",
      "https://picsum.photos/seed/apartamento-cuarto/800/600",
      "https://picsum.photos/seed/apartamento-vista/800/600",
    ],
    guestCount: 2,
    host: {
      name: "Diego",
      avatarUrl: "https://i.pravatar.cc/150?img=12",
      yearsHosting: 2,
    },
    amenities: [amenities[0], amenities[1], amenities[3]],
  },
  {
    id: "3",
    title: "Casa con vista a la montaña",
    subtitle: "Casa entera · Turrialba",
    imageUrl: "https://picsum.photos/seed/casa-montana/600/400",
    pricePerNight: 62000,
    photos: [
      "https://picsum.photos/seed/casa-fachada/800/600",
      "https://picsum.photos/seed/casa-comedor/800/600",
      "https://picsum.photos/seed/casa-habitacion/800/600",
      "https://picsum.photos/seed/casa-jardin/800/600",
      "https://picsum.photos/seed/casa-montana-vista/800/600",
    ],
    guestCount: 6,
    host: {
      name: "Valeria",
      avatarUrl: "https://i.pravatar.cc/150?img=47",
      yearsHosting: 6,
    },
    amenities,
  },
];