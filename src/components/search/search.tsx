// frontend/src/components/search/search.tsx (Shadcn-powered Search)
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/use-debounce";
import { useQuery } from "@tanstack/react-query";
import { searchProducts } from "@/api/products";

export function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);
  
  const { data } = useQuery({
    queryKey: ['search', debouncedSearch],
    queryFn: () => searchProducts(debouncedSearch),
    enabled: debouncedSearch.length > 2
  });

  return (
    <div className="relative w-full max-w-md">
      <Input
        type="search"
        placeholder="Search pooja items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-8"
      />
      {/* Search results dropdown */}
      {data?.length > 0 && (
        <div className="absolute mt-2 w-full bg-white shadow-lg rounded-lg">
          {data.map((product) => (
            <ProductSearchResult key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}