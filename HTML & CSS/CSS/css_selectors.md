<link rel='stylesheet' href='../../main.css'>

<div class="title"> 
    <center><h1 class="bigtitle">CSS Selectors</h1></center>
</div>

- [Id and class](#id-and-class)
  - [Id](#id)
  - [Class](#class)
- [Useful selectors](#useful-selectors)
- [Priority](#priority)
- [Conflicts & Cascade](#conflicts--cascade)
- [Inheritance](#inheritance)

CSS Selector là cách mà chúng ta dùng để chọn ra các element nhằm format style cho chúng.

# Id and class

Để cung cấp khả năng chọn những element đặc thù, ta đánh dấu cho chúng bằng **id** và **class**.

## Id

Id dùng để đánh dấu duy nhất một element. Nói cách khác, các id nằm ở các **element khác nhau không thể có cùng giá trị**.

Chẳng hạn ta có nhiều thẻ `<h1>`. Và ta chỉ cần tô màu đỏ cho heading đầu tiên, thì ta phải đặt id cho nó:

```html
<h1 id="first-heading">Heading</h1>
<h1>Heading</h1>
<h1>Heading</h1>
<h1>Heading</h1>
```

Để chọn id, dùng ký tự `#`.

```css
#first-heading {
  color: red;
}
```

**Kết quả**:

<h1 id="first-heading" style ="color:red">Heading</h1>
<h1>Heading</h1>
<h1>Heading</h1>
<h1>Heading</h1>

## Class

Class để gom các element có cùng lớp chức năng lại với nhau, các class nằm ở các **element khác nhau có thể có cùng giá trị**.

Chẳng hạn ta muốn mọi thẻ `<h2>` đều có màu cam, ta sẽ đặt class cho chúng:

```html
<h2 class="heading2">Heading</h2>
<h2 class="heading2">Heading</h2>
<h2 class="heading2">Heading</h2>
<h2 class="heading2">Heading</h2>
```

Để chọn class, dùng ký tự `.`.

```css
.heading2 {
  color: orange;
}
```

**Kết quả**:

<h2 class="heading2" style="color:orange">Heading</h2>
<h2 class="heading2" style="color:orange">Heading</h2>
<h2 class="heading2" style="color:orange">Heading</h2>
<h2 class="heading2" style="color:orange">Heading</h2>

# Useful selectors

Các selector thông dụng là:

1. Id & class
2. List (Nhiều selector)
3. Descendant (Con tổng quát)
4. Child (Con trực tiếp)
5. Adjacent (Liền kề)
6. Attribute (Kèm theo attribute)
7. Pseudo:

- First & last child (Tag đầu và cuối trong số các tag con)
- First & Last of type (Tag đầu và cuối trong số các tag cùng loại)
- nth child
- nth of type

8. Universal
9. Important

Tham khảo ở [đây](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors).

# Priority

Giả sử cả hai CSS Selector đều là external, và một cái gọi đến một tag kèm theo ID và một cái thì không. Bạn nghĩ cái nào sẽ thắng?

Câu trả lời chính là selector có kèm theo ID. Lý do đơn giản thôi, bởi vì nó specific hơn, nó cụ thể hơn.

Một cách dễ phân biệt hơn, ta đánh điểm số cho các loại CSS

1. Important: > 1000 (hạn chế dùng)
1. Inline: 1000
1. External & Internal:\
   a. ID: 100\
   b. Class: 10\
   c. Tag: 1\
   d. `*` - Chọn tất cả các tag: 0

Selector dưới sẽ có tổng điểm là 1.

```css
div {
  color: red;
}
```

Còn selector này có tổng điểm là 101.

```css
div .heading2 {
  color: orange;
}
```

Do đó, selector thứ hai sẽ được áp dụng cho thẻ có `class="heading2"` bên trong thẻ div, các thẻ còn lại không có `class="heading2"` thì sẽ có màu đỏ.

# Conflicts & Cascade

Nếu hai selector trùng nhau thì bộ quy luật sau sẽ ghi đè lên bộ quy luật trước.

Chẳng hạn ta có

```html
<!--html;-->
<h1>Heading 1</h1>
```

```css
h1 {
  color: red;
}
h1 {
  color: orange;
}
```

Thì kết quả sẽ là

<h1 style="color:orange" style = "color:red">Heading 1</h1>

# Inheritance

Nếu một element cha mang một quy luật CSS nào đó, thì các element con chứa bên trong nó sẽ được kế thừa.

```html
<div>
  This is a box
  <p>Paragraph</p>
</div>
```

```css
div {
  color: red;
}
```

**Kết quả**:

<div style ="color:red">
    This is a box
    <p>Paragraph</p>
</div>
