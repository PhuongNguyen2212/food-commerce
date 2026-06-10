# 🥩 Khô Bò Chị Hai — Project Brief

## Tổng quan dự án
Website e-commerce bán khô bò handmade cao cấp cho thương hiệu **Khô Bò Chị Hai**.  
Mục tiêu: giao diện thân thiện, tương tác trực quan, cho phép khách hàng chọn sản phẩm và đặt hàng hoàn toàn trên frontend.

---

## 🎨 Thương hiệu & Thiết kế

| Thuộc tính | Giá trị |
|---|---|
| Tên thương hiệu | Khô Bò Chị Hai |
| Slogan | "Hương vị gia truyền – Thủ công – Không chất bảo quản" |
| Phong cách | Ấn tượng, gần gũi, truyền thống Việt Nam nhưng hiện đại & sang trọng |

### Bảng màu
```
Nâu đất   →  #7B3F00   (màu chủ đạo)
Đỏ gạch   →  #C0392B   (CTA, nút nổi bật)
Vàng nhạt →  #F5DEB3   (accent, highlight)
Kem       →  #FFF8F0   (nền trang)
```

### Typography
- **Tiêu đề / Display:** `Playfair Display` (Google Fonts)
- **Nội dung / Body:** `Inter` (Google Fonts)
- Ngôn ngữ toàn trang: **Tiếng Việt**

---

## 📦 Sản phẩm & Giá

**Sản phẩm chính:** Khô Bò Chị Hai  
Thịt bò sấy thủ công · Gia vị gia truyền · Không chất bảo quản

| Size | Giá |
|------|-----|
| 100g | 100.000đ |
| 200g | 190.000đ |
| 300g | 280.000đ |
| 500g | 450.000đ |

---

## 🏗️ Cấu trúc trang (SPA — Single Page Application)

### 1. Trang Chủ `#home`
- **Hero Section:** ảnh sản phẩm đẹp + logo + slogan + nút CTA *"Mua Ngay"*
- **Giới thiệu thương hiệu:** 2–3 dòng cam kết chất lượng
- **Sản phẩm nổi bật:** 4 card (ảnh · tên · giá · nút *"Chọn mua"*)
- **Đánh giá khách hàng:** 3 testimonial card (avatar · tên · nội dung · sao)
- **Cam kết chất lượng:** icon + tiêu đề + mô tả ngắn × 3 cam kết
- **Footer:** logo · Zalo · email · copyright

### 2. Trang Sản phẩm `#product`
- Gallery ảnh (nhiều ảnh, zoom on hover)
- Badge: `Thủ công` · `Không chất bảo quản`
- Mô tả chi tiết: nguyên liệu · quy trình · cam kết
- **Chọn size:** 4 nút size — highlight khi active
- **Bộ đếm số lượng:** `[–]` · số · `[+]`
- **Giá cập nhật realtime** theo size đã chọn
- Nút **"Thêm vào giỏ hàng"** — màu đỏ gạch, nổi bật
- Thông tin giao hàng & thanh toán (icon + text)
- Section đánh giá: 3–5 review (sao + nội dung)

### 3. Giỏ Hàng `#cart`
- Danh sách sản phẩm: ảnh · tên · size · số lượng (chỉnh được) · thành tiền
- Nút xóa từng sản phẩm
- Tổng tiền hiển thị rõ ràng
- Nút **"Tiến hành thanh toán"**

### 4. Trang Thanh Toán `#checkout`
- Form thông tin: Họ tên · SĐT · Địa chỉ giao hàng · Ghi chú
- Tóm tắt đơn hàng (hiển thị lại)
- Phương thức: **COD** (Thanh toán khi nhận hàng)
- Nút **"Đặt hàng ngay"**
- Sau submit: toast *"Đặt hàng thành công! Chúng tôi sẽ liên hệ sớm."*

---

## ✨ Hiệu ứng & UX

| Tính năng | Mô tả |
|---|---|
| Navbar sticky | Đổi màu nền khi scroll xuống |
| Smooth scroll | Chuyển section mượt mà |
| Fade-in on scroll | Intersection Observer cho từng section |
| Card hover | Shadow + scale(1.03) nhẹ |
| Image zoom | Zoom ảnh sản phẩm khi hover |
| CTA pulse | Hiệu ứng ripple / pulse trên nút Mua Ngay |
| Toast notification | Hiện khi thêm sản phẩm vào giỏ |
| Cart badge | Icon giỏ hàng trên navbar cập nhật realtime |
| Responsive | Mobile-first, breakpoint 768px & 1024px |
| Page transition | Chuyển view mượt (fade hoặc slide) |

---

## ⚙️ Kỹ thuật

```
Kiến trúc   :  Single HTML file (SPA với JS thuần)
CSS         :  Vanilla CSS hoặc Tailwind CDN
JavaScript  :  Vanilla JS — không framework nặng
Lưu trữ    :  localStorage (giỏ hàng persist qua reload)
Hình ảnh   :  picsum.photos hoặc unsplash.it (placeholder)
Font        :  Google Fonts CDN
Icons       :  Phosphor Icons hoặc Heroicons CDN
```

---

## 📞 Thông tin liên hệ

| Kênh | Thông tin |
|---|---|
| Zalo | 0908164168 |
| Email | thongnt@huflit.edu.vn |

### EmailJS Config (nếu tích hợp gửi đơn hàng qua email)
```
Service ID            :  service_z26yju6
Order Notification    :  template_lfy9uxa
Contact Form          :  template_fo7u7w5
```

---

## 📁 Cấu trúc file đề xuất

```
kho-bo-chi-hai/
├── index.html          ← Toàn bộ website (SPA)
├── logo.png            ← Logo thương hiệu
└── assets/
    └── images/         ← Ảnh sản phẩm thực tế (thay placeholder)
```

---

*Project brief được tạo cho Claude · Khô Bò Chị Hai © 2025*
