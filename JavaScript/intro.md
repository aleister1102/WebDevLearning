<link rel='stylesheet' href='../main.css'>

<div class="title">
    <center><h1 class="bigtitle">Introduction</h1></center>
</div>

- [Dev Tool](#dev-tool)
- [Console Log](#console-log)
- [Comment](#comment)
- [Adding JS to Web Page](#adding-js-to-web-page)
  - [Inline](#inline)
  - [Internal](#internal)
  - [External](#external)
- [Data types](#data-types)
- [Variables](#variables)

# Dev Tool

**Phím tắt mở Dev Tool**: `ctrl + shift + I`

# Console Log

Câu lệnh `console.log("Hello World!")` cũng giống như `cout<<"Hello World"` bên JS.

> Dấu `""` có thể thay thế thành `''` hoặc ` `` `.

Cũng có thể truyền vào nhiều tham số như `printf` của C hoặc `print` của Python. Tham số cũng có thể là số.

```js
console.log("Hello World");
console.log("Hello World", "I am Wjbu chúa");
console.log("Hello World", 1 + 1, " = 3?");
```

# Comment

Comment trong JS tương tự như C/C+.

# Adding JS to Web Page

## Inline

Code JS là giá trị thuộc tính của tag HTML.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <button onclick="alert(`Hello world!`)">Touch me senpai</button>
  </body>
</html>
```

## Internal

Dùng tag `<script></script>` để chứa đoạn code JS bên trong. Có thể đặt tag `<script></script>` ở `head` hoặc `body`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <script>
      console.log("Hello World!");
    </script>
  </body>
</html>
```

## External

Cũng dùng tag `<script></script>` nhưng dùng thêm thuộc tính `src` để khai báo đường dẫn đến file JS. Có thể có nhiều file JS được liên kết bằng cách này.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <script src="home.js"></script>
  </body>
</html>
```

# Data types

1. Numbers: số nguyên và số chấm động.
2. Strings: chuỗi, là các ký tự nằm trong dấu ` `` `, `''` hoặc `""`.
3. Booleans: `true` hoặc `false`.
4. Undefined: nếu khai báo biến mà không gán giá trị, nó sẽ có giá trị `undefined`. Tương tự, hàm không trả về gì thì nó sẽ trả về `undefined`.
5. Null: là một giá trị rỗng.

> Có thể dùng phương thức `typeof` để kiểm tra kiểu dữ liệu, chẳng hạn như:

```js
console.log(typeof 5); // true
console.log(typeof 6.5); // number
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof undefined); // undefined
```

# Variables

Có ba kiểu khai báo biến là `let`, `const` và `var`. Ta chỉ bàn đến `let` và `const` ở thời điểm hiện tại.

`let` là khai báo biến có thể thay đổi.

`const` là để khai báo hằng số.

Các convention khai báo biến của JS tương tự C/C++, dùng **camelCase**.
