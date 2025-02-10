import HeroSection from "./components/HeroSection";
import HeroProduct from "./components/HeroProduct";
import ProductCatalog from "./components/ProductCatalog";
import ProductDetail from "./components/ProductDetail";
import NeemDetail from "./components/NeemDetail";


export default function Home() {
  return (
    <div className="bg-yellow-400">
      <HeroSection/>
      <HeroProduct/>
      <ProductCatalog/>
      <ProductDetail/>
      <NeemDetail/>
    </div>
  );
}