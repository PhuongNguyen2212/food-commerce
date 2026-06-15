/* =============================================================
   cart.js — Thao tác giỏ hàng (thêm/sửa/xoá) và render trang giỏ hàng.
   ============================================================= */

// Thêm nhanh 1 sản phẩm từ thẻ ở trang chủ.
function quickAdd(sizeIndex) {
  addToCart(sizeIndex, 1);
  toast('Đã thêm vào giỏ!', `${PRODUCT_NAME} ${SIZES[sizeIndex].size} × 1`);
}

// Thêm từ trang chi tiết (theo size + số lượng đang chọn).
function addCurrentToCart() {
  addToCart(pdState.sizeIndex, pdState.qty);
  toast('Đã thêm vào giỏ!', `${PRODUCT_NAME} ${SIZES[pdState.sizeIndex].size} × ${pdState.qty}`);
}

// Tăng/giảm số lượng một dòng trong giỏ; về 0 thì xoá dòng.
function changeCartQty(size, d) {
  const item = cart.find(c => c.size === size);
  if (!item) return;
  item.qty += d;
  if (item.qty <= 0) cart = cart.filter(c => c.size !== size);
  saveCart(); updateBadge(); renderCart();
}

// Xoá hẳn một dòng khỏi giỏ.
function removeFromCart(size) {
  cart = cart.filter(c => c.size !== size);
  saveCart(); updateBadge(); renderCart();
  toast('Đã xoá sản phẩm', 'Khỏi giỏ hàng', 'trash');
}

// Render trang giỏ hàng (hoặc trạng thái trống).
function renderCart() {
  const wrap = document.getElementById('cartContainer');

  if (cart.length === 0) {
    wrap.innerHTML = `<div class="empty">
      <i class="ph ph-shopping-cart"></i>
      <h3 style="color:var(--nau-dat); margin-bottom:8px;">Giỏ hàng đang trống</h3>
      <p style="margin-bottom:22px;">Hãy chọn cho mình một ít khô bò thơm ngon nhé!</p>
      <button class="btn btn-primary" onclick="go('product')"><i class="ph-bold ph-storefront"></i> Mua sắm ngay</button>
    </div>`;
    return;
  }

  wrap.innerHTML = `
    <div class="cart-wrap">
      <div class="cart-list">
        ${cart.map(c => `
          <div class="cart-item">
            <img src="${c.img}" alt="Khô bò ${c.size}" />
            <div>
              <h4>${PRODUCT_NAME}</h4>
              <div class="ci-size">Khối lượng: ${c.size}</div>
              <div class="ci-qty">
                <button onclick="changeCartQty('${c.size}',-1)">–</button>
                <span>${c.qty}</span>
                <button onclick="changeCartQty('${c.size}',1)">+</button>
              </div>
            </div>
            <div class="ci-right">
              <div class="ci-price">${fmt(c.price * c.qty)}</div>
              <button class="ci-remove" onclick="removeFromCart('${c.size}')" title="Xoá"><i class="ph ph-trash"></i></button>
            </div>
          </div>`).join('')}
      </div>
      <div class="summary">
        <h3>Tổng cộng</h3>
        <div class="sum-row"><span>Tạm tính</span><span>${fmt(cartTotal())}</span></div>
        <div class="sum-row"><span>Phí giao hàng</span><span>Miễn phí</span></div>
        <div class="sum-total"><span>Thành tiền</span><b>${fmt(cartTotal())}</b></div>
        <button class="btn btn-primary btn-block" style="margin-top:22px;" onclick="go('checkout')">
          <i class="ph-bold ph-arrow-right"></i> Tiến hành thanh toán
        </button>
        <button class="btn btn-ghost btn-block" style="margin-top:10px;" onclick="go('product')">Tiếp tục mua sắm</button>
      </div>
    </div>`;
}
