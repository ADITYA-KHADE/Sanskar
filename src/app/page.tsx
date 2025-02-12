import HeroSection from "./components/HeroSection";
import HeroProduct from "./components/HeroProduct";
import ProductCatalog from "./components/ProductCatalog";
import ProductDetail from "./components/ProductDetail";
import NeemDetail from "./components/NeemDetail";
import { BenefitsSection } from "./components/sections/benefits"
import { ConcernsSection } from "./components/sections/concerns"
import { WhatsAppFAB } from "./components/WhatsAppFAB"


export default function Home() {
  return (
    <div className="bg-yellow-400">
      <HeroSection/>
      <HeroProduct/>
      <ProductCatalog/>
      <ProductDetail/>
      <NeemDetail/>
      <BenefitsSection/>
      <ConcernsSection/>
      <WhatsAppFAB/>
    </div>
  );
}