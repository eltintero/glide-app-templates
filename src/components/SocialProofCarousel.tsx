'use client';

import { useState, useEffect } from 'react';

const awards = [
  { 
    name: 'Clutch Top Developer',
    logo: '/badges/clutch-top-developer.svg',
    description: 'Top Bubble Development Company'
  },
  { 
    name: 'Glide Premium Expert',
    logo: '/badges/glide-premium-expert.svg',
    description: 'Certified Glide Expert Partner'
  },
  { 
    name: '50Pros Badge',
    logo: '/badges/50pros-badge.svg',
    description: 'Top 50 Professionals'
  },
  { 
    name: 'Top Glide Agency',
    logo: '/badges/top-glade-agency.svg',
    description: 'Leading Glide Development Agency'
  },
  { 
    name: 'Clutch 5 Stars',
    logo: '/badges/clutch-5-stars.svg',
    description: '5-Star Rated on Clutch'
  },
];

export function SocialProofCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % awards.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      {/* Large award image - takes up most of the space */}
      <div className="relative w-full aspect-square max-w-sm mx-auto">
        <img
          src={awards[currentIndex].logo}
          alt={awards[currentIndex].description}
          className="w-full h-full object-contain p-4 transition-opacity duration-500"
        />
      </div>
      
      {/* Award name below */}
      <p className="mt-4 text-sm text-gray-400 text-center">
        {awards[currentIndex].description}
      </p>
      
      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {awards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? 'w-6 bg-lime-accent' : 'w-2 bg-gray-600'
            }`}
            aria-label={`View award ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
