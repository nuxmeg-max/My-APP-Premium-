// ===== CONFIG =====
let visibleProducts = 6;
let showAll = false;

const container = document.getElementById("products-container");
const showMoreWrapper = document.getElementById("show-more-wrapper");

// ===== CREATE CARD =====
function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <h3>${product.name}</h3>
    <span class="price">${product.price}</span>
    <ul>
      ${product.desc.map(d => `<li>${d}</li>`).join("")}
    </ul>
    <button onclick="orderProduct('${product.waName}')">
      Order via WhatsApp
    </button>
  `;

  return card;
}

// ===== RENDER PRODUCTS =====
function renderProducts() {
  container.innerHTML = "";

  const list = showAll ? products : products.slice(0, visibleProducts);

  list.forEach(product => {
    container.appendChild(createProductCard(product));
  });

  renderShowMoreButton();
}

// ===== SHOW MORE BUTTON =====
function renderShowMoreButton() {
  showMoreWrapper.innerHTML = "";

  if (products.length <= visibleProducts) return;

  const btn = document.createElement("button");
  btn.className = "show-more-btn";
  btn.textContent = showAll ? "Show Less Products" : "Show More Products";

  btn.onclick = () => {
    showAll = !showAll;
    renderProducts();
    document.getElementById("products").scrollIntoView({behavior:"smooth"});
  };

  showMoreWrapper.appendChild(btn);
}

// ===== ORDER WHATSAPP =====
function orderProduct(productName) {
  const phone = whatsapp;
  const text = `Halo kak, saya mau order:\n${productName}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`);
}

// ===== INIT =====
renderProducts();
