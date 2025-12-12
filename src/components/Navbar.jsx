import { React, useState } from "react";
import { PiShoppingCart } from "react-icons/pi";
import { RiMenuFold4Line, RiUserLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  return (
    <>
      {/* Nav  */}
      <nav className="fixed w-full bg-white shadow-md px-6 py-2 z-50 flex justify-between items-center">
        {/* Hamburger menu for mobile screen */}
        <div className="sm:hidden" onClick={() => setOpenMenu(true)}>
          <RiMenuFold4Line size={25} />
        </div>

        {/* Logo */}
        <Link to="/">
          <img src="./logo-desk.png" alt="" className="w-auto h-8 sm:h-12" />
        </Link>

        {/* Desktop Menus */}
        <div className="hidden text-xl font-medium sm:flex justify-between items-center gap-6">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Icons */}
        <div className="flex justify-between items-center gap-6">
          {/* Cart Icon */}
          <button
            onClick={() => setOpenCart(true)}
            className="relative cursor-pointer"
          >
            <PiShoppingCart size={25} />
            {/* Cart Count */}
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-sm font-medium rounded-full h-5 w-5 flex justify-center items-center">
              0
            </span>
          </button>
          <button className="cursor-pointer">
            <RiUserLine size={25} />
          </button>
        </div>
      </nav>
      <MobileNav openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
}
