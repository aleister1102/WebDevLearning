<link rel='stylesheet' href='../main.css'>

<div class="title">
    <center><h1 class="bigtitle">Booleans and Operators</h1></center>
</div>

- [Booleans](#booleans)
  - [Truthy values](#truthy-values)
  - [Falsy values](#falsy-values)
- [Operators](#operators)
  - [Assignment and Arithmetic](#assignment-and-arithmetic)
  - [Comparision](#comparision)
  - [Logical](#logical)
  - [Increment and Decrement](#increment-and-decrement)
  - [Ternary Operators](#ternary-operators)

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
- ' ', " ", ` `, empty string

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
