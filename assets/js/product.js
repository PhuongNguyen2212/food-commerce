/* =============================================================
   product.js — Trang chi tiết sản phẩm: chọn size, đổi ảnh,
   tăng/giảm số lượng và cập nhật giá realtime.
   ============================================================= */

// Dựng các nút size và thumbnail gallery.
function renderProductDetail() {
  document.getElementById('sizeOptions').innerHTML = SIZES.map((s, i) => `
    <button class="size-btn ${i === pdState.sizeIndex ? 'active' : ''}" onclick="selectSize(${i})">
      ${s.size}<small>${fmt(s.price)}</small>
    </button>`).join('');

  document.getElementById('galleryThumbs').innerHTML = GALLERY.map((g, i) => `
    <img src="${g}" class="${i === 0 ? 'active' : ''}" onclick="setMainImg(this,'${g}')" alt="thumb ${i + 1}" />`).join('');

  updatePdPrice();
}

// Đổi ảnh lớn khi bấm thumbnail.
function setMainImg(el, src) {
  document.getElementById('galleryMain').src = src;
  document.querySelectorAll('.gallery-thumbs img').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

// Chọn size.
function selectSize(i) {
  pdState.sizeIndex = i;
  document.querySelectorAll('.size-btn').forEach((b, idx) => b.classList.toggle('active', idx === i));
  updatePdPrice();
}

// Mở trang chi tiết với size đã chọn sẵn (gọi từ thẻ sản phẩm ở trang chủ).
function viewProduct(i) {
  pdState.sizeIndex = i;
  pdState.qty = 1;
  document.getElementById('pdQty').textContent = 1;
  renderProductDetail();
  go('product');
}

// Tăng/giảm số lượng (tối thiểu 1).
function changeQty(d) {
  pdState.qty = Math.max(1, pdState.qty + d);
  document.getElementById('pdQty').textContent = pdState.qty;
  updatePdPrice();
}

// Cập nhật giá đơn vị + tạm tính theo size & số lượng.
function updatePdPrice() {
  const s = SIZES[pdState.sizeIndex];
  document.getElementById('pdPrice').textContent = fmt(s.price);
  document.getElementById('pdTotal').textContent = fmt(s.price * pdState.qty);
}
