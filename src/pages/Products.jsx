import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://dummyjson.com/products";

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error("Invalid URL to fetch data from");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
        setIsPending(false);
        setError(null);
      })
      .catch((error) => {
        setIsPending(false);
        setError(error.message);
      });
  }, [url]);

  return (
    <div>
      {error && (
        <div className="container mx-auto h-screen flex justify-center items-center text-7xl font-bold">
          {error}
        </div>
      )}

      {isPending && (
        <div className="container mx-auto h-screen flex justify-center items-center text-7xl font-bold">
          Loading Items...
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
