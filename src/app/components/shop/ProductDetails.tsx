"use client";
import React, { useState } from "react";
import Image from "next/image";
import { StarRating } from "./ProductsList"; // Reusing the StarRating component

interface Product {
  name: string;
  imageUrl: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  description?: string;
}

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative h-96 w-full">
            <Image
              src={product.imageUrl}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="relative h-24 w-full">
                <Image
                  src={product.imageUrl}
                  alt={`${product.name} view ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <StarRating rating={product.rating} reviews={product.reviews} />
          
          <div className="space-y-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">Rs. {product.price}</span>
              {product.originalPrice && (
                <span className="ml-2 text-lg text-pink-500 line-through">
                  Rs. {product.originalPrice}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600">Tax included.</p>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Quantity</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-20 px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <button className="w-full bg-teal-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-teal-700 transition-colors">
            ADD TO CART
          </button>

          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-medium text-gray-900">Product Details:</h2>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li>30 sticks in each Fragrance</li>
                <li>Made with temple flowers</li>
                <li>Hand rolled</li>
                <li>Ingredients - Flower powder, Natural bark powder and binder</li>
                <li>Charcoal free / Chemical free</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-medium text-gray-900">Description</h2>
              <p className="mt-2 text-sm text-gray-600">{product.description}</p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-gray-900">Combo includes:</h2>
              <p className="mt-2 text-sm text-gray-600">
                Jasmine Agarbathi + Rose Agarbathi + Tulsi Agarbathi +
                Sandalwood Agarbathi + Lavender Agarbathi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
