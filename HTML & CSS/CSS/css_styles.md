<link rel='stylesheet' href='../../main.css'>

<div class="title"> 
    <center><h1 class="bigtitle">CSS Styles</h1></center>
</div>

- [Font](#font)
- [Text](#text)
- [Distance](#distance)
- [Color](#color)
- [Opacity](#opacity)
- [Box shadow](#box-shadow)


# Font

Có các thuộc tính để định dạng font cho chữ:

`font-size`: kích thước chữ.\
`font-weight`: độ dày của nét chữ.\
`font-family`: kiểu chữ.

```css
p {
  font-size: 25px;
  font-weight: 2px;
  font-family: arial;
}
```

**Kết quả**:

<p style="font-size: 25px; font-weight: 1px; font-family: arial">
This is a paragraph
</p>

# Text

`text-decoration`: trang trí cho chữ.
`text-transform`: chuyển đổi giữa in hoa in thường.
`color`: màu chữ.
`background-color`: màu nền của chữ.

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

# Distance

`letter-spacing`: khoảng cách giữa các ký tự.
`line-height`: khoảng cách giữa các dòng.

# Color

Về mã màu, thường sẽ có định dạng là `#abcdef`. Với `ab` là thuộc khoảng màu đỏ, `cd` là màu xanh lá và `ef` là màu xanh dương.

Tức chúng là thông số thể hiện cho màu RGB, chẳng hạn #550000 thì là màu đỏ, vì các giá trị ở cdef đều là 0. Lấy một ví dụ khác chẳng hạn như #00ff00, thì là màu xanh lá.

Và số từ 1 đến f (hệ thập lục phân) biểu thị độ sáng của màu đó, càng về f thì càng sáng, càng về 0 thì càng đậm. Nếu mọi giá trị là 0 hoặc gần 0 (khoảng 1 đến 2), thì là màu đen. Ngược lại, nếu mọi giá trị là f hoặc gần f (d đến e), thì là màu trắng.

# Opacity

Thay vì dùng hàm `rgba()` ta có thể dùng thuộc tính `opacity` có giá trị từ 0 đến 1 để điều chỉnh độ đục của màu sắc.

# Box shadow

Để tạo bóng cho một element, ta dùng thuộc tính `box-shadow`.

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

[Công cụ preview shadow](https://www.cssmatic.com/box-shadow).
