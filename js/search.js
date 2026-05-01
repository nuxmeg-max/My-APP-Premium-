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
    // Reset ke state awal berdasarkan isExpanded
    allCards.forEach(card => {
      const idx = parseInt(card.getAttribute('data-index'));
      card.style.display = (idx >= INITIAL_SHOW && !isExpanded) ? 'none' : '';
    });
    allBlocks.forEach(block => {
      const start = parseInt(block.getAttribute('data-cat-start'));
      block.style.display = (start >= INITIAL_SHOW && !isExpanded) ? 'none' : '';
    });
    if (showmoreWrap) showmoreWrap.style.display = '';
    if (countEl) countEl.textContent = '';
    return;
  }

  // Search aktif — sembunyikan showmore
  if (showmoreWrap) showmoreWrap.style.display = 'none';

  // Tampilkan semua dulu
  allCards.forEach(card  => card.style.display  = '');
  allBlocks.forEach(block => block.style.display = '');

  // Filter per block
  allBlocks.forEach(block => {
    const cards = block.querySelectorAll('.card');
    let visibleInBlock = 0;

    cards.forEach(card => {
      const text = [
        card.querySelector('.card-name')?.textContent      || '',
        card.querySelector('.card-tag')?.textContent       || '',
        card.querySelector('.badge-pill')?.textContent     || '',
        card.querySelector('.card-desc')?.textContent      || '',
        block.querySelector('.category-name')?.textContent || '',
      ].join(' ').toLowerCase();

      if (text.includes(query)) {
        card.style.display = '';
        visibleInBlock++;
        totalVisible++;
      } else {
        card.style.display = 'none';
      }
    });

    block.style.display = visibleInBlock === 0 ? 'none' : '';
  });

  if (!countEl) return;
  countEl.textContent = totalVisible === 0
    ? '✕ Tidak ada produk yang cocok'
    : `✦ ${totalVisible} produk ditemukan`;
}
