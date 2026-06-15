/* =============================================================
   config.js — Cấu hình gửi email đơn hàng qua EmailJS
   Lấy Public Key tại: EmailJS Dashboard → Account → General → Public Key
   ============================================================= */

const EMAILJS = {
  publicKey      : 'YOUR_EMAILJS_PUBLIC_KEY', // <-- THAY bằng Public Key của bạn
  serviceId      : 'service_z26yju6',
  orderTemplateId: 'template_lfy9uxa',
  storeEmail     : 'thongnt@huflit.edu.vn',   // email nhận đơn (nếu template dùng biến to_email)
};

// True khi đã điền Public Key thật → mới gửi email; ngược lại chạy chế độ demo.
const EMAILJS_READY = EMAILJS.publicKey && !EMAILJS.publicKey.startsWith('YOUR_');

if (window.emailjs && EMAILJS_READY) {
  emailjs.init({ publicKey: EMAILJS.publicKey });
}
