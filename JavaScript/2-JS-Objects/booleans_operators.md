<link rel='stylesheet' href='../../main.css'>

<div class="title">
    <center><h1 class="bigtitle">Booleans and Operators</h1></center>
</div>

# Table of contents

- [Table of contents](#table-of-contents)
- [💁‍♂️Booleans](#️booleans)
  - [🤦‍♂️Falsy Values](#️falsy-values)
  - [🙋‍♀️Truthy Values](#️truthy-values)
  - [Casting to Booleans](#casting-to-booleans)
- [➕➕Operators](#operators)
  - [Assignment and Arithmetic](#assignment-and-arithmetic)
  - [Comparision](#comparision)
  - [Logical](#logical)
  - [Increment and Decrement](#increment-and-decrement)
  - [Ternary Operators](#ternary-operators)

# 💁‍♂️Booleans

## [🤦‍♂️Falsy Values](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị `false` thì ta gọi giá trị đó là `Falsy`.

- 0
- '', "", ``, (empty string)
- null
- undefined
- NaN
- false

Các dữ liệu và đối tượng ở trên được xem là `false`.

## [🙋‍♀️Truthy Values](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)

Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị `true` thì ta gọi giá trị đó là `Truthy`.

Nói cách khác, ngoại trừ các giá trị được xem là `Falsy` thì còn lại đều là `Truthy`.

- Các số âm và dương ngoại trừ số 0.
- Các chuỗi ngoại trừ chuỗi rỗng `""`, ` `` ` hoặc `''`
- Giá trị boolean `true`.
- `[]` hoặc `{}`.
- `document.all`. Tuy nhiên, khi dùng trong biểu thức so sánh `==` hoặc `!=` sẽ là `undefined`.

Các dữ liệu và đối tượng ở trên được xem là `true`.

## Casting to Booleans

Để chuyển tất cả các loại dữ liệu về boolean, ta sử dụng hai lần toán tử `!`, tức là `!!`:

```js
console.log(!!undefined); // => false
console.log(!!" "); // => true
```

# [➕➕Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

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

Toán tử `&&` đọc từ trái sang phải, nếu đối tượng đầu tiên ("A") không phải `falsy` thì sẽ lấy đối tượng tiếp theo.

```js
let result = "A" && "B" && "C";
console.log(result); // => "C"
```

Do "B" cũng không phải `falsy` nên "C" là giá trị của `result`.

Trường hợp một trong các giá trị này là `falsy` thì sẽ lấy luôn và không xét tiếp.

```js
let result = undefined || "C" || null;
console.log(result); // => "C"
```

Toán tử `||` thì ngược lại, nếu là `truthy` thì lấy, `falsy` thì xét tiếp.

Kỹ thuật này ứng dụng trong việc nhận giá trị từ người dùng. Vì đôi khi người dùng nhập một trong số nhiều trường chứ không phải tất cả.

## Increment and Decrement

Cũng có post và pre increment, decrement: `a++`, `++a`, `a--`, `--a`.

Toán tử hậu tố (post - đứng ngay sau tên biến): thực hiện tính toán biểu thức trước rồi mới tăng (nếu là `++`) hoặc giảm (nếu là `--`) giá trị của biến lên một.

## Ternary Operators

Toán tử ba ngôi, nếu đúng thì làm statement sau dấu `?`, sai thì làm sau dấu `:`.

```js
let bool = true
bool ? console.log('Hello World') : console.log('Goodbye World'')
```
