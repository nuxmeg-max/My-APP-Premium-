// ============================================================
//  order.js — Render Produk, Order WA, Scroll Animation
// ============================================================

const INITIAL_SHOW = 4; // ← jumlah produk yang tampil di awal

document.addEventListener('DOMContentLoaded', () => {
  renderStore();
  initScrollAnimation();
});

// ── Render seluruh store ──────────────────────────────────────
function renderStore() {
  const section = document.getElementById('products');
  if (!section || typeof STORE_DATA === 'undefined') return;

  const { categories } = STORE_DATA;
  let html = `<div class="section-label">「 Katalog Produk 」</div>`;

  let cardIndex = 0;

  categories.forEach((cat) => {
    const catCards = cat.products.map((p) => {
      const hidden = cardIndex >= INITIAL_SHOW;
      const card = renderCard(p, cardIndex, hidden);
      cardIndex++;
      return card;
    }).join('');

    // Hitung apakah semua produk di kategori ini hidden
    const firstIndexInCat = cardIndex - cat.products.length;
    const allHidden = firstIndexInCat >= INITIAL_SHOW;

    html += `
      <div class="category-block${allHidden ? ' hidden-product' : ''}" data-cat-start="${firstIndexInCat}" data-cat-end="${cardIndex - 1}">
        <div class="category-header fade-up">
          <div class="category-name">${cat.category}</div>
          <div class="category-badge">${cat.badge}</div>
        </div>
        <div class="cards-grid">
          ${catCards}
        </div>
      </div>
    `;
  });

  // Total semua produk
  const totalProducts = cardIndex;

  // Show more button
  if (totalProducts > INITIAL_SHOW) {
    html += `
      <div class="showmore-wrap" id="showmore-wrap">
        <button class="showmore-btn" id="showmore-btn" onclick="toggleShowMore()">
          <span id="showmore-label">SHOW MORE PRODUCTS</span>
          <span id="showmore-icon">↓</span>
          <span class="showmore-count" id="showmore-count">+${totalProducts - INITIAL_SHOW} produk lainnya</span>
        </button>
      </div>
    `;
  }

  html += `
    <div class="coming-soon fade-up" id="coming-soon-el" style="display:none">
      <span>✦ &nbsp; Produk lainnya segera hadir &nbsp; ✦</span>
    </div>
  `;

  section.innerHTML = html;
}

// ── Render 1 Card ─────────────────────────────────────────────
function renderCard(product, index, hidden) {
  const descHTML = product.desc
    .map(d => `<div class="desc-item">${d}</div>`)
    .join('');
  const num = String(index + 1).padStart(2, '0');
  const hiddenClass = hidden ? ' hidden-product' : '';

  return `
    <div class="card fade-up${hiddenClass}" data-index="${index}" onclick="orderWA('${escapeAttr(product.waName)}')">
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

// ── Toggle Show More / Show Less ──────────────────────────────
let isExpanded = false;

function toggleShowMore() {
  isExpanded = !isExpanded;

  const label      = document.getElementById('showmore-label');
  const icon       = document.getElementById('showmore-icon');
  const count      = document.getElementById('showmore-count');
  const btn        = document.getElementById('showmore-btn');
  const comingSoon = document.getElementById('coming-soon-el');

  if (isExpanded) {
    // Tampilkan semua card dan category block
    document.querySelectorAll('.card.hidden-product').forEach((card, i) => {
      setTimeout(() => {
        card.classList.remove('hidden-product');
        card.classList.add('visible');
      }, i * 40);
    });
    document.querySelectorAll('.category-block.hidden-product').forEach((block) => {
      block.classList.remove('hidden-product');
    });

    label.textContent = 'SHOW LESS';
    icon.textContent  = '↑';
    count.textContent = '';
    btn.classList.add('expanded');
    if (comingSoon) comingSoon.style.display = 'block';

  } else {
    // Sembunyikan card dan category block yang di atas INITIAL_SHOW
    document.querySelectorAll('.card').forEach((card) => {
      const idx = parseInt(card.getAttribute('data-index'));
      if (idx >= INITIAL_SHOW) {
        card.classList.add('hidden-product');
        card.classList.remove('visible');
      }
    });

    document.querySelectorAll('.category-block').forEach((block) => {
      const start = parseInt(block.getAttribute('data-cat-start'));
      if (start >= INITIAL_SHOW) {
        block.classList.add('hidden-product');
      }
    });

    const totalCards = document.querySelectorAll('.card').length;
    label.textContent = 'SHOW MORE PRODUCTS';
    icon.textContent  = '↓';
    count.textContent = `+${totalCards - INITIAL_SHOW} produk lainnya`;
    btn.classList.remove('expanded');
    if (comingSoon) comingSoon.style.display = 'none';

    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  }
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

// ── Helper ────────────────────────────────────────────────────
function escapeAttr(str) {
  return str.replace(/'/g, "\\'");
}
