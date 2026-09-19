"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import AmenitiesGrid from "@/components/AmenitiesGrid";
import BookingCard from "@/components/BookingCard";
import HostInfo from "@/components/HostInfo";
import PhotoGallery from "@/components/PhotoGallery";
import RoomHeader from "@/components/RoomHeader";
import RoomNavbar from "@/components/RoomNavbar";
import { mockRooms } from "@/lib/mockRooms";
import type { Room } from "@/types/room";

const RoomPage = () => {
  const params = useParams<{ id: string | string[] }>();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const [room, setRoom] = useState<Room | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const foundRoom = mockRooms.find((candidate) => candidate.id === id) ?? null;

      setRoom(foundRoom);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [id]);

  if (isLoading) {
    return <p className="p-4 text-center md:p-8">Cargando alojamiento...</p>;
  }

  if (!room) {
    return <p className="p-4 text-center md:p-8">Alojamiento no encontrado</p>;
  }

  return (
    <>
      <RoomNavbar />
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
    </>
  );
};

export default RoomPage;