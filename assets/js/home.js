/* =============================================================
   home.js — Render các khối động ở trang chủ & trang sản phẩm:
   thẻ sản phẩm nổi bật và các thẻ đánh giá.
   ============================================================= */

// Lưới sản phẩm nổi bật (4 size). Bấm ảnh/tên/nút để xem chi tiết hoặc thêm nhanh.
function renderFeatured() {
  document.getElementById('featuredGrid').innerHTML = SIZES.map((s, i) => `
    <div class="card reveal">
      <div class="card-img-wrap card-clickable" onclick="viewProduct(${i})">
        <img src="${s.img}" onerror="this.src='${FALLBACK_IMG}'" alt="Khô bò ${s.size}" />
        <span class="card-tag">Thủ công</span>
      </div>
      <div class="card-body">
        <h3 class="card-clickable" onclick="viewProduct(${i})">${PRODUCT_NAME}</h3>
        <div class="card-size">Gói ${s.size} · hút chân không</div>
        <div class="card-price">${fmt(s.price)}</div>
        <button class="btn btn-outline btn-block" style="margin-bottom:8px;" onclick="viewProduct(${i})"><i class="ph-bold ph-eye"></i> Xem chi tiết</button>
        <button class="btn btn-primary btn-block" onclick="quickAdd(${i})"><i class="ph-bold ph-plus"></i> Chọn mua</button>
      </div>
    </div>`).join('');
}

// Mẫu một thẻ đánh giá.
const testiCard = t => `
  <div class="testi reveal">
    <div class="stars">★★★★★</div>
    <p>"${t.text}"</p>
    <div class="testi-user">
      <img src="${t.avatar}" alt="${t.name}" />
      <div><strong>${t.name}</strong><small>${t.role}</small></div>
    </div>
  </div>`;

// Render đánh giá ở trang chủ và trang chi tiết.
function renderTestimonials() {
  document.getElementById('testiGrid').innerHTML = TESTIMONIALS.map(testiCard).join('');
  document.getElementById('pdReviews').innerHTML = PD_REVIEWS.map(testiCard).join('');
}
