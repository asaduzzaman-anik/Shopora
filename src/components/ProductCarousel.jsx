import React, { useEffect, useState } from "react";

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  if (loading) {
    return (
      <div className="py-16 text-center text-xl text-gray-500">
        Loading products...
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>

      <div className="relative overflow-hidden rounded-xl">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-full flex flex-col items-center bg-white p-6"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-64 w-full object-contain rounded-lg"
              />

              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {product.title}
              </h3>

              <p className="text-lg font-bold text-emerald-600">
                ${product.price}
              </p>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 -translate-y-1/2 
                     bg-white/80 hover:bg-white shadow-md 
                     rounded-full p-2 text-2xl"
        >
          ‹
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 -translate-y-1/2 
                     bg-white/80 hover:bg-white shadow-md 
                     rounded-full p-2 text-2xl"
        >
          ›
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-5">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full transition ${
                currentIndex === index ? "bg-emerald-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
