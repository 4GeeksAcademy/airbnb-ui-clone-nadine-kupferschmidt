import { mockListings } from "@/lib/mockListings";
import ListingCard from "@/components/ListingCard";

export default function Home() {
  return (
    <main className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockListings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </main>
  );
}

