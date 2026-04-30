// ============================================================
//  order.js — Render Produk, Order WA, Scroll Animation
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  renderStore();
  initScrollAnimation();
});

function renderStore() {
  const section = document.getElementById('products');
  if (!section || typeof STORE_DATA === 'undefined') return;

  const { categories } = STORE_DATA;
  let html = `<div class="section-label">「 Katalog Produk 」</div>`;

  categories.forEach((cat, catIndex) => {
    html += `
      <div class="category-block">
        <div class="category-header fade-up">
          <div class="category-name">${cat.category}</div>
          <div class="category-badge">${cat.badge}</div>
        </div>
        <div class="cards-grid">
          ${cat.products.map((p, i) => renderCard(p, catIndex * 10 + i)).join('')}
        </div>
      </div>
    `;
  });

  html += `
    <div class="coming-soon fade-up">
      <span>✦ &nbsp; Produk lainnya segera hadir &nbsp; ✦</span>
    </div>
  `;

  section.innerHTML = html;
}

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

function orderWA(productName) {
  if (typeof STORE_DATA === 'undefined') return;
  const phone = STORE_DATA.whatsapp;
  const msg   = encodeURIComponent(`Buy ${productName}`);
  window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
}

function initScrollAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  const mutationObs = new MutationObserver(() => {
    document.querySelectorAll('.fade-up:not([data-observed])').forEach((el, i) => {
      el.setAttribute('data-observed', '1');
      el.style.transitionDelay = (i * 0.04) + 's';
      observer.observe(el);
    });
  });

  mutationObs.observe(document.body, { childList: true, subtree: true });

  document.querySelectorAll('.fade-up').forEach((el, i) => {
    el.setAttribute('data-observed', '1');
    el.style.transitionDelay = (i * 0.04) + 's';
    observer.observe(el);
  });
}

function escapeAttr(str) {
  return str.replace(/'/g, "\\'");
}
