import { Link } from "react-router-dom";

export default function MobileNav({ openMenu, setOpenMenu }) {
  return (
    <div>
      {/* Sidebar Backdrop */}
      {openMenu && (
        <div
          className="fixed inset-0 bg-black/50 z-50"
          onClick={() => setOpenMenu(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col p-5 gap-6">
          <Link to="/" onClick={() => setOpenMenu(false)}>
            Home
          </Link>
          <Link to="/products" onClick={() => setOpenMenu(false)}>
            Products
          </Link>
          <Link to="/about" onClick={() => setOpenMenu(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setOpenMenu(false)}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
