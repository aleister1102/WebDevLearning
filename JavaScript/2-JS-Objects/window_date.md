<link rel='stylesheet' href='../../main.css'>

<div class="title">
    <center><h1 class="bigtitle">Window & Date Objects</h1></center>
</div>

# Table of contents

- [Table of contents](#table-of-contents)
- [References](#references)
  - [Cheat Sheets](#cheat-sheets)
- [🔳Window Object](#window-object)
  - [alert](#alert)
  - [prompt](#prompt)
  - [confirm](#confirm)
- [📆Date Object](#date-object)
  - [Creating](#creating)
  - [Date Methods](#date-methods)

# References

## Cheat Sheets

> [Devhints.io](https://devhints.io/js-date)

# [🔳Window Object](https://developer.mozilla.org/en-US/docs/Web/API/Window)

## [alert](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)

Để pop up thông báo trên trang web. Chỉ nên sử dụng khi test.

- `alert(message)`

## [prompt](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)

Hiển thị một cái hộp lời nhắc có chỗ để nhập input. Input sẽ được lưu dưới dạng một biến nào đó

- `prompt('required text', 'optional text')`

```js
let msg = prompt("Điền năm hạ giới", "Điền vô đây");
console.log(msg);
```

## [confirm](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)

Hiển thị một hộp thoại xác nhận gồm tin nhắn kèm hai lựa chọn **OK** và **Cancel**.

- `confirm('message')`

```js
let agree = confirm("Are you sure you want to go to this heaven?");
console.log(agree);
```

# [📆Date Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

## [Creating](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#constructor)

Để tạo ra một đối tượng kiểu ngày tháng, ta dùng từ khóa `new` như sau:

```js
const now = new Date();
console.log(now); // 2022-01-02T13:59:23.050Z
```

## [Date Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#static_methods)

Để làm việc với đối tượng ngày tháng trong JS, ta được hỗ trợ nhiều phương thức như:

- `getFullYear()` Trả về một Number gồm bốn chữ số
- `getMonth()` Trả về tháng (Number), giá trị từ 0 đến 11
- `getDate()` Trả về ngày (Number)
- `getDay()` Trả về thứ (Number), 0 là Chủ Nhật và 6 là thứ bảy.
- `getHours()`\
  `getMinutes()`\
  `getSeconds()`\
  `getMilliseconds()`\
  Trả về giờ (0 - 23), phút (0- 59), giây và milli giây
- `getTime()` Trả về số milli giây kể từ lúc 1/1/1970.

```js
const now = new Date();
console.log(now.getTime()); // 1641131963050
```

Có một cách khác cũng cho kết quả tương tự:

```js
const allSeconds = Date.now();
console.log(allSeconds); // 1641131963050
```
