import { React, useState } from "react";
import { PiShoppingCart } from "react-icons/pi";
import { RiMenuFold4Line, RiUserLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  return (
    <>
      <div className="fixed top-0 left-0 inset-x-0 bg-white shadow-md z-50">
        {/* Nav  */}
        <nav className="w-full h-12 sm:h-16 px-3 sm:px-6 py-2 flex justify-between lg:justify-evenly items-center">
          {/* Hamburger menu for mobile screen */}
          <div className="sm:hidden" onClick={() => setOpenMenu(true)}>
            <RiMenuFold4Line size={25} />
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 ">
            <img src="./logo.png" alt="" className="w-auto h-7 sm:h-12" />
            <h2 className="text-lg sm:text-2xl font-medium text-primary">
              Shopora
            </h2>
          </Link>

          {/* Search Bar for Large Screen */}
          <div className="hidden sm:flex items-center bg-gray-100 px-3 py-1 rounded-full border">
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none h-6 px-2 w-60 lg:w-100"
            />
            <button type="submit" className="text-gray-600 hover:text-black">
              <FaSearch />
            </button>
          </div>

          {/* Icons */}
          <div className="flex justify-between items-center gap-6">
            {/* Cart Icon */}
            <button
              onClick={() => setOpenCart(true)}
              className="relative cursor-pointer hover:text-primary"
            >
              <PiShoppingCart size={25} />
              {/* Cart Count */}
              <span className="absolute -top-2 -right-3 bg-secondary text-white text-sm font-medium rounded-full h-5 w-5 flex justify-center items-center">
                0
              </span>
            </button>

            {/* User Icon */}
            <button className="cursor-pointer hover:text-primary">
              <RiUserLine size={25} />
            </button>
          </div>
        </nav>
        <div className="hidden text-lg font-medium sm:flex justify-evenly lg:justify-center lg:gap-40 items-center mx-auto h-12 sm:h-16 px-3 sm:px-6 py-2">
          <ul className="flex items-center gap-6">
            <li className="hover:border-b-2 hover:border-b-primary">
              <Link>Products</Link>
            </li>
            <li className="hover:border-b-2 hover:border-b-primary">
              <Link>Categories</Link>
            </li>
            <li className="hover:border-b-2 hover:border-b-primary">
              <Link>Best Seller</Link>
            </li>
          </ul>
          <ul className="flex items-center gap-6">
            <li className="hover:border-b-2 hover:border-b-primary">
              <Link>About Us</Link>
            </li>
            <li className="hover:border-b-2 hover:border-b-primary">
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <MobileNav openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
}
