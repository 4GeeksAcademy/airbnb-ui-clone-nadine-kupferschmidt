"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
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
          <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-3 md:p-8">
            {filteredListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

