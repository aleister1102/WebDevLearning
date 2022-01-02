<link rel='stylesheet' href='../main.css'>

# Booleans

## Truthy values

- Các số âm và dương ngoại trừ số 0
- Các chuỗi ngoại trừ chuỗi rỗng `""`
- Giá trị boolean `true`

Các dữ liệu và đối tượng ở trên được xem là `true`.

Tham khảo thêm về các giá trị Truthy ở [đây](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)

## Falsy values

- 0
- 0n
- null
- undefined
- NaN
- the boolean false
- '', "", ``, empty string

Các dữ liệu và đối tượng ở trên được xem là `false`.

Tham khảo thêm về các giá trị Falsy ở [đây](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

# Operators

## Assignment and Arithmetic

Tương tự C/C++ cũng có các toán tử gán cơ bản.
Ngoài ra còn có thêm toán tử gán lũy thừa: `**=` và phép lũy thừa: `**`.

## Comparision

Có thêm toán tử `===`: so sánh hai số bằng nhau về giá trị và kiểu dữ liệu.

Nếu một giá trị không thỏa mãn `==` thì nó cũng không thỏa mãn `===`. Do vậy, dùng `===` an toàn hơn là dùng `==`.

Ngoài ra, khác với so sánh nghiêm ngặt `===`, toán tử `==` có thể chuyển đổi kiểu dữ liệu và so sánh chúng với nhau.

```js
console.log("4" == 4); // true
```

Tham khảo thêm về toán tử `==` ở [đây](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality)

## Logical

Cũng tương tự C/C++ gồm có các toán tử: `&&`, `||` và `!`.

```js
console.log(!true); // false
```

## Increment and Decrement

Cũng có post và pre increment, decrement: `a++`, `++a`, `a--`, `--a`.

## Ternary Operators

Toán tử ba ngôi, nếu đúng thì làm statement sau dấu `?`, sai thì làm sau dấu `:`.

```js
let bool = true
bool ? console.log('Hello World') : console.log('Goodbye World'')
```

# Window Methods

Để pop up thông báo trên trang web. Chỉ nên sử dụng khi test.

- `alert(message)`

Hiển thị một cái hộp lời nhắc có chỗ để nhập input. Input sẽ được lưu dưới dạng một biến nào đó

- `prompt('required text', 'optional text')`

```js
let msg = prompt("Điền năm hạ giới", "Điền vô đây");
console.log(msg);
```

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
  Trả về giờ (0 - 23), phút (0- 59), giây  và milli giây
- `getTime()` Trả về số milli giây kể từ lúc 1/1/1970.

Có hai cách:

```js
const now = new Date();
console.log(now.getTime()); // 1641131963050
```

```js
const allSeconds = Date.now();
console.log(allSeconds); // 1641131963050
```
