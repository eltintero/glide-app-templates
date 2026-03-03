'use client';

import { useState, useEffect } from 'react';

const clients = [
  { name: 'Medtronic', logo: '/badges/clutch-5-stars.svg' },
  { name: 'American Express', logo: '/badges/glide-premium-expert.svg' },
  { name: 'Coca-Cola', logo: '/badges/50pros-badge.svg' },
  { name: 'HP', logo: '/badges/top-glade-agency.svg' },
  { name: 'Citi', logo: '/badges/clutch-top-developer.svg' },
];

export function ClientLogoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-48 lg:h-64">
      <div className="overflow-hidden rounded-xl border border-gray-700 bg-gray-800/50 p-8">
        <div className="flex items-center justify-center h-full">
          <img
            src={clients[currentIndex].logo}
            alt={`${clients[currentIndex].name} - Trusted Client`}
            className="h-24 lg:h-32 object-contain transition-opacity duration-500"
          />
        </div>
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <p className="text-sm text-gray-400">{clients[currentIndex].name}</p>
        </div>
      </div>
      
      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {clients.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? 'w-6 bg-lime-accent' : 'w-2 bg-gray-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
