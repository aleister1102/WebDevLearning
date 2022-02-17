<link rel='stylesheet' href='../../main.css'>

<div class="title">
    <center><h1 class="bigtitle">Regular Expressions</h1></center>
</div>

# Table of contents

- [Table of contents](#table-of-contents)
- [References](#references)
  - [Cheat Sheets](#cheat-sheets)
- [🥝Regular Expressions](#regular-expressions)
- [🍇RegExp Parameters](#regexp-parameters)
  - [🍅Pattern](#pattern)
  - [🍈Flag](#flag)
- [🍎RegExp Initialize](#regexp-initialize)
- [🍊RegExp Methods](#regexp-methods)
  - [test](#test)
  - [match](#match)
  - [search](#search)
  - [replace](#replace)

# References

## Cheat Sheets

> [Keycdn](https://www.keycdn.com/support/regex-cheatsheet)

> [Mozilla Cheat Sheet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet)

> [Dave Child](https://cheatography.com/davechild/cheat-sheets/regular-expressions/)

> [remram44](https://remram44.github.io/regex-cheatsheet/regex.html)

> [QuickRef](https://quickref.me/regex)

# [🥝Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

**Regular Expressions** (biểu thức chính quy) là một ngôn ngữ lập trình nhỏ để so khớp các khuôn mẫu (pattern) với dữ liệu.

RegExp thường được khởi tạo trong JS bằng **Regular Expressions Constructor** hoặc thông qua hai dấu `/` kèm một cái cờ (flag) nào đó. Các flag có thể là `g, i, m, s, u, y`.

# 🍇RegExp Parameters

Một biểu thức thức chính quy nhận vào hai tham số. Hai tham số đó là pattern cần tìm kiếm và optional flag.

## 🍅Pattern

Một pattern có thể là ký tự hay bất kỳ dạng pattern nào có một vài sự tương đồng mà ta cần tìm kiếm.

## 🍈Flag

Flag là một tham số optional để quy định cách tìm kiếm dữ liệu, có một vài flag thông dụng:

- g: là một global flag, quy định việc tìm kiếm cho cả đoạn ký tự.
- i: case sensitive flag, nó tìm kiếm cho cả in hoa và in thường.
- m: multiline.

# 🍎RegExp Initialize

Có thể tạo ra các biểu thức chính quy bằng contructor `RegExp`:

```js
let pattern = "love";
let flag = "gi";
let regEx = new RegExp(pattern, flag);
```

Hoặc ngắn gọn hơn:

```js
let regEx = new RegExp("love", "gi");
```

Hoặc sử dụng hai dấu `/` chứa pattern bên trong và flag ở bên ngoài:

```js
let regEx = /love/gi;
```

Đoạn code này tương đương với

```js
let regEx = new RegExp("love", "gi");
```

# 🍊RegExp Methods

## [test](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)

**Chức năng**: kiểm tra xem có chuỗi con nào giống với pattern hay không. Ta gọi chuỗi con này là **match**.

**Cú pháp**:`pattern.test(string)`

**Trả về**: `true` hoặc `false`.

**Ví dụ**:

```js
const str = "I love JavaScript";
const pattern = /love/;
const result = pattern.test(str);
console.log(result); // => true
```

## [match](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)

**Chức năng**: tìm kiếm tất cả các matches.

**Cú pháp**: `str.match(pattern)`

**Trả về**: nếu không sử dụng global flag `g`, `match` trả về mảng gồm: pattern, index, input và group. Null nếu như không có match.

**Ví dụ**:

```js
const str = "I love JavaScript";
const pattern = /love/;
const result = str.match(pattern);
console.log(result);
// => ["love", index: 2, input: "I love JavaScript", groups: undefined]
```

```js
const str = "I love JavaScript";
const pattern = /love/g;
const result = str.match(pattern);
console.log(result);
// => ["love"]
```

## [search](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search)

**Chức năng**: tìm kiếm vị trí của match đầu tiên trong chuỗi.

**Cú pháp**: `str.search(pattern)`

**Trả về**: index của match đầu tiên có trong chuỗi hoặc `-1` nếu không tìm thấy.

**Ví dụ**:

```js
const str = "I love JavaScript";
const pattern = /love/g;
const result = str.search(pattern);
console.log(result);
```

## [replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

**Chức năng**: tìm kiếm match trong chuỗi và thay thế bằng chuỗi mới.

**Cú pháp**: `str.replace(pattern, newString)`

**Ví dụ**:

```js
const txt =
  "%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.";

matches = txt.replace(/%/g, "");
console.log(matches);
// => "I am teacher and I love teaching.There is nothing as more rewarding as educating and empowering people.I found teaching more interesting than any other jobs.Does this motivate you to be a teacher."
```
