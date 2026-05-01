// ============================================================
//  order.js — Render Produk, Order WA, Scroll Animation
// ============================================================

const INITIAL_SHOW = 4;

document.addEventListener('DOMContentLoaded', () => {
  renderStore();
  initBottomSheet();
  initScrollAnimation();
});

function renderStore() {
  const section = document.getElementById('products');
  if (!section || typeof STORE_DATA === 'undefined') return;

  const { categories } = STORE_DATA;
  let html = `<div class="section-label">「 Katalog Produk 」</div>`;

  let cardIndex = 0;

  categories.forEach((cat) => {
    const firstIndexInCat = cardIndex;

    const catCards = cat.products.map((p) => {
      const card = renderCard(p, cardIndex, cat.category);
      cardIndex++;
      return card;
    }).join('');

    const allHidden = firstIndexInCat >= INITIAL_SHOW;

    html += `
      <div class="category-block"
           data-cat-start="${firstIndexInCat}"
           data-cat-end="${cardIndex - 1}"
           style="${allHidden ? 'display:none' : ''}">
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

  const totalProducts = cardIndex;

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
  setTimeout(fixOddCard, 100);
}

function renderCard(product, index, catName) {
  const descHTML = product.desc
    .map(d => `<div class="desc-item">${d}</div>`)
    .join('');
  const num    = String(index + 1).padStart(2, '0');
  const hidden = index >= INITIAL_SHOW ? 'style="display:none"' : '';

  // Encode product data untuk bottom sheet
  const productData = encodeURIComponent(JSON.stringify({
    name:    product.name,
    tag:     product.tag,
    badge:   product.badge,
    price:   product.price,
    desc:    product.desc,
    waName:  product.waName,
    catName: catName,
  }));

  return `
    <div class="card fade-up" data-index="${index}" ${hidden} onclick="openSheet('${productData}')">
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
        <button class="card-btn">LIHAT →</button>
      </div>
    </div>
  `;
}

// ── Bottom Sheet ──────────────────────────────────────────────
function initBottomSheet() {
  // Inject HTML bottom sheet ke body
  const sheet = document.createElement('div');
  sheet.innerHTML = `
    <div class="sheet-overlay" id="sheet-overlay" onclick="closeSheet()"></div>
    <div class="sheet" id="sheet">
      <div class="sheet-handle"></div>
      <div class="sheet-header">
        <button class="sheet-back" onclick="closeSheet()">← BACK</button>
        <div class="sheet-header-badge" id="sheet-badge"></div>
      </div>
      <div class="sheet-body">
        <div class="sheet-cat"     id="sheet-cat"></div>
        <div class="sheet-name"    id="sheet-name"></div>
        <div class="sheet-tag"     id="sheet-tag"></div>
        <div class="sheet-divider"></div>
        <div class="sheet-desc"    id="sheet-desc"></div>
        <div class="sheet-divider"></div>
        <div class="sheet-price-wrap">
          <div class="sheet-price">
            <small>IDR</small>
            <span id="sheet-price"></span>
          </div>
        </div>
        <button class="sheet-order-btn" id="sheet-order-btn">
          ORDER VIA WHATSAPP →
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(sheet);
}

function openSheet(encodedData) {
  const p = JSON.parse(decodeURIComponent(encodedData));

  document.getElementById('sheet-badge').textContent = p.badge;
  document.getElementById('sheet-cat').textContent   = p.catName;
  document.getElementById('sheet-name').textContent  = p.name;
  document.getElementById('sheet-tag').textContent   = p.tag;
  document.getElementById('sheet-price').textContent = p.price;

  const descEl = document.getElementById('sheet-desc');
  descEl.innerHTML = p.desc.map(d => `<div class="sheet-desc-item">${d}</div>`).join('');

  document.getElementById('sheet-order-btn').onclick = () => orderWA(p.waName);

  document.getElementById('sheet-overlay').classList.add('active');
  document.getElementById('sheet').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSheet() {
  document.getElementById('sheet-overlay').classList.remove('active');
  document.getElementById('sheet').classList.remove('active');
  document.body.style.overflow = '';
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
    document.querySelectorAll('.card').forEach((card) => {
      const idx = parseInt(card.getAttribute('data-index'));
      if (idx >= INITIAL_SHOW) {
        setTimeout(() => { card.style.display = ''; fixOddCard(); }, (idx - INITIAL_SHOW) * 40);
      }
    });
    document.querySelectorAll('.category-block').forEach(block => {
      block.style.display = '';
    });

    label.textContent = 'SHOW LESS';
    icon.textContent  = '↑';
    count.textContent = '';
    btn.classList.add('expanded');
    if (comingSoon) comingSoon.style.display = 'block';
    setTimeout(fixOddCard, 400);

  } else {
    document.querySelectorAll('.card').forEach(card => {
      const idx = parseInt(card.getAttribute('data-index'));
      if (idx >= INITIAL_SHOW) card.style.display = 'none';
    });
    document.querySelectorAll('.category-block').forEach(block => {
      const start = parseInt(block.getAttribute('data-cat-start'));
      if (start >= INITIAL_SHOW) block.style.display = 'none';
    });

    const totalCards = document.querySelectorAll('.card').length;
    label.textContent = 'SHOW MORE PRODUCTS';
    icon.textContent  = '↓';
    count.textContent = `+${totalCards - INITIAL_SHOW} produk lainnya`;
    btn.classList.remove('expanded');
    if (comingSoon) comingSoon.style.display = 'none';
    setTimeout(fixOddCard, 100);

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

// ── Fix kotak kosong card ganjil ──────────────────────────────
function fixOddCard() {
  document.querySelectorAll('.cards-grid').forEach(grid => {
    const allCards = [...grid.querySelectorAll('.card')];

    // Reset semua dulu
    allCards.forEach(card => {
      card.style.gridColumn = '';
      card.style.maxWidth   = '';
    });

    // Filter yang benar-benar visible
    const visibleCards = allCards.filter(card => {
      const s = window.getComputedStyle(card);
      return s.display !== 'none';
    });

    if (visibleCards.length > 0 && visibleCards.length % 2 !== 0) {
      const last = visibleCards[visibleCards.length - 1];
      last.style.gridColumn = '1 / -1';
      last.style.maxWidth   = '50%';
    }
  });
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
