export function getCart() {
  const cart = localStorage.getItem("shopora-cart");
  return cart ? JSON.parse(cart) : [];
}

export function addToCart(product, quantity = 1) {
  const cart = getCart();

  const existingItem = cart.find((item) => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
      quantity,
    });
  }
  localStorage.setItem("shopora-cart", JSON.stringify(cart));
  window.dispatchEvent(new Event("storage"));
}

export function getCartCount() {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.quantity, 0);
}
