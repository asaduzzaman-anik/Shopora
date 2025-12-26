export function generateOrderId() {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const random = Math.floor(100000 + Math.random() * 900000);
  return `SHOPORA-${date}-${random}`;
}

export function saveOrder(order) {
  const orders = JSON.parse(localStorage.getItem("shopora-orders")) || [];
  orders.push(order);
  localStorage.setItem("shopora-orders", JSON.stringify(orders));
}
