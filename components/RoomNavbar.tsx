"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const RoomNavbar = () => {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between border-b border-gray-200 px-4 py-4 md:px-8">
      <span className="text-xl font-bold text-rose-500">staybnb</span>

      <Link
        href="/catalog"
        onFocus={() => router.prefetch("/catalog")}
        onMouseEnter={() => router.prefetch("/catalog")}
        className="font-medium text-gray-700 hover:text-gray-950"
      >
        ‹ Volver al catálogo
      </Link>
    </nav>
  );
};

export default RoomNavbar;