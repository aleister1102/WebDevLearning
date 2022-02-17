<link rel='stylesheet' href='../../main.css'>

<div class="title">
    <center><h1 class="bigtitle">Console Objects</h1></center>
</div>

# Table of contents

- [Table of contents](#table-of-contents)
- [References](#references)
  - [Documents](#documents)
  - [Cheat Sheets](#cheat-sheets)
- [📺Methods](#methods)

# References

## Documents

> [Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/console)

## Cheat Sheets

> [Shuaib Sajid](https://codepen.io/Shu52/pen/yKeoRg)

> [Vincent Will](https://dev.to/vincenius/javascript-object-functions-cheat-sheet-48nn)

# 📺Methods

`console.log()`

Có thể format chuỗi đầu ra tương tự như C:

```js
console.log("%d %s of JavaScript", 30, "Days");
// output: 30 Days of JavaScript
```

Thậm chí cũng có thể format style dùng CSS chuỗi đầu ra bằng `%c`.

```js
console.log("%c30 Days Of JavaScript", "color:green"); // log output is green
console.log(
  "%c30 Days%c %cOf%c %cJavaScript%c",
  "color:green",
  "",
  "color:red",
  "",
  "color:yellow",
  ""
); // log output green red and yellow text
```

`console.warn()`

Dùng để cảnh báo, thường cảnh báo khi phiên bản của package đã cũ hoặc các đoạn code nhập vào không clean.

[`console.table()`](https://developer.mozilla.org/en-US/docs/Web/API/console/table)

Dùng để xuất dữ liệu dưới dạng bảng. Đối số truyền vào cần phải là một mảng hoặc đối tượng. Ngoài ra còn một đối số optional là số lượng cột.

`console.time()`

Dùng để tính thời gian thực thi của một thao tác bất kỳ, đơn vị milliseconds.

```js
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

console.time("Regular for loop");
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1]);
}
console.timeEnd("Regular for loop");

// output: Regular for loop: 0.13818359375 ms
```

`console.assert()`

Phương thức `assert` xuất ra một thông báo lỗi cho console nếu biểu thức xác nhận truyền vào là sai. Trong trường hợp biểu thức là đúng, sẽ không có gì xảy ra.

Có hai tham số, tham số đầu tiên là biểu thức xác nhận (assertion expression). Tham số thứ hai là message để thông báo khi biểu thức trả về giá trị `false`.

```js
console.assert(4 > 3, "4 is greater than 3");
// output: no result
console.assert(3 > 4, "3 is not greater than 4");
// output: Assertion failed: 3 is not greater than 4
```

[`console.group()`](https://developer.mozilla.org/en-US/docs/Web/API/console/group)

Giúp viết các dòng console thành các các heading tương tự Mardown hay HTML.

<img src="https://developer.mozilla.org/en-US/docs/Web/API/console/group/nesting.png">

[`console.count()`](https://developer.mozilla.org/en-US/docs/Web/API/console/count)

In ra số lần gọi thực hiện phương thức này.

```js
const func = () => {
  console.count("Function has been called");
};
func();
// output: Function has been called: 1
func();
// output: Function has been called: 2
func();
// output: Function has been called: 3
```

`console.clear()`

Dùng để dọn sạch console của browser, tương tự như lệnh `clear` của powershell.
