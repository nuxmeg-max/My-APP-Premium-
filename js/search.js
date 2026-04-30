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
  const categoryBlocks = document.querySelectorAll('.category-block');
  let totalVisible = 0;

  categoryBlocks.forEach(block => {
    const cards = block.querySelectorAll('.card');
    let visibleInBlock = 0;

    cards.forEach(card => {
      const catName  = block.querySelector('.category-name')?.textContent.toLowerCase() || '';
      const cardText = [
        card.querySelector('.card-name')?.textContent  || '',
        card.querySelector('.card-tag')?.textContent   || '',
        card.querySelector('.badge-pill')?.textContent || '',
        card.querySelector('.card-desc')?.textContent  || '',
        catName,
      ].join(' ').toLowerCase();

      const match = query === '' || cardText.includes(query);
      card.classList.toggle('hidden', !match);
      if (match) { visibleInBlock++; totalVisible++; }
    });

    block.classList.toggle('hidden', visibleInBlock === 0 && query !== '');
  });

  if (!countEl) return;
  if (query === '')          countEl.textContent = '';
  else if (totalVisible === 0) countEl.textContent = '✕ Tidak ada produk yang cocok';
  else                       countEl.textContent = `✦ ${totalVisible} produk ditemukan`;
}
