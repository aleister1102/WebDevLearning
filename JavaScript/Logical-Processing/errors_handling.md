<link rel='stylesheet' href='../main.css'>

<div class="title">
    <center><h1 class="bigtitle">Errors Handling</h1></center>
</div>

- [Error Handling](#error-handling)
  - [Try - Catch - Finally](#try---catch---finally)
  - [Parameter err](#parameter-err)
  - [throw](#throw)
- [Error Types](#error-types)
  - [ReferenceError](#referenceerror)
  - [SyntaxError](#syntaxerror)
  - [TypeError](#typeerror)

# Error Handling

JS là một ngôn ngữ lỏng lẻo, đôi khi chúng ta nhận được những lỗi biên dịch khi cố truy cập giá trị của biến undefined hoặc gọi hàm undefined,...

JS giống Python và Java, nó cung cấp cơ chế kiểm soát lỗi sử dụng `try-catch-finally`:

```js
try {
  // code that may throw an error
} catch (err) {
  // code to be executed if an error occurs
} finally {
  // code to be executed regardless of an error occurs or not
}
```

## Try - Catch - Finally

Đặt đoạn code có khả năng xảy ra lỗi vào bên trong khối lệnh của `try`.

Khối lệnh của `catch` để thực thi những đoạn code khi xảy ra lỗi trong khối lệnh `try`. Khối lệnh này có một tham số để cho biết thông tin của lỗi.

Thông thường chúng ta sẽ sử dụng khối lệnh `catch` để hiển thị lỗi hoặc các thông tin đặc thù cho user.

Khối lệnh `finally` sẽ được thực thi bất kể lỗi có xảy ra hay không. Khối lệnh này thường dùng để hoàn thành những yêu cầu bỏ dở trong khối lệnh `try` hoặc để reset các biến mà có thể thay đổi trước khi xảy ra lỗi.

**Ví dụ**:

```js
try {
  let lastName = "Yetayeh";
  let fullName = fistName + " " + lastName;
} catch (err) {
  console.log(err);
}

// => ReferenceError: fistName is not defined
```

Có thể thay thế `console.log(err)` thành `console.error(err)`.

```js
try {
  let lastName = "Yetayeh";
  let fullName = fistName + " " + lastName;
} catch (err) {
  console.error(err);
} finally {
  console.log("In any case I will be executed");
}

// => ReferenceError: fistName is not defined
//     at <anonymous>:4:20
// In any case it  will be executed
```

## Parameter err

Tham số `err` là một object có vài thuộc tính như `name` hoặc `message`. Ở trên, name là **"ReferenceError"** và message là **"fistName is not defined"**.

## throw

Câu lệnh `throw` dùng để custom error message. Có thể truyền vào chuỗi, số, boolean hoặc thậm chí object. Sử dụng `throw` sẽ quăng ra một ngoại lệ (**exception**).

**Ví dụ**: dùng throw để custom nội dung thông báo lỗi. Đoạn thông báo lỗi này sẽ truyền vào `err` của khối lệnh `catch`.

```js
const throwErroExampleFun = () => {
  let message;
  let x = prompt("Enter a number: ");
  try {
    if (x == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
  } catch (err) {
    console.log(err);
  }
};
throwErroExampleFun();
```

# Error Types

## ReferenceError

Tham chiếu trái phép, được quăng ra khi chúng ta cố truy cập biến chưa được khai báo.

```js
let firstName = "Asabeneh";
let fullName = firstName + " " + lastName;

console.log(fullName);
// => Uncaught ReferenceError: lastName is not defined
//    at <anonymous>:2:35
```

## SyntaxError

Lỗi cú pháp.

```js
let square = 2 x 2
console.log(square);

console.log('Hello, world");
// => Uncaught SyntaxError: Unexpected identifier
```

## TypeError

Lỗi typo (kiểu nhập `consol.lo`g thay vì `console.log`).

```js
let num = 10;
console.log(num.toLowerCase());
// => Uncaught TypeError: num.toLowerCase is not a function
//    at <anonymous>:2:17
```

Đoạn code trên là lỗi vì đối tượng number không có hàm `toLowerCase()`.
