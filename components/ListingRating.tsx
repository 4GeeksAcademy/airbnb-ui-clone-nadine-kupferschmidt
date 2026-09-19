import { StarIcon } from "@/components/icons";

interface ListingRatingProps {
  rating?: number;
  reviewCount?: number;
}

const ListingRating = ({ rating, reviewCount }: ListingRatingProps) => (
  <div className="flex items-center gap-1 text-sm shrink-0">
    {rating ? (
      <>
        <StarIcon className="w-4 h-4" />
        <span>{rating}</span>
        {reviewCount !== undefined && <span>({reviewCount})</span>}
      </>
    ) : (
      <span>Novedad</span>
    )}
  </div>
);

export default ListingRating;