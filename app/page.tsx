"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import TrustSection from "@/components/TrustSection";
import FaqSection from "@/components/FaqSection";
import CategoryFilter from "@/components/CategoryFilter";
import Footer from "@/components/Footer";
import ListingCard from "@/components/ListingCard";
import { mockListings } from "@/lib/mockListings";
import type { Listing } from "@/types/listing";

export default function Home() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [listings, setListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setListings(mockListings);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const filteredListings = listings.filter(
    (listing) =>
      listing.title.toLowerCase().includes(searchValue.toLowerCase()) &&
      (activeCategory === null || listing.category === activeCategory),
  );

  return (
    <>
      <Navbar searchValue={searchValue} onSearchChange={setSearchValue} />

      <h2 className="text-2xl font-bold px-4 md:px-8 pt-8">
        Alojamientos enteros con las mejores comodidades
      </h2>
      <p className="text-gray-500 px-4 md:px-8 mb-4">
        Encuentra alojamientos con cocina, wifi, jacuzzis y mucho más.
      </p>
      <CategoryFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <main>
        {isLoading ? (
          <p className="p-8 text-center">Cargando alojamientos...</p>
        ) : filteredListings.length === 0 ? (
          <p className="p-8 text-center">No se encontraron alojamientos</p>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-3 md:p-8">
              {filteredListings.slice(0, 3).map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
            {(activeCategory !== null || filteredListings.length > 3) && (
              <div className="flex justify-center p-4">
                <Link
                  href="/catalog"
                  className="border border-gray-900 rounded-full px-6 py-2 font-medium hover:bg-rose-500 hover:text-white hover:border-rose-500"
                >
                  Descubre más
                </Link>
              </div>
            )}
          </>
        )}
      </main>
      <TrustSection />
      <FaqSection />
      <Footer />
    </>
  );
}

