import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import useFetch from "../hooks/useFetch";

export default function Products() {
  const url = "https://dummyjson.com/products?limit=150";

  const { data: products, isPending, error } = useFetch(url);

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
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
