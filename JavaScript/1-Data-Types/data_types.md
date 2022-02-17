<link rel='stylesheet' href='../../main.css'>

<div class="title">
    <center><h1 class="bigtitle">Primitive and Non-Primitive Data Types</h1></center>
</div>

# Table of contents

- [Table of contents](#table-of-contents)
- [👵Primitive Data Types](#primitive-data-types)
- [👧Non - Primitive Data Types](#non---primitive-data-types)

# [👵Primitive Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values)

Các kiểu dữ liệu nguyên thủy bao gồm:
Number, String, Boolean, Null, Undefined.

> Chúng là các kiểu dữ liệu bất biến (immutable), tức là không thể thay đổi được.

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

> Khi ta thay đổi giá trị một biến có kiểu dữ liệu nguyên thủy sẽ không làm thay đổi biến khác

```js
let a = 9;
let b = a;
b = 10;
console.log(a, b); // => 9, 10
```

# [👧Non - Primitive Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects)

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

Các kiểu dữ liệu không nguyên thủy thường được xem là các kiểu tham chiếu. Bởi vì chúng được so sánh dựa trên tham chiếu thay vì giá trị. Hai đối tượng là bằng nhau nếu như chúng cùng tham chiếu đến một giá trị.

```js
let nums = [1, 2, 3];
let numbers = nums;

console.log(nums == numbers); // true
```

> Khi thay đổi dữ liệu của một biến tham chiếu, giá trị tại vùng nhớ mà biến đó tham chiếu đến sẽ thay đổi. Dẫn đến các biến khác trỏ vào vùng nhớ đó cũng có sự thay đổi giá trị.

```js
let obj1 = {
  name: "Quân",
};
let obj2 = obj1;
obj2.name = "Kedo";
console.log(obj1); // => {name: "Quân"}
console.log(obj2); // => {name: "Kedo"}
```
