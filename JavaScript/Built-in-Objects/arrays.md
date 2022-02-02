<link rel='stylesheet' href='../main.css'>

<div class="title">
    <center><h1 class="bigtitle">Arrays</h1></center>
</div>

- [Create Arrays](#create-arrays)
- [With values](#with-values)
- [Accessing and Modifying](#accessing-and-modifying)
- [Array Methods](#array-methods)
  - [Contructor: Array()](#contructor-array)
  - [Array(num).fill(init_value)](#arraynumfillinit_value)
  - [concat.(otherArr)](#concatotherarr)
  - [length](#length)
  - [indexOf(value)](#indexofvalue)
  - [lastIndexOf(value)](#lastindexofvalue)
  - [includes(value)](#includesvalue)
  - [isArray(object)](#isarrayobject)
  - [toString()](#tostring)
  - [join(delimeter)](#joindelimeter)
  - [slice(start, end)](#slicestart-end)
  - [splice(start, nums, items)](#splicestart-nums-items)
  - [push(items)](#pushitems)
  - [pop()](#pop)
  - [shift()](#shift)
  - [unshift(items)](#unshiftitems)
  - [reverse()](#reverse)
  - [sort()](#sort)
- [Functional Programming](#functional-programming)
  - [forEach](#foreach)
  - [map](#map)
  - [filter](#filter)
  - [reduce](#reduce)
  - [every](#every)
  - [find](#find)
  - [some](#some)
  - [sort](#sort-1)

# Create Arrays

> Thông thường ta dùng `const` để khai báo biến, mục đích là để ta chắc chắn rằng tên biến của mảng sẽ không được khai báo lần nào nữa.

**Sử dụng contructor**

```js
const arr = Array();
console.log(arr); // []
```

Hoặc

```js
let arr = Array();
console.log(arr); // []
```

**Sử dụng dấu ngoặc vuông `[]`**

```js
const arr = [];
console.log(arr); // []
```

# With values

Khởi tạo mảng như list của Python, không cần cung cấp số lượng phần tử cho trước.

Có thể dùng method `length` để kiểm tra số lượng phần tử của mảng.

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

> Ngoài ra ta cũng có thể tạo ra một mảng bằng cách dùng method `split` đã học ở bài string.

# Accessing and Modifying

Tương tự C/C++

# Array Methods

##  1. <a name='Contructor:Array'></a>Contructor: Array()

Dùng để khởi tạo một mảng rỗng trong JS.

##  2. <a name='Arraynum.fillinit_value'></a>Array(num).fill(init_value)

Khởi tạo một mảng mới với `num` phần tử đều có giá trị `init_value`.

```js
const arr = Array(5).fill(0);
console.log(arr); // [0,0,0,0,0]

const arr = Array(6).fill(null);
console.log(arr); // [null,null,null,null,null,null]
```

##  3. <a name='concat.otherArr'></a>concat.(otherArr)

Nối mảng gọi method với mảng `otherArr` khác. Trả về một mảng mới **(các method không làm thay đổi giá trị của thuộc tính trong object)**.

```js
const day_month = [11, 02];
const year = [2002];
const birthday = day_month.concat(year);
console.log(birthday); // [11, 2, 2002]
```

##  4. <a name='length'></a>length

Lấy độ dài của mảng

```js
const arr = Array(7).fill("Wjbu");
console.log(arr.length); // 7
```

##  5. <a name='indexOfvalue'></a>indexOf(value)

Lấy index của phần tử có giá trị `value` trong mảng. Nếu không tìm thấy thì trả về 1.

```js
const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(arr.indexOf(4)); // 5
console.log(arr.indexOf(11)); // -1
```

> Có thể áp dụng để kiểm tra một phần tử có tồn tại trong mảng hay không.

##  6. <a name='lastIndexOfvalue'></a>lastIndexOf(value)

Lấy index của phần tử cuối cùng có giá trị `value` trong mảng.

```js
const arr = ["Zen", "Ino", "Tan", "Zen", "Nezuko"];
console.log(arr.lastIndexOf("Zen")); // 3
```

##  7. <a name='includesvalue'></a>includes(value)

Kiểm tra giá trị `value` có tồn tại trong mảng hay không. Nếu có trả về `true`, không trả về `false`.

##  8. <a name='isArrayobject'></a>isArray(object)

Kiểm tra đối tượng `object` có phải là kiểu dữ liệu **Array** hay không. Nếu có trả về `true`, không trả về `false`.

##  9. <a name='toString'></a>toString()

Chuyển mảng gọi method về kiểu chuỗi, các phần tử ngăn cách nhau bởi dấu phẩy.

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.toString()); // '1,2,3,4,5'
```

##  10. <a name='joindelimeter'></a>join(delimeter)

Gắn các phần tử trong mảng thành một chuỗi ngăn cách nhau bởi `delimeter`. Mặc định là dấu phẩy.

```js
const arr = ["Sài Gòn", "Hồ Chí Minh", "Hòn Ngọc Viễn Đông"];
console.log(arr.join()); // 'Sài Gòn, Hồ Chí Minh, Hòn Ngọc Viễn Đông'
console.log(arr.join("")); // 'Sài GònHồ Chí MinhHòn Ngọc Viễn Đông'
console.log(arr.join(", ")); // 'Sài Gòn, Hồ Chí Minh, Hòn Ngọc Viễn Đông'
```

##  11. <a name='slicestartend'></a>slice(start, end)

Cắt ra một mảng con từ mảng gọi method và trả về mảng con đó. Cắt từ vị trí bắt đầu `start` đến `end - 1` (không lấy tại vị trí end)

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.slice()); // [1,2,3,4,5]
console.log(arr.slice(0)); // [1,2,3,4,5]
console.log(arr.slice(0, arr.length)); // [1,2,3,4,5]
console.log(arr.slice(1, 6)); // [2,3,4,5]
console.log(arr.slice(0, 3)); // [1,2,3]
```

##  12. <a name='splicestartnumsitems'></a>splice(start, nums, items)

Xóa `nums` phần tử trong mảng bắt đầu từ vị trí `start` và thay thế bằng các phần tử `items`. Method `splice` trả về phần tử bị xóa, còn mảng chính sẽ bị thay đổi.

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.splice()); // []
console.log(arr); // [1,2,3,4,5,6,7,8]
console.log(arr.splice(0, 1)); // [1]
console.log(arr); // [2,3,4,5,6,7,8]
console.log(arr.splice(0, 2, 9, 10)); // Start at 0, remove 2 items and add 3,4 after 0 -> [1,2]
console.log(arr); // [9,10,3,4,5,6,7,8]
```

##  13. <a name='pushitems'></a>push(items)

Thêm phần tử vào cuối mảng.

```js
const arr = [1, 2, 3, 4, 5, 6];
arr.push(7, 8);
console.log(arr); // [1,2,3,4,5,6,7,8]
```

##  14. <a name='pop'></a>pop()

Xóa phần tử cuối mảng.

##  15. <a name='shift'></a>shift()

Xóa phần tử đầu mảng.

##  16. <a name='unshiftitems'></a>unshift(items)

Thêm phần tử đầu mảng.

##  17. <a name='reverse'></a>reverse()

Đảo ngược mảng.

##  18. <a name='sort'></a>sort()

Sắp xếp mảng.

# Functional Programming

Ngoài các phương thức đã nêu ở bài mảng, JS còn cung cấp một số phương thức dựng sẵn thuộc lớp đối tượng Array để thao tác với các hàm callback.

##  19. <a name='forEach'></a>forEach

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

##  20. <a name='map'></a>map

**Chức năng**: lặp qua các phần tử trong mảng và thay đổi giá trị của chúng.

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

##  21. <a name='filter'></a>filter

**Chức năng**: lọc ra các phần tử thỏa một điều kiện nào đó.

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

##  22. <a name='reduce'></a>reduce

**Chức năng**: dùng để thực thi một hàm callback lên các phần tử của mảng (từ trái sang phải) với một biến tích lũy để thu về một giá trị duy nhất.

**Cú pháp**: `reduce(callback, initialValue)`.

**Tham số**: tương tự `forEach`, tuy nhiên hàm callback có thêm tham số:

- **accumulator**: biến tích lũy, được trả về sau mỗi lần gọi hàm.

Nếu tham số `initialValue` không được sử dụng, giá trị mặc định của nó là phần tử đầu tiên trong mảng. Trường hợp mảng rỗng thì sẽ quăng lỗi.

**Trả về**: giá trị của accumulator sau lần gọi hàm callback cuối cùng.

**Ví dụ**: tính tổng giá trị tiền hàng có trong giỏ hàng, ta sẽ sử dụng phương thức `reduce`. Với tên tham số accumulator là `total`.

```js
const data = [5, 10, 15, 20, 25];

const res = data.reduce(function (total, currentValue) {
  return total + currentValue;
});

console.log(res); // => 75
```

##  23. <a name='every'></a>every

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

##  24. <a name='find'></a>find

**Chức năng**: Trả về GIÁ TRỊ của phần tử thỏa mãn điều kiện nào đó. Dung

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

##  25. <a name='some'></a>some

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

##  26. <a name='sort-1'></a>sort

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

Nếu không sử dụng callback thì kết quả sắp xếp có thể bị sai.

Tương tự cũng có thể xây dựng callback để so sánh các key trong object để truyền vào phương thức `sort`.
