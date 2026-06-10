# 🐸 PEPE FOOD — Khô Bò Handmade Cao Cấp

Website e-commerce (SPA) bán **khô bò handmade** cho thương hiệu **PEPE FOOD**.
Giao diện thân thiện, tương tác trực quan, cho phép khách chọn sản phẩm và đặt hàng hoàn toàn trên frontend.

> *"Hương vị gia truyền – Thủ công – Không chất bảo quản"*

## ✨ Tính năng

- **SPA** 4 view: Trang chủ · Sản phẩm · Giỏ hàng · Thanh toán — chuyển trang mượt
- **Giỏ hàng** lưu bằng `localStorage` (persist qua reload), badge cập nhật realtime
- **Chọn size** (100g/200g/300g/500g) + bộ đếm số lượng, giá cập nhật realtime
- **Checkout** COD với form thông tin giao hàng + toast xác nhận
- Hiệu ứng: navbar sticky đổi màu khi scroll, fade-in (Intersection Observer), card hover, image zoom, CTA pulse, toast
- **Responsive** mobile-first (breakpoint 768px & 1024px)

## 🛠️ Công nghệ

- HTML + Vanilla CSS + Vanilla JavaScript (không framework)
- Google Fonts (Playfair Display + Inter) · Phosphor Icons
- `localStorage` cho giỏ hàng

## 🚀 Chạy thử

Mở trực tiếp `index.html` bằng trình duyệt, hoặc chạy server tĩnh:

```bash
npx serve .
# hoặc
python -m http.server 8000
```

## 📁 Cấu trúc

```
.
├── index.html   # Toàn bộ website (SPA)
├── logo.jpg     # Logo thương hiệu PEPE FOOD
└── README.md
```

## 🎨 Bảng màu

| Màu | Mã |
|---|---|
| Nâu đất (chủ đạo) | `#7B3F00` |
| Đỏ gạch (CTA) | `#C0392B` |
| Vàng nhạt (accent) | `#F5DEB3` |
| Kem (nền) | `#FFF8F0` |

## 📞 Liên hệ

- **Zalo:** 0908 164 168
- **Email:** thongnt@huflit.edu.vn

---

© 2025 PEPE FOOD · Khô Bò Handmade Cao Cấp
