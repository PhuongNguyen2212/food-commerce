/* =============================================================
   utils.js — Hàm tiện ích dùng chung: định dạng tiền, toast,
   hiệu ứng fade-in khi cuộn.
   ============================================================= */

// Định dạng số tiền kiểu Việt Nam: 100000 -> "100.000đ"
const fmt = n => n.toLocaleString('vi-VN') + 'đ';

/**
 * Hiện thông báo nổi (toast) góc dưới phải.
 * @param {string} title - tiêu đề
 * @param {string} sub   - dòng phụ
 * @param {'success'|'trash'|'warning'} type - kiểu icon
 */
function toast(title, sub, type = 'success') {
  const icons = { success:'ph-check-circle', trash:'ph-trash', warning:'ph-warning' };
  const el = document.createElement('div');
  el.className = 'toast ' + type;
  el.innerHTML = `<i class="ph-fill ${icons[type] || icons.success}"></i><div><strong>${title}</strong><small>${sub || ''}</small></div>`;
  document.getElementById('toastWrap').appendChild(el);
  requestAnimationFrame(() => el.classList.add('show'));
  setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 400); }, 3000);
}

// Hiệu ứng fade-in: thêm class .visible khi phần tử .reveal lọt vào màn hình.
let revealObserver;
function initReveal() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('visible'); revealObserver.unobserve(en.target); }
      });
    }, { threshold:0.12 });
  }
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
}
