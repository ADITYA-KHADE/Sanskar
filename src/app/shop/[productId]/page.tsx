"use client";
import { useParams } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import Product from '../../images/Product.avif'
// Type definitions
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

interface StarRatingProps {
  rating: number;
  reviews: number;
}



const StarRating: React.FC<StarRatingProps> = ({ rating, reviews }) => {
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

const ProductDetailPage: React.FC = () => {
  const params = useParams();
  const productId: string | string[] | undefined  = params?.productId;
  const products: Product[] = [
    {
        id: 1,
        name: "THE PERFECT AGARBATHI SET: 5 FRAGRANCES",
        price: "467.78",
        originalPrice: "519.75",
        rating: 5,
        imageUrl: Product,
        reviews: 4,
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
  }];

  const product = products.find(p => 
    typeof productId === "string" && !Array.isArray(productId) && p.id === parseInt(productId)
  );
  // Handle case where product is not found
  if (!product) {
    return (
      <div className="min-h-screen bg-yellow-400 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <p className="mt-2">The requested product could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-yellow-400">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Images */}
          <div className="space-y-4">
            <div className="relative aspect-square w-full bg-white p-4 rounded-lg">
              <Image
                src="/api/placeholder/600/600"
                alt={product.name}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="relative aspect-square w-full bg-white p-2 rounded-lg">
                  <Image
                    src="/api/placeholder/150/150"
                    alt={`Product view ${index}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            
            <StarRating rating={product.rating} reviews={product.reviews} />
            
            <div className="space-y-1">
              <div className="text-xl">
                Rs. {product.price}
              </div>
              <div className="text-lg text-gray-700 line-through">
                Rs. {product.originalPrice}
              </div>
              <p className="text-sm">Tax included.</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Quantity
                </label>
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="w-24 px-3 py-2 border rounded-md bg-white"
                />
              </div>

              <button className="w-full bg-teal-600 text-white px-6 py-3 rounded-md font-medium hover:bg-teal-700">
                ADD TO CART
              </button>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Hand-rolled Agarbathis which are made from Sacred Temple Flowers.</h3>
              <p className="mt-2">
                Flowers are the essence of puja, yet more than half of the sacred flowers that are harvested are wasted, and of the flowers that are used, tonnes are thrown away into rivers and landfills. We knew there must be a better way.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Product Details:</h3>
              <ul className="space-y-2">
                <li>{product.details.sticksPerFragrance} sticks in each Fragrance</li>
                {product.details.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
                <li>
                  Ingredients - {product.details.ingredients.join(", ")}
                </li>
              </ul>
            </div>

            {product.combo && product.combo.length > 0 && (
              <div className="pt-4">
                <p className="text-sm">
                  Combo includes: {product.combo.join(" + ")}
                </p>
              </div>
            )}

            <div className="flex gap-4 pt-4">
              <button className="px-4 py-2 border rounded-md bg-white hover:bg-gray-50">
                SHARE
              </button>
              <button className="px-4 py-2 border rounded-md bg-white hover:bg-gray-50">
                TWEET
              </button>
              <button className="px-4 py-2 border rounded-md bg-white hover:bg-gray-50">
                PIN IT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;