// ====== CONFIG ======
let visibleProducts = 6; // jumlah produk tampil awal
let showAll = false;

// ambil container
const container = document.getElementById("products-container");
const showMoreWrapper = document.getElementById("show-more-wrapper");

// ====== CREATE PRODUCT CARD ======
function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <h3>${product.name}</h3>
    <p class="price">${product.price}</p>
    <ul>
      ${product.desc.map(d => `<li>${d}</li>`).join("")}
    </ul>
    <button onclick="orderProduct('${product.waName}')">
      Order via WhatsApp
    </button>
  `;

  return card;
}

// ====== RENDER PRODUCTS ======
function renderProducts() {
  container.innerHTML = "";

  const productsToShow = showAll
    ? products
    : products.slice(0, visibleProducts);

  productsToShow.forEach(product => {
    const card = createProductCard(product);
    container.appendChild(card);
  });

  renderShowMoreButton();
}

// ====== SHOW MORE BUTTON ======
function renderShowMoreButton() {
  showMoreWrapper.innerHTML = "";

  // kalau produk sedikit, tombol tidak muncul
  if (products.length <= visibleProducts) return;

  const btn = document.createElement("button");
  btn.className = "show-more-btn";
  btn.innerText = showAll ? "Show Less Products" : "Show More Products";

  btn.onclick = () => {
    showAll = !showAll;
    renderProducts();

    // scroll ke area produk biar smooth UX
    container.scrollIntoView({ behavior: "smooth" });
  };

  showMoreWrapper.appendChild(btn);
}

// ====== WHATSAPP ORDER ======
function orderProduct(productName) {
  const phone = whatsapp; // dari products.js
  const message = `Halo kak, saya mau order:\n${productName}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// ====== INIT ======
renderProducts();
