import { getUser, logoutUser } from "../utils/authUtils";
import { Link, useNavigate } from "react-router-dom";

export default function Profile() {
  const user = getUser();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-xl font-bold">Please login to view your profile</h1>
      </div>
    );
  }

  const orders = JSON.parse(localStorage.getItem("shopora-orders")) || [];

  const myOrders = orders.filter((order) => order.userEmail === user.email);

  const totalSpent = myOrders.reduce((sum, order) => sum + order.total, 0);

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* LEFT: USER INFO */}
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Account Information</h2>

          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Email:</span> {user.email}
          </p>

          <button
            onClick={handleLogout}
            className="mt-4 bg-black text-white px-4 py-2 rounded hover:opacity-90"
          >
            Logout
          </button>
        </div>

        {/* RIGHT: STATS */}
        <div className="md:col-span-2 border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="border rounded p-4 text-center">
              <p className="text-2xl font-bold">{myOrders.length}</p>
              <p className="text-gray-600">Orders</p>
            </div>

            <div className="border rounded p-4 text-center">
              <p className="text-2xl font-bold">${totalSpent.toFixed(2)}</p>
              <p className="text-gray-600">Total Spent</p>
            </div>

            <div className="border rounded p-4 text-center">
              <p className="text-2xl font-bold">Active</p>
              <p className="text-gray-600">Account Status</p>
            </div>
          </div>

          <Link
            to="/my-orders"
            className="inline-block bg-black text-white px-6 py-3 rounded hover:opacity-90"
          >
            View My Orders
          </Link>
        </div>
      </div>
    </div>
  );
}
