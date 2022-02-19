<link rel='stylesheet' href='../main.css'>

<div class="title"> 
    <center><h1 class="bigtitle">CSS Animation</h1></center>
</div>

# Table of contents

- [Table of contents](#table-of-contents)
- [References](#references)
  - [Documents](#documents)
  - [Cheat Sheets](#cheat-sheets)
  - [Tools](#tools)
- [🎭Transform](#transform)
- [🎥Animations](#animations)
- [🎬Animation Stages](#animation-stages)
- [✨Transition](#transition)

# References

## Documents

> [Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

> [12 great CSS animation resources](https://www.creativebloq.com/advice/5-great-css-animation-resources)

## Cheat Sheets

> [algonquindesign](https://learn-the-web.algonquindesign.ca/topics/css-animations-effects-cheat-sheet/)

## Tools

> [justinaguilar](http://www.justinaguilar.com/animations/#)

> [Button Style Inspiration](https://tympanus.net/Development/ButtonStylesInspiration/)

> [Button Transition Archives](https://tympanus.net/codrops/tag/button/)

# [🎭Transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)

Transform sẽ biến đổi vật thể ban đầu, nhưng không gian mà vật thể chiếm trên trang web vẫn không đổi. Có ba [hàm transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function) thông dụng là `scale()`, `rotate()` và `translate()`.

```scss
element {
  transform: scaleX(2); // Make width become double
  transform: scaleY(0.5); // Make height become half
  transform: scale(2, 2); // Shorthand Form

  transform: rotate(45deg); // Rotate object 45 degree, number can be negative
  transform: rotateX(90deg) | rotateY(90deg); // Object supposed to be disappear
  transform: rotateZ(30deg); // Object rotate 30 degree, can be seen on screen

  transform: translateX(10px); // Move object to the right for 10px
  transform: translate(
    10px,
    -10px
  ); // Move object to the bottom for 10px, to the left for 10px
  transform: translateY(
    50%
  ); // Move to the bottom with distance = 0.5*width of object

  transform: skewX(
    30deg
  ); // Make object skew for 30 deg with horizontal direction
}
```

<img style="background-color: #fff;" src="https://www.w3.org/TR/2012/WD-css3-transforms-20120228/compound_transform.png">

# [🎥Animations](https://www.w3schools.com/css/css3_animations.asp)

Tạo ra animation bằng cách dùng `@keyframes` kèm tên của animation như sau:

```scss
@keyframes animationName {
  from {
    // Initial State CSS
  }
  to {
    // Final State CSS
  }
}
```

Để áp dụng animation cho element thì sử dụng các thuộc tính `animation`:

```scss
element {
  animation-name: animationName;
  animation-duration: 5s;
  animation-timing-function: linear | ease | ease-in;
  animation-delay: 2s | -2s;
  animation-iteration-count: infinite | 3;
  animation-direction: alternate;
  animation-fill-mode: forwards | backwards;
}
```

Dạng rút gọn:

```scss
element {
  animation: animationName 5s linear 2s infinite alternate;
}
```

# 🎬Animation Stages

Nếu animation có nhiều giai đoạn, chúng ta sử dụng như sau:

```scss
@keyframes animationName {
  0% {
    // Changing styles
  }
  99% {
    // Changing styles
  }
  80% {
    // Changing styles
  }
  100% {
    // Changing styles
  }
}
```

Sử dụng `from` và `to` tương đương với **0%** đến **100%**.

# [✨Transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)

Transition dùng để xây dựng các hiệu ứng thay đổi (chẳng hạn hover vào element) một cách linh động và đa dạng hơn (hover thì đổi ngay lập tức).

Để sử dụng transition thì cần phải declare `transition` trước hover:

```scss
// Tranform color smoother.
a {
  transition: all 0.2s linear;
}

a:hover {
  color: pink;
}
```

Thông thường:

<a src="#">Link</a>

Sử dụng transition:

<a src="#" style="transition: all 0.2s linear;">Link</a>

Các thuộc tính của transition là:

```scss
element {
  transition: all 0.2s linear; // Shorthand Form
  transition-property: all, width, height; // Select property to apply transition
  transition-duration: 1s;
  transition-timing-function: linear | ease | ease-in; // Similar to animation
  transition-delay: 1s | initial | inherit;
}
```
