import type { Amenity } from "@/types/room";

interface AmenitiesGridProps {
  amenities: Amenity[];
}

const AmenitiesGrid = ({ amenities }: AmenitiesGridProps) => {
  return (
    <section>
      <h2 className="mb-4 text-xl font-bold">Lo que este lugar ofrece</h2>
      <div className="grid grid-cols-2 gap-4">
        {amenities.map((amenity) => {
          const Icon = amenity.icon;

          return (
            <div key={amenity.label} className="flex items-center gap-2">
              <Icon className="h-5 w-5" />
              <span>{amenity.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AmenitiesGrid;