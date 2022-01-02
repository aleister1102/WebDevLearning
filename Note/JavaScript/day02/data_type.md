<link rel='stylesheet' href='../main.css'>

# Data Type

## Primitive Data Types

Các kiểu dữ liệu nguyên thủy bao gồm:
Number, String, Boolean, Null, Undefined.

> Chúng là các kiểu dữ liệu bất biến (immutable). Tức là không thể thay đổi được.

Chẳng hạn:

```js
let a = "heelo";
a[2] = "l";

console.log(a); // heelo
```

Giá trị xuất ra của console không hề thay đổi, hay nói chính xác hơn là không thể thay đổi.

Nghe có vẻ hơi confused? Hãy đến với ví dụ sau đây:

```js
let a = "hello";
a = "hello world!";

console.log(a); // hello world!
```

Thoạt nhìn, ta tưởng rằng giá trị của biến `a` đã được thay đổi theo lối suy nghĩ dựa trên ngôn ngữ C. Tuy nhiên, điều mà đoạn code trên thực sự thực hiện là:

1. Trích xuất dữ liệu của biến `a`.
2. Thay đổi dữ liệu đó thành `'hello world!'`.
3. Cho dữ liệu này vào một vùng nhớ mới.
4. Biến `a` trỏ đến vùng nhớ mới đó.
5. Vùng nhớ cũ chứa `'hello'` sẽ được dọn rác.

Như vậy, bản thân giá trị `'hello'` là không thay đổi được, mỗi lần ta dùng phép gán (reassign) là ta đã làm cho biến có một vùng nhớ mới có địa chỉ hoàn toàn khác. Hay nói cách khác, ta đã dùng một phương thức (toán tử gán bằng) tác động vào a và làm thay đổi giá trị của nó.

JS là một ngôn ngữ OOP, chương trình của nó được xây dựng dựa trên các Object và mọi thứ của JS đều là Object. Các kiểu dữ liệu Primitive trong JS cũng là các Object, nhưng chúng thuộc loại Object đặc biệt gọi là Immutable Object (đối tượng bất biến).

Theo Wikipedia:

> Đối tượng bất biến là đối tượng mà trạng thái của nó không thể thay đổi sau khi được tạo ra. Một đối tượng có thể xem là bất biến kể cả khi các thuộc tính của nó thay đổi nhưng không làm thay đổi theo cái nhìn từ bên ngoài.

Tương tự như các kiểu dữ liệu nguyên thủy bên C, chúng ta có thể so sánh hai biến nguyên thủy thông qua giá trị của nó.

```js
let b = 7;
let c = 5;

console.log(b == c); // false
```

## Non - Primitive Data Types

Các kiểu dữ liệu không nguyên thủy bao gồm: Objects, Functions và Array.

> Chúng là các dữ liệu có thể thay đổi giá trị (mutable).

Nói cách khác, chúng ta có thể thay đổi giá trị của chúng sau khi chúng được tạo ra.

```js
let nums = [1, 2, 3];
nums[0] = 10;

console.log(nums); // [10, 2, 3]
```

> Không thể so sánh hai đối tượng thuộc kiểu dữ liệu không nguyên thủy, mặc dù thuộc tính và giá trị của chúng là như nhau.

```js
let nums = [1, 2, 3];
let numbers = [1, 2, 3];

console.log(nums == numbers); // false
```

Các kiểu dữ liệu không nguyên thủy thường được xem là các kiểu tham chiếu. Bởi vì chúng được so sánh dựa trên tham chiếu thay vì giá trị. Hai đối tượng là bằng nhau một cách nghiêm ngặt nếu như chúng cùng tham chiếu đến một giá trị. **(Chưa hiểu bản chất)**

```js
let nums = [1, 2, 3];
let numbers = nums;

console.log(nums == numbers); // true
```

# Numbers

Kiểu dữ liệu số có thể là số nguyên hoặc số thập phân, chúng có thể tương tác với mọi phép toán căn bản.

## Math Objects

Trong JS có lớp đối tượng `Math` hỗ trợ nhiều phương thức để thao tác với kiểu dữ liệu số.

```js
const PI = Math.PI;

console.log(PI); // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI)); // 3 to round values to the nearest number

console.log(Math.round(9.81)); // 10

console.log(Math.floor(PI)); // 3 rounding down

console.log(Math.ceil(PI)); // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20, returns the maximum value

const randNum = Math.random(); // creates random number between 0 to 0.999999
console.log(randNum);

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random() * 11); // creates random number between 0 and 10
console.log(num);

//Absolute value
console.log(Math.abs(-10)); // 10

//Square root
console.log(Math.sqrt(100)); // 10

console.log(Math.sqrt(2)); // 1.4142135623730951

// Power
console.log(Math.pow(3, 2)); // 9

console.log(Math.E); // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2)); // 0.6931471805599453
console.log(Math.log(10)); // 2.302585092994046

// Trigonometry
Math.sin(0);
Math.sin(60);

Math.cos(0);
Math.cos(60);
```

## Random Numbers

```js
let randomNum = Math.random(); // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11;

console.log(numBtnZeroAndTen); // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen);
console.log(randomNumRoundToFloor); // this gives between 0 and 10
```

# Strings

## Concatenating

Có thể nối chuỗi trong JS bằng toán tử `+` tương tự C++.

## Long Literal Strings

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

## Escape Sequences

Cũng giống như C/C++, JS cũng có một số Escape Sequences như sau:

- `\n`: New line
- `\t`: Tab, means 8 spaces
- `\\`: Back slash
- `\'`: Single quote (')
- `\'`: Double quote (')

## Template String

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

## String Methods

Do mọi thứ của JS đều là Object, nên đối với kiểu dữ liệu chuỗi, chúng ta có một số phương thức sau đây để thao tác:

1. `length`

```js
let str = "onii-chan";

console.log(str.length); // 9
```

2. Accessing (`[index]`)

```js
let str = "baka";

console.log(str[0]); // b
console.log(str[1]); // a
console.log(str[2]); // k
```

3. `substr(start,length)` (Deprecated)

```js
let str = "Lê Minh Qbu";

console.log(str.substr(0, 7)); // Lê Minh
console.log(str.substr(8, 3)); // Qbu
```

4. `substring(start,end)`
   Giống với substr nhưng tham số thứ hai là index kết thúc, và nó không lấy chữ cái ở index cuối cùng

```js
let str = "Lê Minh Nghiện";

console.log(str.substring(0, 6)); // Lê Min
console.log(str.substring(0, 7)); // Lê Minh
```

5. `split(delimiter)`

Tách chuỗi dựa vào delimiter cho trước.

```js
let str = "Tân không có đá, ta không có đấng";
console.log(str.split(",")); // Array: ['Tân không có đá',' ta không có đấng']
console.log(str.split(" ")); // Array: ['Tân', 'không', 'có', đá,', 'ta', 'không', 'có', 'đấng']
```

6. `trim(delimiter)`

Xóa bỏ delimeter ở trước và sau chuỗi nếu có.

```js
let str = "  Hảo hán đại trượng phu  ";

console.log(str.trim(" ")); // 'Hảo hán đại trượng phu'
console.log(str.trim()); // still remove spaces: 'Hảo hán đại trượng phu'
```

7. `includes(substring)`

Kiểm tra chuỗi con có tồn tại trong chuỗi chính.

```js
let str = "Đầu đội trời chân đạp đất";

console.log(str.includes("đội")); // true
console.log(str.includes("Đội")); // false - case sensitive
console.log(str.includes("ầu")); // true
console.log(str.includes("Ầu")); // fasle
```

8. `replace(new string)`

Thay thế một chuỗi hoặc chuỗi con thành một chuỗi khác

```js
let str = "Wubu neva die";

console.log(str.replace("Wubu", "Wjbu")); // 'Wjbu neva die'
console.log(str.replace("ie", "rink")); // 'Wubu neva drink'
```

9. `charAt(index)`

Truyền vào chỉ số index và trả về ký tự của chuỗi nằm ở vị trí index đó.

```js
let str = "Ảo ma canada lazada shizuka khóc nhòe đi mascara";

console.log(str.charAt(0)); // Ả
console.log(str.charAt(4)); // a
```

10. `charCodeAt(index)`

Truyền vào chỉ số index và trả về mã ASCII của ký tự ở vị trí index đó.

```js
let str =
  "Cờ bạc người không chơi là người thắng, người chơi không bao giờ thắng";

console.log(str.charCodeAt(33)); // 't' - ASCII: 116
console.log(str.charCodeAt(38)); // ',' - ASCII: 44
```

11. `indexOf(substring)`

Truyền vào một chuỗi con và tìm trong chuỗi chính, nếu tìm thấy thì trả về vị trí bắt đầu. Nếu không tìm thấy thì trả về -1.

```js
let str = "Narutobaco Sasuketamin Sharingan nhiễm mỡ";

console.log(str.indexOf("Narutobaco")); // 0
console.log(str.indexOf("nhiễm mỡ")); // 33
```

12. `lastIndexOf(substring)`

Truyền vào một chuỗi con và tìm trong chuỗi chính, nếu tìm thấy thì trả về vị trí bắt đầu. Nếu có nhiều chuỗi con được tìm thấy thì ưu tiên trả về vị trí của chuỗi con cuối cùng. Nếu không tìm thấy thì trả về -1.

```js
let str = "Chúng ta của hiện tại, đã không còn là chúng ta của hôm qua";

console.log(str.lastIndexOf("ta")); // 45
console.log(str.lastIndexOf("của")); // 48
```

13. `concat(substrings)`

Nối nhiều chuỗi lại với nhau

```js
let s1 = "Năm";
let s2 = "Mới";
let s3 = "Vui";
let s4 = "Vẻ";

console.log(s1.concat(s2, s3, s4)); // 'Nămmớivuivẻ'
```

14. `startsWith(substring)`

Truyền vào một chuỗi con, kiểm tra chuỗi chính có bắt đầu bằng chuỗi con hay không. Nếu có trả về `true`, nếu không trả về `false`.

```js
let str = "Yêu nhau lắm cắn nhau đau";

console.log(str.startsWith("Đau")); // false
console.log(str.startsWith("yêu")); // false
console.log(str.startsWith("Yêu")); // true
```

15. `endsWith(substring)`

Tương tự `startWith`, trả về `true` nếu chuỗi kết thúc là chuỗi con truyền vào.

16. `search(substring)`

Truyền vào một chuỗi con và tìm trong chuỗi chính, nếu tìm thấy thì trả về vị trí index của chuỗi con đầu tiên được tìm thấy.

17. `repeat(times)`

Lặp lại chuỗi nào đó `times` lần.

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
let num = '1.1'

console.log(parseFloat(num)) // 1.1
console.log(Number(num)) // 1.1
console.log(+num) // 1.1 
```

**Float to Int**

Sử dụng `parseInt()` cho số chấm động.