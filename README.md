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
├── index.html              # Markup (HTML) của toàn bộ SPA
├── logo.jpg                # Logo thương hiệu PEPE FOOD
├── README.md
└── assets/
    ├── css/
    │   └── styles.css      # Toàn bộ giao diện
    └── js/                 # JS tách theo từng mối quan tâm (nạp tuần tự)
        ├── config.js       # Cấu hình EmailJS
        ├── data.js         # Dữ liệu: sản phẩm, đánh giá, câu chuyện, số liệu
        ├── utils.js        # fmt tiền, toast, hiệu ứng fade-in
        ├── store.js        # State giỏ hàng + localStorage
        ├── navigation.js   # Chuyển trang, navbar, menu mobile
        ├── home.js         # Render sản phẩm nổi bật + đánh giá
        ├── story.js        # Câu chuyện, timeline, doanh nghiệp, đếm số
        ├── product.js      # Trang chi tiết sản phẩm
        ├── cart.js         # Giỏ hàng
        ├── checkout.js     # Thanh toán + gửi email đơn hàng
        └── main.js         # Khởi tạo
```

> JS dùng các `<script>` thường nạp theo thứ tự phụ thuộc (không phải ES module),
> nên bạn vẫn mở trực tiếp `index.html` bằng trình duyệt được — không cần server.

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
