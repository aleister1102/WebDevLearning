<link rel='stylesheet' href='../../main.css'>

<div class="title">
    <center><h1 class="bigtitle">HTML</h1></center>
</div>

- [What is HTML?](#what-is-html)
  - [Tag - element](#tag---element)
  - [Attributes](#attributes)
  - [Nested tags](#nested-tags)
- [Web page structure](#web-page-structure)
- [Comments in HTML](#comments-in-html)

# What is HTML?

HTML là viết tắt của **Hyper Text Markup Language**. Nó không phải là ngôn ngữ lập trình mà chỉ là ngôn ngữ đánh dấu (siêu văn bản). Nhiệm vụ của nó sẽ đánh dấu từng phần của văn bản, những phần được đánh dấu này sẽ được CSS và JS xử lý.

Đồng thời HTML giúp phân chia các phần trong văn bản nhằm xây dựng nên cấu trúc trang web.

## Tag - element

Chúng ta xây dựng và điều khiển các trang HTML bằng các **tag**, là các thẻ mà mang một một chức năng cụ thể.

Tag kết hợp với **content** (nội dung) và **attribute** (thuộc tính) để tạo thành một **element**.

**Ví dụ**:

```html
<h1>heading</h1>
```

Ở ví dụ trên, có thể thấy một element bao gồm một **opening tag**, content và một **closing tag**. Content và attribute không phải là thành phần bắt buộc của một element.

```html
<openingTag>content</closingTag>
```

Một số tag không có opening tag hoặc closing tag hay thậm chí không có content, chúng được gọi là **single tag** (tag đơn).

Chẳng hạn tag `<br>` là một single tag.

## Attributes

Attribute dùng để cung cấp thêm thuộc tính và thông tin cho tag.

Một số attribute chỉ tồn tại ở vài tag nhất định, trong khi số khác lại có ở mọi tag (ta gọi chúng là **global attributes**). Chẳng hạn attribute `class` có ở mọi tag.

Attribute nằm trong opening tag, cú pháp của nó là:

```html
<tagName attribute="value">content</tagName>
```

**Ví dụ**:

```html
<div class="commentBox">This is a box</div>
```

Có thể sử dụng nhiều attribute hoặc một attribute có thể có nhiều giá trị, chúng đều được phân biệt nhau bởi dấu cách:

```html
<div class="commentBox commentBox2" title="Box">This is a box</div>
```

## Nested tags

Các tag có thể lồng nhau:

```html
<body>
  <div class="commentBox">This is a box</div>
</body>
```

# Web page structure

Chúng ta sẽ bắt đầu xây dựng một trang web bằng cách tạo ra một file có tên là **index.html**.

Sở dĩ chọn tên index vì nó là file chỉ mục, lúc mà web browser quét qua toàn bộ các trang web thì nó sẽ tìm **index.html** và xem như là homepage (trang chủ) của web site.

Một dòng code mà mọi file HTML đều có là:

```html
<!DOCTYPE html>
```

Dòng này có chức năng nói với web browser rằng: “Ê, tao là tài liệu HTML đây, dưới đây tao sẽ trình bày một đống ngôn ngữ siêu văn bản đó! Hãy duyệt tao dưới dạng HTML nha”.

Cấu trúc đơn giản là:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>

  <body>
    <div id="box">BOX</div>
  </body>
</html>
```

Có thể thấy, một file HTML gồm duy nhất một thẻ `<html>` chứa thẻ `<head>` và thẻ `<body>`.

Thẻ `<head>` dùng để mô tả các thông tin ngoài lề của trang web như tiêu đề, keyword tìm kiếm, ... Những thông tin này sẽ không hiển thị lên trang web.

Thẻ `<body>` dùng để hiển thị nội dung chính của trang web.

# Comments in HTML

Comment trong html có cú pháp:

```html
<!-- -->
```

