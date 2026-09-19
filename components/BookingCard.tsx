"use client";

import { useState } from "react";

const MIN_GUESTS = 1;
const MAX_GUESTS = 10;

interface BookingCardProps {
  pricePerNight: number;
}

const formatPrice = (value: number) =>
  new Intl.NumberFormat("es-CR", {
    style: "currency",
    currency: "CRC",
    maximumFractionDigits: 0,
  }).format(value);

const BookingCard = ({ pricePerNight }: BookingCardProps) => {
  const [guestCount, setGuestCount] = useState<number>(1);

  return (
    <aside className="rounded-xl border border-gray-200 p-6">
      <p>
        <span className="text-xl font-bold">{formatPrice(pricePerNight)}</span>{" "}
        <span className="text-gray-500">por noche</span>
      </p>

      <div className="my-6 flex items-center justify-between">
        <span>Huéspedes</span>
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Reducir huéspedes"
            onClick={() =>
              setGuestCount((currentCount) =>
                Math.max(MIN_GUESTS, currentCount - 1),
              )
            }
            className="rounded-full border border-gray-300 px-3 py-1"
          >
            -
          </button>
          <span>{guestCount}</span>
          <button
            type="button"
            aria-label="Aumentar huéspedes"
            onClick={() =>
              setGuestCount((currentCount) =>
                Math.min(MAX_GUESTS, currentCount + 1),
              )
            }
            className="rounded-full border border-gray-300 px-3 py-1"
          >
            +
          </button>
        </div>
      </div>

      <button
        type="button"
        className="w-full rounded-full bg-gradient-to-r from-rose-500 to-pink-600 py-3 font-semibold text-white"
      >
        Reserva
      </button>
    </aside>
  );
};

export default BookingCard;