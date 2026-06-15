/* =============================================================
   checkout.js — Trang thanh toán: tóm tắt đơn và gửi thông tin
   đơn hàng về email cửa hàng qua EmailJS.
   ============================================================= */

// Render tóm tắt đơn hàng ở cột bên phải.
function renderCheckout() {
  const wrap = document.getElementById('checkoutSummary');

  if (cart.length === 0) {
    wrap.innerHTML = `<p style="color:var(--muted);">Giỏ hàng trống. <a onclick="go('product')" style="color:var(--do-gach); cursor:pointer;">Mua sắm ngay</a></p>`;
    return;
  }

  wrap.innerHTML = `
    ${cart.map(c => `
      <div class="sum-row"><span>Khô Bò ${c.size} × ${c.qty}</span><span>${fmt(c.price * c.qty)}</span></div>`).join('')}
    <div class="sum-row"><span>Phí giao hàng</span><span>Miễn phí</span></div>
    <div class="sum-total"><span>Thành tiền</span><b>${fmt(cartTotal())}</b></div>
    <p style="margin-top:14px; color:var(--muted); font-size:.85rem;"><i class="ph ph-info"></i> Thanh toán khi nhận hàng (COD).</p>`;
}

// Xử lý submit form: gửi email đơn hàng rồi xác nhận.
async function submitOrder(e) {
  e.preventDefault();
  if (cart.length === 0) { toast('Giỏ hàng trống', 'Vui lòng thêm sản phẩm', 'warning'); go('product'); return; }

  const btn = document.querySelector('#checkoutForm button[type="submit"]');
  const btnHTML = btn.innerHTML;

  // Gom dữ liệu đơn hàng -> tham số cho template EmailJS.
  const orderId = 'PEPE' + Date.now().toString().slice(-8);
  const itemsText = cart.map(c => `• Khô Bò ${c.size} × ${c.qty} = ${fmt(c.price * c.qty)}`).join('\n');
  const params = {
    order_id        : orderId,
    customer_name   : cName.value.trim(),
    customer_phone  : cPhone.value.trim(),
    customer_address: cAddress.value.trim(),
    customer_note   : cNote.value.trim() || '(không có)',
    order_items     : itemsText,
    order_total     : fmt(cartTotal()),
    order_date      : new Date().toLocaleString('vi-VN'),
    payment_method  : 'COD — Thanh toán khi nhận hàng',
    to_email        : EMAILJS.storeEmail,
    to_name         : 'PEPE FOOD',
    from_name       : cName.value.trim(),
    reply_to        : cPhone.value.trim(),
  };

  btn.disabled = true;
  btn.innerHTML = '<i class="ph-bold ph-circle-notch"></i> Đang gửi đơn hàng...';

  try {
    if (EMAILJS_READY && window.emailjs) {
      await emailjs.send(EMAILJS.serviceId, EMAILJS.orderTemplateId, params);
    } else {
      // Chế độ demo: chưa cấu hình Public Key → chỉ log ra console.
      console.warn('[EmailJS] Chưa cấu hình Public Key — chạy chế độ demo, không gửi email thật.');
      console.log('ĐƠN HÀNG MỚI:', params);
      await new Promise(r => setTimeout(r, 700));
    }
    cart = []; saveCart(); updateBadge();
    document.getElementById('checkoutForm').reset();
    toast('Đặt hàng thành công!', `Mã đơn ${orderId} — chúng tôi sẽ liên hệ sớm.`, 'success');
    setTimeout(() => go('home'), 1500);
  } catch (err) {
    // EmailJS trả về { status, text }. Hiện rõ để dễ chẩn đoán.
    const detail = err && (err.text || err.message) ? `${err.status || ''} ${err.text || err.message}`.trim() : 'Lỗi không xác định';
    console.error('[EmailJS] Lỗi gửi đơn:', err);
    toast('Gửi đơn thất bại', detail, 'warning');
  } finally {
    btn.disabled = false;
    btn.innerHTML = btnHTML;
  }
}
