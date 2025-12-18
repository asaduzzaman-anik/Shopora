import CategorySlider from "../components/CategorySlider";
import FeaturedProducts from "../components/FeaturedProducts";
import ProductSlider from "../components/ProductSlider";

export default function Home() {
  return (
    <div>
      {/* Feature Products */}
      <ProductSlider
        heading="Featured Products"
        url="https://dummyjson.com/products?limit=12"
      />
      {/* Grocery Items */}
      <ProductSlider
        heading="Grocery Items"
        url="https://dummyjson.com/products/category/groceries?limit=12"
      />
      {/* Kitchen Accessories */}
      <ProductSlider
        heading="Kitchen Accessories"
        url="https://dummyjson.com/products/category/kitchen-accessories?limit=12"
      />
      {/* Smartphones */}
      <ProductSlider
        heading="Smartphones"
        url="https://dummyjson.com/products/category/smartphones?limit=12"
      />
      <CategorySlider />
    </div>
  );
}
