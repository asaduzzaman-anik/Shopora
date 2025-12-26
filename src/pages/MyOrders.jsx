import { getUser } from "../utils/authUtils";

export default function MyOrders() {
  const user = getUser();
  const orders = JSON.parse(localStorage.getItem("shopora-orders")) || [];

  const myOrders = orders.filter((order) => order.userEmail === user?.email);

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-xl font-bold">Please login to view your orders</h1>
      </div>
    );
  }

  if (myOrders.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-xl font-bold">No orders found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>

      {myOrders.map((order) => (
        <div key={order.orderId} className="border rounded p-4 mb-4">
          <p className="font-semibold">Order ID: {order.orderId}</p>
          <p>Total: ${order.total.toFixed(2)}</p>
          <p>Date: {new Date(order.date).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
