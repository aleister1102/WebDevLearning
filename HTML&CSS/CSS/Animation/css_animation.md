<link rel='stylesheet' href='../../../main.css'>

<div class="title"> 
    <center><h1 class="bigtitle">CSS Animations</h1></center>
</div>

# Table of contents

- [Table of contents](#table-of-contents)
- [References](#references)
  - [Documents](#documents)
  - [Cheat Sheets](#cheat-sheets)
  - [Tools](#tools)
- [Animations](#animations)
- [Stages](#stages)

# References

## Documents

> [Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

> [12 great CSS animation resources](https://www.creativebloq.com/advice/5-great-css-animation-resources)

## Cheat Sheets

> [algonquindesign](https://learn-the-web.algonquindesign.ca/topics/css-animations-effects-cheat-sheet/)

## Tools

> [justinaguilar](http://www.justinaguilar.com/animations/#)

# [Animations](https://www.w3schools.com/css/css3_animations.asp)

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

# Stages

Nếu animation có nhiều giai đoạn, chúng ta sử dụng như sau:

```scss
@keyframes animationName {
  0% {
    // Changing styles
  }
  40% {
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
