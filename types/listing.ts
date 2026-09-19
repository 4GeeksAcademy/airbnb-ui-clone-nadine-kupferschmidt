export interface Listing {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  imageUrl: string;
  pricePerNight: number;
  originalPrice?: number;
  rating?: number;
  reviewCount?: number;
  isFavoriteBadge?: boolean;
  isFreeCancellation?: boolean;
  beds?: number;
  bedrooms?: number;
  bathrooms?: number;
}
