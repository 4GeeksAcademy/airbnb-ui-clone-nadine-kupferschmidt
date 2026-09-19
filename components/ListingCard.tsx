import type React from "react";
import Link from "next/link";

import type { Listing } from "@/types/listing";
import { HeartIcon, TrophyIcon } from "@/components/icons";
import ListingPrice from "@/components/ListingPrice";
import ListingRating from "@/components/ListingRating";

interface ListingCardProps {
  listing: Listing;
}

const ListingCard = ({ listing }: ListingCardProps) => {
  const details = [
    listing.bedrooms !== undefined && `${listing.bedrooms} cuarto(s)`,
    listing.beds !== undefined && `${listing.beds} cama(s)`,
    listing.bathrooms !== undefined && `${listing.bathrooms} baño(s)`,
  ].filter((detail): detail is string => Boolean(detail));

  return (
    <Link href={`/rooms/${listing.id}`} className="block w-full">
      <div className="relative">
        <img
          src={listing.imageUrl}
          alt={listing.title}
          className="w-full h-48 object-cover rounded-xl"
        />

        {listing.isFavoriteBadge && (
          <div className="absolute top-3 left-3 flex items-center gap-1 bg-white rounded-full px-3 py-1 shadow-sm text-xs font-medium">
            <TrophyIcon className="w-4 h-4" />
            <span>Favorito entre huéspedes</span>
          </div>
        )}

        <button
          type="button"
          onClick={(event: React.MouseEvent) => {
            event.preventDefault();
            event.stopPropagation();
          }}
          className="absolute top-3 right-3 bg-black/20 rounded-full p-1.5"
        >
          <HeartIcon className="w-6 h-6 text-white" />
        </button>
      </div>

      <div className="mt-2 flex items-start justify-between gap-2">
        <h3 className="font-bold truncate">{listing.title}</h3>
        <ListingRating
          rating={listing.rating}
          reviewCount={listing.reviewCount}
        />
      </div>

      <p className="text-gray-500">{listing.subtitle}</p>

      {details.length > 0 && (
        <p className="text-gray-500">{details.join(" · ")}</p>
      )}

      {listing.isFreeCancellation && (
        <span className="inline-block mt-1 bg-gray-100 text-xs px-2 py-1 rounded-full">
          Cancelación gratuita
        </span>
      )}

      <ListingPrice
        pricePerNight={listing.pricePerNight}
        originalPrice={listing.originalPrice}
      />
    </Link>
  );
};

export default ListingCard;
