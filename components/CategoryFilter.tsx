"use client";

import { useState } from "react";
import {
  AcIcon,
  BeachIcon,
  KitchenIcon,
  ParkingIcon,
} from "@/components/icons";

const categories = [
  { label: "Playa", Icon: BeachIcon },
  { label: "Cabañas", Icon: ParkingIcon },
  { label: "Piscina", Icon: AcIcon },
  { label: "Vistas", Icon: KitchenIcon },
];

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].label);

  return (
    <div className="flex justify-center gap-4 overflow-x-auto px-4 py-3 md:px-8">
      {categories.map(({ label, Icon }) => {
        const isActive = label === activeCategory;

        return (
          <button
            key={label}
            type="button"
            onClick={() => setActiveCategory(label)}
            className={`flex shrink-0 flex-col items-center border-b-2 px-2 pb-2 text-sm ${
              isActive
                ? "border-gray-900 text-gray-900"
                : "border-transparent text-gray-500"
            }`}
          >
            <Icon className="mb-1 h-6 w-6" />
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;