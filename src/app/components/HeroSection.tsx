import React from 'react';
import Image from 'next/image';
import HeroImage from '../images/HeroSection.jpg';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <Image
        src={HeroImage}
        alt="Hero background with flowers and incense"
        fill
        className="object-cover w-full h-full"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-6 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-yellow-300">
          BRING HOME A WORLD OF FRAGRANCES
        </h1>
        <button className="bg-teal-100 text-gray-800 px-4 py-2 sm:px-8 sm:py-3 rounded-full hover:bg-teal-200 transition-colors">
          SHOP NATURAL AGARBATHIS, DHOOPS STICKS AND CONES!
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
