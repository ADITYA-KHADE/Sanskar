"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import HeroProduct1 from '../images/HeroProduct1.webp';
import HeroProduct2 from '../images/HeroProduct2.webp';

const HeroProduct = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  const images = [HeroProduct1, HeroProduct2];

  return (
    <div className="bg-yellow-400 min-h-screen p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left - Image Section */}
        <div className="space-y-4">
          <div className="relative h-[500px] w-full">
            <Image
              src={images[selectedImage]}
              alt="Rose Agarbatti"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                className={`relative h-20 w-20 border-2 ${
                  selectedImage === index ? 'border-teal-500' : 'border-transparent'
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image}
                  alt={`Rose Agarbatti ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right - Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">ROSE AGARBATTI</h1>
          <p className="text-xl">Rs. 165.00</p>
          <p className="text-sm text-gray-600">Tax included.</p>

          <div className="flex gap-4 items-center">
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              min="1"
              className="w-20 p-2 rounded border"
            />
            <button className="w-full py-3 border border-teal-500 text-teal-500 rounded hover:bg-teal-50">
              ADD TO CART
            </button>
          </div>
          
          <button className="w-full py-3 bg-teal-500 text-white rounded hover:bg-teal-600">
            BUY IT NOW
          </button>

          <div className="space-y-4 text-gray-700">
            <p>Made with recycled flowers, with our holi colors to make it feel more real.</p>
            
            <p>Mudras, the sacred hand gestures, are integral to Hindu puja rituals, and help us channel energy and a deeper connection with the divine. The Vaayu Mudra, embodying the wind, serves as a celestial conduit for communication between you and the almighty.</p>
            
            <p>Embark on a fragrant journey with Hoovu Agarbattis, lovingly handcrafted from sacred temple flowers. They capture the uplifting essence of the Vaayu Mudra, and pay homage to the ancient tradition of using only pure, natural ingredients as sacred offerings.</p>
            
            <p>With their divine fragrance, enduring burn time and all natural recycled ingredients, Hoovu Agarbattis are perfect for a vibrantly meditative experience.</p>
            
            <p>This is a fresh take on tradition, thoughtfully reimagined for the modern devotee.</p>
            
            <p>So, as you ignite a Hoovu Agarbatti and the aroma lifts your spirit, let Vaayu guide your prayers on a heartfelt journey from your heart, to the heavens.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroProduct;