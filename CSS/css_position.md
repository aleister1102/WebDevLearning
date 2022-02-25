<link rel='stylesheet' href='../main.css'>

<div class="title"> 
    <center><h1 class="bigtitle">CSS Position</h1></center>
</div>

# Table of contents

- [Table of contents](#table-of-contents)
- [📌Position](#position)
- [🍓Relative](#relative)
- [🍏Absolute](#absolute)
- [🍋Fixed](#fixed)
- [🍊Sticky](#sticky)

# [📌Position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

Thuộc tính `position` có các giá trị `relative, absolute, fixed, sticky` để thiết lập vị trí cho element. Ngoài ra, nếu muốn hủy thiết lập position thì sử dụng giá trị `initial`.

<img style="background-color: #fff;" src="https://topdev.vn/blog/wp-content/uploads/2020/09/position-trong-css.png">

# 🍓Relative

Một element có `position: relative` sẽ có vị trí không phụ thuộc vào đối tượng nào khác. Tức là nếu chúng ta di chuyển xung quanh, thì nó sẽ lấy vị trí ban đầu của nó làm gốc tọa độ.

<img src="https://s1.o7planning.com/vi/12521/images/51754891.png">

Chúng ta dùng các thuộc tính `top, right, bottom, left` để di chuyển element, và chúng chỉ hoạt động khi có `position`.

Ban đầu:

<img src="./images/pos1.png">

```css
div {
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 5px solid #000;
  box-sizing: border-box;
  background-color: rgb(28, 231, 187, 0.2);
  background-size: 200px; /*offset from the top margin*/
}
```

**Kết quả**:

<img src="./images/pos2.png">

# 🍏Absolute

Element có `position: absolute` sẽ phụ thuộc vào thẻ cha gần nhất có thuộc tính `position` (giống cách mà đơn vị `em` hoạt động).

<img src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-24-at-11.46.02-AM.png?resize=1000%2C648&ssl=1">

> Dùng khi có một đối tượng phụ thuộc vào đối tượng khác.

Giả sử cho đoạn code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <div id="box1">
      <div>
        <div id="box-child"></div>
      </div>
    </div>
  </body>

  <script src="./images/main.js"></script>
</html>
```

```css
#box1 {
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 5px solid #000;
  box-sizing: border-box;
  background-color: rgba(28, 231, 187, 0.2);
  background-size: 200px;
  position: relative;
  left: 30px;
  top: 30px;
}

#box-child {
  width: 50%;
  height: 50%;
  border: 2px solid #000;
  background-color: rgb(238, 60, 223);
  /* position: absolute; */
  /* right: 5px; */
}
```

Ban đầu:

<img src="./images/pos3.png">

```css
#box-child {
  width: 50%;
  height: 50%;
  border: 2px solid #000;
  background-color: rgb(238, 60, 223);
  position: absolute;
  right: 5px;
}
```

Kết quả:

<img src="./images/pos4.png">

# 🍋Fixed

Dùng để cố định vị trí của element trên cửa sổ trình duyệt, cú pháp là `position: fixed`. Điều hướng dùng `top, right, bottom, left` tương tự `relative` và `absolute`.

<img src="https://static-assets.codecademy.com/Courses/Learn-CSS/Display-Position/Fixed.gif">

# 🍊Sticky

Đây là một tính năng đang được thử nghiệm, nó khá giống `fixed`. Tuy nhiên, điều kiện kích hoạt là khi trang web được kéo lên đến một vị trí nào đó, thì element mới trở thành `fixed` ở vị trí đó.

![](https://camo.githubusercontent.com/4441ae3933a9587bc2be847c7e8de133830fa0dee7e27bcb3c3aa82020f48151/687474703a2f2f692e696d6775722e636f6d2f654c7736374a392e676966)

```css
#box1 {
  margin-top: 30px;
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 5px solid #000;
  box-sizing: border-box;
  background-color: rgba(28, 231, 187, 0.2);
  background-size: 200px;
  position: sticky;
  top: 10px;
}
```

Đoạn code trên có ý nghĩa, khi cuộn chuột làm element trượt đến vị trí **10px** tính từ margin-top, element sẽ trở thành fixed. Còn nếu nó đang ở vị trí lớn hơn **10px** tính từ margin-top, nó vẫn sẽ bị trượt đi.
