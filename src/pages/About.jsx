import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-gray-900">
      <h1 className="text-4xl font-bold mb-6">About Shopora</h1>
      <p className="text-gray-700 mb-6">
        Shopora is a modern e-commerce platform designed to showcase trending
        products from various categories like smartphones, laptops, fragrances,
        and skincare. Our mission is to provide a seamless shopping experience
        with fast delivery, secure payments, and unbeatable deals.
      </p>
      <p className="text-gray-700 mb-6">
        This platform is built as a portfolio project to demonstrate full-stack
        development skills, including React.js, TailwindCSS, routing, state
        management, and integration with APIs.
      </p>
      <Link
        to="/"
        className="inline-block mt-4 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-500 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
