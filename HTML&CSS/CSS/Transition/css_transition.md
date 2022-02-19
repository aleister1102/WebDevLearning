<link rel='stylesheet' href='../../../main.css'>

<div class="title"> 
    <center><h1 class="bigtitle">CSS Transition</h1></center>
</div>

# Table of contents

- [Table of contents](#table-of-contents)
- [References](#references)
- [✨Transition](#transition)
- [🎉Properties](#properties)

# References

> [Button Style Inspiration](https://tympanus.net/Development/ButtonStylesInspiration/)

> [Button Archives](https://tympanus.net/codrops/tag/button/)

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

# 🎉Properties

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
