<link rel='stylesheet' href='../main.css'>

<div class="title"> 
    <center><h1 class="bigtitle">CSS Style</h1></center>
</div>

# Table of contents

- [Table of contents](#table-of-contents)
- [References](#references)
- [🈵Font](#font)
- [🔠Text](#text)
- [📏Distance](#distance)
- [🌈Color Code](#color-code)
  - [rgb(a, b, c)>)](#rgba-b-c)
  - [rgba(a, b, c, alpha)>)](#rgbaa-b-c-alpha)
  - [linear-gradient(direction, startColor, endColor)>)](#linear-gradientdirection-startcolor-endcolor)
- [💗Opacity](#opacity)
- [🌒Box shadow](#box-shadow)

# References

> [CSS Gradient](https://cssgradient.io/)

# [🈵Font](https://developer.mozilla.org/en-US/docs/Web/CSS/font)

Có các thuộc tính để định dạng font cho chữ:

`font-size`: kích thước chữ.\
`font-weight`: độ dày của nét chữ.\
`font-family`: kiểu chữ.

> [Font Playground](https://play.typedetail.com/)

Ví dụ:

```css
p {
  font-size: 25px;
  font-weight: 2px;
  font-family: arial;
}
```

Kết quả:

<p style="font-size: 25px; font-weight: 1px; font-family: arial">
This is a paragraph
</p>

# 🔠Text

[`text-decoration`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration): trang trí cho chữ.\
[`text-transform`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform): chuyển đổi giữa in hoa in thường.\
[`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align): canh giữa chữ trong một element.\
[`text-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow): tạo bóng cho chữ.\
[`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color): màu chữ.

```css
p {
  text-decoration: underline;
  text-transform: capitalize;
  color: orange;
  background-color: blue;
}
```

Kết quả:

<p style="text-decoration: underline;
  text-transform: capitalize;
  color: #0c9aec;
  background-color: white;">
This is a paragraph
</p>

# 📏Distance

[`letter-spacing`](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing): khoảng cách giữa các ký tự.\
[`line-height`](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height): độ cao của dòng, tạo ra khoảng cách giữa các dòng.

# [🌈Color Code](https://css-tricks.com/your-go-to-hex-code-color/)

Về mã màu, thường sẽ có định dạng là `#abcdef`. Với `ab` là thuộc khoảng màu đỏ, `cd` là màu xanh lá và `ef` là màu xanh dương.

Số từ 1 đến f (hệ thập lục phân) biểu thị độ sáng của màu đó, càng về f thì càng sáng, càng về 0 thì càng đậm. Chẳng hạn **#fff** (#ffffff) là màu trắng và **#000** (#000000) là màu đen.

## [rgb(a, b, c)](<https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb()>)

Giá trị trả về của hàm là một mã màu. Với tham số là bộ ba số a, b, c có giá trị từ 0 đến 255.

```html
<p style="color:rgba(255,0,0);">Yellow</p>
```

Kết quả:

<p style="color:rgba(255,255,0);">Yellow</p>

## [rgba(a, b, c, alpha)](<https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgba()>)

Hàm `rgba()` giống `rgb()` nhưng có thêm tham số alpha để mô tả độ đục của màu sắc.

## [linear-gradient(direction, startColor, endColor)](<https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient()>)

Hàm này dùng để tạo ra một hình ảnh có dạng gradient.

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--F7w_snYb--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vda3askm2sbfjl717q9q.png">

Tham số đầu tiên là direction của gradient, có thể là `to left` (từ phải qua trái), `to right` (trái qua phải), `to bottom` (trên xuống dưới), ... Thậm chí direction có thể là `45deg` (nghiêng 45 độ). Hai tham số sau là **màu bắt đầu** và **màu kết thúc** theo direction.

# [💗Opacity](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)

`opacity` có giá trị từ 0 đến 1 để điều chỉnh độ đục của màu sắc.

# [🌒Box shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)

Để tạo bóng cho một element, ta dùng thuộc tính `box-shadow`.

> [Shadow Playground](https://www.cssmatic.com/box-shadow)

Ví dụ:

```css
.div {
  box-shadow: 3px 4px 1px 5px rgba(0, 0, 0, 0.7);
}
```

Ý nghĩa các giá trị:

- Hai giá trị đầu là offset vị trí bóng so với box của element.
- Giá trị thứ ba là blur radius, giá trị càng lớn thì càng mờ.
- Giá trị thứ tư là spread radius, cho biết bóng sẽ lan rộng bao xa.
- Giá trị cuối cùng là màu sắc, thường sử dụng hàm `rgba()`.

Box Shadow có thể có nhiều hiệu ứng, ngăn cách nhau bởi dấu phẩy:

```css
element {
  box-shadow: inset 0 2px 0px #dcffa6, 0 2px 5px #000;
}
```
