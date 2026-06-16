/* =============================================================
   config.js — Cấu hình gửi email đơn hàng qua EmailJS
   Lấy Public Key tại: EmailJS Dashboard → Account → General → Public Key
   ============================================================= */

const EMAILJS = {
  publicKey: 'AeyvbkxKA8LruC_SI', // <-- THAY bằng Public Key của bạn
  serviceId: 'service_etkyleq',
  orderTemplateId: 'template_s063d73',
  storeEmail: 'laikhoa111@gmail.com',   // email nhận đơn (nếu template dùng biến to_email)
};

// True khi đã điền Public Key thật → mới gửi email; ngược lại chạy chế độ demo.
const EMAILJS_READY = EMAILJS.publicKey && !EMAILJS.publicKey.startsWith('YOUR_');

if (window.emailjs && EMAILJS_READY) {
  emailjs.init({ publicKey: EMAILJS.publicKey });
}
