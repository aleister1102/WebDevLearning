<link rel='stylesheet' href='../../main.css'>

<div class="title">
    <center><h1 class="bigtitle">Scopes</h1></center>
</div>

# Table of Contents

- [Table of Contents](#table-of-contents)
- [🔭Scope](#scope)
- [🌀Window Scope](#window-scope)
- [🌐Global Scope](#global-scope)
- [🗾Local Scope](#local-scope)

# [Scope](https://viblo.asia/p/tim-hieu-sau-hon-ve-scope-javascript-Qbq5QrRwKD8)

Có ba loại scope (phạm vi) của biến trong Javascript, là **Window**, **Global** và **Local**. Tương tự như C/C++ ở lập trình hàm. Ta thường không sử dụng các biến toàn cục mà đóng gói tất cả vào các khối lệnh và sử dụng biến cục bộ.

# 🌀Window Scope

Đây là cách một biến có window scope được khai báo và khởi tạo.

```js
a = 7; //Window scope
b = 8; // Window Scope
```

Window scope là phạm vi hoạt động của biến trong cửa sổ trình duyệt. Nó vượt ra ngoài một file, trong ghi global scope chỉ có giá trị trong một file.

# 🌐Global Scope

Khai báo biến bằng `var` sẽ có **global scope** hoặc **function scope**. Nếu biến var được khai báo bên ngoài hàm hoặc đối tượng thì nó mang global scope. Còn khai báo trong hàm thì nó chỉ có phạm vi trong hàm đó, hay function scope.

```js
function f() {
  var a = 9;
  console.log(a); // 9
}
console.log(a); // a is not defined
```

Từ khóa `var` hỗ trợ **hoisting**, JS engine khi thông dịch sẽ đưa các câu lệnh khai báo lên trên đầu.

```js
a = 10;
var a;
```

Đoạn code trên tương đương với:

```js
var a;
a = 10;
```

# 🗾Local Scope

Khai báo bằng `let` và `const` mang tính chất **block scope** (hay **local scope**), tức là chúng có phạm vi hoạt động trong một khối lệnh nào đó. Khối lệnh có thể là hàm, vòng lặp hoặc câu lệnh điều kiện.

`let` dùng để khai báo những tên biến mà chúng ta muốn **reassign**, tức gán lại cho chúng dùng các toán tử gán, chẳng hạn như `=`, `+=`, `-=`, ...
`const` dùng để khai báo những tên biến không thể gán lại, chẳng hạn như một mảng hoặc hàm.
