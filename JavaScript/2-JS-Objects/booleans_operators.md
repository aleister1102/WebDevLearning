<link rel='stylesheet' href='../../main.css'>

<div class="title">
    <center><h1 class="bigtitle">Booleans and Operators</h1></center>
</div>

- [Booleans](#booleans)
  - [Truthy Values](#truthy-values)
  - [Falsy Values](#falsy-values)
- [Operators](#operators)
  - [Assignment and Arithmetic](#assignment-and-arithmetic)
  - [Comparision](#comparision)
  - [Logical](#logical)
  - [Increment and Decrement](#increment-and-decrement)
  - [Ternary Operators](#ternary-operators)

# Booleans

## Truthy Values

Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị `true` thì ta gọi giá trị đó là `Truthy`.

- Các số âm và dương ngoại trừ số 0.
- Các chuỗi ngoại trừ chuỗi rỗng `""`, ` `` ` hoặc `''`
- Giá trị boolean `true`.

Các dữ liệu và đối tượng ở trên được xem là `true`.

Tham khảo thêm về các giá trị Truthy ở [đây](https://developer.mozilla.org/en-US/docs/Glossary/Truthy).

> Toán tử `!!` được sử dụng hai lần để chuyển kiểu dữ liệu bất kỳ về boolean.

## Falsy Values

Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị `false` thì ta gọi giá trị đó là `Falsy`.

- 0
- '', "", ``, (empty string)
- null
- undefined
- NaN
- false

Các dữ liệu và đối tượng ở trên được xem là `false`.

Tham khảo thêm về các giá trị Falsy ở [đây](https://developer.mozilla.org/en-US/docs/Glossary/Falsy).

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
