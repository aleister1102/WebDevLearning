<link rel='stylesheet' href='../../../main.css'>

<div class="title"> 
    <center><h1 class="bigtitle">CSS Flexbox</h1></center>
</div>

# Flexbox Model

<img src="flex1.png">

Lưu ý là main size và cross size lần lượt song song với main axis và cross axis.

# Flexbox Properties

Các thuộc tính của Flexbox bao gồm:

```css
.container {
  /*Khai báo sử dụng flexbox*/
  display: flex | inline-flex;
  /*Set chiều sắp xếp của các items*/
  flex-direction: row /*(default)*/ | column;
  /*Xuống dòng các items*/
  flex-wrap: nowrap | wrap | wrap-reverse;
  /*Dạng ngắn gọn của direction và wrap*/
  flex-flow: keyword(s);
  /*Set kích thước cho main size*/
  flex-basis: lenght;
  /*Căn chỉnh các items theo phương hướng của main axis*/
  justify-content: flex-start | flex-end | center | space-between | space-around;
  /*Thuộc tính trên dùng để set cho container, thuộc tính này set cho items*/
  justify-self: flex-start | flex-end | center;
  /*Tương tự justify-content như theo hướng của cross axis*/
  align-content: flex-start | flex-end | center;
  /*Tương tự justify-self*/
  align-self: flex-start | flex-end | center;
  /*Điều chỉnh kích thước main size*/
  flex-grow: number;
  /*Ngược lại với flex-grow*/
  flex-shrink: number;
  /*Dạng ngắn gọn của basis, grow và shrink*/
  flex: number(s);
  /*Thứ tự của các items*/
  order: number;
}
```
