<link rel='stylesheet' href='../../main.css'>

<div class="title">
    <center><h1 class="bigtitle">Arrays</h1></center>
</div>

# Table of contents

- [Table of contents](#table-of-contents)
- [References](#references)
  - [Documents](#documents)
  - [Cheat Sheets](#cheat-sheets)
- [🍕Create Arrays](#create-arrays)
- [🍔Array Static Methods](#array-static-methods)
  - [Array(num).fill(initialValue)](#arraynumfillinitialvalue)
  - [Array.isArray(object)](#arrayisarrayobject)
- [🍟Array Methods using Callback Functions](#array-methods-using-callback-functions)
  - [forEach](#foreach)
  - [map](#map)
  - [reduce](#reduce)
  - [find](#find)
  - [filter](#filter)
  - [every](#every)
  - [some](#some)
  - [sort](#sort)

# References

## Documents

> [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)

## Cheat Sheets

> [Vincent Will](https://dev.to/vincenius/javascript-array-functions-cheatsheet-1c15)

> [Devhint.io](https://devhints.io/js-array)

> [rauschma](https://gist.github.com/rauschma/6cdeb4af7586aa03baed2f925e0a084b)

# [🍕Create Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)

> Thông thường ta dùng `const` để khai báo mảng, mục đích là để ta chắc chắn rằng tên biến của mảng sẽ không được khai báo lần nào nữa.

**Sử dụng contructor**

```js
const arr = new Array();
console.log(arr); // []
```

**Sử dụng dấu ngoặc vuông `[]`**

```js
const arr = [];
console.log(arr); // []
```

Khởi tạo mảng chứa giá trị như list của Python, không cần cung cấp số lượng phần tử cho trước.

Có thể gọi thuộc tính `length` để kiểm tra số lượng phần tử của mảng.

```js
const nums = [3.14, 2.7, 11, 02, 2002, 19.9, 171.2];
const books = ["DNA", "Hacker", "Parrallel World", "The Code"];
const logic = [true, false, true, false, true];

console.log(books.length); // 7
console.log(books.length); // 4
console.log(books.length); // 5
```

> Mảng có thể chứa những phần tử khác kiểu dữ liệu. Có thể chứa booleans, dictionary và cả một array khác.

```js
const arr = [
  "String",
  false,
  { country: "Viet nam", name: "Quân" },
  [11, 2, 2002],
  3.14,
];
```

Truy cập và chỉnh sửa giá trị phần tử trong mảng tương tự như C/C++ (thông qua toán tử `[]`).

# [🍔Array Static Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#static_methods)

## Array(num).fill(initialValue)

Khởi tạo một mảng mới với `num` phần tử đều có giá trị `initialValue`.

```js
const arr = Array(5).fill(0);
console.log(arr); // [0,0,0,0,0]

const arr = Array(6).fill(null);
console.log(arr); // [null,null,null,null,null,null]
```

## Array.isArray(object)

Kiểm tra đối tượng `object` có phải là kiểu dữ liệu **Array** hay không. Nếu có trả về `true`, không trả về `false`.

# 🍟Array Methods using Callback Functions

Ngoài các phương thức đã nêu ở bài mảng, JS còn cung cấp một số phương thức dựng sẵn thuộc lớp đối tượng Array để thao tác với các hàm callback.

## forEach

**Chức năng**: thực thi hàm callback cho mỗi phần tử có trong mảng.

Dùng khi cần thực thi một hàm bất kỳ cho mỗi phần tử trong mảng.

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

## map

**Chức năng**: lặp qua các phần tử trong mảng và thay đổi giá trị của chúng.

Dùng khi cần thay đổi giá trị mảng gốc.

**Cú pháp**: `map(callback, thisValue)`. Tham số tương tự `forEach`.

**Lưu ý**: `map` làm thay đổi giá trị của mảng ban đầu.

**Ví dụ**: chuyển đổi các chuỗi trong mảng thành chữ in hoa.

```js
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const namesToUpperCase = names.map(function (name) {
  return name.toUpperCase();
});
console.log(namesToUpperCase); // => ['ASABENEH', 'MATHIAS', 'ELIAS', 'BROOK']
```

## reduce

**Chức năng**: dùng để thực thi một hàm callback lên các phần tử của mảng (từ trái sang phải) với một biến tích lũy để thu về một giá trị duy nhất.

Dùng để tính tích lũy cho một biến nào đó.

**Cú pháp**: `reduce(callback, initialValue)`.

**Tham số**: tương tự `forEach`, tuy nhiên hàm callback có thêm tham số:

- **accumulator**: biến tích lũy, được trả về sau mỗi lần gọi hàm.

Nếu tham số `initialValue` không được sử dụng, giá trị mặc định của nó là phần tử đầu tiên trong mảng. Trường hợp mảng rỗng thì sẽ quăng lỗi.

**Trả về**: giá trị của accumulator sau lần gọi hàm callback cuối cùng.

**Ví dụ**: tính tổng giá trị tiền hàng có trong giỏ hàng, ta sẽ sử dụng phương thức `reduce`. Với tên tham số accumulator là `total`.

```js
const data = [5, 10, 15, 20, 25];

const res = data.reduce(function (sum, currentValue) {
  return sum + currentValue;
});

console.log(res); // => 75
```

## find

**Chức năng**: Tìm kiếm phần tử thỏa mãn điều kiện nào đó.

Dùng khi chỉ tìm một phần tử.

**Cú pháp**: `find(callback, thisValue)`. Tham số tương tự `forEach`.

**Trả về**: giá trị của phần tử thỏa mãn điều kiện của hàm callback.

**Ví dụ**:

```js
const ages = [24, 22, 25, 32, 35, 18];
const age = ages.find(function (age) {
  return age < 20;
});

console.log(age); // => 18
```

Ngoài ra còn có phương thức `findIndex` tương tự, nhưng thay vì trả về giá trị thì nó sẽ trả về CHỈ SỐ index.

## filter

**Chức năng**: lọc ra các phần tử thỏa một điều kiện nào đó.

Dùng khi cần tìm kiếm nhiều phần tử.

**Cú pháp**: `filter(callback, thisValue)`. Tham số tương tự `forEach`.

**Trả về**: mảng chứa các phần tử thỏa mãn điều kiện của callback đã được lọc ra.

**Ví dụ**: lọc ra các quốc gia có chữ "land" trong tên.

```js
//Filter countries containing land
const countries = ["Albania", "Ethiopia", "Finland", "Germany", "Ireland"];
const countriesContainingLand = countries.filter(function (country) {
  return country.includes("land");
});
console.log(countriesContainingLand); // => ['Finland', 'Ireland']
```

## every

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

## some

**Chức năng**: Tương tự phương thức `every`, nó sẽ lặp qua các phần tử và kiểm tra xem có thỏa điều kiện nào đó hay không.

Tuy nhiên, chỉ cần một phần tử thỏa thì nó sẽ trả về `true`. Còn `every` buộc TẤT CẢ các phần tử phải thỏa mới return về `true`.

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

## sort

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
const score = [700, 8, 3, 10, 9];
console.log(
  score.sort(function (firstEl, secondEl) {
    if (secondEl > firstEl) {
      return 1;
    } else {
      return 0;
    }
  })
);

// => [3, 8, 9, 10, 700]
```

Nếu sắp xếp số, hàm callback có thể là:

```js
function compareNumbers(firstEl, secondEl) {
  return firstEl - secondEl;
}
```

Nếu không sử dụng callback thì kết quả sắp xếp có thể bị sai.

Tương tự cũng có thể xây dựng callback nhằm so sánh các key trong object để truyền vào phương thức `sort`.
