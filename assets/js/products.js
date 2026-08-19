/* ==========================================================================
   DJILEN — Product catalog
   CHIMEN 001 — The Origin Collection
   Names built from the brand's journey/path vocabulary: Origin, Path, Chimen,
   Legacy, Route, Journey, Heritage — never literal cultural imagery.
   ========================================================================== */

const DJILEN_PRODUCTS = [
  // ---------------- VARSITY JACKETS ----------------
  { id:'vj-01', name:'Origin Varsity Jacket', dept:'men', type:'varsity-jackets', price:465, tint:'olive-ink', badge:'New', image:'assets/img/products/image.png', desc:'Wool body, leather sleeves, chest-embroidered DJ monogram with the signature diagonal opening.' },
  { id:'vj-02', name:'Legacy Varsity Jacket', dept:'women', type:'varsity-jackets', price:465, tint:'cream-charcoal', badge:'New', desc:'Cropped varsity cut in washed wool, satin lining, tonal monogram at the chest.' },
  { id:'vj-03', name:'Route Bomber Jacket', dept:'men', type:'varsity-jackets', price:495, tint:'charcoal-lime', badge:null, desc:'Satin bomber with a single diagonal seam running shoulder to hem.' },
  { id:'vj-04', name:'Heritage Varsity Jacket', dept:'women', type:'varsity-jackets', price:475, tint:'olive-cream', badge:'Limited', desc:'Two-tone panel construction split by a diagonal path line.' },
  { id:'vj-05', name:'Junior Origin Varsity Jacket', dept:'kids', type:'varsity-jackets', price:225, tint:'olive-ink', badge:null, desc:'Scaled-down archive fit for the next generation on their own way.' },

  // ---------------- HOODIES ----------------
  { id:'hd-01', name:'Path Heavyweight Hoodie', dept:'men', type:'hoodies', price:165, tint:'ink-lime', badge:'Bestseller', desc:'460gsm heavyweight fleece, dropped shoulder, raised monogram at the chest.' },
  { id:'hd-02', name:'Chimen Cropped Hoodie', dept:'women', type:'hoodies', price:165, tint:'cream-charcoal-2', badge:null, desc:'Cropped silhouette in brushed fleece, named for the road itself.' },
  { id:'hd-03', name:'Journey Pigment-Dye Hoodie', dept:'men', type:'hoodies', price:175, tint:'olive-void', badge:null, desc:'Garment-dyed fleece that fades and softens with wear, tonal embroidery.' },
  { id:'hd-04', name:'Origin Graphic Hoodie', dept:'women', type:'hoodies', price:170, tint:'charcoal-lime', badge:'New', desc:'Full-back print of the DJ monogram opened into a single continuous line.' },
  { id:'hd-05', name:'Legacy Washed Hoodie', dept:'men', type:'hoodies', price:160, tint:'ink-cream', badge:null, desc:'Stone-washed fleece for a lived-in hand from the first wear.' },
  { id:'hd-06', name:'Mini Journey Hoodie', dept:'kids', type:'hoodies', price:95, tint:'ink-lime', badge:'Bestseller', desc:'The signature heavyweight hoodie, cut small for little journeys.' },
  { id:'hd-07', name:'Youth Path Hoodie', dept:'kids', type:'hoodies', price:98, tint:'cream-charcoal-2', badge:null, desc:'Soft fleece built for first steps on their own path.' },

  // ---------------- OVERSIZED T-SHIRTS ----------------
  { id:'tee-01', name:'Chimen Oversized Tee', dept:'men', type:'tees', price:75, tint:'ink-cream', badge:null, desc:'Heavyweight cotton, dropped shoulder, back print of the road motif.' },
  { id:'tee-02', name:'Direction Oversized Tee', dept:'women', type:'tees', price:75, tint:'cream-olive', badge:null, desc:'Boxy fit, mid-weight jersey, minimal chest hit.' },
  { id:'tee-03', name:'Origin 001 Tee', dept:'men', type:'tees', price:78, tint:'olive-cream', badge:'New', desc:'Archival collection typography, screen-printed in tonal ink.' },
  { id:'tee-04', name:'Move With Purpose Tee', dept:'women', type:'tees', price:72, tint:'ink-lime', badge:null, desc:'Relaxed drape, small back-neck print carrying the line it\u2019s named for.' },
  { id:'tee-05', name:'Legacy Oversized Tee', dept:'men', type:'tees', price:78, tint:'charcoal-cream', badge:null, desc:'Fine-line monogram graphic across the chest, oversized fit.' },
  { id:'tee-06', name:'Route Line Tee', dept:'women', type:'tees', price:75, tint:'lime-ink', badge:null, desc:'A single diagonal line traced sleeve to hem, the brand\u2019s signature gesture.' },
  { id:'tee-07', name:'Youth Origin Tee', dept:'kids', type:'tees', price:42, tint:'ink-cream', badge:null, desc:'Softest cotton in the range, same monogram back print, kid-sized.' },
  { id:'tee-08', name:'Youth Chimen Tee', dept:'kids', type:'tees', price:42, tint:'cream-olive', badge:null, desc:'Kid-sized road graphic, sized for growing into.' },

  // ---------------- SWEATPANTS ----------------
  { id:'sp-01', name:'Legacy Sweatpants', dept:'men', type:'sweatpants', price:155, tint:'ink-olive', badge:null, desc:'Heavyweight fleece, tapered ankle cuff, embroidered leg hit.' },
  { id:'sp-02', name:'Path Straight Sweatpants', dept:'women', type:'sweatpants', price:150, tint:'cream-ink', badge:null, desc:'Relaxed straight leg with a tonal side seam.' },
  { id:'sp-03', name:'Route Utility Sweatpants', dept:'men', type:'sweatpants', price:160, tint:'olive-ink-2', badge:'New', desc:'Utility side pockets, drawstring waist, diagonal seam detail at the hem.' },
  { id:'sp-04', name:'Origin Jogger', dept:'women', type:'sweatpants', price:148, tint:'lime-ink-2', badge:null, desc:'Tapered jogger cut in brushed-back fleece.' },
  { id:'sp-05', name:'Junior Legacy Sweatpants', dept:'kids', type:'sweatpants', price:78, tint:'ink-olive', badge:null, desc:'Elastic waist, reinforced knee, same fleece as the adult line.' },

  // ---------------- CAPS ----------------
  { id:'cap-01', name:'DJ Monogram Cap', dept:'men', type:'caps', price:70, tint:'ink-lime-2', badge:'Bestseller', desc:'Structured six-panel cap with a raised monogram at the front.' },
  { id:'cap-02', name:'Origin Field Cap', dept:'women', type:'caps', price:68, tint:'cream-ink', badge:null, desc:'Unstructured cotton twill, curved brim, tonal embroidery.' },
  { id:'cap-03', name:'Route Trucker Cap', dept:'men', type:'caps', price:65, tint:'charcoal-lime-2', badge:null, desc:'Mesh-back trucker with a printed diagonal path graphic.' },
  { id:'cap-04', name:'Chimen Bucket Hat', dept:'women', type:'caps', price:72, tint:'olive-cream-2', badge:'New', desc:'Reversible bucket hat, monogram on one side, solid on the other.' },
  { id:'cap-05', name:'Junior Monogram Cap', dept:'kids', type:'caps', price:45, tint:'ink-lime-2', badge:null, desc:'Adjustable strap-back, scaled monogram, same six-panel build.' },

  // ---------------- BAGS ----------------
  { id:'bag-01', name:'Route Utility Bag', dept:'men', type:'bags', price:210, tint:'ink-cream-2', badge:null, desc:'Structured crossbody in vegetable-tanned leather with brass hardware.' },
  { id:'bag-02', name:'Origin Canvas Tote', dept:'women', type:'bags', price:145, tint:'cream-charcoal-3', badge:null, desc:'Heavy canvas tote with a leather monogram patch, built for the everyday route.' },
  { id:'bag-03', name:'Path Mini Bag', dept:'women', type:'bags', price:175, tint:'olive-cream-3', badge:'New', desc:'Compact structured bag in full-grain leather with an adjustable strap.' },
  { id:'bag-04', name:'Journey Duffel', dept:'men', type:'bags', price:245, tint:'charcoal-cream-2', badge:null, desc:'Weekender duffel in waxed canvas and leather trim, built for the road.' },

  // ---------------- JEWELRY ----------------
  { id:'jew-01', name:'Path Pendant Necklace', dept:'women', type:'jewelry', price:165, tint:'lime-cream', badge:null, desc:'Gold-plated monogram pendant, opened by the signature diagonal line, on a fine cable chain.' },
  { id:'jew-02', name:'Origin Signet Ring', dept:'men', type:'jewelry', price:135, tint:'ink-lime-3', badge:null, desc:'Brass signet ring engraved with the DJ monogram.' },
  { id:'jew-03', name:'Chimen Chain Bracelet', dept:'women', type:'jewelry', price:98, tint:'cream-lime', badge:'New', desc:'Fine curb-chain bracelet with a small monogram charm.' },
  { id:'jew-04', name:'Route Cuff', dept:'men', type:'jewelry', price:145, tint:'olive-lime', badge:null, desc:'Brushed brass cuff with an engraved diagonal line motif.' },

  // ---------------- ACCESSORIES ----------------
  { id:'acc-01', name:'Legacy Leather Wallet', dept:'men', type:'accessories', price:110, tint:'ink-cream-3', badge:null, desc:'Full-grain leather billfold, debossed monogram mark.' },
  { id:'acc-02', name:'Origin Chain Belt', dept:'men', type:'accessories', price:120, tint:'olive-ink-3', badge:'New', desc:'Hand-finished brass chain belt with a monogram buckle.' },
  { id:'acc-03', name:'Route Silk Scarf', dept:'women', type:'accessories', price:135, tint:'cream-olive-2', badge:'Limited', desc:'Hand-rolled silk twill printed with an abstract path pattern.' },
  { id:'acc-04', name:'Journey Woven Bracelet', dept:'women', type:'accessories', price:48, tint:'lime-olive', badge:null, desc:'Hand-woven cord bracelet with a brass monogram bead.' },
  { id:'acc-05', name:'Youth Path Socks (3-Pack)', dept:'kids', type:'accessories', price:32, tint:'cream-lime-2', badge:null, desc:'Ribbed cotton socks with a woven monogram cuff.' },
  { id:'acc-06', name:'Origin Card Holder', dept:'men', type:'accessories', price:65, tint:'charcoal-ink', badge:null, desc:'Slim leather card holder, debossed with the collection mark.' },
];

const DJILEN_DEPTS = [
  { id:'men', label:'Men' },
  { id:'women', label:'Women' },
  { id:'kids', label:'Kids' },
];

const DJILEN_TYPES = [
  { id:'varsity-jackets', label:'Varsity Jackets' },
  { id:'hoodies', label:'Hoodies' },
  { id:'tees', label:'Oversized Tees' },
  { id:'sweatpants', label:'Sweatpants' },
  { id:'caps', label:'Caps' },
  { id:'bags', label:'Bags' },
  { id:'jewelry', label:'Jewelry' },
  { id:'accessories', label:'Accessories' },
];

function djilenFormatPrice(n){
  return '$' + n.toLocaleString('en-US');
}

function djilenProductById(id){
  return DJILEN_PRODUCTS.find(p => p.id === id);
}
