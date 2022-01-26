<link rel='stylesheet' href='../main.css'>

# Higher Order Functions

Những hàm bậc cao là các hàm mà có tham số là một hàm khác, hoặc giá trị trả về là một hàm. Một hàm mà truyền vào làm tham số của hàm khác gọi là hàm `Callback`.

## Callback

```js
const callback = (n) => {
  return n ** 2; // => n^2
};

function cube(callback, n) {
  return callback(n) * n;
}

console.log(cube(3)); // => 27
```

## Returning Function

```js
const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatEver;
  };
  return doSomething;
};
```

Kết hợp với callback:

```js
const numbers = [1, 2, 3, 4];

const sumArray = (arr) => {
  let sum = 0;
  const callback = function (element) {
    sum += element;
  };
  arr.forEach(callback);
  return sum;
};
console.log(sumArray(numbers)); // => 15
```

Phương thức `forEach` gọi thực hiện hàm `callback` cho mỗi phần tử có trong mảng (sẽ được nói sau).

Đoạn code trên có thể viết gọn lại như sau:

```js
const numbers = [1, 2, 3, 4];

const sumArray = (arr) => {
  let sum = 0;
  arr.forEach(function (element) {
    sum += element;
  });
  return sum;
};
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

# Functional Programming

Ngoài các phương thức đã nêu ở bài mảng, JS còn cung cấp một số phương thức dựng sẵn thuộc lớp đối tượng Array để thao tác với các hàm callback.

## For Each

**Chức năng**: thực thi hàm callback cho mỗi phần tử có trong mảng. Nói cách khác, các phần tử của mảng sẽ đóng vai trò như tham số truyền vào hàm callback.

**Cú pháp**: `forEach(callback, thisValue)`

**Tham số**:

Tham số của callback:

- **currentValue**: phần tử của mảng đang được xử lý.
- **index**: (Optional) chỉ số của phần tử trong mảng đang được xử lý.
- **array**: (Optional) mảng hiện tại gọi hàm phương thức.

Các phương thức phía sau cũng có các tham số của hàm callback tương tự.

- Tham số `thisValue` để set giá trị cho `this`.

**Cách sử dụng phương thức**:

```js
// Inline Callback Funtion
arr.forEach(function (element, index, arr) {
  console.log(index, element, arr);
});

// Arrow Function
arr.forEach((element, index, arr) => {
  console.log(index, element, arr);
});

// Implicit return
arr.forEach((element, index, arr) => console.log(index, element, arr));
```

**Ví dụ**: tính tổng tích lũy giá trị các phần tử có trong mảng.

```js
const numbers = [1, 2, 3, 4, 5, 6];
let sum = 0;
numbers.forEach(function callback(element) {
  sum += element;
});
console.log(sum); // => 21
```

Mỗi phần tử trong mảng sẽ là đối số của tham số `element`.

## Map

**Chức năng**: lặp qua các phần tử trong mảng và thay đổi giá trị của chúng.

**Cú pháp**: `map(callback, thisValue)`. Tham số tương tự `forEach`.

**Lưu ý**: `map` làm thay đổi giá trị của mảng ban đầu.

**Ví dụ**: chuyển đổi các chuỗi trong mảng thành chữ in hoa.

```js
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const namesToUpperCase = names.map((name) => name.toUpperCase());
console.log(namesToUpperCase); // => ['ASABENEH', 'MATHIAS', 'ELIAS', 'BROOK']
```

## Filter

**Chức năng**: lọc ra các phần tử thỏa một điều kiện nào đó.

**Cú pháp**: `filter(callback, thisValue)`. Tham số tương tự `forEach`.

**Trả về**: mảng chứa các phần tử thỏa mãn điều kiện của callback đã được lọc ra.

**Ví dụ**: lọc ra các quốc gia có chữ "land" trong tên.

```js
//Filter countries containing land
const countries = ["Albania", "Ethiopia", "Finland", "Germany", "Ireland"];
const countriesContainingLand = countries.filter((country) =>
  country.includes("land")
);
console.log(countriesContainingLand); // => ['Finland', 'Ireland']
```

## Reduce

**Chức năng**: dùng để thực thi một hàm callback lên các phần tử của mảng (từ trái sang phải) với một biến tích lũy để thu về một giá trị duy nhất.

**Cú pháp**: `reduce(callback, initialValue)`.

**Tham số**: tương tự `forEach`, tuy nhiên hàm callback có thêm tham số:

- **accumulator**: biến tích lũy, được trả về sau mỗi lần gọi hàm.

Nếu tham số `initialValue` không được sử dụng, giá trị mặc định của nó là phần tử đầu tiên trong mảng. Trường hợp mảng rỗng thì sẽ quăng lỗi.

**Trả về**: giá trị của accumulator sau lần gọi hàm callback cuối cùng.

**Ví dụ**: tính tổng giá trị tiền hàng có trong giỏ hàng, ta sẽ sử dụng phương thức `reduce`. Với tên tham số accumulator là `total`.

```js
const data = [5, 10, 15, 20, 25];

const res = data.reduce((total, currentValue) => {
  return total + currentValue;
});

console.log(res); // => 75
```

## Every

**Chức năng**: Kiểm tra xem TẤT CẢ phần tử có giống nhau về một khía cạnh nào đó.

**Cú pháp**: `every(callback, thisValue)`. Tham số tương tự `forEach`.

**Trả về**: kiểu _booleans_, `true` nếu thỏa mãn điều kiện của hàm callback, `false` nếu có bất kỳ phần tử nào không thỏa mãn.

**Ví dụ**: Kiểm tra tất cả phần tử trong mảng có lớn hơn 20.

```js
const ages = [32, 33, 15, 40];
// callback
function checkAge(age) {
  return age > 20;
}
console.log(ages.every(checkAge)); // => false
```

## Find

**Chức năng**: Trả về GIÁ TRỊ của phần tử thỏa mãn điều kiện nào đó.

**Cú pháp**: `find(callback, thisValue)`. Tham số tương tự `forEach`.

**Trả về**: giá trị của phần tử thỏa mãn điều kiện của hàm callback.

**Ví dụ**:

```js
const ages = [24, 22, 25, 32, 35, 18];
const age = ages.find((age) => age < 20);

console.log(age); // => 18
```

Ngoài ra còn có phương thức `findIndex` tương tự, nhưng thay vì trả về giá trị thì nó sẽ trả về CHỈ SỐ index.

## Some

**Chức năng**: Tương tự phương thức `every`, nó sẽ lặp qua các phần tử và kiểm tra xem có thỏa điều kiện nào đó hay không. Tuy nhiên, chỉ cần một phần tử thỏa thì nó sẽ trả về `true`. Còn `every` buộc TẤT CẢ các phần tử phải thỏa mới return về `true`.

**Cú pháp**: `some(callback, thisValue)`. Tham số tương tự `forEach`.

**Trả về**: kiểu _booleans_, `true` nếu có một phần tử thỏa mãn điều kiện của hàm callback, `false` nếu toàn bộ phần tử nào không thỏa mãn.

**Ví dụ**: Kiểm tra xem có phần tử nào trong mảng lớn hơn 10.

```js
// callback
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10); // => false
[12, 5, 8, 1, 4].some(isBiggerThan10); // => true
```

## Sort

**Chức năng**: Sắp xếp các phần tử trong mảng với thứ tự tăng dần hoặc giảm dần theo bảng mã Ascii (phương thức này tự động chuyển dữ liệu về chuỗi) hoặc theo quy tắc trong callback. Do đó mà `sort` hoạt động tốt đối với mảng các chuỗi hơn là mảng các số.

**Cú pháp**: `sort(callback)`. Hàm callback không bắt buộc, nó chỉ được triển khai khi cần cung cấp thêm quy tắc so sánh cho các phần tử trong mảng.

**Tham số của callback**: `firstEl` và `secondEl`, đại diện cho hai phần tử kề nhau trong mảng dùng để so sánh.

**Trả về**:

- Nếu hàm callback trả về số nhỏ hơn 0 thì `secondEl` sẽ đứng trước `firstEl`.
- Nếu hàm callback trả về số lớn hơn hoặc bằng 0 thì thứ tự được giữ nguyên, tức là `firstEl` sẽ đứng trước `secondEl`.

**Lưu ý**:

- Phương thức `sort` LÀM thay đổi mảng ban đầu. Khuyến nghị copy sang mảng phụ trước khi dùng phương thức này.
- Khi sắp xếp chuỗi, có phân biệt chữ cái in hoa, nên chuyển về in thường trước khi sắp xếp.

**Sắp xếp chuỗi**:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // => Apple, Banana, Mango, Orange
```

**Sắp xếp số sử dụng callback**:

```js
console.log(
  score.sort((firstEl, secondEl) => {
    if (secondEl > firstEl) {
      return 1;
    } else {
      return 0;
    }
  })
);

// => [3, 8, 9, 10, 700]
```

Nếu không sử dụng callback thì kết quả sắp xếp có thể bị sai.

Tương tự cũng có thể xây dựng callback để so sánh các key trong object để truyền vào phương thức `sort`.
