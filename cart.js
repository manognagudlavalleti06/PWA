function addToCart(product, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ product, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product} added to cart 🛒`);
}
