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
