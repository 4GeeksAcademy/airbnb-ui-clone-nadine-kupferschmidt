"use client";

import { MenuIcon, SearchIcon } from "@/components/icons";

interface NavbarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

const Navbar = ({ searchValue, onSearchChange }: NavbarProps) => (
  <nav className="flex w-full items-center justify-between border-b border-gray-200 px-4 py-4 md:px-8">
    <span className="text-xl font-bold text-rose-500">staybnb</span>

    <div className="relative mx-4 w-full max-w-md">
      <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
      <input
        type="text"
        placeholder="Buscar alojamientos..."
        value={searchValue}
        onChange={(event) => onSearchChange(event.target.value)}
        className="w-full max-w-md rounded-full border border-gray-300 py-2 pl-11 pr-4"
      />
    </div>

    <button
      type="button"
      aria-label="Abrir menú"
      className="rounded-full border border-gray-300 p-2"
    >
      <MenuIcon className="h-6 w-6" />
    </button>
  </nav>
);

export default Navbar;