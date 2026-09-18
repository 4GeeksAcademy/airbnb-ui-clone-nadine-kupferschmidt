import type { Listing } from "@/types/listing";
import { HeartIcon, StarIcon, TrophyIcon } from "@/components/icons";

interface ListingCardProps {
  listing: Listing;
}

const formatPrice = (value: number) =>
  new Intl.NumberFormat("es-CR", {
    style: "currency",
    currency: "CRC",
    maximumFractionDigits: 0,
  }).format(value);

const ListingCard = ({ listing }: ListingCardProps) => {
  const details = [listing.bedrooms, listing.beds, listing.bathrooms].filter(
    (value): value is number => value !== undefined
  );

  return (
    <div className="w-full">
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
          className="absolute top-3 right-3 bg-black/20 rounded-full p-1.5"
        >
          <HeartIcon className="w-6 h-6 text-white" />
        </button>
      </div>

      <div className="mt-2 flex items-start justify-between gap-2">
        <h3 className="font-bold truncate">{listing.title}</h3>
        <div className="flex items-center gap-1 text-sm shrink-0">
          {listing.rating ? (
            <>
              <StarIcon className="w-4 h-4" />
              <span>{listing.rating}</span>
              {listing.reviewCount !== undefined && (
                <span>({listing.reviewCount})</span>
              )}
            </>
          ) : (
            <span>Novedad</span>
          )}
        </div>
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

      <p className="mt-1">
        {listing.originalPrice && (
          <span className="line-through text-gray-400 mr-1">
            {formatPrice(listing.originalPrice)}
          </span>
        )}
        <span className="font-bold">{formatPrice(listing.pricePerNight)}</span>{" "}
        <span className="text-gray-500">por noche</span>
      </p>
    </div>
  );
};

export default ListingCard;
