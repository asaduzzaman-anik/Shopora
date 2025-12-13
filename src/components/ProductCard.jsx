import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <>
      <Link className="group">
        <div className="relative">
          <img
            src={product.images[0]}
            alt=""
            className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 group-hover:scale-105 transition xl:aspect-7/8"
          />
          <button
            onClick=""
            className="absolute bottom-2 opacity-0 group-hover:opacity-100 transition ease-in-out bg-gray-900 text-white font-medium inset-x-0 text-center p-2 mx-2 rounded-lg "
          >
            Add to Cart
          </button>
        </div>

        <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">
          ${product.price}
        </p>
      </Link>
    </>
  );
}
