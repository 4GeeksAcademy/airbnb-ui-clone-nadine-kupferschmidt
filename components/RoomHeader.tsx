import { StarIcon } from "@/components/icons";
import type { Room } from "@/types/room";

interface RoomHeaderProps {
  room: Room;
}

const RoomHeader = ({ room }: RoomHeaderProps) => {
  const details = [
    `${room.guestCount} huéspedes`,
    room.bedrooms !== undefined && `${room.bedrooms} habitación(es)`,
    room.beds !== undefined && `${room.beds} cama(s)`,
    room.bathrooms !== undefined && `${room.bathrooms} baño(s)`,
  ].filter((detail): detail is string => Boolean(detail));

  return (
    <header>
      <h1 className="text-2xl font-bold">{room.title}</h1>
      <p className="text-gray-500">{room.subtitle}</p>
      <p className="text-gray-600">{details.join(" · ")}</p>
      <div className="flex items-center gap-1">
        {room.rating !== undefined ? (
          <>
            <StarIcon className="h-4 w-4" />
            <span>{room.rating}</span>
            {room.reviewCount !== undefined && (
              <span>({room.reviewCount} reseñas)</span>
            )}
          </>
        ) : (
          <span>Novedad</span>
        )}
      </div>
    </header>
  );
};

export default RoomHeader;