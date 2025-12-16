import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useFetch from "../hooks/useFetch";
import { useRef } from "react";
import ProductCard from "./ProductCard";

export default function ProductSlider({ heading, url }) {
  const carouselRef = useRef(null);

  const { data: products } = useFetch(url);
  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -250,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 250,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full mb-10">
      {/* heading */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{heading}</h2>
        <div className="flex gap-4">
          <button onClick={scrollLeft} className="cursor-pointer">
            <FaChevronLeft />
          </button>
          <button onClick={scrollRight} className="cursor-pointer">
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* carousel */}
      {products && (
        <div
          ref={carouselRef}
          className="overflow-x-auto scroll-smooth no-scrollbar"
        >
          <div className="grid grid-flow-col auto-cols-[15rem] gap-4 m-2">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
