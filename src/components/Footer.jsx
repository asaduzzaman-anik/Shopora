import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaShippingFast,
  FaLock,
  FaTag,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import FeatureCard from "./FeatureCard";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white px-6 py-12">
      <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        <FeatureCard
          icon={<FaShippingFast size={40} />}
          title="Fast Delivery"
          description="Quick and reliable shipping"
        />
        <FeatureCard
          icon={<FaLock size={40} />}
          title="Secure Payment"
          description="100% secure transactions"
        />
        <FeatureCard
          icon={<FaTag size={40} />}
          title="Best Deals"
          description="Affordable prices everyday"
        />
        <FeatureCard
          icon={<FaStar size={40} />}
          title="Top Quality"
          description="Handpicked premium items"
        />
      </div>
      <div className="flex flex-col justify-between gap-3 sm:gap-5 lg:gap-12 md:grid md:grid-cols-4">
        {/* About / Logo */}
        <div className="flex flex-col gap-4 mb-5">
          <img src="./logo.png" alt="Shopora Logo" className="h-10 w-10" />
          <p className="text-gray-200 text-sm">
            Shopora is your one-stop e-commerce platform for trending products
            at unbeatable prices.
          </p>
          <p>Connect with us</p>
          <div className="flex gap-4 text-gray-200">
            <a href="#" className="hover:text-secondary">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-secondary">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-secondary">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-secondary">
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2 mb-5">
          <h3 className="font-semibold pb-2 mb-2 border-b-2 border-b-white">
            Quick Links
          </h3>
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <Link to="/products" className="hover:text-primary">
            Products
          </Link>
          <Link to="/about" className="hover:text-primary">
            About
          </Link>
          <Link to="/contact" className="hover:text-primary">
            Contact
          </Link>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-2 mb-5">
          <h3 className="ffont-semibold pb-2 mb-2 border-b-2 border-b-white">
            Categories
          </h3>
          <Link
            to="/products?category=smartphones"
            className="hover:text-primary"
          >
            Smartphones
          </Link>
          <Link to="/products?category=laptops" className="hover:text-primary">
            Laptops
          </Link>
          <Link
            to="/products?category=fragrances"
            className="hover:text-primary"
          >
            Fragrances
          </Link>
          <Link to="/products?category=skincare" className="hover:text-primary">
            Skincare
          </Link>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold pb-2 mb-2 border-b-2 border-b-white">
            Subscribe to our Newsletter
          </h3>
          <p className="text-gray-200 text-sm">
            Get the latest deals and trending products.
          </p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-xl border border-gray-300 outline-none flex-1"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-500 transition cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Shopora. All rights reserved.
      </div>
    </footer>
  );
}
