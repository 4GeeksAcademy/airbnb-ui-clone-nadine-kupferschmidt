"use client";

import { useState } from "react";

interface PhotoGalleryProps {
  photos: string[];
}

const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const showPreviousPhoto = () => {
    setCurrentIndex((current) =>
      current === 0 ? photos.length - 1 : current - 1,
    );
  };

  const showNextPhoto = () => {
    setCurrentIndex((current) =>
      current === photos.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <div>
      <div className="relative">
        <img
          src={photos[currentIndex]}
          alt={`Foto ${currentIndex + 1}`}
          className="h-64 w-full rounded-xl object-cover md:h-96"
          loading="lazy"
        />
        <button
          type="button"
          aria-label="Foto anterior"
          onClick={showPreviousPhoto}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Foto siguiente"
          onClick={showNextPhoto}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white"
        >
          ›
        </button>
      </div>
      <p className="mt-2 text-center">
        {currentIndex + 1} / {photos.length}
      </p>
    </div>
  );
};

export default PhotoGallery;