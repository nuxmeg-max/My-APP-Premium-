// ============================================================
//  search.js — Search & Filter Produk
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(initSearch, 100);
});

function initSearch() {
  const input    = document.getElementById('search-input');
  const clearBtn = document.getElementById('search-clear');
  const countEl  = document.getElementById('search-count');

  if (!input) return;

  input.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();
    clearBtn.classList.toggle('visible', query.length > 0);
    filterProducts(query, countEl);
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    clearBtn.classList.remove('visible');
    filterProducts('', countEl);
    input.focus();
  });
}

function filterProducts(query, countEl) {
  const allCards     = document.querySelectorAll('.card');
  const allBlocks    = document.querySelectorAll('.category-block');
  const showmoreWrap = document.getElementById('showmore-wrap');
  let totalVisible   = 0;

  if (query === '') {
    // ── Reset ke state awal ──
    allCards.forEach((card) => {
      const idx = parseInt(card.getAttribute('data-index'));
      if (idx >= INITIAL_SHOW && !isExpanded) {
        card.classList.add('hidden-product');
      } else {
        card.classList.remove('hidden-product');
      }
    });

    allBlocks.forEach((block) => {
      const start = parseInt(block.getAttribute('data-cat-start'));
      if (start >= INITIAL_SHOW && !isExpanded) {
        block.classList.add('hidden-product');
      } else {
        block.classList.remove('hidden-product');
      }
    });

    if (showmoreWrap) showmoreWrap.style.display = '';
    if (countEl) countEl.textContent = '';
    return;
  }

  // ── Search aktif ──
  // Sembunyikan showmore button
  if (showmoreWrap) showmoreWrap.style.display = 'none';

  // Tampilkan semua block dan card dulu sebelum filter
  allBlocks.forEach(block => {
    block.classList.remove('hidden-product');
    block.style.display = '';
  });
  allCards.forEach(card => {
    card.classList.remove('hidden-product');
    card.style.display = '';
  });

  // Filter per category block
  allBlocks.forEach((block) => {
    const cards = block.querySelectorAll('.card');
    let visibleInBlock = 0;

    cards.forEach((card) => {
      const cardText = [
        card.querySelector('.card-name')?.textContent        || '',
        card.querySelector('.card-tag')?.textContent         || '',
        card.querySelector('.badge-pill')?.textContent       || '',
        card.querySelector('.card-desc')?.textContent        || '',
        block.querySelector('.category-name')?.textContent   || '',
      ].join(' ').toLowerCase();

      const match = cardText.includes(query);
      if (!match) {
        card.classList.add('hidden-product');
        card.style.display = 'none';
      } else {
        visibleInBlock++;
        totalVisible++;
      }
    });

    // Sembunyikan seluruh block kalau tidak ada yang cocok
    if (visibleInBlock === 0) {
      block.classList.add('hidden-product');
      block.style.display = 'none';
    }
  });

  if (!countEl) return;
  if (totalVisible === 0) countEl.textContent = '✕ Tidak ada produk yang cocok';
  else countEl.textContent = `✦ ${totalVisible} produk ditemukan`;
}
