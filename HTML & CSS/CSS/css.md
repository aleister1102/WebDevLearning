<link rel='stylesheet' href='../../main.css'>

<div class="title">
    <center><h1 class="bigtitle">CSS</h1></center>
</div>

- [What is CSS?](#what-is-css)
- [CSS in HTML](#css-in-html)
- [CSS units](#css-units)
  - [Absolute](#absolute)
  - [Relative](#relative)
- [CSS pseudo classes](#css-pseudo-classes)
- [CSS pseudo elements](#css-pseudo-elements)
- [CSS variables](#css-variables)
- [CSS functions](#css-functions)
  - [rgb()](#rgb)
  - [calc()](#calc)
  - [attr()](#attr)

# What is CSS?

CSS là viết tắt của **Cascading Style Sheet**, là các tập tin định kiểu theo tầng. Chúng kiểm soát cách thể hiện HTML trên trang web.

CSS chỉ đơn giản là **tập hợp các quy luật** dùng để áp dụng style cho các element của HTML. Mỗi quy luật sẽ chọn một hoặc nhiều element để định dạng style cho nó.

# CSS in HTML

Để thêm CSS vào tập tin HTML, có ba cách: **inline**, **internal**, **external**.

1. **Inline**: thêm vào thông qua attribute `style`.

```html
<h1 style="color:red">Heading</h1>
```

**Kết quả**:

<h1 style="color:red">Heading</h1>

2. **Internal**: thêm vào thông qua thẻ `<style>`.

```html
<style>
  h1 {
    color: red;
  }
</style>
```

3. **External**: thêm vào bằng cách liên kết đến file CSS bên ngoài bằng thẻ `<link>`.

```html
<!--html-->
<link rel="stylesheet" href="main.css" />
```

```css
/*css*/
h1 {
  color: red;
}
```

# CSS units

CSS có hai đơn vị là **absolute** (tuyệt đối) và **relative** (tương đối)

## Absolute

Các đơn vị tuyệt đối là các đơn vị không bị thay đổi khi mọi thứ xung quanh bị thay đổi (chẳng hạn như kéo dãn cửa sổ trình duyệt).

**Pixel**

- `px`. Độ phân giải càng cao thì một pixel sẽ chiếm nhiều điểm ảnh hơn, tuy nhiên mặc định thì một pixel tương ứng với một điểm ảnh.

## Relative

Các đơn vị tương đối này phụ thuộc vào các phần tử xung quanh nó. Khi cửa sổ trình duyệt kéo dãn thì nó sẽ có kích thước thay đổi theo.

**Percent**

`%`, có kích thước phụ thuộc vào thẻ chứa nó. Chẳng hạn ta có ví dụ:

```html
<div>
  <h1></h1>
</div>
```

```css
h1 {
  width: 50%;
}
```

Thẻ `<h1>` sẽ có chiều ngang bằng 50% thẻ chứa nó (thẻ `<div>`).

**Rem**

`rem`, có kích thước phụ thuộc vào thẻ `<html>`. Chẳng hạn:

```css
html {
  font-size: 40px;
}
p {
  font-size: 1rem;
}
```

- Giá trị `font-size` của thẻ `<p>` là 40px, 2rem sẽ là 80px.

- Nếu `font-size` của thẻ `<html>` là 20px, thì thẻ `<p>` cũng là 20px.

**Em**

`em`, có kích thuộc phụ thuộc vào thẻ gần nhất chứa nó mà có thuộc tính được liệt kê.

```html
<body>
  <div>
    <h1></h1>
  </div>
</body>
```

```css
body {
  font-size: 20px;
}
div {
}
h1 {
  font-size: 1em;
}
```

Đoạn code trên, h1 sẽ phụ thuộc vào thẻ `<body>` vì nó có chứa `font-size`, mặc dù `<body>` không phải là thẻ gần `<h1>` nhất.

**Viewport**

`vw` phụ thuộc vào chiều ngang cửa sổ trình duyệt. Giá trị 1vw tương đương 1% chiều ngang trình duyệt.

`vh` phụ thuộc vào chiều dọc cửa sổ trình duyệt. Giá trị 100vh tương đương 100% chiều dọc trình duyệt.

# CSS pseudo classes

Lớp giả dùng để định nghĩa một trạng thái nào đó của element (hover, visited, ...).

1. `:root`: tham chiếu đến thẻ `<html>`, thường dùng để khai báo biến toàn cục.

```css
:root {
  --globalColor: red;
}
```

2. `:hover`: các thuộc tính chỉ kích hoạt khi **trỏ chuột** vào element.

```css
p:hover {
  font-size: 20px;
}
```

3. `:active`: các thuộc tính kích hoạt khi **bấm và giữ chuột**.
4. `:visited`: kích hoạt khi đường **link đã được bấm vào**.

# CSS pseudo elements

Dùng CSS ta cũng có thể tạo được element, bằng cách sử dụng pseudo elements.

1. `::before`: thêm phần tử giả vào trước các phần tử con của element bất kỳ. Thuộc tính `content` là bắt buộc.

```html
<div>
  <p>This is paragraph</p>
</div>
```

```css
div::before {
  content: "";
  width: 100px;
  height: 200px;
  background-color: red;
}
```

Đoạn code HTML tương đương:

```html
<div>
  :before
  <p>This is paragraph</p>
</div>
```

Tương tự đối với phần tử giả `::after`, nó sẽ thêm một element phía sau các phần tử con của một element.

2. `::first-letter`, biến chữ cái đầu trong content của một element thành một element. Thường dùng để phóng to chữ cái đầu của đoạn văn trong các bài báo. Ngoài ra còn có `::first-line`.

3. `::selection`, kích hoạt CSS khi bôi đen đoạn văn bản.

# CSS variables

Có thể đặt biến trong CSS bằng cách sử dụng pseudo class. Để sử dụng thì gọi hàm `var(varName)` và truyền vào tên biến nhằm lấy giá trị của nó.

```css
:root {
  --variable: red; /*global*/
}
h1 {
  color: var(--variable);
}
```

Biến ở `root` là biến **global**, biến định nghĩa bên trong CSS rule là **local**:

```css
h1 {
  --mycolor: orange; /*local*/
  color: var(--mycolor);
}
```

# CSS functions

## rgb()

Hàm `rgb()` giống `rgba()` nhưng không có tham số alpha. Tuy nhiên nó không có độ trong suốt và không nhìn xuyên qua được giống `rgba()`.

## calc()

Hàm `calc()` dùng để tính toán. Chẳng hạn:

```css
h1{
  font-size = calc(50% + 20px);
}
```

## attr()

Hàm `attr()` dùng để lấy giá trị của attribute trong một element, thường sử dụng kèm với pseudo class:

```html
<a href="http://example.com">Example</a>
```

```css
a:after {
  content: "(" attr(href) ")";
}
```

Đoạn code CSS làm đoạn code HTML trở thành:

```html
<a href="http://example.com">Example(http://example.com)</a>
```

Trong trường hợp không phải thẻ `<a>`, ta không cần cặp dấu `"()"`.
