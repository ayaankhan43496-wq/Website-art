const searchBar = document.getElementById('searchBar');
const products = document.querySelectorAll('.product');
const categoryButtons = document.querySelectorAll('.category');
const cartCount = document.getElementById('cart-count');
let cart = 0;

searchBar.addEventListener('input', () => {
  const searchValue = searchBar.value.toLowerCase();
  products.forEach(product => {
    const name = product.querySelector('h3').innerText.toLowerCase();
    product.style.display = name.includes(searchValue) ? 'block' : 'none';
  });
});

categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.category;
    products.forEach(p => {
      if (category === 'all' || p.dataset.category === category) {
        p.style.display = 'block';
      } else {
        p.style.display = 'none';
      }
    });
  });
});

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    cart++;
    cartCount.textContent = cart;
    alert('Item added to cart!');
  });
});

document.querySelectorAll('.buy-now').forEach(button => {
  button.addEventListener('click', () => {
    alert('Redirecting to checkout page (you can link your payment page here).');
  });
});