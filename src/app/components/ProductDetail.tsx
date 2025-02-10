"use client"

import React, { useState } from 'react';
import { Share, Twitter, Heart } from 'lucide-react';
import Image from 'next/image'; // Import the Next.js Image component
import ProductImage1 from "../images/ProductDetailImage1.webp";
import ProductImage2 from "../images/ProductDetailImage2.webp";
import ProductImage3 from "../images/ProductDetailImage3.webp";

// ... (rest of your component)

const ProductDetail = () => {
  const [mainImage, setMainImage] = useState(0);

  const images = [ProductImage1, ProductImage2, ProductImage3];
    const descriptions = [
    'Made with recycled flowers, with our holi colors to make it feel more real.',
    'Mudras, the sacred hand gestures, are integral to Hindu puja rituals, and help us channel energy and a deeper connection with the divine. The Vaayu Mudra, embodying the wind, serves as a celestial conduit for communication between you and the almighty.',
    'Embark on a fragrant journey with Hoovu Agarbattis, lovingly handcrafted from sacred temple flowers. They capture the uplifting essence of the Vaayu Mudra, and pay homage to the ancient tradition of using only pure, natural ingredients as sacred offerings.',
    'With their divine fragrance, enduring burn time and all natural recycled ingredients, Hoovu Agarbattis are perfect for a vibrantly meditative experience.',
    'This is a fresh take on tradition, thoughtfully reimagined for the modern devotee.',
    'So, as you ignite a Hoovu Agarbatti and the aroma lifts your spirit, let Vaayu guide your prayers on a heartfelt journey from your heart, to the heavens.'
  ];
  const features = ['Prayer stand included', '45 sticks'];


  return (
    <div className="min-h-screen bg-yellow-400 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square w-full relative"> {/* Add relative for absolute positioning */}
            <Image
              src={images[mainImage]}
              alt="Product"
              width={500} // Required: Set appropriate width
              height={500} // Required: Set appropriate height
              className="w-full h-full object-cover rounded-lg"
              priority // Optional: Prioritize loading this image
            />
          </div>
          <div className="flex gap-4">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setMainImage(idx)}
                className={`w-24 h-24 rounded-lg overflow-hidden relative ${mainImage === idx ? 'ring-2 ring-teal-600' : ''}`} // Add relative
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  width={100} // Set width and height for thumbnails
                  height={100}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">MARIGOLD AGARBATTI</h1>
          <div className="space-y-1">
            <p className="text-2xl text-gray-900">Rs. 165.00</p>
            <p className="text-gray-600">Tax included.</p>
          </div>

          <button className="w-full bg-teal-600 text-white py-3 rounded-full hover:bg-teal-700 transition-colors">
            ADD TO CART
          </button>

          <div className="space-y-4">
            {descriptions.map((desc, idx) => (
              <p key={idx} className="text-gray-700">{desc}</p>
            ))}
          </div>

          <ul className="list-disc pl-5 space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="text-gray-700">{feature}</li>
            ))}
          </ul>

          <div className="flex gap-4 pt-4">
            <button className="px-4 py-2 border border-gray-300 rounded-full flex items-center gap-2 hover:bg-gray-50">
              <Share size={16} />
              SHARE
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-full flex items-center gap-2 hover:bg-gray-50">
              <Twitter size={16} />
              TWEET
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-full flex items-center gap-2 hover:bg-gray-50">
              <Heart size={16} />
              PIN IT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;