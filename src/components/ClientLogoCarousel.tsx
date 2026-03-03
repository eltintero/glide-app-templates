'use client';

import { useState, useEffect } from 'react';

// Screenshots for carousel - real Glide app screenshots
const screenshots = [
  { src: '/screenshots/Match Users · Glide 2026-03-03 at 10.03.40 a.m. (1).png', alt: 'Glide app screenshot' },
  { src: '/screenshots/Match Users · Glide 2026-03-03 at 10.03.40 a.m. (1) (1).png', alt: 'Glide app screenshot' },
];

export function ClientLogoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-0">
      {/* Large image - no container, no border, full height */}
      <img
        src={screenshots[currentIndex].src}
        alt={screenshots[currentIndex].alt}
        className="w-full h-full object-cover rounded-lg"
      />
      
      {/* Minimal dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {screenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? 'w-6 bg-white' : 'w-2 bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
