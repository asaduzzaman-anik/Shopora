import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductCard from "./ProductCard";
import useFetch from "../hooks/useFetch";

export default function FeaturedProducts() {
  const carouselRef = useRef(null);

  const { data: products } = useFetch(
    "https://dummyjson.com/products?limit=12"
  );

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -260,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 260,
      behavior: "smooth",
    });
  };

  return (
    <section id="featured-products" className="w-full mb-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Featured Products
        </h2>

        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            className="p-2 rounded-full border hover:bg-gray-100 transition"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 rounded-full border hover:bg-gray-100 transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Carousel */}
      {products && (
        <div
          ref={carouselRef}
          className="overflow-x-auto scroll-smooth no-scrollbar"
        >
          <div className="grid grid-flow-col auto-cols-[15rem] gap-4 ">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
