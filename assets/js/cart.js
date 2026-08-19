/* ==========================================================================
   DJILEN — cart (localStorage-backed, persists across pages)
   ========================================================================== */

const DjilenCart = (function(){
  const KEY = 'djilen_cart_v1';

  function read(){
    try{
      return JSON.parse(localStorage.getItem(KEY)) || [];
    } catch(e){ return []; }
  }
  function write(items){
    localStorage.setItem(KEY, JSON.stringify(items));
    updateBadge();
  }

  function add(id, size, qty = 1){
    const items = read();
    const existing = items.find(i => i.id === id && i.size === size);
    if(existing){
      existing.qty += qty;
    } else {
      items.push({ id, size, qty });
    }
    write(items);
  }

  function addFromCard(btn, id){
    const media = btn.closest('.product-media');
    const select = media.querySelector('select');
    const size = select ? select.value : 'OS';
    add(id, size, 1);
    const product = djilenProductById(id);
    djilenToast(`${product.name} (${size}) added to bag`);
    render();
  }

  function removeAt(index){
    const items = read();
    items.splice(index, 1);
    write(items);
    render();
  }

  function changeQty(index, delta){
    const items = read();
    if(!items[index]) return;
    items[index].qty += delta;
    if(items[index].qty <= 0){
      items.splice(index, 1);
    }
    write(items);
    render();
  }

  function count(){
    return read().reduce((sum, i) => sum + i.qty, 0);
  }

  function subtotal(){
    const items = read();
    return items.reduce((sum, i) => {
      const p = djilenProductById(i.id);
      return sum + (p ? p.price * i.qty : 0);
    }, 0);
  }

  function updateBadge(){
    document.querySelectorAll('.cart-count').forEach(el => {
      el.textContent = count();
    });
  }

  function render(){
    const list = document.querySelector('.cart-items');
    const subtotalEl = document.querySelector('.cart-subtotal b');
    if(!list) return;
    const items = read();

    if(items.length === 0){
      list.innerHTML = `<div class="cart-empty">Your bag is empty.<br>Every path starts somewhere &mdash; <a href="shop.html" style="color:var(--lime)">browse the shop</a>.</div>`;
    } else {
      list.innerHTML = items.map((item, index) => {
        const p = djilenProductById(item.id);
        if(!p) return '';
        return `
        <div class="cart-item">
          <div class="cart-item-media" style="background:${djilenTintStyle(p.tint)}">
            ${djilenMark(28, 'rgba(255,255,255,.6)')}
          </div>
          <div class="cart-item-info">
            <h5>${p.name}</h5>
            <span class="meta">Size ${item.size} &middot; ${djilenTypeLabel(p.type)}</span>
            <div class="cart-item-qty">
              <button type="button" onclick="DjilenCart.changeQty(${index}, -1)" aria-label="Decrease quantity">&minus;</button>
              <span>${item.qty}</span>
              <button type="button" onclick="DjilenCart.changeQty(${index}, 1)" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <div class="cart-item-right">
            <span class="price">${djilenFormatPrice(p.price * item.qty)}</span>
            <button type="button" class="cart-item-remove" onclick="DjilenCart.removeAt(${index})">Remove</button>
          </div>
        </div>`;
      }).join('');
    }

    if(subtotalEl) subtotalEl.textContent = djilenFormatPrice(subtotal());
    updateBadge();
  }

  function init(){
    updateBadge();
    render();
    const checkoutBtn = document.querySelector('[data-checkout]');
    if(checkoutBtn){
      checkoutBtn.addEventListener('click', () => {
        if(count() === 0){
          djilenToast('Your bag is empty.');
          return;
        }
        djilenToast('This is a design preview — checkout isn\u2019t wired to payment yet.');
      });
    }
  }

  return { add, addFromCard, removeAt, changeQty, count, subtotal, render, init };
})();
