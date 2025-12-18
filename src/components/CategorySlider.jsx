import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

export default function CategorySlider() {
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

  const carouselRef = useRef(null);
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
        <h2 className="text-2xl font-semibold text-gray-800">
          Shop by Category
        </h2>
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
      {categories && (
        <div
          ref={carouselRef}
          className="overflow-x-auto scroll-smooth no-scrollbar"
        >
          <div className="grid grid-flow-col auto-cols-[10rem] sm:auto-cols-[15rem] gap-4 m-2">
            {categories.map((cat) => (
              <div
                key={cat.slug}
                className="h-20 bg-gray-200 text-blue-950 font-medium rounded-lg flex items-center justify-center"
              >
                <p>{cat.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
