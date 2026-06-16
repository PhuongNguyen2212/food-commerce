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

  // Mỗi thumbnail là ảnh của một size; bấm thumbnail = chọn size đó.
  document.getElementById('galleryThumbs').innerHTML = GALLERY.map((g, i) => `
    <img src="${g}" class="${i === pdState.sizeIndex ? 'active' : ''}" onclick="selectSize(${i})"
         onerror="this.src='${FALLBACK_IMG}'" alt="Khô bò ${SIZES[i].size}" />`).join('');

  setMainImg(SIZES[pdState.sizeIndex].img);
  updatePdPrice();
}

// Đặt ảnh lớn (có ảnh dự phòng nếu lỗi).
function setMainImg(src) {
  const main = document.getElementById('galleryMain');
  main.onerror = () => { main.src = FALLBACK_IMG; };
  main.src = src;
}

// Chọn size: cập nhật nút size, thumbnail, ảnh lớn và giá.
function selectSize(i) {
  pdState.sizeIndex = i;
  document.querySelectorAll('.size-btn').forEach((b, idx) => b.classList.toggle('active', idx === i));
  document.querySelectorAll('.gallery-thumbs img').forEach((t, idx) => t.classList.toggle('active', idx === i));
  setMainImg(SIZES[i].img);
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
