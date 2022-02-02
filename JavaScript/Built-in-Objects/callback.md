<link rel='stylesheet' href='../main.css'>

<div class="title">
    <center><h1 class="bigtitle">Callback</h1></center>
</div>

- [High Order Functions](#high-order-functions)
  - [Callback](#callback)
  - [Returning Function](#returning-function)
  - [Setting time](#setting-time)
- [Functional Programming](#functional-programming)
  - [forEach](#foreach)
  - [map](#map)
  - [filter](#filter)
  - [reduce](#reduce)
  - [every](#every)
  - [find](#find)
  - [some](#some)
  - [sort](#sort)

# High Order Functions

Những hàm bậc cao là các hàm mà có tham số là một hàm khác, hoặc giá trị trả về là một hàm. Một hàm mà truyền vào làm tham số của hàm khác gọi là hàm `Callback`.

## Callback

```js
function callback(n) {
  return n ** 2;
}

function cube(callback, n) {
  return callback(n) * n;
}

console.log(cube(3)); // => 27
```

## Returning Function

```js
function higherOrder(n) {
  function doSomething(m) {
    function doWhatEver(t) {
      return 2 * n + 3 * m + t;
    }
    return doWhatEver;
  }
  return doSomething;
}
```

Kết hợp với callback:

```js
const numbers = [1, 2, 3, 4, 5];

function sumArray(arr) {
  let sum = 0;
  function callback(element) {
    sum += element;
  }
  arr.forEach(callback);
  return sum;
}
console.log(sumArray(numbers)); // => 15
```

Phương thức `forEach` gọi thực hiện hàm `callback` cho mỗi phần tử có trong mảng (sẽ được nói sau).

Đoạn code trên có thể viết gọn lại như sau:

```js
const numbers = [1, 2, 3, 4, 5];

function sumArray(arr) {
  let sum = 0;
  arr.forEach(function (element) {
    sum += element;
  });
  return sum;
}
console.log(sumArray(numbers)); // => 15
```

## Setting time

Để tự động thực thi hàm theo chu kỳ thời gian `duration`, ta sử dụng `setInterval(callback, duration)`.

```js
setInterval(callback, 1000);
```

Hàm `callback` sẽ được gọi 1000ms = 1s một lần.

Để tự động gọi hàm sau khi delay một quãng thời gian `duration`, ta sử dụng `setTimeout(callback, duration)`.

```js
setTimeout(callback, 1000);
```

Hàm `callback` sẽ được gọi sau khoảng thời gian delay 1s.

