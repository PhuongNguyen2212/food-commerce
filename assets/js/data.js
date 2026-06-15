/* =============================================================
   data.js — Toàn bộ dữ liệu nội dung của website.
   Chỉnh sửa giá, ảnh, đánh giá, câu chuyện... ngay tại đây.
   ============================================================= */

// Tên sản phẩm dùng chung
const PRODUCT_NAME = 'Khô Bò PEPE FOOD';

// Các size + giá (đơn vị: đồng)
const SIZES = [
  { size:'100g', price:100000 },
  { size:'200g', price:190000 },
  { size:'300g', price:280000 },
  { size:'500g', price:450000 },
];

// Ảnh gallery sản phẩm (đặt ảnh thật vào assets/images/ rồi thay link)
const GALLERY = [
  'https://images.unsplash.com/photo-1606851091851-e8c8c0fca5ba?w=900&q=80',
  'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=900&q=80',
  'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=900&q=80',
  'https://images.unsplash.com/photo-1558030006-450675393462?w=900&q=80',
];

// Đánh giá hiển thị ở trang chủ
const TESTIMONIALS = [
  { name:'Minh Anh', role:'Khách hàng thân thiết', avatar:'https://i.pravatar.cc/100?img=47', text:'Khô bò ngon xuất sắc, thơm và dai vừa miệng. Cả nhà mình ai cũng mê, đặt lại lần 3 rồi!' },
  { name:'Quốc Huy', role:'Hà Nội', avatar:'https://i.pravatar.cc/100?img=12', text:'Đóng gói cẩn thận, giao nhanh. Vị cay nhẹ đậm đà đúng kiểu gia truyền. Rất đáng tiền.' },
  { name:'Thu Trang', role:'TP.HCM', avatar:'https://i.pravatar.cc/100?img=32', text:'Mua làm quà biếu Tết, ai nhận cũng khen. Không chất bảo quản nên rất yên tâm.' },
];

// Đánh giá hiển thị ở trang chi tiết sản phẩm
const PD_REVIEWS = [
  { name:'Bảo Ngọc', role:'Đã mua 500g', avatar:'https://i.pravatar.cc/100?img=20', text:'Miếng khô bò dày, thớ thịt rõ, ăn là ghiền. Sẽ ủng hộ dài dài!' },
  { name:'Hoàng Long', role:'Đã mua 300g', avatar:'https://i.pravatar.cc/100?img=15', text:'Giá hợp lý so với chất lượng. Vị truyền thống, không bị ngọt gắt như nơi khác.' },
  { name:'Phương Vy', role:'Đã mua 200g', avatar:'https://i.pravatar.cc/100?img=45', text:'Nhậu lai rai hết sảy. Shop tư vấn nhiệt tình, giao đúng hẹn.' },
];

// Cột mốc câu chuyện khởi nghiệp (timeline tương tác)
const TIMELINE = [
  { year:'2021', title:'Khởi nguồn từ căn bếp gia đình', icon:'ph-cooking-pot',
    text:'Chị Hai bắt đầu làm những mẻ khô bò đầu tiên theo công thức gia truyền, bán cho bạn bè và người thân ngay tại căn bếp nhỏ ở Sài Gòn.' },
  { year:'2022', title:'Những đơn hàng online đầu tiên', icon:'ph-shopping-bag',
    text:'PEPE FOOD lên Zalo & Facebook. Chú ếch Pepe đội mũ đầu bếp ra đời làm linh vật. Tháng đầu tiên cán mốc hơn 50 đơn hàng.' },
  { year:'2023', title:'Chuẩn hoá quy trình sản xuất', icon:'ph-seal-check',
    text:'Đầu tư máy hút chân không, đóng gói chuyên nghiệp và tuân thủ tiêu chuẩn an toàn vệ sinh thực phẩm trong từng mẻ sấy.' },
  { year:'2024', title:'Phủ sóng toàn quốc', icon:'ph-truck',
    text:'Hệ thống giao hàng vươn tới 63 tỉnh thành. Hơn 800 khách hàng thân thiết quay lại đặt hàng đều đặn mỗi tháng.' },
  { year:'2025', title:'Thương hiệu được yêu thích', icon:'ph-trophy',
    text:'Hơn 1.200 khách hàng tin dùng, điểm đánh giá 4.9/5. PEPE FOOD tiếp tục mở rộng dòng sản phẩm và giữ trọn hương vị gia truyền.' },
];

// Số liệu doanh nghiệp (đếm động khi cuộn tới)
const STATS = [
  { icon:'ph-calendar-check', value:5,     suffix:'+', label:'Năm kinh nghiệm' },
  { icon:'ph-package',        value:50000, suffix:'+', label:'Gói khô bò đã bán' },
  { icon:'ph-users-three',    value:1200,  suffix:'+', label:'Khách hàng tin dùng' },
  { icon:'ph-map-pin',        value:63,    suffix:'',  label:'Tỉnh thành phủ sóng' },
];

// Tab giới thiệu doanh nghiệp
const BIZ = [
  { tab:'Sứ mệnh', icon:'ph-target', title:'Sứ mệnh',
    body:'Mang hương vị khô bò gia truyền — thơm ngon, an toàn và tử tế — đến với mọi gia đình Việt, biến món ăn vặt quen thuộc thành trải nghiệm đáng nhớ.' },
  { tab:'Tầm nhìn', icon:'ph-eye', title:'Tầm nhìn',
    body:'Trở thành thương hiệu khô bò handmade được yêu thích hàng đầu Việt Nam, nơi truyền thống gặp gỡ sự sáng tạo và niềm vui.' },
  { tab:'Giá trị cốt lõi', icon:'ph-heart', title:'Giá trị cốt lõi',
    body:'Bốn giá trị làm nên PEPE FOOD trong từng sản phẩm:',
    values:['Chất lượng','Tử tế','Truyền thống','Đổi mới'] },
];
