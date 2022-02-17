<link rel='stylesheet' href='../../main.css'>

<div class="title">
    <center><h1 class="bigtitle">Number and Math Objects</h1></center>
</div>

# Table of contents

- [Table of contents](#table-of-contents)
- [References](#references)
  - [Cheat Sheets](#cheat-sheets)
- [🔢Number Object](#number-object)
- [➕Math Object](#math-object)
  - [Random Numbers](#random-numbers)

# References

## Cheat Sheets

> [Michael Sakhniuk](https://dev.to/sakhnyuk/js-math-cheatsheet-33f7)

# [🔢Number Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

Kiểu dữ liệu số có thể là số nguyên hoặc số thập phân, chúng có thể tương tác với mọi phép toán căn bản.

Lớp đối tượng `Number` trong JS cung cấp các phương thức:

Các phương thức này gọi từ lớp đối tượng:\
`Number.isFinite()` Xác định xem giá trị đã cho có phải là số **hữu hạn** hay không. Trả về boolean.\
`Number.isInteger()` Xác định xem giá trị đã cho có phải là **số nguyên** hay không. Trả về boolean.\
`Number.parseFloat()` Chuyển đổi **chuỗi** đã cho thành một **số dấu phẩy động**.\
`Number.parseInt()` Chuyển đổi **chuỗi** đã cho thành một **số nguyên**.

Hai phương thức dưới gọi từ đối tượng:\
`Number.prototype.toFixed()` Chuyển đổi **số thập phân** thành **chuỗi**. Tham số truyền vào là số sau dấu phẩy cần giữ.\
`Number.prototype.toString()` Chuyển đổi **số** thành **chuỗi**.

# [➕Math Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

Trong JS có lớp đối tượng `Math` hỗ trợ nhiều phương thức để thao tác với kiểu dữ liệu số.

```js
const PI = Math.PI;

console.log(PI); // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI)); // 3 to round values to the nearest number

console.log(Math.round(9.81)); // 10

console.log(Math.floor(PI)); // 3 rounding down

console.log(Math.ceil(PI)); // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20, returns the maximum value

const randNum = Math.random(); // creates random number between 0 to 0.999999
console.log(randNum);

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random() * 11); // creates random number between 0 and 10
console.log(num);

//Absolute value
console.log(Math.abs(-10)); // 10

//Square root
console.log(Math.sqrt(100)); // 10

console.log(Math.sqrt(2)); // 1.4142135623730951

// Power
console.log(Math.pow(3, 2)); // 9

console.log(Math.E); // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2)); // 0.6931471805599453
console.log(Math.log(10)); // 2.302585092994046

// Trigonometry
Math.sin(0);
Math.sin(60);

Math.cos(0);
Math.cos(60);
```

## Random Numbers

```js
let randomNum = Math.random(); // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11;

console.log(numBtnZeroAndTen); // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen);
console.log(randomNumRoundToFloor); // this gives between 0 and 10
```
