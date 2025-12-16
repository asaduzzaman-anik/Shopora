import { Link } from "react-router-dom";
import { addToCart } from "../utils/cartUtils";

export default function ProductCard({ product }) {
  return (
    <div className="relative group">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.thumbnail}
          alt=""
          className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 group-hover:scale-105 transition xl:aspect-7/8"
        />
        <div
          className={`absolute top-2 right-2 rounded px-1 text-sm ${
            product.availabilityStatus === "In Stock"
              ? "bg-green-600"
              : product.availabilityStatus === "Low Stock"
              ? "bg-yellow-600"
              : "bg-red-600"
          } `}
        >
          <span className="w-5 h-5 rounded-full "></span>
          {product.availabilityStatus}
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">
          ${product.price}{" "}
          <span className="text-primary text-sm">
            (-{product.discountPercentage}%)
          </span>
        </p>
      </Link>
      <button
        onClick={() => {
          addToCart(product);
          alert("Button Clicked");
        }}
        className="absolute bottom-18 opacity-0 group-hover:opacity-100 transition ease-in-out bg-gray-900 text-white font-medium inset-x-0 text-center p-2 rounded-lg cursor-pointer "
      >
        Add to Cart
      </button>
    </div>
  );
}
