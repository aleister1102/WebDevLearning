<link rel='stylesheet' href='../../main.css'>

<div class="title">
    <center><h1 class="bigtitle">Classes</h1></center>
</div>

# Table of contents

- [Table of contents](#table-of-contents)
- [Classes](#classes)
  - [Defining A Class](#defining-a-class)
  - [Class Instantiation](#class-instantiation)
  - [Class Constructor](#class-constructor)
  - [Prototype](#prototype)
  - [Class Methods](#class-methods)
- [Getter and Setter](#getter-and-setter)
  - [getter](#getter)
  - [setter](#setter)
- [Inheritance](#inheritance)
- [Polymorphism](#polymorphism)

# [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

Ta đã biết cách tạo một đối tượng đơn thuần mà không cần tạo lớp đối tượng như C++. Một đối tượng như vậy được gọi là **Singleton Pattern** (Sẽ học trong Design Pattern). Nói một cách dễ hiểu, đó là các lớp đối tượng mà chỉ có một sự thể hiện (instance) duy nhất.

Tuy nhiên, nhiều khi ta cần thiết lập lớp đối tượng để có thể tạo ra nhiều đối tượng có các thuộc tính dùng chung.

JS là một ngôn ngữ OOP, mọi thứ trong JS đều là đối tượng, vì thế nó cũng hỗ trợ tạo ra các lớp đối tượng.

## [Defining A Class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#defining_classes)

Định nghĩa một lớp đối tượng trong JS tương tự C++, đều sử dụng từ khóa `class`. Tên của lớp đối tượng sử dụng **CamelCase**.

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

Một lớp đối tượng trong JS không nhất thiết phải khai báo các thuộc tính đơn lẻ. Ta có thể thiết lập một `constructor` để vừa thêm thuộc tính vừa khởi tạo giá trị của chúng.

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

Chú ý rằng `this` xem như là bản thân đối tượng được khởi tạo. Khác với C++ vì `*this` mới được xem là bản thân đối tượng.

Tương tự C++, cũng có thể thiết lập default constructor cho lớp đối tượng.

```js
class Person {
  constructor(firstName = "Quân", lastName = "Lê Minh", age = 20) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

// It will take the default values
const person1 = new Person();
// It will take the given values
const person2 = new Person("Lidiya", "Tekle", 28);
```

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

[**Static Method**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#static_methods_and_properties) (phương thức tĩnh) là các phương thức chỉ có thể gọi thông qua lớp đối tượng chứ không phải đối tượng. Chẳng hạn `Date.now()` là một static phương thức, vì nó được gọi trực tiếp thông qua lớp đối tượng `Date` thay vì một đối tượng nào đó cụ thể.

```js
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.skills = [];
  }
  static favoriteSkill() {
    const skills = ["HTML", "CSS", "JS", "React", "Python", "Node"];
    const index = Math.floor(Math.random() * skills.length);
    return skills[index];
  }
}

console.log(Person.favoriteSkill()); // output: React
```

Muốn khai báo phương thức tĩnh thì sử dụng từ khóa `static` trước tên phương thức.

Tóm lại:

- Thêm vào đối tượng: toán tử `.`.
- Thêm vào lớp đối tượng: từ khóa `prototype`.
- Gọi từ đối tượng: toán tử `.` hoặc toán tử `[]` nếu là thuộc tính.
- Gọi từ lớp đối tượng: có từ khóa `static`, sử dụng tên lớp đối tượng.

# [Getter and Setter](https://www.programiz.com/javascript/getter-setter)

## getter

Một getter trong lớp đối tượng tương tự như phương thức thông thường nhưng có từ khóa `get` phía trước.

```js
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
  get getName() {
    return `${this.firstName}` + ` ${this.lastName}`;
  }
  get getAge() {
    return this.age;
  }
}

const lmq = new Person("Quân", "Lê Minh", 20);
console.log(lmq.getName); // output: Quân Lê Minh

// We do not need parenthesis to call a getter method
console.log(lmq.getAge); // output: 20
```

## setter

Có getter thì phải có setter, cũng tương tự, nó là phương thức đi kèm với từ khóa `set`.

```js
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  // Only set one property
  set setFirstName(firstName) {
    this.firstName = firstName;
  }
  set setAge(age) {
    this.age = age;
  }
}

const lmq = new Person("Quân", 20);
lmq.setName = "Kwan";
lmq.setAge = 19;
console.log(lmq.firstName); // output: "Kwan"
```

# [Inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#sub_classing_with_extends)

Để kế thừa từ một lớp cơ sở, sử dụng từ khóa `extends`, thay vì dùng `: access modifier` như C++.

```js
class Student extends Person {
  saySomething() {
    console.log("I am a child of the person class");
  }
}

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
