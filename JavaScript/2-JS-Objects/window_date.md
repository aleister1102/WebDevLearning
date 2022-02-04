<link rel='stylesheet' href='../main.css'>

<div class="title">
    <center><h1 class="bigtitle">Window & Date Objects</h1></center>
</div>

- [Window Object](#window-object)
  - [alert](#alert)
  - [prompt](#prompt)
  - [confirm](#confirm)
- [Date Object](#date-object)
  - [Create Time Object](#create-time-object)
  - [Date Methods](#date-methods)

# Window Object

## alert

Để pop up thông báo trên trang web. Chỉ nên sử dụng khi test.

- `alert(message)`

## prompt

Hiển thị một cái hộp lời nhắc có chỗ để nhập input. Input sẽ được lưu dưới dạng một biến nào đó

- `prompt('required text', 'optional text')`

```js
let msg = prompt("Điền năm hạ giới", "Điền vô đây");
console.log(msg);
```

## confirm

Hiển thị một hộp thoại xác nhận gồm tin nhắn kèm hai lựa chọn **OK** và **Cancel**.

- `confirm('message')`

```js
let agree = confirm("Are you sure you want to go to this heaven?");
console.log(agree);
```

# Date Object

## Create Time Object

Để tạo ra một đối tượng kiểu ngày tháng, ta dùng từ khóa `new` như sau:

```js
const now = new Date();
console.log(now); // 2022-01-02T13:59:23.050Z
```

## Date Methods

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
