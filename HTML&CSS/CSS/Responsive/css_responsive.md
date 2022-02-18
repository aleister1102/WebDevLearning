<link rel='stylesheet' href='../../../main.css'>

<div class="title"> 
    <center><h1 class="bigtitle">CSS Responsive</h1></center>
</div>

# Table of contents

- [Table of contents](#table-of-contents)
- [🌞Responsive](#responsive)
  - [Break Points](#break-points)
  - [Mobile first & Desktop first](#mobile-first--desktop-first)
    - [Mobile first `>=`](#mobile-first-)
    - [Desktop first `<`](#desktop-first-)
  - [IE Browser](#ie-browser)

# [🌞Responsive](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)

Lập trình **responsive** nhằm thay đổi giao diện trang web sao cho phù hợp với mọi kích thước màn hình.

Để thiết lập responsive cho trang web, ta sử dụng **Media Queries**.

Cú pháp của [Media Queries](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp) là:

```scss
@media keyword mediatypes and (mediafeature and|or|not mediafeature) {
  // Change layout
  // Change background
  // Change font size,...
}
```

- keyword: `not`, `only`, `and`, `or`.
- mediatypes: `print`, `screen`, `speech`, `all` (default).
- mediafeature: `min-width`, `max-width`,...

Thông thường thì `@media screen` là được sử dụng nhiều nhất, ngầm hiểu sử dụng keyword `only`.

```css
@media screen and (min-width: 768px) {
  .box {
    display: none;
  }
}
```

Đoạn code trên có ý nghĩa, nếu chiều ngang màn hình đạt tối thiểu **768px** thì element có class là `box` sẽ bị ẩn đi. Con số **768px** gọi là **break point**.

## Break Points

Một số break points thông dụng (chiều ngang):

- 320
- 480
- 768
- 1024
- 1280
- 1366
- 1448
- 1600
- 1920

## Mobile first & Desktop first

Có hai hướng xây dựng responsive:

- Xây dựng cho mobile rồi mở rộng dần ra cho desktop.
- Xây dựng cho desktop rồi thu hẹp dần xuống cho mobile.

### Mobile first `>=`

Đối với mobile first, ta cần lưu ý từ khóa: `min`.

Khi chiều ngang màn hình vượt quá **768px**, màn hình không còn là của mobile, ta sẽ sử dụng đoạn code như ở trên:

```scss
@media screen and (min-width: 768px) {
  // Change layout
  // Change background
  // Change element size,...
}
```

Khi chiều ngang đạt tối thiểu **1024px**, là chiều ngang của Ipad Pro (tablet), ta sẽ code:

```scss
@media screen and (min-width: 1024px) {
  // Change layout
  // Change background
  // Change element size,...
}
```

Tương tự tăng dần kích thước đến desktop.

> Mobile first thì số lớn hơn ở dưới cùng.

### Desktop first `<`

Đối với desktop first thì ngược lại, ta sử dụng từ khóa `max` và break point trừ đi một giá trị (phủ định của mobile first).

Chẳng hạn khi kích thước trở thành của tablet:

```scss
@media screen and (max-width: 1023px) {
  // Change layout
  // Change background
  // Change element size,...
}
```

Giảm dần xuống mobile:

```scss
@media screen and (min-width: 767px) {
  // Change layout
  // Change background
  // Change element size,...
}
```

> Desktop first thì số nhỏ hơn ở dưới cùng.

## IE Browser

[Trình duyệt IE 6-9 vẫn chưa hỗ trợ Media Queries](https://caniuse.com/css-mediaqueries), do đó, ta cần thêm một file JS thuộc thư viện Respond.js vào file HTML như sau:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.3.0/respond.min.js"></script>
```

Đây gọi là Polyfill.

Tuy nhiên, các trình duyệt khác đã hỗ trợ thì không cần sử dụng file trên, ta có thể dùng HTML Conditional Comment, dành riêng cho Internet Explorer:

```html
<!--[if IE 6]>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.3.0/respond.min.js"></script>
<![endif]-->
```

Đoạn code trên có nghĩa: nếu là trình duyệt IE6 thì enable đoạn code của thẻ `<script>`.

Thêm chữ `lte` (less than or equal) để trở thành IE <= 9.

```html
<!--[if lte IE 9]>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.3.0/respond.min.js"></script>
<![endif]-->
```
