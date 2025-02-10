"use client"
import React from 'react';
import Image, { StaticImageData } from "next/image"; 
import Product from "@/app/images/Product.avif"; // Import your image correctly
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ProductDetails {
  sticksPerFragrance: number;
  ingredients: string[];
  features: string[];
}
interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviews: number;
  imageUrl: StaticImageData;
  category?: string;
  description?: string;
  details: ProductDetails;
  combo: string[];
}


const ProductCard = ({ product }: { product: Product }) => {
  const router = useRouter(); // Initialize useRouter here

  return (
    <div className="p-4 flex flex-col items-center">
      <div className="aspect-square w-full relative mb-4">
        <Image 
          src={product.imageUrl} 
          alt={product.name}
          width={300} 
          height={300} 
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <h3 className="text-gray-800 font-medium text-lg mb-2 text-center">{product.name}</h3>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-gray-900">Rs. {product.price}</span>
        <span className="text-pink-500 line-through">Rs. {product.originalPrice}</span>
      </div>
      <button
        className="mt-4 bg-teal-600 text-white px-6 py-2 rounded-full text-sm hover:bg-teal-700 transition-colors"
        onClick={() => router.push(`/shop/${product.id}`)} // Use router.push() here
      >
        SELECT ITEM
      </button>
    </div>
  );
};


const ProductCatalog = () => {
  const products: Product[] = [
    {
      id: 1,
      name: 'The Perfect Agarbathi Set: 5 Fragrances',
      price: '467.78',
      originalPrice: '519.75',
      rating: 5,
      reviews: 4,
      imageUrl: Product,
      category: 'Agarbathi',
      description: 'A premium set of 5 different agarbathi fragrances.',
      details: {
        sticksPerFragrance: 30,
        ingredients: [
          "Flower powder",
          "Natural bark powder",
          "Natural binder"
        ],
        features: [
          "Made with temple flowers",
          "Hand rolled",
          "Charcoal free / Chemical free"
        ]
      },
      combo: [
        "Jasmine Agarbathi",
        "Rose Agarbathi",
        "Tulsi Agarbathi",
        "Sandalwood Agarbathi",
        "Lavender Agarbathi"
      ]
    },
    {
      id: 2,
      name: 'Ultimate Dhoop Cones Set: 5 Fragrances',
      price: '373.25',
      originalPrice: '414.74',
      rating: 4.5,
      reviews: 9,
      imageUrl: Product,
      category: 'Dhoop Cones',
      description: 'Premium dhoop cones set featuring 5 unique fragrances.',
      details: {
        sticksPerFragrance: 25,
        ingredients: [
          "Natural resin",
          "Herb powder",
          "Wood powder"
        ],
        features: [
          "Natural ingredients",
          "Long-lasting fragrance",
          "Perfect for meditation"
        ]
      },
      combo: [
        "Sandalwood Dhoop",
        "Rose Dhoop",
        "Jasmine Dhoop",
        "Lavender Dhoop",
        "Lotus Dhoop"
      ]
    },
    {
      id: 3,
      name: 'Sandalwood Agarbathi',
      price: '99.99',
      originalPrice: '109.99',
      rating: 4.8,
      reviews: 7,
      imageUrl: Product,
      category: 'Agarbathi',
      description: 'Rich and aromatic sandalwood incense sticks for a calming ambiance.',
      details: {
        sticksPerFragrance: 20,
        ingredients: [
          "Sandalwood powder",
          "Natural binder",
          "Essential oils"
        ],
        features: [
          "Pure sandalwood",
          "Long-lasting aroma",
          "Traditional recipe"
        ]
      },
      combo: []
    },
    {
      id: 4,
      name: 'Lavender Bliss Dhoop Cones',
      price: '85.50',
      originalPrice: '94.99',
      rating: 4.6,
      reviews: 5,
      imageUrl: Product,
      category: 'Dhoop Cones',
      description: 'Soothing lavender fragrance dhoop cones for relaxation and meditation.',
      details: {
        sticksPerFragrance: 20,
        ingredients: [
          "Lavender extract",
          "Natural resin",
          "Herb powder"
        ],
        features: [
          "Pure lavender essence",
          "Stress-relieving",
          "Perfect for meditation"
        ]
      },
      combo: []
    },
    {
      id: 5,
      name: 'Rose Essence Agarbathi',
      price: '79.99',
      originalPrice: '89.99',
      rating: 4.7,
      reviews: 6,
      imageUrl: Product,
      category: 'Agarbathi',
      description: 'Delicate and refreshing rose-scented agarbathis for a floral experience.',
      details: {
        sticksPerFragrance: 25,
        ingredients: [
          "Rose petals powder",
          "Natural binder",
          "Floral essence"
        ],
        features: [
          "Natural rose fragrance",
          "Romantic aroma",
          "Chemical-free"
        ]
      },
      combo: []
    },
    {
      id: 6,
      name: 'Divine Temple Dhoop Sticks',
      price: '112.50',
      originalPrice: '124.99',
      rating: 5,
      reviews: 8,
      imageUrl: Product,
      category: 'Dhoop Sticks',
      description: 'Temple-grade dhoop sticks with a divine fragrance blend.',
      details: {
        sticksPerFragrance: 30,
        ingredients: [
          "Temple flower powder",
          "Sacred herbs",
          "Natural resin"
        ],
        features: [
          "Temple grade quality",
          "Traditional blend",
          "Pure ingredients"
        ]
      },
      combo: []
    },
    {
      id: 7,
      name: 'Jasmine Delight Agarbathi',
      price: '89.99',
      originalPrice: '99.99',
      rating: 4.5,
      reviews: 6,
      imageUrl: Product,
      category: 'Agarbathi',
      description: 'Sweet and captivating jasmine fragrance in premium agarbathis.',
      details: {
        sticksPerFragrance: 25,
        ingredients: [
          "Jasmine extract",
          "Natural binder",
          "Flower essence"
        ],
        features: [
          "Pure jasmine fragrance",
          "Long-lasting aroma",
          "Hand-rolled"
        ]
      },
      combo: []
    },
    {
      id: 8,
      name: 'Lotus Premium Dhoop Cones',
      price: '79.99',
      originalPrice: '89.99',
      rating: 4.3,
      reviews: 4,
      imageUrl: Product,
      category: 'Dhoop Cones',
      description: 'Experience the serene aroma of lotus with these premium dhoop cones.',
      details: {
        sticksPerFragrance: 20,
        ingredients: [
          "Lotus extract",
          "Natural resin",
          "Herb powder"
        ],
        features: [
          "Sacred lotus fragrance",
          "Meditation friendly",
          "Pure ingredients"
        ]
      },
      combo: []
    },
    {
      id: 9,
      name: 'Vanilla Dhoop Sticks',
      price: '94.99',
      originalPrice: '104.99',
      rating: 4.5,
      reviews: 7,
      imageUrl: Product,
      category: 'Dhoop Sticks',
      description: 'Warm and comforting vanilla-scented dhoop sticks for a cozy ambiance.',
      details: {
        sticksPerFragrance: 25,
        ingredients: [
          "Vanilla extract",
          "Natural resin",
          "Wood powder"
        ],
        features: [
          "Rich vanilla aroma",
          "Cozy atmosphere",
          "Long-lasting"
        ]
      },
      combo: []
    },
    {
      id: 10,
      name: 'Mogra Agarbathi',
      price: '88.99',
      originalPrice: '98.99',
      rating: 4.7,
      reviews: 5,
      imageUrl: Product,
      category: 'Agarbathi',
      description: 'Intense mogra floral fragrance in high-quality agarbathis.',
      details: {
        sticksPerFragrance: 25,
        ingredients: [
          "Mogra flower extract",
          "Natural binder",
          "Floral essence"
        ],
        features: [
          "Pure mogra fragrance",
          "Traditional aroma",
          "Hand-crafted"
        ]
      },
      combo: []
    },
    {
      id: 11,
      name: 'Saffron Scented Dhoop Cones',
      price: '102.75',
      originalPrice: '114.50',
      rating: 5,
      reviews: 10,
      imageUrl: Product,
      category: 'Dhoop Cones',
      description: 'Premium saffron-infused dhoop cones for a luxurious aroma.',
      details: {
        sticksPerFragrance: 20,
        ingredients: [
          "Saffron extract",
          "Natural resin",
          "Herb powder"
        ],
        features: [
          "Luxury saffron blend",
          "Premium quality",
          "Rich aroma"
        ]
      },
      combo: []
    },
    {
      id: 12,
      name: 'Amber Resin Agarbathi',
      price: '93.99',
      originalPrice: '104.99',
      rating: 4.8,
      reviews: 8,
      imageUrl: Product,
      category: 'Agarbathi',
      description: 'Traditional amber resin agarbathis with a deep, warm fragrance.',
      details: {
        sticksPerFragrance: 25,
        ingredients: [
          "Amber resin",
          "Natural binder",
          "Wood powder"
        ],
        features: [
          "Pure amber fragrance",
          "Deep woody notes",
          "Traditional recipe"
        ]
      },
      combo: []
    },
    {
      id: 13,
      name: 'Pinewood Dhoop Sticks',
      price: '97.50',
      originalPrice: '108.99',
      rating: 4.6,
      reviews: 6,
      imageUrl: Product,
      category: 'Dhoop Sticks',
      description: 'Refreshing pinewood dhoop sticks with an earthy forest scent.',
      details: {
        sticksPerFragrance: 25,
        ingredients: [
          "Pine extract",
          "Natural resin",
          "Wood powder"
        ],
        features: [
          "Forest fresh scent",
          "Long-lasting",
          "Natural ingredients"
        ]
      },
      combo: []
    },
  ];


  return (
    <div className="min-h-screen bg-yellow-400 p-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div> 
        <button className="bg-teal-600 text-white px-8 py-2.5 rounded-full text-sm uppercase tracking-wider hover:bg-teal-700 transition-colors font-medium mt-4">
          <Link href="/shop" className="text-gray-800 hover:text-gray-600">
            VIEW ALL
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ProductCatalog;
