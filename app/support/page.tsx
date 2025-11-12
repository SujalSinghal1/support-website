import {
  CTA,
  ProductDetails,
  Details,
} from "@/components/custom/components.export.js";
import { HeroSupport } from "@/components/custom/Herosection";

export default function page() {
  return (
    <div className="mx-auto px-10">
      <HeroSupport />
      <ProductDetails />
      <Details />
      <CTA />
    </div>
  );
}
