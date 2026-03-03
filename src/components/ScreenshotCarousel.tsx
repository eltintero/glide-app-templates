'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ScreenshotCarouselProps {
  screenshots: string[];
  templateName: string;
}

export function ScreenshotCarousel({ screenshots, templateName }: ScreenshotCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (screenshots.length === 0) return null;

  if (screenshots.length === 1) {
    return (
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-light-gray bg-white">
        <Image
          src={screenshots[0]}
          alt={`${templateName} screenshot`}
          fill
          className="object-cover"
          priority
        />
      </div>
    );
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      {/* Main image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-light-gray bg-white">
        <Image
          src={screenshots[currentIndex]}
          alt={`${templateName} screenshot ${currentIndex + 1}`}
          fill
          className="object-cover"
          priority
        />
        
        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
          aria-label="Previous screenshot"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
          aria-label="Next screenshot"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        
        {/* Counter */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
          {currentIndex + 1} / {screenshots.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
        {screenshots.map((screenshot, index) => (
          <button
            key={screenshot}
            onClick={() => setCurrentIndex(index)}
            className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
              index === currentIndex
                ? 'border-purple-primary ring-2 ring-purple-primary/20'
                : 'border-light-gray hover:border-purple-light'
            }`}
          >
            <Image
              src={screenshot}
              alt={`${templateName} thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
