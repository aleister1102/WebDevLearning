<link rel='stylesheet' href='../main.css'>

<div class="title">
    <center><h1 class="bigtitle">Strings</h1></center>
</div>

- [String Concatenating](#string-concatenating)
- [Long Literal Strings](#long-literal-strings)
- [Escape Sequences](#escape-sequences)
- [Template String](#template-string)
- [String Methods](#string-methods)
  - [charAt(index)](#charatindex)
  - [charCodeAt(index)](#charcodeatindex)
  - [concat(substrings)](#concatsubstrings)
  - [indexOf(substring)](#indexofsubstring)
  - [lastIndexOf(substring)](#lastindexofsubstring)
  - [replace(old string, new string)](#replaceold-string-new-string)
  - [search(substring)](#searchsubstring)
  - [substring(start, end)](#substringstart-end)
  - [slice(start, end)](#slicestart-end)
  - [split(delimiter)](#splitdelimiter)
  - [toLowerCase() && toUpperCase()](#tolowercase--touppercase)
  - [includes(substring)](#includessubstring)
  - [startsWith(substring)](#startswithsubstring)
  - [endsWith(substring)](#endswithsubstring)
  - [repeat(times)](#repeattimes)
  - [trim(delimiter)](#trimdelimiter)
  - [match(regex)](#matchregex)
- [Checking Data Types and Casting](#checking-data-types-and-casting)
  - [Checking Data Types](#checking-data-types)
  - [Casting](#casting)

# String Concatenating

Có thể nối chuỗi trong JS bằng toán tử `+` tương tự C++.

# Long Literal Strings

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

# Escape Sequences

Cũng giống như C/C++, JS cũng có một số Escape Sequences như sau:

- `\n`: New line
- `\t`: Tab, means 8 spaces
- `\\`: Back slash
- `\'`: Single quote (')
- `\"`: Double quote (")

# Template String

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

# String Methods

Do mọi thứ của JS đều là Object, nên đối với kiểu dữ liệu chuỗi, chúng ta có một số phương thức sau đây để thao tác:

## charAt(index)

Truyền vào chỉ số index và trả về ký tự của chuỗi nằm ở vị trí index đó.

```js
let str = "Ảo ma canada lazada shizuka khóc nhòe đi mascara";

console.log(str.charAt(0)); // Ả
console.log(str.charAt(4)); // a
```

## charCodeAt(index)

Truyền vào chỉ số index và trả về mã ASCII của ký tự ở vị trí index đó.

```js
let str =
  "Cờ bạc người không chơi là người thắng, người chơi không bao giờ thắng";

console.log(str.charCodeAt(33)); // 't' - ASCII: 116
console.log(str.charCodeAt(38)); // ',' - ASCII: 44
```

## concat(substrings)

Nối nhiều chuỗi lại với nhau.

```js
let s1 = "Năm";
let s2 = "Mới";
let s3 = "Vui";
let s4 = "Vẻ";

console.log(s1.concat(s2, s3, s4)); // 'Nămmớivuivẻ'
```

## indexOf(substring)

Truyền vào một chuỗi con và tìm trong chuỗi chính, nếu tìm thấy thì trả về vị trí bắt đầu của chuỗi con đó. Nếu không tìm thấy thì trả về -1.

```js
let str = "Narutobaco Sasuketamin Sharingan nhiễm mỡ";

console.log(str.indexOf("Narutobaco")); // 0
console.log(str.indexOf("nhiễm mỡ")); // 33
```

Phương thức này còn tham số thứ hai là vị trí bắt đầu tìm kiếm.

## lastIndexOf(substring)

Truyền vào một chuỗi con và tìm trong chuỗi chính, nếu tìm thấy thì trả về vị trí bắt đầu của chuỗi con đó. Nếu có nhiều chuỗi con được tìm thấy thì ưu tiên trả về vị trí của chuỗi con cuối cùng. Nếu không tìm thấy thì trả về -1.

```js
let str = "Chúng ta của hiện tại, đã không còn là chúng ta của hôm qua";

console.log(str.lastIndexOf("ta")); // 45
console.log(str.lastIndexOf("của")); // 48
```

## replace(old string, new string)

Thay thế một chuỗi hoặc chuỗi con thành một chuỗi khác.

```js
let str = "Wubu neva die";

console.log(str.replace("Wubu", "Wjbu")); // 'Wjbu neva die'
console.log(str.replace("ie", "rink")); // 'Wubu neva drink'
```

Có thể sử dụng với Regular Expression (sẽ học sau)

```js
let str =
  "Love is love, does not matter if you are LGBT, White, Black, Red Hair, Blonde or Handicapped";

console.log(str.replace(/love/gi, "LOVE"));
```

## search(substring)

Truyền vào một chuỗi con và tìm trong chuỗi chính, nếu tìm thấy thì trả về vị trí index của chuỗi con đầu tiên được tìm thấy. Phương thức `search` tương tự như `indexOf` nhưng không có tham số vị trí bắt đầu và còn hỗ trợ thêm tìm kiếm theo biểu thức chính quy (Regular Expression).

## substring(start, end)

Cắt lấy chuỗi con với tham số đầu tiên là vị trí bắt đầu và tham số thứ hai là index kết thúc. Chú ý rằng phương thức này không lấy ký tự ở index cuối cùng.

```js
let str = "Lê Minh Nghiện";

console.log(str.substring(0, 6)); // Lê Min
console.log(str.substring(0, 7)); // Lê Minh
```

## slice(start, end)

Giống `substring` nhưng có thể không có tham số thứ hai, nếu không truyền vào tham số thứ hai thì sẽ lấy ra chuỗi từ vị trí bắt đầu đến vị trí kết thúc.

Cũng có thể cắt ngược từ phải sang trái, với index cuối cùng là 0, và giảm dần thành các số âm -1, -2, ...

```js
let str = "Lê Minh Nghiện";

console.log(str.slice(-3, -1)); // hiệ
```

## split(delimiter)

Tách chuỗi dựa vào delimiter cho trước.

```js
let str = "Tân không có đá, ta không có đấng";
console.log(str.split(",")); // Array: ['Tân không có đá',' ta không có đấng']
console.log(str.split(" ")); // Array: ['Tân', 'không', 'có', đá,', 'ta', 'không', 'có', 'đấng']
```

## toLowerCase() && toUpperCase()

Dùng để chuyển chuỗi thành in thường hoặc in hoa.

## includes(substring)

Kiểm tra chuỗi con có tồn tại trong chuỗi chính.

```js
let str = "Đầu đội trời chân đạp đất";

console.log(str.includes("đội")); // true
console.log(str.includes("Đội")); // false - case sensitive
console.log(str.includes("ầu")); // true
console.log(str.includes("Ầu")); // fasle
```

## startsWith(substring)

Truyền vào một chuỗi con, kiểm tra chuỗi chính có bắt đầu bằng chuỗi con hay không. Nếu có trả về `true`, nếu không trả về `false`.

```js
let str = "Yêu nhau lắm cắn nhau đau";

console.log(str.startsWith("Đau")); // false
console.log(str.startsWith("yêu")); // false
console.log(str.startsWith("Yêu")); // true
```

## endsWith(substring)

Tương tự `startWith`, trả về `true` nếu chuỗi kết thúc là chuỗi con truyền vào.

## repeat(times)

Lặp lại chuỗi nào đó `times` lần.

## trim(delimiter)

Xóa bỏ delimeter ở trước và sau chuỗi nếu có.

```js
let str = "  Hảo hán đại trượng phu  ";

console.log(str.trim(" ")); // 'Hảo hán đại trượng phu'
console.log(str.trim()); // still remove spaces: 'Hảo hán đại trượng phu'
```

## match(regex)

Dùng để tìm kiếm chuỗi con dựa vào regex cho trước.

```js
let str = "Bao nhiêu lâu thì bán được được một tỉ gói mè?";

console.log(str.match(/được/));
/*[
  'được',
  index: 22,
  input: 'Bao nhiêu lâu thì bán được một tỉ gói mè?',
  groups: undefined
]*/
```

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
