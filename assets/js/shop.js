/* ==========================================================================
   DJILEN — shop page: filter, sort, render
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.product-grid');
  const deptChips = document.querySelectorAll('[data-filter-dept]');
  const typeChips = document.querySelectorAll('[data-filter-type]');
  const sortSelect = document.querySelector('.sort-select');
  const countEl = document.querySelector('.filter-count');
  const pageTitle = document.querySelector('[data-shop-title]');
  const pageDesc = document.querySelector('[data-shop-desc]');

  if(!grid) return;

  const params = new URLSearchParams(location.search);
  let state = {
    dept: params.get('dept') || 'all',
    type: params.get('type') || 'all',
    sort: 'featured',
  };

  function syncChips(){
    deptChips.forEach(c => c.classList.toggle('active', c.dataset.filterDept === state.dept));
    typeChips.forEach(c => c.classList.toggle('active', c.dataset.filterType === state.type));
  }

  function syncHeading(){
    const deptLabel = DJILEN_DEPTS.find(d => d.id === state.dept);
    const typeLabel = DJILEN_TYPES.find(t => t.id === state.type);
    let title = 'The Origin Collection';
    if(deptLabel && typeLabel) title = `${deptLabel.label} — ${typeLabel.label}`;
    else if(deptLabel) title = deptLabel.label;
    else if(typeLabel) title = typeLabel.label;
    if(pageTitle) pageTitle.textContent = title;
    if(pageDesc){
      pageDesc.textContent = state.dept === 'all' && state.type === 'all'
        ? 'Every piece in the DJILEN archive — jackets, fleece, tees, and accessories built for the road ahead.'
        : `Showing ${title.toLowerCase()} from the DJILEN archive.`;
    }
  }

  function getFiltered(){
    let items = DJILEN_PRODUCTS.filter(p => {
      const matchDept = state.dept === 'all' || p.dept === state.dept;
      const matchType = state.type === 'all' || p.type === state.type;
      return matchDept && matchType;
    });
    if(state.sort === 'price-asc') items = items.slice().sort((a,b) => a.price - b.price);
    if(state.sort === 'price-desc') items = items.slice().sort((a,b) => b.price - a.price);
    if(state.sort === 'name-asc') items = items.slice().sort((a,b) => a.name.localeCompare(b.name));
    return items;
  }

  function render(){
    syncChips();
    syncHeading();
    const items = getFiltered();
    if(countEl) countEl.textContent = `${items.length} piece${items.length === 1 ? '' : 's'}`;
    grid.innerHTML = items.length
      ? items.map(djilenRenderCard).join('')
      : `<div class="empty-state">No pieces match that combination yet.<br>Try clearing a filter.</div>`;
  }

  deptChips.forEach(chip => {
    chip.addEventListener('click', () => {
      state.dept = chip.dataset.filterDept;
      render();
      history.replaceState(null, '', buildUrl());
    });
  });
  typeChips.forEach(chip => {
    chip.addEventListener('click', () => {
      state.type = chip.dataset.filterType;
      render();
      history.replaceState(null, '', buildUrl());
    });
  });
  sortSelect && sortSelect.addEventListener('change', () => {
    state.sort = sortSelect.value;
    render();
  });

  function buildUrl(){
    const p = new URLSearchParams();
    if(state.dept !== 'all') p.set('dept', state.dept);
    if(state.type !== 'all') p.set('type', state.type);
    const qs = p.toString();
    return location.pathname + (qs ? '?' + qs : '');
  }

  render();
});
