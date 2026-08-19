/* ==========================================================================
   DJILEN — shared UI logic
   ========================================================================== */

/* ---------- DJ monogram (brand signature mark) ----------
   A connected D + J ligature cut by a diagonal opening — the path/journey
   the brand is built around. Deliberately abstract/geometric rather than
   literal letterforms, since no source logo file was supplied. */
function djilenMark(size = 40, color = 'var(--lime)', bg = 'none'){
  return `
  <span class="mark" style="width:${size}px;height:${size}px">
    <svg viewBox="0 0 60 60" width="${size}" height="${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
      ${bg !== 'none' ? `<rect x="1" y="1" width="58" height="58" stroke="${color}" stroke-width="1" fill="${bg}"/>` : ''}
      <path d="M16 13 L16 47" stroke="${color}" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M16 13 C 30 13 30 47 16 47" stroke="${color}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <path d="M42 13 L42 38 C 42 46 34 47 29 43" stroke="${color}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <path d="M6 49 L23 33" stroke="${color}" stroke-width="1.4" stroke-linecap="round" opacity=".9"/>
      <path d="M35 25 L54 9" stroke="${color}" stroke-width="1.4" stroke-linecap="round" opacity=".9"/>
    </svg>
  </span>`;
}

/* tint -> gradient map for placeholder product art (no photography supplied) */
const DJILEN_TINTS = {
  'olive-ink':        'linear-gradient(155deg,#54563c 0%, #131210 100%)',
  'cream-charcoal':   'linear-gradient(155deg,#e8e0cd 0%, #26241f 130%)',
  'charcoal-lime':    'linear-gradient(155deg,#26241f 0%, #d7ff4a 160%)',
  'olive-cream':      'linear-gradient(155deg,#54563c 0%, #e8e0cd 140%)',
  'ink-lime':         'linear-gradient(155deg,#131210 0%, #d7ff4a 150%)',
  'cream-charcoal-2': 'linear-gradient(155deg,#f2ece0 0%, #26241f 140%)',
  'olive-void':       'linear-gradient(155deg,#54563c 0%, #131210 140%)',
  'ink-cream':         'linear-gradient(155deg,#131210 0%, #e8e0cd 150%)',
  'cream-olive':      'linear-gradient(155deg,#e8e0cd 0%, #54563c 140%)',
  'ink-lime-3':       'linear-gradient(155deg,#131210 0%, #9fb833 150%)',
  'charcoal-cream':   'linear-gradient(155deg,#26241f 0%, #e8e0cd 150%)',
  'lime-ink':         'linear-gradient(155deg,#d7ff4a 0%, #131210 140%)',
  'ink-olive':        'linear-gradient(155deg,#131210 0%, #54563c 140%)',
  'cream-ink':        'linear-gradient(155deg,#e8e0cd 0%, #131210 150%)',
  'olive-ink-2':      'linear-gradient(155deg,#7a7c56 0%, #131210 140%)',
  'lime-ink-2':       'linear-gradient(155deg,#d7ff4a 0%, #26241f 150%)',
  'ink-lime-2':       'linear-gradient(155deg,#131210 0%, #d7ff4a 130%)',
  'charcoal-lime-2':  'linear-gradient(155deg,#26241f 0%, #9fb833 150%)',
  'olive-cream-2':    'linear-gradient(155deg,#54563c 0%, #f2ece0 150%)',
  'ink-cream-2':      'linear-gradient(155deg,#131210 0%, #f2ece0 160%)',
  'cream-charcoal-3': 'linear-gradient(155deg,#f2ece0 0%, #26241f 150%)',
  'olive-cream-3':    'linear-gradient(155deg,#7a7c56 0%, #e8e0cd 150%)',
  'charcoal-cream-2': 'linear-gradient(155deg,#26241f 0%, #d7cfb9 150%)',
  'lime-cream':       'linear-gradient(155deg,#d7ff4a 0%, #f2ece0 150%)',
  'cream-lime':       'linear-gradient(155deg,#f2ece0 0%, #9fb833 150%)',
  'olive-lime':       'linear-gradient(155deg,#54563c 0%, #d7ff4a 150%)',
  'ink-cream-3':      'linear-gradient(155deg,#131210 0%, #d7cfb9 150%)',
  'olive-ink-3':      'linear-gradient(155deg,#54563c 0%, #1c1a16 150%)',
  'cream-olive-2':    'linear-gradient(155deg,#f2ece0 0%, #54563c 150%)',
  'lime-olive':       'linear-gradient(155deg,#d7ff4a 0%, #54563c 150%)',
  'cream-lime-2':     'linear-gradient(155deg,#e8e0cd 0%, #d7ff4a 150%)',
  'charcoal-ink':     'linear-gradient(155deg,#26241f 0%, #131210 100%)',
};

function djilenTintStyle(tint){
  return DJILEN_TINTS[tint] || DJILEN_TINTS['ink-lime'];
}

/* ---------- product card renderer (used on home + shop) ---------- */
function djilenRenderCard(p){
  const markColor = (p.tint && p.tint.startsWith('cream')) ? 'rgba(19,18,16,.55)' : 'rgba(242,236,224,.55)';
  const badge = p.badge ? `<span class="badge ${p.badge==='Limited' ? 'alt':''}">${p.badge}</span>` : '';
  return `
  <article class="product-card" data-id="${p.id}" data-dept="${p.dept}" data-type="${p.type}" data-price="${p.price}">
    <div class="product-media" style="background:${djilenTintStyle(p.tint)}">
      ${badge}
      <div class="swatch">
        <span class="mono-d">${djilenMark(58, markColor)}</span>
      </div>
      <span class="swatch-label">DJILEN &middot; ${p.dept.toUpperCase()}</span>
      <div class="quick-add">
        <select aria-label="Select size for ${p.name}">
          ${djilenSizeOptions(p.type)}
        </select>
        <button type="button" onclick="DjilenCart.addFromCard(this, '${p.id}')">Add to bag</button>
      </div>
    </div>
    <div class="product-info">
      <div>
        <h4>${p.name}</h4>
        <span class="cat">${djilenTypeLabel(p.type)}</span>
      </div>
      <span class="price">${djilenFormatPrice(p.price)}</span>
    </div>
    <div class="route"></div>
  </article>`;
}

function djilenTypeLabel(type){
  const t = DJILEN_TYPES.find(t => t.id === type);
  return t ? t.label : type;
}

function djilenSizeOptions(type){
  const sizes = (type === 'caps' || type === 'accessories' || type === 'bags' || type === 'jewelry') ? ['OS'] : ['XS','S','M','L','XL'];
  return sizes.map(s => `<option value="${s}">${s}</option>`).join('');
}

/* ---------- toast ---------- */
let djilenToastTimer = null;
function djilenToast(msg){
  let toast = document.querySelector('.toast');
  if(!toast){
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(djilenToastTimer);
  djilenToastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

/* ---------- global UI wiring (nav, search, cart drawer, newsletter) ---------- */
document.addEventListener('DOMContentLoaded', () => {

  // inject monogram marks into elements with data-mark
  document.querySelectorAll('[data-mark]').forEach(el => {
    const size = parseInt(el.getAttribute('data-mark')) || 40;
    const color = el.getAttribute('data-mark-color') || 'var(--lime)';
    el.innerHTML = djilenMark(size, color) + (el.getAttribute('data-mark-text') || '');
  });

  // mobile nav
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.main-nav');
  if(burger && nav){
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      burger.classList.remove('open');
      nav.classList.remove('open');
    }));
  }

  // active nav link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a[data-page]').forEach(a => {
    if(a.getAttribute('data-page') === path) a.classList.add('active');
  });

  // cart drawer
  const cartBtn = document.querySelector('[data-cart-open]');
  const cartDrawer = document.querySelector('.cart-drawer');
  const overlay = document.querySelector('.overlay');
  const cartClose = document.querySelector('.cart-close');
  function openCart(){
    cartDrawer && cartDrawer.classList.add('open');
    overlay && overlay.classList.add('show');
    DjilenCart.render();
  }
  function closeCart(){
    cartDrawer && cartDrawer.classList.remove('open');
    overlay && overlay.classList.remove('show');
  }
  cartBtn && cartBtn.addEventListener('click', openCart);
  cartClose && cartClose.addEventListener('click', closeCart);
  overlay && overlay.addEventListener('click', () => { closeCart(); closeSearch(); });
  window.djilenOpenCart = openCart;

  // search overlay
  const searchBtn = document.querySelector('[data-search-open]');
  const searchPanel = document.querySelector('.search-panel');
  const searchClose = document.querySelector('.search-close');
  const searchInput = document.querySelector('.search-panel input');
  const searchResults = document.querySelector('.search-results');

  function openSearch(){
    searchPanel && searchPanel.classList.add('open');
    setTimeout(() => searchInput && searchInput.focus(), 100);
  }
  function closeSearch(){
    searchPanel && searchPanel.classList.remove('open');
  }
  searchBtn && searchBtn.addEventListener('click', openSearch);
  searchClose && searchClose.addEventListener('click', closeSearch);
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){ closeSearch(); closeCart(); }
  });

  if(searchInput && searchResults){
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.trim().toLowerCase();
      if(!q){ searchResults.innerHTML = ''; return; }
      const matches = DJILEN_PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(q) ||
        djilenTypeLabel(p.type).toLowerCase().includes(q) ||
        p.dept.toLowerCase().includes(q)
      ).slice(0, 8);
      searchResults.innerHTML = matches.length
        ? matches.map(p => `<a class="search-result" href="shop.html?type=${p.type}"><span>${p.name}</span><span>${djilenFormatPrice(p.price)}</span></a>`).join('')
        : `<div class="search-empty">No pieces found for "${searchInput.value}".</div>`;
    });
  }

  // newsletter form
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input');
      const success = form.parentElement.querySelector('.newsletter-success');
      const error = form.parentElement.querySelector('.newsletter-error');
      const isValid = input && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
      if(isValid){
        success && success.classList.add('show');
        error && error.classList.remove('show');
        form.reset();
        djilenToast('Welcome to DJILEN. You\u2019re on the list.');
      } else {
        error && error.classList.add('show');
        success && success.classList.remove('show');
        djilenToast('Enter a valid email to continue.');
      }
    });
  });

  DjilenCart.init();
});
