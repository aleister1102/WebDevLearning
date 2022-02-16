<link rel='stylesheet' href='../../main.css'>

<div class="title">
    <center><h1 class="bigtitle">HTML Semantic Tags</h1></center>
</div>

# Table of contents

- [Table of contents](#table-of-contents)
- [🔖Semantic Tags](#semantic-tags)
- [📰Article](#article)
- [📝Aside](#aside)
- [🖼️Figure](#️figure)
- [🦶Footer](#footer)
- [🤯Header](#header)
- [🧭Navigation](#navigation)
- [📑Section](#section)

# [🔖Semantic Tags](https://www.w3schools.com/html/html5_semantic_elements.asp)

> Trong HTML, chúng ta nên dùng các thẻ đúng mục đích của nó.

Thông thường ta sử dụng thẻ `<div>` cho header, footer hoặc thậm chí button. Thay vào đó, ta có thể sử dụng các thẻ `<header>`, `<footer>` và `<button>` để đánh dấu chúng.

Các thẻ Semantic thông dụng là:

# [📰Article](https://www.w3schools.com/tags/tag_article.asp)

`<article>`

Để đánh dấu:

- Forum posts
- Blog posts
- User comments
- Product cards
- Newspaper articles

# [📝Aside](https://www.w3schools.com/tags/tag_aside.asp)

`<aside>`

Dùng để đánh dấu các thông tin phụ chú (chú thích).

# [🖼️Figure](https://www.w3schools.com/tags/tag_figure.asp)

`<figure>`

Thẻ này đánh dấu một hình ảnh bao gồm một thẻ `<img>` và một thẻ `<figcaption>`.

**Ví dụ**:

```html
<figure>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
    alt="HTML Logo"
  />
  <figcaption>Fig1 - HTML5 Logo</figcaption>
</figure>
```

**Kết quả**:

<figure>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" alt="HTML Logo" />
  <figcaption>Fig1 - HTML5 Logo</figcaption>
</figure>

# [🦶Footer](https://www.w3schools.com/tags/tag_footer.asp)

`<footer>`

Tương tự [header](#header) nhưng để đánh dấu phần footer, sử dụng cho:

- Authorship information
- Copyright information
- Contact information
- Sitemap
- Back to top links
- Related documents

# [🤯Header](https://www.w3schools.com/tags/tag_header.asp)

`<header>`

Để đánh dấu phần header của trang web. Phần header có dạng như sau:

<img src="html6.png">

Thông thường header sử dụng cho các phần tử:

- One or more heading elements (`<h1> - <h6>`)
- Logo or icon
- Authorship information

# [🧭Navigation](https://www.w3schools.com/tags/tag_nav.asp)

`<nav>`

Dùng để đánh dấu các thanh điều hướng (navigation bar). Bên trong thẻ `<nav>` là danh sách các thẻ (nhiều thẻ `<li>` chứa các thẻ `<a>` hoặc nhiều thẻ `<a>`).

**Ví dụ**:

```html
<nav>
  <a href="/html/">HTML</a> | <a href="/css/">CSS</a> |
  <a href="/js/">JavaScript</a> |
  <a href="/jquery/">jQuery</a>
</nav>
```

# [📑Section](https://www.w3schools.com/tags/tag_section.asp)

`<section>`

Thẻ này để đánh dấu một section trong trang web. Sử dụng cho:

- Chapters
- Introduction
- News items
- Contact information

> Đôi khi `<article>` chứa `<section>` hoặc ngược lại.
