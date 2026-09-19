import AmenitiesGrid from "@/components/AmenitiesGrid";
import BookingCard from "@/components/BookingCard";
import HostInfo from "@/components/HostInfo";
import PhotoGallery from "@/components/PhotoGallery";
import RoomHeader from "@/components/RoomHeader";
import { mockRooms } from "@/lib/mockRooms";

interface RoomPageProps {
  params: Promise<{ id: string }>;
}

const RoomPage = async ({ params }: RoomPageProps) => {
  const { id } = await params;
  const room = mockRooms.find((room) => room.id === id);

  if (!room) {
    return <p className="p-4 text-center md:p-8">Alojamiento no encontrado</p>;
  }

  return (
    <main className="mx-auto max-w-5xl p-4 md:p-8">
      <PhotoGallery photos={room.photos} />

      <div className="grid gap-8 md:grid-cols-[1fr_350px]">
        <div className="space-y-6">
          <RoomHeader room={room} />
          <hr />
          <HostInfo host={room.host} />
          <hr />
          <AmenitiesGrid amenities={room.amenities} />
        </div>
        <BookingCard pricePerNight={room.pricePerNight} />
      </div>
    </main>
  );
};

export default RoomPage;