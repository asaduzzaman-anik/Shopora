import { useEffect, useState } from "react";
import { getCart, clearCart } from "../utils/cartUtils";
import { useNavigate } from "react-router-dom";
import { generateOrderId, saveOrder } from "../utils/orderUtils";
import { getUser } from "../utils/authUtils";
import toast from "react-hot-toast";

export default function Checkout() {
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    phone: "",
    payment: "cod",
  });

  const navigate = useNavigate();

  useEffect(() => {
    setCart(getCart());
  }, []);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    const user = getUser();

    if (!user) {
      toast("Please login to place order");
      navigate("/login");
      return;
    }

    const orderId = generateOrderId();

    const order = {
      orderId,
      userEmail: user.email, // ✅ FIX
      customer: form,
      items: cart,
      total: totalPrice,
      date: new Date().toISOString(),
    };

    saveOrder(order);
    clearCart();
    window.dispatchEvent(new Event("storage"));

    navigate("/order-success", { state: { order } });
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center text-center">
        <h1 className="text-2xl font-bold">Your cart is empty 🛒</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT: FORM */}
        <form onSubmit={handlePlaceOrder} className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="border rounded px-4 py-2 w-full"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="border rounded px-4 py-2 w-full"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="border rounded px-4 py-2 w-full"
              />

              <input
                type="text"
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                required
                className="border rounded px-4 py-2 w-full"
              />
            </div>

            <textarea
              name="address"
              placeholder="Full Address"
              value={form.address}
              onChange={handleChange}
              required
              className="border rounded px-4 py-2 w-full mt-4"
              rows="4"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>

            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={form.payment === "cod"}
                  onChange={handleChange}
                />
                Cash on Delivery
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded hover:opacity-90 cursor-pointer"
          >
            Place Order
          </button>
        </form>

        {/* RIGHT: ORDER SUMMARY */}
        <div className="border rounded-lg p-6 h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <div className="space-y-3 mb-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>
                  {item.title} × {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <hr className="mb-4" />

          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
