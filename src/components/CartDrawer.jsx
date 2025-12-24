import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCart, removeFromCart, updateQuantity } from "../utils/cartUtils";
import { MdDelete } from "react-icons/md";

export default function CartDrawer({ openCart, setOpenCart }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (openCart) {
      setCart(getCart());
    }
  }, [openCart]);

  const handleRemove = (id) => {
    removeFromCart(id);
    setCart(getCart());
    window.dispatchEvent(new Event("storage"));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* Overlay */}
      {openCart && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpenCart(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-90 bg-white z-50 shadow-lg
        transform transition-transform duration-300
        ${openCart ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button
            onClick={() => setOpenCart(false)}
            className="text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-180px)]">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center">
              <img
                src="empty-cart.png"
                alt="cart-empty"
                className="h-30 w-30"
              />
              <p className="text-gray-500 text-center mt-10">
                Uh-Oh! Your cart is empty
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 border rounded p-3 items-start"
              >
                {/* Product Image */}
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded bg-gray-200"
                />

                {/* Product Info */}
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{item.title}</h3>

                  {/* Price */}
                  <p className="text-sm text-gray-600">${item.price}</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 mt-2 bg-gray-200 rounded-full w-fit">
                    <button
                      onClick={() => {
                        updateQuantity(item.id, "dec");
                        setCart(getCart());
                      }}
                      className="px-2 py-1 cursor-pointer"
                    >
                      −
                    </button>

                    <span className="text-sm font-semibold w-6 text-center">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => {
                        updateQuantity(item.id, "inc");
                        setCart(getCart());
                      }}
                      className="px-2 py-1 cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal */}
                  <p className="text-sm font-medium mt-2">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                {/* Remove */}
                <button
                  onClick={() => handleRemove(item.id)}
                  className="font-bold text-lg cursor-pointer"
                >
                  <MdDelete />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t">
          <div className="flex justify-between font-semibold mb-4">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <Link
            to="/cart"
            onClick={() => setOpenCart(false)}
            className="block text-center bg-black text-white py-3 rounded hover:opacity-90"
          >
            View Cart
          </Link>

          {/* <Link
            to="/checkout"
            onClick={() => setOpenCart(false)}
            className="block text-center bg-black text-white py-3 rounded hover:opacity-90"
          >
            Checkout
          </Link> */}
        </div>
      </div>
    </>
  );
}
