<link rel='stylesheet' href='../../main.css'>

<div class="title">
    <center><h1 class="bigtitle">Functions</h1></center>
</div>

# Table of contents

- [Table of contents](#table-of-contents)
- [⚽Declaration Function](#declaration-function)
- [🎳Anonymous Function](#anonymous-function)
- [⚾Expression Function](#expression-function)
- [🏀Self Invoking Function](#self-invoking-function)
- [🏐Arrow Function](#arrow-function)
- [🏈Function with Default Parametes](#function-with-default-parametes)
- [🎱Unlimited Number of Parameters](#unlimited-number-of-parameters)

Hàm trong JS bắt đầu bởi từ khóa `function`, theo sau đó là tên hàm và dấu `()` chứa các tham số nếu có. Cũng có thể dùng tham số mặc định với hằng số.

```js
function functionName(param) {
  console.log("hello world");
}
```

Hành động lấy giá trị của hàm gọi là **call** hoặc **invoke**. Trả về giá trị trong hàm cũng dùng `return` như C/C++. Nếu hàm không trả về giá trị gì thì giá trị của nó là `undefined`.

Một hàm có thể có nhiều cách khai báo:

- Declaration function
- Expression function
- Anonymous function
- Arrow function

# [⚽Declaration Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_declarations)

Đây là cách khai báo đơn giản, tương tự C/C++.

```js
function functionName(param) {
  console.log("This is declaration function");
}
```

**Điểm mạnh**

- Có global scope.
- Có thể gọi Declaration function trước khai báo hàm

# 🎳Anonymous Function

**Anonymous Function** (Hàm vô danh() là hàm được khai báo mà không có tên.

```js
const anonymousFunc = function () {
  console.log("This is anonymous function");
  return 1;
};
console.log(anonymousFunc()); // 1
```

Giá trị trả về của hàm được lưu trong biến `anonymousFunc`.

# [⚾Expression Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_expressions)

**Expression function** (Hàm biểu thức) là hàm có chứa biểu thức, giá trị trả về của hàm sẽ được gán cho một biến nào đó.

```js
const square = function (n) {
  return n * n;
};

console.log(expressionFunc(11)); // 121
```

**Điểm mạnh**

- Tiện lợi khi không có nhu cầu tái sử dụng. Có thể dùng như là đối số của hàm.

**Điểm yếu**

- Không thể gọi Expression function trước khai báo hàm.

# 🏀Self Invoking Function

**Self Invoking Function** (Các hàm tự thực thi) có bản chất là các hàm vô danh, được tự động thực thi ngay khi chúng được khai báo mà không cần chờ gọi hàm.

```js
(function (n) {
  console.log(`Square of ${n} is ${n * n}`);
})(10); //Square of 10 is 100
```

Vận dụng nó như sau

```js
let square = (function (n) {
  return n * n;
})(4);

console.log(square); // 16
```

**Điểm mạnh**

- Tính đóng gói, các object trong hàm không thể bị truy cập từ bên ngoài.
- Function factories (OOP).

# [🏐Arrow Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

**Arrow Function** (Hàm mũi tên) là cách viết khác của Declaration function. Giữa chúng không có quá nhiều điểm khác biệt.

Arrow function sử dụng dấu mũi tên `=>` thay vì keyword `function` để khai báo hàm.

```js
const add = (a, b) => {
  return a + b;
};
console.log(add(10, 1)); // 11
```

Nếu có một tham số, có thể không cần dùng dấu ngoặc.

```js
const double = (n) => {
  return n * 2;
};
console.log(double(3)); // 6
```

Nếu khối lệnh trong hàm chỉ có một dòng return, có thể viết là

```js
const double = (n) => n * 2;
console.log(double(8)); // 16
```

Để return về object thì gói trong dấu ngoặc đơn `()`:

```js
const sum = (a, b) => ({ a: a, b: b });
```

# 🏈Function with Default Parametes

Đôi khi ta gọi hàm mà ta muốn nó có một giá trị mặc định nào đó. Nếu chúng ta không truyền vào đối số thì hàm sẽ lấy giá trị đó để xử lý.

Hàm với tham số mặc định có thể khai báo dưới dạng Declaration function hoặc Arrow function.

Với Declaration function

```js
function moodOfDay(mood = "happy") {
  let str = `Today's mood is ${mood}`;
  return str;
}

console.log(moodOfDay()); // Today's mood is happy
console.log(moodOfDay("sad")); // Today's mood is happy
```

Với Arrow function

```js
const moodOfDay = (mood = "happy") => {
  let str = `Today's mood is ${mood}`;
  return str;
};

console.log(moodOfDay()); // Today's mood is happy
console.log(moodOfDay("sad")); // Today's mood is sad
```

# 🎱Unlimited Number of Parameters

Hàm có thể không có số lượng tham số cố định. Để xây dựng những hàm này, ta có hai cách là sử dụng Declaration function và Arrow function.

> Một hàm khai báo (Declaration Function), cung cấp một mảng các đối số có phạm vi hoạt động (**scope**) như các đối tượng.

Do đó, tất cả các đối số truyền vào hàm đều sẽ được truy cập bởi các đối số bên trong hàm. Mảng các đối số này có thể sử dụng bằng từ khóa `arguments`.

```js
function sumAllNums() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sumAllNums(1, 2, 3, 4)); // 10
console.log(sumAllNums(10, 20, 13, 40, 10)); // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)); // 173
```

> Hàm mũi tên (Arrow Function) không cung cấp mảng đối số. Thay vào đó ta sử dụng toán tử `...` trước tên một tham số bất kỳ.

Bất cứ thứ gì ta truyền vào hàm đều được truy cập dưới dạng mảng.

```js
const sumAllNums = (...args) => {
  // console.log(arguments), arguments object not found in arrow function
  // instead we use an a parameter followed by spread operator
  console.log(args);
};

sumAllNums(1, 2, 3, 4);
// [1, 2, 3, 4]
```

Cũng có thể truy cập index hoặc dùng vòng lặp `for of` như mảng thông thường.
