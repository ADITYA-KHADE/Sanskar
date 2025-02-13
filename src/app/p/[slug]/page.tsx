// frontend/src/app/p/[slug]/page.tsx (Dynamic SEO Pages)
import { ProductCard } from "@/components/product-card";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { Metadata } from "next";
import { getProductsByKeyword } from "@/api/products";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const keywordData = keywords.find(k => k.slug === params.slug);
  
  return {
    title: `${keywordData?.title} | Sanskaar - Authentic Pooja Samagri`,
    description: keywordData?.metaDesc,
    keywords: keywordData?.keywords.join(', '),
    openGraph: {
      images: [keywordData?.ogImage || '/default-og.jpg'],
    },
    alternates: {
      canonical: `https://sanskaar.com/p/${params.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return keywords.map((keyword) => ({
    slug: keyword.slug,
  }));
}

export default async function KeywordPage({ params }: Props) {
  const { slug } = params;
  const queryClient = new QueryClient();
  
  await queryClient.prefetchQuery({
    queryKey: ['products', slug],
    queryFn: () => getProductsByKeyword(slug),
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {keywords.find(k => k.slug === slug)?.title}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Product List */}
        {dehydrate().queries.map(({ state }) => (
          state.data?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ))}
      </div>

      {/* SEO Content Section */}
      <section className="mt-12 prose max-w-none">
        {generateDynamicContent(slug)}
      </section>
    </main>
  );
}

// SEO Content Generator
const generateDynamicContent = (slug: string) => {
  const keyword = keywords.find(k => k.slug === slug);
  if (!keyword) return null;

  return (
    <>
      <h2>Discover Authentic {keyword.title}</h2>
      <p>
        Explore our curated collection of {keyword.title.toLowerCase()} perfect for 
        {keyword.relatedFestivals?.join(', ')}. Our products are carefully sourced 
        to maintain traditional authenticity while ensuring modern quality standards.
      </p>
      
      <h3>Why Choose Sanskaar?</h3>
      <ul>
        <li>100% Natural Ingredients</li>
        <li>Vedic Preparation Methods</li>
        <li>Global Delivery Options</li>
      </ul>
    </>
  );
};

// Keyword Data (can be moved to CMS)
const keywords = [
  {
    slug: "pooja-samagri-near-me",
    title: "Premium Pooja Samagri Near You",
    metaDesc: "Find authentic pooja items available near you with same-day delivery. Shop now for traditional Hindu ritual supplies.",
    keywords: ["pooja samagri", "local delivery", "religious items"],
    relatedFestivals: ["Diwali", "Navratri", "Ganesh Chaturthi"],
    ogImage: "/og/pooja-near-me.jpg"
  },
  // Add other keywords following the same structure
];