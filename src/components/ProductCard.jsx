import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <>
      <Link className="group relative">
        <img
          src={product.images[0]}
          alt=""
          className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 group-hover:scale-105 transition xl:aspect-7/8"
        />
        <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">
          ${product.price}
        </p>
        <button className="hidden group-hover:block bg-gray-900 text-white font-medium absolute bottom-17 inset-x-0 text-center p-2 rounded-lg transition">
          Add to Cart
        </button>
      </Link>
    </>
  );
}
