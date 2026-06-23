const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const sidebarClose = document.getElementById('sidebarClose');
const overlay = document.getElementById('overlay');
const cartButton = document.getElementById('cartButton');
const cartPanel = document.getElementById('cartPanel');
const cartClose = document.getElementById('cartClose');
const cartItemsList = document.getElementById('cartItems');
const cartItemCountText = document.getElementById('cartItemCount');
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');
const cartCount = document.querySelector('.cart-count');
const addCartButtons = document.querySelectorAll('.add-cart');

let cartItems = [];

function openPanel(panel) {
  panel.classList.add('active');
  overlay.classList.add('active');
}

function closePanels() {
  sidebar.classList.remove('active');
  cartPanel.classList.remove('active');
  overlay.classList.remove('active');
}

function updateCartDisplay() {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
  cartItemCountText.textContent = totalItems;

  cartItemsList.innerHTML = '';
  if (cartItems.length === 0) {
    const emptyNode = document.createElement('li');
    emptyNode.className = 'cart-empty';
    emptyNode.textContent = 'Your cart is empty.';
    cartItemsList.appendChild(emptyNode);
    return;
  }

  cartItems.forEach((item, index) => {
    const itemNode = document.createElement('li');
    itemNode.className = 'cart-item';

    const details = document.createElement('div');
    details.className = 'cart-item__details';

    const name = document.createElement('p');
    name.className = 'cart-item__name';
    name.textContent = item.name;

    const qty = document.createElement('p');
    qty.className = 'cart-item__qty';
    qty.textContent = `Quantity: ${item.quantity}`;

    details.appendChild(name);
    details.appendChild(qty);

    const removeButton = document.createElement('button');
    removeButton.className = 'cart-remove';
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      cartItems.splice(index, 1);
      updateCartDisplay();
    });

    itemNode.appendChild(details);
    itemNode.appendChild(removeButton);
    cartItemsList.appendChild(itemNode);
  });
}

menuToggle.addEventListener('click', () => {
  sidebar.classList.add('active');
  overlay.classList.add('active');
});

sidebarClose.addEventListener('click', closePanels);
cartClose.addEventListener('click', closePanels);

overlay.addEventListener('click', closePanels);

cartButton.addEventListener('click', () => {
  updateCartDisplay();
  openPanel(cartPanel);
});

searchButton.addEventListener('click', () => {
  alert(`Searching for: ${searchInput.value || 'all products'}`);
});

addCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const productName = button.dataset.product;
    const existing = cartItems.find((item) => item.name === productName);
    if (existing) {
      existing.quantity += 1;
    } else {
      cartItems.push({ name: productName, quantity: 1 });
    }

    updateCartDisplay();
    alert(`${productName} has been added to your cart.`);
  });
});
