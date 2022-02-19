<link rel='stylesheet' href='../../../main.css'>

<div class="title"> 
    <center><h1 class="bigtitle">Sass</h1></center>
</div>

# Table of contents

- [Table of contents](#table-of-contents)
- [👗Sass](#sass)
- [👠Variable](#variable)
- [💄Nested Code](#nested-code)
- [💍Mixin](#mixin)
- [💋For](#for)
- [👛Import](#import)

# [👗Sass](https://sass-lang.com/)

SASS là một ngôn ngữ mở rộng của CSS, đồng thời là một tiền xử lý CSS. Sass là một thư viện dùng để biên dịch SASS thành CSS.

Để có thể biên dịch một file Sass thành CSS thì sử dụng câu lệnh

```ps
sass source/stylesheets/index.scss build/stylesheets/index.css --watch
```

`--watch` để giúp những thay đổi bên file SCSS có thể compile ngay lập tức sau khi save thành CSS.

Thực chất, những đoạn code dưới đây có chứa dấu ngoặc nhọn `{}` và dấu `;` nên nó là code SCSS. Code SASS không có `{}` và `;` cũng như áp dụng các indent đầu dòng. Tuy nhiên, do tương tự nhau (SCSS ra đời sau nhằm khiến cho SASS trông giống CSS) nên ta có thể thay thế SCSS và SASS cho nhau.

# [👠Variable](https://sass-lang.com/documentation/variables)

Biến trong SCSS sử dụng dấu `$`:

```scss
$textColor: #fff;

p {
  color: $textColor;
}
```

# [💄Nested Code](https://sass-lang.com/documentation/style-rules#nesting)

Giả sử cho đoạn code HTML lồng nhau:

```html
<div class="box">
  <div class="box__item">
    <h3 class="box__item-header">Header</h3>
    <div class="box__item-cotent">Content</div>
  </div>
</div>
```

Ta có thể viết rules CSS lồng nhau trong SCSS:

```scss
.box {
  margin: 16px;
  padding: 8px;
  background-color: aquamarine;

  // ` & ` plays as ".box"
  &__item {
    padding: 4px;
    background-color: black;
    font-size: 16px;
    color: #fff;
    &-header {
      font-size: 30px;
      font-weight: bold;
    }
  }
}
```

# [💍Mixin](https://sass-lang.com/documentation/at-rules/mixin)

Mixin có thể xem như một hàm, bên trong nó là một hoặc nhiều thuộc tính bất kỳ với giá trị là đối số đầu vào.

```scss
// Declaration
@mixin bgColor($color) {
  background-color: $color;
}

.box {
  margin: 16px;
  padding: 8px;

  // Usage
  @include bgColor(aquamarine);
}
```

Mixin cung cấp khả năng tái sử dụng các đoạn code cùng property nhưng khác giá trị ở nhiều nơi khác nhau.

Có thể sử dụng câu lệnh điều kiện trong mixin:

```scss
@mixin mixinName($var) {
  @if $var == "value" {
    // Code goes here
  }
}
```

Tham số của mixin có thể mang giá trị default:

```scss
@mixin size($width, $height: $width) {
  width: $width;
  // If $height is not provided, it will equal to $width
  height: $height;
}
```

Sử dụng với Responsive:

```scss
@mixin minWidth($value) {
  @media screen and (min-width: $value) {
    display: none;
  }
}
```

# [💋For](https://sass-lang.com/documentation/at-rules/control/for)

Cú pháp vòng lặp như sau:

```scss
@for $i from 1 through 4 {
  .dot-loading div:nth-child(#{$i}) {
    @include animationDelay(-0.12s * $i);
  }
}
```

# [👛Import](https://sass-lang.com/documentation/at-rules/import)

Khi code dự án lớn, ta cần tách các file ra để chứa những dòng code chung một mục đích, chẳng hạn ta có file `__variables.scss` chứa biến và `__mixins.scss` chứa các mixin.

Muốn import hai file này vào file SCSS chính nhằm compile ra `style.css` thì sử dụng `@import: "pathOfFile"`

```scss
@import: "./__variable.scss";
@import: "./__mixins.scss";
```

Có thể file `__mixins.scss` cần sử dụng biến từ file `__variables.scss` nên ta import nó đứng sau `__variables.scss`.
