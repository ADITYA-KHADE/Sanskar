"use client"
import React, { useState, useEffect, useMemo } from 'react';
import Image, { StaticImageData } from 'next/image';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import Product from "../../images/Product.avif";
import { useRouter } from 'next/navigation';

interface ProductProps {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
  imageUrl: StaticImageData;
  category: string;
  description: string;
}

interface StarRatingProps {
  rating: number;
  reviews: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating, reviews }) => {
  return (
    <div className="flex items-center">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${
              index <= rating ? 'text-pink-500' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
      <span className="ml-2 text-sm text-gray-600">{reviews} reviews</span>
    </div>
  );
};


const ProductsCard: React.FC<{ product: ProductProps }> = ({ product }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <div className="relative h-64 w-full mb-4">
        <Image
          src={product.imageUrl}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
      <div className="mt-1">
        <StarRating rating={product.rating} reviews={product.reviews} />
      </div>
      <div className="mt-2">
        <span className="text-gray-900 font-medium">Rs. {product.price}</span>
        {product.originalPrice && (
          <span className="ml-2 text-sm text-pink-500 line-through">
            Rs. {product.originalPrice}
          </span>
        )}
      </div>
      {/* Navigate to product details page */}
      <button
        className="mt-4 bg-teal-600 text-white px-6 py-2 rounded-full text-sm hover:bg-teal-700 transition-colors"
        onClick={() => router.push(`/shop/${product.id}`)}
      >
        SELECT ITEM
      </button>
    </div>
  );
};


const ProductsList = () => {
  const [filter, setFilter] = useState('All products');
  const [sort, setSort] = useState('Featured');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([]);
  const productsPerPage = 15;

  // Move allProducts into useMemo to prevent re-creation on every render
  const allProducts = useMemo<ProductProps[]>(() => [
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
      {
        id: 14,
        name: 'Patchouli Bliss Agarbathi',
        price: '89.50',
        originalPrice: '99.99',
        rating: 4.5,
        reviews: 9,
        imageUrl: Product,
        category: 'Agarbathi',
        description: 'Soothing patchouli fragrance for a balanced and calming effect.',
        details: {
          sticksPerFragrance: 25,
          ingredients: [
            "Patchouli extract",
            "Natural binder",
            "Herb powder"
          ],
          features: [
            "Pure patchouli",
            "Balancing aroma",
            "Chemical-free"
          ]
        },
        combo: []
      },
      {
        id: 15,
        name: 'Cedarwood & Musk Dhoop Cones',
        price: '92.99',
        originalPrice: '103.99',
        rating: 5,
        reviews: 7,
        imageUrl: Product,
        category: 'Dhoop Cones',
        description: 'Exquisite cedarwood and musk blend for a divine aroma.',
        details: {
          sticksPerFragrance: 20,
          ingredients: [
            "Cedarwood oil",
            "Musk essence",
            "Natural resin"
          ],
          features: [
            "Exotic blend",
            "Rich woody notes",
            "Long-lasting"
          ]
        },
        combo: []
      },
      {
        id: 16,
        name: 'Holy Basil Agarbathi',
        price: '95.25',
        originalPrice: '105.75',
        rating: 4.9,
        reviews: 6,
        imageUrl: Product,
        category: 'Agarbathi',
        description: 'Sacred tulsi agarbathi for an uplifting and purifying experience.',
        details: {
          sticksPerFragrance: 25,
          ingredients: [
            "Holy basil extract",
            "Natural binder",
            "Herb powder"
          ],
          features: [
            "Pure tulsi essence",
            "Purifying aroma",
            "Traditional blend"
          ]
        },
        combo: []
      },
      {
        id: 17,
        name: 'Mysore Chandan Dhoop Sticks',
        price: '97.99',
        originalPrice: '107.99',
        rating: 5,
        reviews: 10,
        imageUrl: Product,
        category: 'Dhoop Sticks',
        description: 'Traditional Mysore sandalwood dhoop sticks.',
        details: {
          sticksPerFragrance: 25,
          ingredients: [
            "Mysore sandalwood",
            "Natural resin",
            "Wood powder"
          ],
          features: [
            "Premium sandalwood",
            "Traditional recipe",
            "Long-lasting"
          ]
        },
        combo: []
      },
      {
        id: 18,
        name: 'Frankincense & Myrrh Dhoop Cones',
        price: '105.00',
        originalPrice: '115.50',
        rating: 5,
        reviews: 9,
        imageUrl: Product,
        category: 'Dhoop Cones',
        description: 'Classic frankincense and myrrh blend for an ancient meditative experience.',
        details: {
          sticksPerFragrance: 20,
          ingredients: [
            "Frankincense resin",
            "Myrrh extract",
            "Natural binder"
          ],
          features: [
            "Ancient blend",
            "Meditation friendly",
            "Premium quality"
          ]
        },
        combo: []
      },
      {
        id: 19,
        name: 'Nag Champa Agarbathi',
        price: '99.00',
        originalPrice: '109.99',
        rating: 4.8,
        reviews: 8,
        imageUrl: Product,
        category: 'Agarbathi',
        description: 'Iconic Nag Champa agarbathis known for their soothing and spiritual scent.',
        details: {
          sticksPerFragrance: 25,
          ingredients: [
            "Nag champa blend",
            "Natural binder",
            "Flower powder"
          ],
          features: [
            "Classic fragrance",
            "Spiritual blend",
            "Traditional recipe"
          ]
        },
        combo: []
      }
    ], []); // Empty dependency array since this data is static

  useEffect(() => {
    let result = [...allProducts];
    
    // Apply filtering
    if (filter !== 'All products') {
      result = result.filter(product => product.category === filter);
    }
    
    // Apply sorting
    switch (sort) {
      case 'Price: Low to High':
        result.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case 'Price: High to Low':
        result.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      case 'Best Rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Featured - maintain original order
        break;
    }
    
    setFilteredProducts(result);
    setCurrentPage(1); // Reset to first page when filter/sort changes
  }, [filter, sort, allProducts]);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">FILTER BY</span>
            <div className="relative">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="appearance-none bg-transparent border-b border-gray-700 py-1 pr-8 focus:outline-none"
              >
                <option>All products</option>
                <option>Agarbathi</option>
                <option>Dhoop Cones</option>
                <option>Dhoop Sticks</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-700" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-700">SORT BY</span>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-transparent border-b border-gray-700 py-1 pr-8 focus:outline-none"
              >
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Best Rating</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-700" />
            </div>
          </div>

          <span className="text-gray-700">{filteredProducts.length} products</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProducts.map((product) => (
            <ProductsCard key={product.id} product={product} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-8 gap-4">
            <button 
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="p-2 rounded-full bg-teal-600 text-white disabled:opacity-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
            <button 
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full bg-teal-600 text-white disabled:opacity-50"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsList;