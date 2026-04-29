// ============================================================
//  order.js — Render Produk, Order WA, Scroll Animation
//  File ini membaca data dari data/products.js dan
//  secara otomatis membangun halaman produk.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  renderStore();
  initScrollAnimation();
});

// ── Render seluruh store dari STORE_DATA ──────────────────────
function renderStore() {
  const section = document.getElementById('products');
  if (!section || typeof STORE_DATA === 'undefined') return;

  const { categories } = STORE_DATA;
  let html = `<div class="section-label">「 Katalog Produk 」</div>`;

  categories.forEach((cat, catIndex) => {
    html += `
      <div class="category-header fade-up">
        <div class="category-name">${cat.category}</div>
        <div class="category-badge">${cat.badge}</div>
      </div>
      <div class="cards-grid">
        ${cat.products.map((p, i) => renderCard(p, catIndex * 10 + i)).join('')}
      </div>
    `;
  });

  // Coming soon placeholder
  html += `
    <div class="coming-soon fade-up">
      <span>✦ &nbsp; Produk lainnya segera hadir &nbsp; ✦</span>
    </div>
  `;

  section.innerHTML = html;
}

// ── Render 1 Card ─────────────────────────────────────────────
function renderCard(product, index) {
  const descHTML = product.desc
    .map(d => `<div class="desc-item">${d}</div>`)
    .join('');

  const num = String(index + 1).padStart(2, '0');

  return `
    <div class="card fade-up" onclick="orderWA('${escapeAttr(product.waName)}')">
      <div class="card-top">
        <div class="card-icon">// ${num}</div>
        <div class="badge-pill">${product.badge}</div>
      </div>
      <div class="card-name">${product.name}</div>
      <div class="card-tag">${product.tag}</div>
      <div class="card-desc">${descHTML}</div>
      <div class="card-bottom">
        <div class="card-price">
          <small>IDR</small>
          ${product.price}
        </div>
        <button class="card-btn">ORDER →</button>
      </div>
    </div>
  `;
}

// ── WhatsApp Order ────────────────────────────────────────────
function orderWA(productName) {
  if (typeof STORE_DATA === 'undefined') return;
  const phone = STORE_DATA.whatsapp;
  const msg   = encodeURIComponent(`Buy ${productName}`);
  window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
}

// ── Scroll Fade-Up Animation ──────────────────────────────────
function initScrollAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger delay berdasarkan urutan elemen
        entry.target.style.transitionDelay = (i * 0.05) + 's';
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Observe semua .fade-up — termasuk yang di-render dinamis
  // Pakai MutationObserver supaya elemen dinamis juga ke-observe
  const mutationObs = new MutationObserver(() => {
    document.querySelectorAll('.fade-up:not([data-observed])').forEach((el) => {
      el.setAttribute('data-observed', '1');
      observer.observe(el);
    });
  });

  mutationObs.observe(document.body, { childList: true, subtree: true });

  // Observe elemen yang sudah ada di DOM
  document.querySelectorAll('.fade-up').forEach((el) => {
    el.setAttribute('data-observed', '1');
    observer.observe(el);
  });
}

// ── Helper: escape string buat HTML attribute ─────────────────
function escapeAttr(str) {
  return str.replace(/'/g, '\\\'');
}
