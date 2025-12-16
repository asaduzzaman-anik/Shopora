import { useEffect, useState } from "react";

export default function ShopByCategory() {
  const [categories, setCategories] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const catURL = "https://dummyjson.com/products/categories";

  useEffect(() => {
    fetch(catURL)
      .then((res) => {
        if (!res.ok) {
          throw Error("Invalid URL to fetch data from");
        }
        return res.json();
      })
      .then((data) => {
        setCategories(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [catURL]);

  return (
    <section id="product-categories" className="mb-10">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Shop By Category
      </h2>

      {categories && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-8 gap-3">
          {categories.map((cat) => (
            <div
              key={cat.slug}
              className="h-10 bg-gray-600 text-white font-medium rounded-lg p-2 text-center"
            >
              <p>{cat.name}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
