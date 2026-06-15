/* =============================================================
   main.js — Điểm khởi tạo: render toàn bộ khối động và bật
   hiệu ứng đếm số khi phần doanh nghiệp xuất hiện.
   Chạy sau cùng (các script khác đã nạp xong).
   ============================================================= */

renderFeatured();
renderTestimonials();
renderStory();
renderProductDetail();
updateBadge();
initReveal();

// Kích hoạt đếm số khi phần doanh nghiệp lọt vào màn hình.
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(en => { if (en.isIntersecting) { animateStats(); statsObserver.disconnect(); } });
}, { threshold:0.3 });

const statsEl = document.getElementById('statsGrid');
if (statsEl) statsObserver.observe(statsEl);
