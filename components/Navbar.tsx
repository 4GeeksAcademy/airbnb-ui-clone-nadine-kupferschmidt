"use client";

import { useState } from "react";
import Link from "next/link";

import { MenuIcon, SearchIcon } from "@/components/icons";

interface NavbarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

const Navbar = ({ searchValue, onSearchChange }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="relative flex w-full items-center justify-between border-b border-gray-200 px-4 py-4 md:px-8">
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
        onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        className="rounded-full border border-gray-300 p-2"
      >
        <MenuIcon className="h-6 w-6" />
      </button>

      {isMenuOpen && (
        <div className="absolute right-4 top-16 z-10 w-48 rounded-xl border border-gray-200 bg-white py-2 shadow-lg md:right-8">
          <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
            Inicio
          </Link>
          <Link
            href="/catalog"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Catálogo
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;