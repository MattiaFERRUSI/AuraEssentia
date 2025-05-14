let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    cartItems.innerHTML += `<li>${item.name} - €${item.price.toFixed(2)} 
      <button onclick="removeFromCart(${index})">❌</button></li>`;
  });

  cartTotal.textContent = `Totale: €${total.toFixed(2)}`;
  localStorage.setItem("cart", JSON.stringify(cart));
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

document.addEventListener("DOMContentLoaded", updateCart);
