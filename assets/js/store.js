/* =============================================================
   store.js — Trạng thái ứng dụng: giỏ hàng (lưu localStorage)
   và trạng thái trang chi tiết sản phẩm.
   ============================================================= */

// Giỏ hàng: mảng { size, price, qty, img }. Persist qua reload bằng localStorage.
let cart = JSON.parse(localStorage.getItem('pepe_cart') || '[]');

// Trạng thái trang chi tiết: size đang chọn + số lượng.
let pdState = { sizeIndex:0, qty:1 };

const saveCart  = () => localStorage.setItem('pepe_cart', JSON.stringify(cart));
const cartTotal = () => cart.reduce((s, c) => s + c.price * c.qty, 0);

// Thêm sản phẩm vào giỏ (gộp nếu trùng size).
function addToCart(sizeIndex, qty) {
  const s = SIZES[sizeIndex];
  const existing = cart.find(c => c.size === s.size);
  if (existing) { existing.qty += qty; }
  else { cart.push({ size:s.size, price:s.price, qty, img:GALLERY[sizeIndex % GALLERY.length] }); }
  saveCart();
  updateBadge();
}

// Cập nhật số trên badge giỏ hàng ở navbar.
function updateBadge() {
  const count = cart.reduce((s, c) => s + c.qty, 0);
  const badge = document.getElementById('cartBadge');
  badge.textContent = count;
  badge.classList.toggle('show', count > 0);
}
