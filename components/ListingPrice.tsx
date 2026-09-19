interface ListingPriceProps {
  pricePerNight: number;
  originalPrice?: number;
}

const formatPrice = (value: number) =>
  new Intl.NumberFormat("es-CR", {
    style: "currency",
    currency: "CRC",
    maximumFractionDigits: 0,
  }).format(value);

const ListingPrice = ({ pricePerNight, originalPrice }: ListingPriceProps) => (
  <p className="mt-1">
    {originalPrice && (
      <span className="line-through text-gray-400 mr-1">
        {formatPrice(originalPrice)}
      </span>
    )}
    <span className="font-bold">{formatPrice(pricePerNight)}</span>{" "}
    <span className="text-gray-500">por noche</span>
  </p>
);

export default ListingPrice;