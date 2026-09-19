"use client";

import {
  BeachIcon,
  CabinIcon,
  DropletIcon,
  TreeIcon,
} from "@/components/icons";

const categories = [
  { label: "Playa", Icon: BeachIcon },
  { label: "Cabañas", Icon: CabinIcon },
  { label: "Piscina", Icon: DropletIcon },
  { label: "Vistas", Icon: TreeIcon },
];

interface CategoryFilterProps {
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const CategoryFilter = ({
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <div className="flex justify-center gap-4 overflow-x-auto px-4 py-3 md:px-8">
      {categories.map(({ label, Icon }) => {
        const isActive = label === activeCategory;

        return (
          <button
            key={label}
            type="button"
            onClick={() => onCategoryChange(isActive ? null : label)}
            className={`flex shrink-0 flex-col items-center border-b-2 px-2 pb-2 text-sm ${
              isActive
                ? "border-rose-500 text-rose-500"
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