<link rel='stylesheet' href='../../main.css'>

<div class="title">
    <center><h1 class="bigtitle">Classes</h1></center>
</div>

# Table of contents

- [Table of contents](#table-of-contents)
- [🚖Classes](#classes)
  - [📝Defining A Class](#defining-a-class)
  - [🎭Class Instantiation](#class-instantiation)
  - [🚧Class Constructor](#class-constructor)
  - [🤸‍♂️Class Methods](#️class-methods)
    - [Prototype](#prototype)
- [🙌Getter and Setter](#getter-and-setter)
  - [🤲getter](#getter)
  - [✍setter](#setter)
- [👨‍👩‍👦Inheritance](#inheritance)
- [🧒🧒🏻🧒🏾Polymorphism](#polymorphism)

# [🚖Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

Ta đã biết cách tạo một đối tượng đơn thuần mà không cần tạo lớp đối tượng như C++. Một đối tượng như vậy được gọi là **Singleton Pattern** (Sẽ học trong Design Pattern). Nói một cách dễ hiểu, đó là các lớp đối tượng mà chỉ có một sự thể hiện (instance) duy nhất.

Tuy nhiên, nhiều khi ta cần thiết lập lớp đối tượng để có thể tạo ra nhiều đối tượng có các thuộc tính dùng chung.

JS là một ngôn ngữ OOP, mọi thứ trong JS đều là đối tượng, vì thế nó cũng hỗ trợ tạo ra các lớp đối tượng.

## [📝Defining A Class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#defining_classes)

Định nghĩa một class trong JS tương tự C++, đều sử dụng từ khóa `class`. Tên của class sử dụng **CamelCase**.

```js
class Person {
  // code goes here
}
```

Để tạo ra các thuộc tính private thì sử dụng dấu `#` trước tên thuộc tính.

Một sự khác biệt của function và class là tính **Hoisting** (đưa lên đầu). Trong khi hàm có thể gọi trước khi được định nghĩa thì class cần phải định nghĩa trước khi được gọi.

```js
const p = new Rectangle(); // ReferenceError
class Rectangle {}
```

Ngoài ra, có thể sử dụng cách khác, gọi là [Class Expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#class_expressions) để khai báo lớp đối tượng.

## 🎭Class Instantiation

Để khởi tạo một đối tượng, hay biểu diễn một lớp đối tượng dưới dạng một đối tượng bất kỳ, ta sử dụng từ khóa `new`:

```js
class Person {
  // code goes here
}

const lmq = new Person();
```

## [🚧Class Constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)

Một lớp đối tượng trong JS không nhất thiết phải khai báo các thuộc tính đơn lẻ. Ta có thể thiết lập một constructor để vừa thêm thuộc tính vừa khởi tạo giá trị của chúng.

```js
class Person {
  constructor(firstName, lastName) {
    console.log(this); // Check the output from here
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
const lmq = new Person("Quân", "Lê Minh");
console.log(lmq);
// => Person {firstName: 'Quân', lastName: 'Lê Minh'}
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

// it will take the default values
const person1 = new Person();
// it will take the given values
const person2 = new Person("Lidiya", "Tekle", 28);
```

## [🤸‍♂️Class Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#prototype_methods)

Có thuộc tính thì phải có phương thức, phương thức của lớp đối tượng trong JS cũng có nguyên lý hoạt động tương tự C++:

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
}

const person1 = new Person("Quân", "Lê Minh", 25);
console.log(person1.getFullName());
// => Quân Lê Minh
```

Chú ý rằng phương thức không sử dụng từ khóa `function` hay mũi tên `=>`.

### [Prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#defining_properties_for_an_object_type)

> [Programiz Document](https://www.programiz.com/javascript/prototype)

Để thêm một thuộc tính hoặc phương thức vào **LỚP ĐỐI TƯỢNG** sau khi lớp đối tượng được tạo ra thì ta sử dụng thêm từ khóa `prototype`.

```js
// (defaultValue)
Pokemon.prototype.catchRate = 10;
Pokemon.prototype.getType() = function{
  return this.type;
}
```

Cần phân biệt với việc thêm thuộc tính hoặc phương thức vào ĐỐI TƯỢNG, khi đó chúng ta chỉ cần sử dụng toán tử `.`.

[**Static Method**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#static_methods_and_properties) (phương thức tĩnh) là các phương thức chỉ có thể gọi thông qua lớp đối tượng chứ không phải đối tượng. Chẳng hạn `Date.now()` là một static phương thức, vì nó được gọi trực tiếp thông qua lớp đối tượng `Date` thay vì một đối tượng nào đó cụ thể.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.score = 0;
    this.skills = [];
  }
  static favoriteSkill() {
    const skills = ["HTML", "CSS", "JS", "React", "Python", "Node"];
    const index = Math.floor(Math.random() * skills.length);
    return skills[index];
  }
}

console.log(Person.favoriteSkill());
// => React
```

Muốn khai báo phương thức tĩnh thì sử dụng từ khóa `static` trước tên phương thức.

# [🙌Getter and Setter](https://www.programiz.com/javascript/getter-setter)

## 🤲getter

Một getter trong lớp đối tượng tương tự như phương thức thông thường nhưng có từ khóa `get` phía trước.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
  get getscore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
  }
}

const person1 = new Person("Quân", "Lê Minh", 250);
console.log(person1.getScore);
// We do not need parenthesis to call a getter method
console.log(person1.getSkills);
```

Lưu ý là ta không cần sử dụng dấu ngoặc `()` để sử dụng getter, và cả setter.

## ✍setter

Có getter thì phải có setter, cũng tương tự, nó là method đi kèm với từ khóa `set`.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
  set setScore(score) {
    this.score += score;
  }
  set setSkill(skill) {
    this.skills.push(skill);
  }
}
```

Sử dụng setter:

```js
const person1 = new Person("Quân", "Lê Minh", 250, "Finland", "Helsinki");
person1.setScore = 1;
person1.setSkill = "HTML";
person1.setSkill = "CSS";
person1.setSkill = "JavaScript";
```

# [👨‍👩‍👦Inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#sub_classing_with_extends)

Để kế thừa từ một lớp cơ sở, sử dụng từ khóa `extends`, thay vì dùng `: access modifier` như C++.

```js
class Student extends Person {
  saySomething() {
    console.log("I am a child of the person class");
  }
}

const s1 = new Student("Quân", "Lê Minh", "Finland", 250, "Helsinki");

console.log(s1.saySomething());
// => I am a child of the person class
console.log(s1.getFullName());
// => Quân Lê Minh
```

Có thể sử dụng và truy cập các thuộc tính (nếu không private) cũng như phương thức của lớp cơ sở từ đối tượng của lớp dẫn xuất.

# [🧒🧒🏻🧒🏾Polymorphism](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#super_class_calls_with_super)

Từ khóa `super` dùng để truy cập và gọi phương thức của lớp cơ sở bên trong lớp dẫn xuất.

Nếu `super` được sử dụng trong constructor của lớp dẫn xuất, nó cần phải đi một mình và đứng trước các câu lệnh sử dụng `this`.

```js
class Student extends Person {
  constructor(firstName, lastName, age, country, city, gender) {
    super(firstName, lastName, age, country, city);
    this.gender = gender;
  }
}
```

Đoạn code trên customize một constructor riêng cho lớp dẫn xuất.

Nếu ở lớp dẫn xuất có một phương thức trùng tên với lớp cơ sở, tính đa hình sẽ nhập cuộc. Nói cách khác, phương thức ở lớp dẫn xuất sẽ ghi đè lên phương thức của lớp cơ sở.
