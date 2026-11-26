# Tam Ngữ: cài lên iPhone

## 1. Đưa lên GitHub Pages (miễn phí, một lần)
1. Tạo tài khoản GitHub, bấm **New repository**, đặt tên `tamngu`, chọn **Public**.
2. Bấm **uploading an existing file**, kéo thả toàn bộ nội dung thư mục này (index.html, app.js, styles.css, sw.js, manifest.webmanifest, thư mục data và icons) rồi **Commit**.
3. Vào **Settings → Pages**, phần Source chọn **Deploy from a branch**, branch `main`, thư mục `/ (root)`, bấm **Save**.
4. Sau 1–2 phút, trang chạy tại `https://<tên-bạn>.github.io/tamngu/`.

## 2. Cài lên iPhone
1. Mở link bằng **Safari**.
2. Bấm **Chia sẻ → Thêm vào Màn hình chính**.
3. Mở app từ biểu tượng Tam Ngữ. Mở thử một lần khi có mạng, sau đó app dùng được offline.

## 3. Giọng đọc chất lượng cao (offline)
Cài đặt → Trợ năng → Nội dung được đọc → Giọng nói → tải bản **Nâng cao** cho:
- Tiếng Trung (Đài Loan), ví dụ Meijia
- Tiếng Thái, ví dụ Kanya
- Tiếng Nhật, ví dụ Kyoko hoặc O-ren

Sau đó chọn giọng trong Tam Ngữ → Cài đặt → Giọng đọc.

## 4. Lưu ý
- Dữ liệu (tiến độ, thẻ ôn, sổ tay) lưu ngay trên điện thoại. Vào Cài đặt → Sao lưu định kỳ.
- Tính năng "Nói để máy chấm" cần mạng. Nghe, nhại, ghi âm đều chạy offline.
- Muốn sửa hoặc thêm câu mẫu vào giáo trình: sửa các file trong thư mục `data/`, rồi tải lại lên GitHub.
  Khi cập nhật, đổi `tamngu-v1` trong `sw.js` thành `tamngu-v2` để điện thoại nhận bản mới.
