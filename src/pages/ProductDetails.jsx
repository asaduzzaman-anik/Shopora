import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from "../components/StarRating";
import { addToCart } from "../utils/cartUtils";

export default function ProductDetails() {
  const { id } = useParams();
  const url = `https://dummyjson.com/products/${id}`;
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState("");
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw Error("Product not found");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setActiveImage(data.thumbnail);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [url]);

  // ================ LOADING UI ===================
  if (isPending) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
        <p className="mt-6 text-xl font-semibold">Loading product...</p>
      </div>
    );
  }
  /* ================= ERROR UI ================= */
  if (error) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
          alt="error"
          className="w-40 mb-6 opacity-80"
        />
        <h1 className="text-4xl font-bold text-primary">{error}</h1>
        <p className="mt-4 text-gray-600">
          Something went wrong while fetching the product.
        </p>
      </div>
    );
  }
  /* ================= MAIN UI ================= */
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT: IMAGES */}
        <div>
          <div className="bg-gray-200 rounded-lg overflow-hidden mb-4">
            <img
              src={activeImage}
              alt={product.title}
              className="w-full aspect-square lg:aspect-video object-contain"
            />
          </div>

          <div className="flex gap-3 overflow-x-auto">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="product"
                onClick={() => setActiveImage(img)}
                className={`w-20 h-20 object-cover border rounded cursor-pointer 
                  ${activeImage === img ? "border-black" : "border-gray-300"}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT: DETAILS */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-sm text-gray-700 mb-2">{product.description}</p>

          <div className="flex items-center gap-4 mb-4">
            <StarRating rating={product.rating} />
            <span className="text-green-700 font-semibold">
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          <div className="mb-6">
            <p className="text-3xl font-bold text-black">${product.price}</p>
            <p className="text-sm text-primary">
              {product.discountPercentage}% discount applied
            </p>
          </div>
          <div className="flex items-center mb-6 gap-6">
            <div className="flex items-center gap-4  px-4 py-1 bg-gray-200 rounded-full w-fit text-lg font-medium ">
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                −
              </button>

              <span>{quantity}</span>

              <button onClick={() => setQuantity((q) => q + 1)}>+</button>
            </div>
            {!(product.availabilityStatus === "Out of Stock") && (
              <div>
                <p>
                  Only{" "}
                  <span className="text-primary font-medium">
                    {product.stock}
                  </span>{" "}
                  items left!
                </p>
              </div>
            )}
          </div>
          <div className="flex gap-4">
            <button
              disabled={product.stock === 0}
              onClick={() => {
                addToCart(product, quantity);
                alert("Product added to cart");
              }}
              className={`px-6 py-3 rounded text-white
              ${
                product.stock === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-black hover:opacity-90 cursor-pointer"
              }`}
            >
              Add to Cart
            </button>
            <button
              disabled={product.stock === 0}
              className="px-6 py-3 border border-black rounded hover:bg-black hover:text-white"
            >
              Buy Now
            </button>
          </div>
        </div>
        {/* ================= REVIEWS SECTION ================= */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

          {product.reviews && product.reviews.length > 0 ? (
            <div className="space-y-6">
              {product.reviews.map((review, index) => (
                <div key={index} className="border rounded-lg p-5 bg-gray-50">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-lg">
                      {review.reviewerName}
                    </h3>
                    <StarRating rating={review.rating} size={16} />
                  </div>

                  <p className="text-gray-700 mb-2">{review.comment}</p>

                  <p className="text-sm text-gray-400">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-gray-500 text-lg">
              No reviews yet. Be the first to review this product!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
