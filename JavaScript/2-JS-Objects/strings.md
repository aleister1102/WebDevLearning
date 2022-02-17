<link rel='stylesheet' href='../../main.css'>

<div class="title">
    <center><h1 class="bigtitle">Strings</h1></center>
</div>

# Table of contents

- [Table of contents](#table-of-contents)
- [References](#references)
  - [Documents](#documents)
  - [Cheat Sheets](#cheat-sheets)
- [String Concatenating](#string-concatenating)
- [Long Literal Strings](#long-literal-strings)
- [Escape Sequences](#escape-sequences)
- [Template String](#template-string)
- [Checking Data Types and Casting](#checking-data-types-and-casting)
  - [Checking Data Types](#checking-data-types)
  - [Casting](#casting)

# References

## Documents

> [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods)

> [javascript.info](https://javascript.info/string#comparing-strings)

> [Phuc Mai Huu - Viblo](https://viblo.asia/p/15-string-methods-duoc-su-dung-pho-bien-nhat-trong-javascript-jvElaWmxKkw)

## Cheat Sheets

> [Another Techs](https://anothertechs.com/programming/javascript/javascript-string-methods-cheat-sheet-2021/)

# String Concatenating

Có thể nối chuỗi trong JS bằng toán tử `+` tương tự C++.

**Lưu ý**:

`var a = '10' + 5; // => '105'` (string)\
`var b = 5 + '10'; // => '510''` (string)\
`var c = 10 - '5'; // => 5` (number)\
`var d = '5' - 10; // => -5` (number)\
Như vậy, toán tử `+` sẽ ép kiểu số thành chuỗi và nối chuỗi, toán tử `-` sẽ ép kiểu chuỗi thành số và thực hiện phép tính trừ.

# [Long Literal Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#long_literal_strings)

Một chuỗi có thể là một dòng, nhiều dòng hoặc đoạn văn bản. Để viết giá trị chuỗi trên nhiều dòng, ta sử dụng dấu `\` ở cuối mỗi dòng thể hiện rằng phía sau vẫn còn nội dung của chuỗi.

Chẳng hạn như:

```js
let paragraph =
  "Ngành IT Việt Nam hiện nay ở đầu của sự phát triển. \
Có thể nói IT là vua của các nghề. \
Vừa có tiền, có quyền. \
Vừa kiếm được nhiều $ lại được xã hội trọng vọng. \
Thằng em mình học bách khoa cơ khí, sinh năm 96. \
Tự mày mò học code rồi đi làm remote cho công ty Mỹ 2 năm nay. \
Mỗi tối online 3-4 giờ là xong việc. \
Lương tháng 3k6. \
Nhưng thu nhập chính vẫn là từ nhận các project bên ngoài làm thêm. \
Tuần làm 2,3 cái nhẹ nhàng 9,10k tiền tươi thóc thật không phải đóng thuế. \
Làm gần được 3 năm mà nhà xe nó đã mua đủ cả. Nghĩ mà thèm.";

console.log(paragraph);
```

# [Escape Sequences](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#escape_sequences)

Cũng giống như C/C++, JS cũng có một số Escape Sequences như sau:

- `\n`: New line
- `\t`: Tab, means 8 spaces
- `\\`: Back slash
- `\'`: Single quote (')
- `\"`: Double quote (")

# [Template String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

Khái niệm Template String hiểu đơn giản là ta thay thế các ký tự trong chuỗi thành một biến nào đó có thể chỉnh sửa. Có các ví dụ sau đây:

```js
console.log(`The sum of 2 and 3 is 5`); // statically writing the data
```

Hoặc dùng Template String như sau:

```js
let a = 2;
let b = 3;

console.log(`The sum of ${a} and ${b} is ${a + b}`); // injecting the data dynamically
```

Chú ý là ta sử dụng dấu backtick ` `` ` để chứa chuỗi có Template String

Ví dụ dưới đây có thể minh họa cho sự tiện lợi của việc sử dụng Template String. Mỗi lần ta cần thay đổi nội dung của chuỗi, ta chỉ cần thay giá trị của biến.

```js
let firstName = "Lê Minh";
let lastName = "Qbu";
let country = "VietNam";
let city = "HCM";
let language = "JavaScript";
let job = "student";
let age = 19;
let fullName = firstName + " " + lastName;

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.`; //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`;

console.log(personInfoTwo);
console.log(personInfoThree);
```

Thậm chí ta còn có thể thêm các biểu thức vào chuỗi thông qua Template String:

```js
let a = 2;
let b = 3;

console.log(`${a} is greater than ${b}: ${a > b}`);
```

> Sử dụng toán tử `[]` để truy cập ký tự trong chuỗi
> Sử dụng thuộc tính `length` để lấy ra độ dài chuỗi.

# Checking Data Types and Casting

## Checking Data Types

Để kiểm tra kiểu dữ liệu ta sử dụng phương thức `typeof` trước tên object, số, chuỗi,...

## Casting

**String to Int**

- `parseInt(string)`
- `Number(string)`
- Sử dụng dấu `+` trước chuỗi

```js
let num = "11";

console.log(parseInt(num)); // 11
console.log(Number(num)); // 11
console.log(+num); // 11
```

**String to Float**

Tương tự, cũng dùng các phương thức trên nhưng có một số thay đổi.

```js
let num = "1.1";

console.log(parseFloat(num)); // 1.1
console.log(Number(num)); // 1.1
console.log(+num); // 1.1
```

**Float to Int**

Sử dụng `parseInt()` cho số chấm động.
