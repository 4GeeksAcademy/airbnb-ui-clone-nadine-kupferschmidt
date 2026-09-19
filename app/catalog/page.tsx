"use client";

import { useEffect, useState } from "react";
import FilterChips from "@/components/FilterChips";
import Footer from "@/components/Footer";
import ListingCard from "@/components/ListingCard";
import MapArea from "@/components/MapArea";
import Navbar from "@/components/Navbar";
import { mockListings } from "@/lib/mockListings";
import type { Listing } from "@/types/listing";

const CatalogPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [listings, setListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setListings(mockListings);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const sortedListings = [...listings];

  if (sortOrder === "asc") {
    sortedListings.sort((firstListing, secondListing) =>
      firstListing.pricePerNight - secondListing.pricePerNight,
    );
  }

  if (sortOrder === "desc") {
    sortedListings.sort((firstListing, secondListing) =>
      secondListing.pricePerNight - firstListing.pricePerNight,
    );
  }

  return (
    <>
      <Navbar searchValue={searchValue} onSearchChange={setSearchValue} />
      <FilterChips />

      <main className="px-4 py-6 md:px-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-xl font-semibold">
            {sortedListings.length} alojamientos encontrados
          </h1>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() =>
                setSortOrder((currentOrder) =>
                  currentOrder === "asc" ? null : "asc",
                )
              }
              className={`rounded-full border px-4 py-2 text-sm ${
                sortOrder === "asc"
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              Precio: menor a mayor
            </button>
            <button
              type="button"
              onClick={() =>
                setSortOrder((currentOrder) =>
                  currentOrder === "desc" ? null : "desc",
                )
              }
              className={`rounded-full border px-4 py-2 text-sm ${
                sortOrder === "desc"
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              Precio: mayor a menor
            </button>
          </div>
        </div>

        {isLoading ? (
          <p className="text-center">Cargando alojamientos...</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_400px]">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {sortedListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
            <MapArea />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default CatalogPage;