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
  const allCards      = document.querySelectorAll('.card');
  const showmoreWrap  = document.querySelector('.showmore-wrap');
  let totalVisible    = 0;

  if (query === '') {
    // Reset ke state awal
    allCards.forEach((card, i) => {
      if (i >= INITIAL_SHOW && !isExpanded) {
        card.classList.add('hidden-product');
      } else {
        card.classList.remove('hidden-product');
      }
    });
    if (showmoreWrap) showmoreWrap.style.display = '';
    if (countEl) countEl.textContent = '';
    return;
  }

  // Saat search aktif, tampilkan semua dan filter
  if (showmoreWrap) showmoreWrap.style.display = 'none';

  allCards.forEach(card => {
    const cardText = [
      card.querySelector('.card-name')?.textContent  || '',
      card.querySelector('.card-tag')?.textContent   || '',
      card.querySelector('.badge-pill')?.textContent || '',
      card.querySelector('.card-desc')?.textContent  || '',
    ].join(' ').toLowerCase();

    const match = cardText.includes(query);
    card.classList.toggle('hidden-product', !match);
    if (match) totalVisible++;
  });

  if (!countEl) return;
  if (totalVisible === 0) countEl.textContent = '✕ Tidak ada produk yang cocok';
  else countEl.textContent = `✦ ${totalVisible} produk ditemukan`;
}
