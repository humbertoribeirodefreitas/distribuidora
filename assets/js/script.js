const cartItems = [];
const cartContainer = document.getElementById('cart-items');
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const product = button.getAttribute('data-product');
    if (!cartItems.includes(product)) {
      cartItems.push(product);
      updateCart();
    }
  });
});

function updateCart() {
  cartContainer.innerHTML = '';
  cartItems.forEach((item, index) => {
    const cartItemDiv = document.createElement('div');
    cartItemDiv.className = 'cart-item';
    cartItemDiv.innerHTML = `
      <span class="titulo">${item}</span>
      <button class="btn btn-danger btn-sm remove-from-cart" data-index="${index}">Remover</button>
    `;
    cartContainer.appendChild(cartItemDiv);
  });

 
  document.querySelectorAll('.remove-from-cart').forEach(button => {
    button.addEventListener('click', () => {
      const index = button.getAttribute('data-index');
      cartItems.splice(index, 1);
      updateCart();
    });
  });
}