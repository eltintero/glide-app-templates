'use client';

import { useState, useEffect } from 'react';

const badges = [
  { name: 'Clutch 5 Stars', logo: '/badges/clutch-5-stars.svg' },
  { name: 'Glide Premium Expert', logo: '/badges/glide-premium-expert.svg' },
  { name: '50Pros', logo: '/badges/50pros-badge.svg' },
  { name: 'Top Glide Agency', logo: '/badges/top-glade-agency.svg' },
  { name: 'Clutch Top Developer', logo: '/badges/clutch-top-developer.svg' },
];

export function SocialProofCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % badges.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <img
        src={badges[currentIndex].logo}
        alt={badges[currentIndex].name}
        className="h-32 lg:h-40 object-contain transition-opacity duration-500"
      />
      <p className="mt-3 text-xs text-gray-500">{badges[currentIndex].name}</p>
      
      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {badges.map((_, index) => (
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
