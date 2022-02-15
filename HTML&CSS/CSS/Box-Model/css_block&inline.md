<link rel='stylesheet' href='../../../main.css'>

<div class="title"> 
    <center><h1 class="bigtitle">CSS Block & Inline Elements</h1></center>
</div>

`<div>` là một **block element**, khi apply style cho nó, kích thước của nó sẽ chiếm trọn một dòng/hàng trên trang Web.

Ngoài ra còn có **inline element**, các element không chiếm trọn một dòng mà chỉ sử dụng phần diện tích vừa đủ để bao quanh content bên trong đó mà thôi.

Các block element và inline element tham khảo ở [đây](https://www.w3schools.com/html/html_blocks.asp).

Một số block element thường gặp là:

- `div, footer, h1, p, ul`.

Một số inline element thường gặp là:

- `a, button, img, span`.

Ảnh dưới đây sẽ minh họa cho điều này:

<img src="box2.png">

## display: block

Nếu muốn một **inline element** trở thành dạng **block element**, ta chỉ cần thêm property `display` và có giá trị là `block`.

```css
a {
  margin: 10px;
  border: 1px solid #000;
  padding: 30px 20px;
  display: block;
}
```

## display: inline-block

Để biến một **inline element** thành một **block element dạng inline** (không xảy ra chồng lề dọc - vertical collapse), chúng ta sử dụng `display: inline-block`:

```css
a {
  margin: 50px;
  border: 1px solid #000;
  padding: 30px 20px;
  display: inline-block;
}
```

Cách này cũng có thể áp dụng cho block element.
