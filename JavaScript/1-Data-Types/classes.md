<link rel='stylesheet' href='../../main.css'>

<div class="title">
    <center><h1 class="bigtitle">Classes</h1></center>
</div>

# Table of contents

- [Table of contents](#table-of-contents)
- [Documents & Cheat Sheets & Tools](#documents--cheat-sheets--tools)
- [Defining A Class](#defining-a-class)
  - [Class Instantiation](#class-instantiation)
  - [Class Constructor](#class-constructor)
  - [Prototype](#prototype)
  - [Class Methods](#class-methods)
- [Getter and Setter](#getter-and-setter)
- [Inheritance](#inheritance)
- [Polymorphism](#polymorphism)

# Documents & Cheat Sheets & Tools

> [Mozilla Document](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

> [Codecademy Cheat Sheet](https://www.codecademy.com/learn/webdev-intermediate-javascript/modules/learn-javascript-classes/cheatsheet)

# [Defining A Class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#defining_classes)

Tên của lớp đối tượng sử dụng **CamelCase**.

```js
class Person {
  name;
  // Default value
  age = 20;
  // Private property
  #isMarried = false;
  // Method
  getName() {
    return this.name;
  }
}
```

Một sự khác biệt của function và lớp đối tượng là tính **Hoisting** (đưa lên đầu). Trong khi hàm có thể gọi trước khi được định nghĩa thì lớp đối tượng cần phải định nghĩa trước khi được gọi.

```js
const p = new Rectangle(); // ReferenceError
class Rectangle {}
```

Ngoài ra, có thể sử dụng cách khác, gọi là [Class Expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#class_expressions) để khai báo lớp đối tượng.

## Class Instantiation

Để khởi tạo một đối tượng từ lớp đối tượng, ta sử dụng từ khóa `new`:

```js
class Person {
  name;
  // Default value
  age = 20;
  // Private property
  #isMarried = false;
}

const lmq = new Person();
```

## [Class Constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)

Ta có thể thiết lập một `constructor` để vừa thêm thuộc tính vừa khởi tạo giá trị của chúng.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const lmq = new Person("Quân", 20);
console.log(lmq); // output: Person {name: 'Quân', age: 20}
```

Cũng có thể thiết lập default constructor cho lớp đối tượng.

## [Prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#defining_properties_for_an_object_type)

> [Programiz Document](https://www.programiz.com/javascript/prototype)

Để thêm một thuộc tính hoặc phương thức vào **LỚP ĐỐI TƯỢNG** sau khi lớp đối tượng được tạo ra thì ta sử dụng thêm từ khóa `prototype`.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// (defaultValue)
Person.prototype.hair = "curly";
Person.prototype.getAge = function () {
  return this.age;
};

const lmq = new Person("Quân", 20);
console.log(lmq.hair); // output: "curly"
console.log(lmq.getAge()); // output: 20
```

Cần phân biệt với việc thêm thuộc tính hoặc phương thức vào ĐỐI TƯỢNG, khi đó chúng ta chỉ cần sử dụng toán tử `.`.

## [Class Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#prototype_methods)

Có thuộc tính thì phải có phương thức, phương thức của lớp đối tượng trong JS cũng có nguyên lý hoạt động tương tự C++:

```js
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // Do not use `funtion` keyword or `=>` syntax
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
}

const person1 = new Person("Quân", "Lê Minh", 25);
console.log(person1.getFullName()); // output: Quân Lê Minh
```

[**Static Method**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#static_methods_and_properties) (phương thức tĩnh) là các phương thức chỉ có thể gọi thông qua lớp đối tượng chứ không phải đối tượng. Chẳng hạn `Date.now()` là một phương thức tĩnh, vì nó được gọi trực tiếp thông qua lớp đối tượng `Date` thay vì một đối tượng nào đó cụ thể.

Muốn khai báo phương thức tĩnh thì sử dụng từ khóa `static` trước tên phương thức.

Tóm lại:

- Thêm vào đối tượng: toán tử `.`.
- Thêm vào lớp đối tượng: từ khóa `prototype`.
- Gọi từ đối tượng: toán tử `.` hoặc toán tử `[]` nếu là thuộc tính.
- Gọi từ lớp đối tượng: có từ khóa `static`, sử dụng tên lớp đối tượng.

# [Getter and Setter](https://www.programiz.com/javascript/getter-setter)

Một getter trong lớp đối tượng tương tự như phương thức thông thường nhưng có từ khóa `get` phía trước.

```js
get getName() {
  return `${this.firstName}` + ` ${this.lastName}`;
}

// Do not use () when call getter
```

Setter thì có từ khóa `set`.

```js
// Only set one property
set setFirstName(firstName) {
  this.firstName = firstName;
}

// Call setter without (), followed by = operator
```

# [Inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#sub_classing_with_extends)

Để kế thừa từ một lớp cơ sở, sử dụng từ khóa `extends`, thay vì dùng `: access modifier` như C++.

```js
class Student extends Person {
  saySomething() {
    console.log("I am a child of the person class");
  }
}

// Using parent class constructor
const lmq = new Student("Quân", "Lê Minh", 20);
lmq.saySomething(); // output: I am a child of the person class
console.log(lmq.firstName); // output: Quân
```

# [Polymorphism](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#super_class_calls_with_super)

Từ khóa `super` dùng để truy cập và gọi phương thức của lớp cơ sở bên trong lớp dẫn xuất.

Nếu `super` được sử dụng trong constructor của lớp dẫn xuất, nó cần phải đi một mình và đứng trước các câu lệnh sử dụng `this`.

```js
class Student extends Person {
  constructor(firstName, lastName, age) {
    super(firstName, lastName, age);
    this.gender = gender;
  }
}

const lmq = new Student("Quân", "Lê Minh", 20);
console.log(lmq.age); // output: 21
```

Đoạn code trên customize một constructor riêng cho lớp dẫn xuất.

Nếu ở lớp dẫn xuất có một phương thức trùng tên với lớp cơ sở, tính đa hình sẽ nhập cuộc. Nói cách khác, phương thức ở lớp dẫn xuất sẽ ghi đè lên phương thức của lớp cơ sở.
