<link rel='stylesheet' href='../../../main.css'>

<div class="title"> 
    <center><h1 class="bigtitle">CSS BEM</h1></center>
</div>

# Table of contents

- [Table of contents](#table-of-contents)
- [Meaning](#meaning)
- [Syntax & Example](#syntax--example)
- [BEM Cheat Sheet](#bem-cheat-sheet)

> BEM là cách đặt tên class theo một quy chuẩn, như coding convention. BEM giúp thống nhất các kiểu đặt tên class và tránh trùng selector dẫn đến CSS đè lên nhau.

Điểm mạnh:

- Rõ ràng, dễ tái sử dụng.
- Tính module của class, không sợ CSS trùng nhau.

Điểm yếu của BEM là tên class dài và xấu.

Nên sử dụng BEM khi:

- Dự án lớn, số lượng pages nhiều hoặc số lượng components nhiều.
- Dự án nhiều thành viên.

# Meaning

BEM là viết tắt của Block Element Modifier, như tên gọi thì nó gồm ba phần tử:

- **Block**: một container chứa một hoặc nhiều thẻ con.
- **Element**: các thẻ con chứa trong một container.
- **Modifier**: mô tả trạng thái của một block hoặc element để bổ sung ý nghĩa cho chúng.

<img src="bem1.png">

# Syntax & Example

Cú pháp của ba phần tử là:

1. **Block**: bao gồm một hoặc nhiều từ cô đọng ý nghĩa, nếu có nhiều từ thì cách nhau bởi dấu `-`. Tên class tất nhiên là phải viết thường.

```html
<div class="yugioh-card"></div>
```

2. **Element**: bắt đầu bởi tên class của block, theo sau là `__` rồi đến tên của element. Tương tự block thì nó cần phải cô đọng và viết thường.

```html
<div class="yugioh-card">
  <h3 class="yugioh-card__name"></h3>
  <img src="" alt="" class="yugioh-card__image" />
  <p class="yugioh-card__effect"></p>
  <p class="yugioh-card__stat"></p>
</div>
```

3. **Modifier**: cũng bắt đầu bởi tên block hoặc element, theo sau là `--` và tên của modifier. \
   Thông thường thì modifier có hai dạng, dạng đầu là kiểu boolean, chẳng hạn `block--large`. Dạng thứ hai là cặp key-value, chẳng hạn `block--text-red`.

<img src="bem2.png">

- Chẳng hạn một card yugioh có thể là dạng [Link](https://yugioh.fandom.com/wiki/Link_Monster) và có màu nền là màu xanh, và ta cần CSS khác với quái thú thông thường. \
- Quái thú dạng Link này cũng sẽ không có chỉ số phòng thủ.

```html
<div class="yugioh-card yugioh-card--bg-blue">
  <h3 class="yugioh-card__name"></h3>
  <img src="" alt="" class="yugioh-card__image" />
  <p class="yugioh-card__effect"></p>
  <p class="yugioh-card__stat yugioh-card__stat--atk-none"></p>
</div>
```

Do đó ta viết thêm hai modifier là `yugioh-card--bg-blue` và `yugioh-card__stat--atk-none`.

# [BEM Cheat Sheet](https://9elements.com/bem-cheat-sheet/#page-navigation)
