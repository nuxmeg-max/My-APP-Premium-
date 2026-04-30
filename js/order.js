/* =====================================================
   KYYSTORE MAIN ORDER SCRIPT + SHOW MORE FEATURE
===================================================== */

// ===============================
// SHOW MORE CONFIG
// ===============================
let SHOW_ALL = false;
const INITIAL_PER_CATEGORY = 4;


// ===============================
// RENDER 1 PRODUCT CARD
// ===============================
function renderCard(p, index) {
  return `
    <div class="card fade-up" style="transition-delay:${index * 0.05}s">
      
      <div class="card-title">${p.name}</div>
      <div class="card-price">${p.price}</div>

      <ul class="card-features">
        ${p.features.map(f => `<li>${f}</li>`).join("")}
      </ul>

      <button class="card-btn" onclick="orderWA('${p.wa}')">
        ORDER VIA WHATSAPP
      </button>

    </div>
  `;
}


// ===============================
// RENDER STORE (KATEGORI + PRODUK)
// ===============================
function renderStore() {
  const section = document.getElementById('products');
  if (!section || typeof STORE_DATA === 'undefined') return;

  const { categories } = STORE_DATA;

  let html = `<div class="section-label">「 Katalog Produk 」</div>`;

  categories.forEach((cat, catIndex) => {

    // 🔥 LOGIC SHOW MORE
    const productsToShow = SHOW_ALL
      ? cat.products
      : cat.products.slice(0, INITIAL_PER_CATEGORY);

    html += `
      <div class="category-block">
        
        <div class="category-header fade-up">
          <div class="category-name">${cat.category}</div>
          <div class="category-badge">${cat.badge}</div>
        </div>

        <div class="cards-grid">
          ${productsToShow.map((p, i) =>
            renderCard(p, catIndex * 100 + i)
          ).join('')}
        </div>

      </div>
    `;
  });

  // ===============================
  // BUTTON SHOW MORE GLOBAL
  // ===============================
  html += `
    <div class="show-more-wrap fade-up">
      <button class="show-more-btn" onclick="toggleShowProducts()">
        ${SHOW_ALL ? 'Show Less Products' : 'Show More Products'}
      </button>
    </div>
  `;

  // coming soon text tetap
  html += `
    <div class="coming-soon fade-up">
      <span>✦ &nbsp; Produk lainnya segera hadir &nbsp; ✦</span>
    </div>
  `;

  section.innerHTML = html;
}


// ===============================
// TOGGLE SHOW MORE
// ===============================
function toggleShowProducts() {
  SHOW_ALL = !SHOW_ALL;
  renderStore();

  const top = document.getElementById('products').offsetTop - 80;
  window.scrollTo({ top: top, behavior: "smooth" });
}


// ===============================
// ORDER VIA WHATSAPP
// ===============================
function orderWA(productName) {
  const phone = STORE_DATA.whatsapp;
  const message = `Halo kak, saya mau order:\n${productName}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}


// ===============================
// SCROLL ANIMATION
// ===============================
function initScrollAnimation() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));
}


// ===============================
// INIT WEBSITE
// ===============================
document.addEventListener('DOMContentLoaded', () => {
  renderStore();
  initScrollAnimation();
});
