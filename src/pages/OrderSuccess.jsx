import { Link, useLocation } from "react-router-dom";
import { PiCheckCircleBold } from "react-icons/pi";
import jsPDF from "jspdf";

export default function OrderSuccess() {
  const { state } = useLocation();
  const order = state?.order;

  const downloadInvoice = () => {
    if (!order) return;

    const doc = new jsPDF();
    let y = 20;

    doc.setFontSize(18);
    doc.text("Shopora Invoice", 20, y);
    y += 10;

    doc.setFontSize(12);
    doc.text(`Order ID: ${order.orderId}`, 20, y);
    y += 8;

    doc.text(`Date: ${new Date(order.date).toLocaleString()}`, 20, y);
    y += 10;

    doc.text("Customer Details:", 20, y);
    y += 8;
    doc.text(`Name: ${order.customer.name}`, 20, y);
    y += 6;
    doc.text(`Email: ${order.customer.email}`, 20, y);
    y += 6;
    doc.text(`Phone: ${order.customer.phone}`, 20, y);
    y += 6;
    doc.text(
      `Address: ${order.customer.address}, ${order.customer.city}`,
      20,
      y
    );
    y += 10;

    doc.text("Order Items:", 20, y);
    y += 8;

    order.items.forEach((item) => {
      doc.text(
        `${item.title}  x${item.quantity}  -  $${(
          item.price * item.quantity
        ).toFixed(2)}`,
        20,
        y
      );
      y += 6;
    });

    y += 10;
    doc.text(`Total Amount: $${order.total.toFixed(2)}`, 20, y);

    doc.save(`Invoice-${order.orderId}.pdf`);
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4">
      <div className="text-center max-w-md">
        <PiCheckCircleBold size={90} className="mx-auto text-green-500 mb-6" />

        <h1 className="text-3xl font-bold mb-2">Order Placed Successfully!</h1>

        {order && (
          <p className="text-gray-600 mb-2">
            Order ID: <span className="font-semibold">{order.orderId}</span>
          </p>
        )}

        <p className="text-gray-600 mb-8">
          Thank you for shopping with <strong>Shopora</strong>.
        </p>

        <div className="flex flex-col gap-4">
          <button
            onClick={downloadInvoice}
            className="bg-black text-white px-6 py-3 rounded hover:opacity-90"
          >
            Download Invoice (PDF)
          </button>

          <Link
            to="/products"
            className="border border-black px-6 py-3 rounded hover:bg-black hover:text-white"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
