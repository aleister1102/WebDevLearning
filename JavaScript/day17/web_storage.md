<link rel='stylesheet' href='../main.css'>

# Web Storage

**Web Storage** (Lưu trữ web) là một tính năng mới của HTML5 nhằm hỗ trợ cookie trong việc lưu dữ liệu.

**Khuyết điểm của Cookie**:

- File cookie có thể chỉnh sửa bởi người dùng.
- Trước khi có HTML5, cookie lưu dữ liệu người dùng và gửi nó cho server, có thể gây tốn băng thông.
- Cookie có giới hạn dung lượng là 4KB.

**Tính năng của Web Storage**:

- User không thể tìm ra file như cookie để chỉnh sửa, tuy nhiên vẫn có thể chỉnh sửa bằng dev tools.
- Lưu trữ local, không gửi cho server nên không tốn băng thông.
- Dung lượng lớn hơn, tối thiểu 5MB.
- Chỉ được lưu trữ trên một trình duyệt nên không thể truy xuất bằng trình duyệt khác.
- Lưu giữ dưới dạng chuỗi JSON.

> Lưu ý là không lưu các thông tin nhạy cảm như mật khẩu trong Web Storage.

**Ứng dụng của Web Storage**

- Lưu giữ dữ liệu người dùng cho các trang web khác nhau của một phiên làm việc.
- Lưu giữ các sản phẩm mà người dùng cho vào giỏ hàng.
- Trao đổi dữ liệu giữa các page requets hoặc các tab.
- Dùng cho phương thức user authentication.
- Tăng tốc độ thực thi cho trang web khi các dữ liệu tĩnh có thể được lưu ở phía người dùng.
- Có thể sử dụng offline với localStorage.

Có hai loại Web Storage là:

- `sessionStorage`: lưu trữ trong phiên làm việc (từ lúc mở tab đến lúc đóng tab), sẽ mất khi user đóng tab.
- `localStorage`: lưu giữ vĩnh viễn, chỉ mất khi xóa lịch sử.

Dữ liệu được lưu dưới dạng sessionStorage hay localStorage tùy thuộc vào browser và protocol. Dung lượng lưu trữ cũng phụ thuộc vào browser và protocol.

Thường thì nếu trang web muốn loại bỏ dữ liệu khi đóng tab thì dữ liệu sẽ được lưu dưới dạng sessionStorage.

Các phương thức của sessionStorage và localStorage là tương tự nhau. Các phương thức mà thường dùng là: `setItem(), getItem(), removeItem(), clear(), key()`.
