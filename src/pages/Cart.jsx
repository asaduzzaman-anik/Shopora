import { useEffect, useState } from "react";
import {
  getCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../utils/cartUtils";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());

    const handleStorage = () => {
      setCart(getCart());
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="empty cart"
          className="w-40 mb-6 opacity-80"
        />
        <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
        <Link
          to="/products"
          className="bg-black text-white px-6 py-3 rounded hover:opacity-90"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT: CART ITEMS */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4 border rounded-lg p-4">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-24 h-24 object-cover rounded bg-gray-200"
              />

              <div className="flex-1">
                <h2 className="font-semibold text-lg">{item.title}</h2>

                <p className="text-gray-600 mb-2">${item.price}</p>

                {/* Quantity */}
                <div className="flex items-center gap-3 bg-gray-200 rounded-full w-fit">
                  <button
                    onClick={() => {
                      updateQuantity(item.id, "dec");
                      setCart(getCart());
                    }}
                    className="px-3 py-1 cursor-pointer"
                  >
                    −
                  </button>

                  <span className="font-semibold">{item.quantity}</span>

                  <button
                    onClick={() => {
                      updateQuantity(item.id, "inc");
                      setCart(getCart());
                    }}
                    className="px-3 py-1 cursor-pointer"
                  >
                    +
                  </button>
                </div>

                <p className="mt-2 font-medium">
                  Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              <button
                onClick={() => {
                  removeFromCart(item.id);
                  setCart(getCart());
                }}
                className="text-red-500 text-xl font-bold"
              >
                ×
              </button>
            </div>
          ))}

          <button
            onClick={() => {
              clearCart();
              setCart([]);
              window.dispatchEvent(new Event("storage"));
            }}
            className="text-red-600 font-semibold mt-4"
          >
            Clear Cart
          </button>
        </div>

        {/* RIGHT: SUMMARY */}
        <div className="border rounded-lg p-6 h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <div className="flex justify-between font-medium border-b mb-2">
            <span>Items</span>
            <div className="w-[40%] flex justify-between gap-3">
              <span>Quantity</span>
              <span>Sub-Total</span>
            </div>
          </div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between font-medium mb-2"
            >
              <span className="text-wrap max-w-[60%]">{item.title}</span>
              <div className="w-[40%] flex justify-between gap-3">
                <span>{item.quantity}</span>
                <span>{item.price * item.quantity}</span>
              </div>
            </div>
          ))}

          <div className="flex justify-between border-t mb-4 font-semibold">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <Link
            to="/checkout"
            className="block text-center bg-black text-white py-3 rounded hover:opacity-90"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
