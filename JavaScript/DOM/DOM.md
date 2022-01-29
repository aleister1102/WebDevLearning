<link rel='stylesheet' href='../main.css'>

# DOM

**DOM** là viết tắt của Document Object Model, là một tiêu chuẩn của W3C đưa ra. DOM biểu diễn văn bản HTML thành dạng cấu trúc cây. Cách biểu diễn này nhằm giúp trình duyệt hiển thị nội dung trang Web cho người dùng.

Cấu trúc cây của DOM gồm ba thành phần: element, attribute và text. Mỗi phần tử trong cấu trúc này ta gọi là một node.

<img src = "dom1.png">

JS sử dụng một giao diện lập trình DOM (DOM API) để có thể **truy cập và chỉnh sửa** các element, attribute và text của văn bản HTML một cách linh động. Lưu ý là DOM không thuộc JS.

# Document Object

Để truy cập và chỉnh sửa element, attribute và text thì cần thông qua đối tượng có tên là `document`. Đối tượng này đại diện cho toàn bộ website.

Phương thức đầu tiên là `document.write('text')`. Khi gọi phương thức, trang web sẽ hiển thị text.

# Get Element

Có thể lấy ra các node là element có trong DOM, chúng ta sẽ lấy thông qua: **ID, class, tag, CSS selector, HTML collection**.

## By Id

Giả sử có đoạn code HTML dưới:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>

  <body>
    <h1 id="header">HTML Document</h1>
  </body>
</html>
```

Chúng ta cần lấy ra thẻ `<h1>` có id là `"header"`. Thì sử dụng phương thức `getElementById("id")` với id cần lấy truyền vào làm đối số:

```js
const elementId = document.getElementById("header");
console.log(elementId);
// => h1#header
```

Chú ý rằng, `elementNode` là một đối tượng thuộc lớp đối tượng element. Đối tượng này có nhiều thuộc tính và phương thức, id chỉ là một trong số đó.

## By Class Name

Để lấy theo class thì dùng phương thức `getElementsByClassName(className)` với đối số là class cần lấy.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>

  <body>
    <h1 class="heading">HTML Document</h1>
    <h1 class="heading">HTML Document</h1>
    <h1 class="heading">HTML Document</h1>
    <h1 class="heading">HTML Document</h1>
  </body>
</html>
```

```js
const elementsClass = document.getElementsByClassName("heading");
console.log(elementsClass);
// => HTMLCollection(5) [h1.heading, h1.heading, h1.heading, h1.heading, h1.heading]
```

**HTMLCollection** bản chất là một mảng, chỉ là không có các phương thức như `map`, `filter`,...

## By Tag Name

Cũng theo cách tương tự, để lấy element theo tên tag thì sử dụng phương thức `document.getElementsByTagName("tagName")`:

```js
const elementsTag = document.getElementsByClassName("h1");
console.log(elementsTag);
// => HTMLCollection(5) [h1.heading, h1.heading, h1.heading, h1.heading, h1.heading]
```

## By CSS Selector

Sử dụng `document.querySelector("selector")` để lấy element theo CSS selector. Phương thức này chỉ chọn một element và chỉ element đầu tiên nếu có nhiều element match.

Để chọn nhiều element dựa vào CSS selector thì sử dụng `document.querySelectorAll("selector")`.

## By HTML Selection

Giả sử cho đoạn code HTML có các tag `<form>`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>

  <body>
    <form id="form-1">HTML Document</form>
    <form id="form-2">HTML Document</form>
    <form id="form-3">HTML Document</form>
  </body>

  <script src="../main.js"></script>
</html>
```

Các tag đặc biệt như `<form>` hoặc `<anchor>` thuộc về HTML Selection, không cần truy cập thông qua id, class hay tag mà có thể truy cập bằng:

`document.forms`

```js
console.log(document.forms);
// => HTMLCollection(3) [form#form-1, form#form-2, form#form-3, form-1: form#form-1, form-2: form#form-2, form-3: form#form-3]
```

Thuộc tính này sẽ trả về mảng `forms` chứa các tag form có trong HTML. Nếu các tag này có id, có thể xem các id đó là key và truy cập thông qua key:

```js
console.log(document.forms["form-1"]);
// => form#form-1
```

Nếu id có thể đặt cho tên biến, thì không cần sử dụng ngoặc vuông:

```html
<form id="formOne">HTML Document</form>
```

```js
console.log(document.forms.formOne);
// => form#formOne
```
