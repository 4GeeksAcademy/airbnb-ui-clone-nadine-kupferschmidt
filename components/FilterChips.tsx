"use client";

import { useState } from "react";

const filters = [
  "Alojamiento entero",
  "Wifi",
  "Cocina",
  "Estacionamiento",
  "Se permiten mascotas",
];

const FilterChips = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setActiveFilters((currentFilters) =>
      currentFilters.includes(filter)
        ? currentFilters.filter((activeFilter) => activeFilter !== filter)
        : [...currentFilters, filter],
    );
  };

  return (
    <div className="flex gap-3 overflow-x-auto px-4 py-3 md:px-8">
      {filters.map((filter) => {
        const isActive = activeFilters.includes(filter);

        return (
          <button
            key={filter}
            type="button"
            onClick={() => toggleFilter(filter)}
            className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm ${
              isActive
                ? "border-gray-900 bg-gray-900 text-white"
                : "border-gray-300 text-gray-700"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
};

export default FilterChips;