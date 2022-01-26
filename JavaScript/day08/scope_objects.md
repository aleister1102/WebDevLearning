<link rel='stylesheet' href='../main.css'>

# Scope

Có ba loại scope trong Javascript, là **Window**, **Global** và **Local**. Tương tự như C/C++ ở lập trình hàm. Ta thường không sử dụng các biến toàn cục mà đóng gói tất cả vào các khối lệnh và sử dụng biến cục bộ.

## Window scope

Đây là cách một biến có window scope được khai báo và khởi tạo.

```js
a = 7; //Window scope
b = 8; // Window Scope
```

Window scope là phạm vi hoạt động của biến trong cửa sổ trình duyệt. Nó vượt ra ngoài một file, trong ghi global scope chỉ có giá trị trong một file.

## Global scope

Khai báo biến bằng `var` sẽ có **global scope** hoặc **function scope**. Nếu biến var được khai báo bên ngoài hàm hoặc đối tượng thì nó mang global scope. Còn khai báo trong hàm thì nó chỉ có phạm vi trong hàm đó, hay function scope.

```js
function f() {
  var a = 9;
  console.log(a); // 9
}
console.log(a); // a is not defined
```

## Local scope

Khai báo bằng `let` và `const` mang tính chất **block scope** (hay **local scope**), tức là chúng có phạm vi hoạt động trong một khối lệnh nào đó. Khối lệnh có thể là hàm, vòng lặp hoặc câu lệnh điều kiện.

`let` dùng để khai báo những tên biến mà chúng ta muốn **reassign**, tức gán lại cho chúng dùng các toán tử gán, chẳng hạn như `=`, `+=`, `-=`, ...
`const` dùng để khai báo những tên biến không thể gán lại, chẳng hạn như một mảng hoặc hàm.

# Object

Mọi thứ có thể là đối tượng, và đối tượng có nhiều thuộc tính hoặc phương thức. Các thuộc tính không được bảo toàn thứ tự.

## Creating

Để tạo ra một object rỗng:

```js
const person = {};
```

## Accessing

Thuộc tính trong object xem như một biến, và ta không cần dùng `var`, `let` hay `const` để khai báo chúng. Giá trị của một thuộc tính theo sau dấu `:`.

```js
const person = {
  firstName: "Quân",
  lastName: "Lê Minh",
  age: 20,
  country: "Viet Nam",
  city: "HCM",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: false,

  getFullName: function () {
    return `${this.firstName}${this.lastName}`;
  },
};
```

Thuộc tính có thể là chuỗi, số, mảng, boolean, thậm chí là một cặp key - value như map hoặc dictionary. `this` là một từ khóa dùng để chỉ chính bản thân object (tương tự như C++, con trỏ `this` dùng để trỏ đến đối tượng gọi phương thức).

Để truy cập vào các thuộc tính của object, ta sử dụng toán tử dấu chấm `.` hoặc dùng dấu `[]` kèm theo tên của thuộc tính tương tự như map hoặc dictionary.

```js
console.log(person.firstName); // "Quân"
console.log(person["firstName"]); // "Quân
```

## Method

Phương thức trong object cũng có một tên và dấu `:`, theo sau đó là từ khóa `function`.

```js
console.log(person.getFullName()); // "Quân Lê Minh"
```

Phương thức không thể là arrow function vì keyword `this` sẽ trỏ đến cửa sổ bên trong arrow function thay vì trỏ vào bản thân object.

## Modifying

> Object là một mutable data type, do đó ta có thể thay đổi giá trị của các thuộc tính bằng reassign.

Ngoài ra, ta có thể khai báo một thuộc tính hoặc phương thức chưa có trong object và gán giá trị cho nó. Thuộc tính mới này sẽ được thêm vào hàm.

```js
const person = {
  firstName: "Quân",
  lastName: "Lê Minh",
  age: 20,
};
person.hair = "curly";
person.getAge = function () {
  return this.age;
};

console.log(person.getAge()); // 20
console.log(person.hair); // curly
```

## Built-in Object

Cho đối tượng dưới đây

```js
const person = {
  firstName: "Quân",
  age: 250,
  country: "Viet Nam",
  city: "HCM",
  skills: ["HTML", "CSS", "JS"],
  title: "student",
  address: {
    street: "22",
    ward: "Linh Đông",
    city: "HCM",
  },
  getPersonInfo: function () {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`;
  },
};
```

Tồn tại các method của đối tượng `Object` dựng sẵn:

- `Object.assign`, sao chép đối tượng mà không thay đổi đối tượng gốc

```js
const copyPerson = Object.assign({}, person);
//{firstName: 'Quân', age: 250, country: 'Viet Nam', city: 'HCM', skills: Array(3), …}
```

- `Object.keys`, lấy mọi tên thuộc tính hoặc khóa có trong đối tượng.

```js
const keys = Object.keys(copyPerson);
// ['firstName', 'age', 'country', 'city', 'skills', 'title', 'address', 'getPersonInfo']
const address = Object.address(copyPerson.address);
// ['street', 'ward', 'city']
```

- `Object.values`, lấy giá trị của đối tượng và cho vào mảng.
- `Object.entries`, lấy các cặp key - value và cho vào mảng.
- `hasOwnProperty(key)`, kiểm tra thuộc tính `key` có tồn tại trong đối tượng hay không.
