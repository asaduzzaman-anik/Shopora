import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import useFetch from "../hooks/useFetch";
import { Link, useSearchParams } from "react-router-dom";
import { TbMoodEmpty } from "react-icons/tb";

export default function Products() {
  const url = "https://dummyjson.com/products?limit=150";
  const { data: products, isPending, error } = useFetch(url);
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const searchFromURL = searchParams.get("search") || "";
  const selectedCategory = searchParams.get("category");

  useEffect(() => {
    setSearch(searchFromURL);
  }, [searchFromURL]);

  // Filtering Logic
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products.filter((product) => {
        const query = search.toLowerCase();
        return (
          product.title.toLowerCase().includes(query) ||
          product.brand?.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
        );
      });

  return (
    <div>
      {error && (
        <div className="container mx-auto h-screen flex justify-center items-center text-7xl font-bold">
          {error}
        </div>
      )}

      {isPending && (
        <div className="min-h-screen flex flex-col justify-center items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
          <p className="mt-6 text-xl font-semibold">Loading Items...</p>
        </div>
      )}

      {products && (
        <div>
          {filteredProducts.length === 0 && (
            <div className="h-[calc(100vh-80px)] flex flex-col justify-center items-center ">
              <TbMoodEmpty size={100} className="text-purple-700" />
              <h2 className="text-2xl sm:text-5xl">No products found</h2>
              <Link
                to={"/"}
                className="bg-purple-700 text-white text-2xl p-2 mt-5 rounded-xl hover:bg-purple-500 cursor-pointer transition"
              >
                Back to Home
              </Link>
            </div>
          )}
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mb-5">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
