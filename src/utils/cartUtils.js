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

export function removeFromCart(id) {
  const cart = getCart().filter((item) => item.id !== id);
  localStorage.setItem("shopora-cart", JSON.stringify(cart));
}

export function clearCart() {
  localStorage.removeItem("shopora-cart");
}

export function updateQuantity(id, type) {
  const cart = getCart();

  const updatedCart = cart.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        quantity:
          type === "inc" ? item.quantity + 1 : Math.max(1, item.quantity - 1),
      };
    }
    return item;
  });

  localStorage.setItem("shopora-cart", JSON.stringify(updatedCart));
  window.dispatchEvent(new Event("storage"));
}
