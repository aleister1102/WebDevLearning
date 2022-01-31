<link rel='stylesheet' href='../main.css'>

<div class="title">
    <center><h1 class="bigtitle">Classes</h1></center>
</div>

- [Classes](#classes)
  - [Defining A Class](#defining-a-class)
  - [Class Instantiation](#class-instantiation)
  - [Class Constructor](#class-constructor)
  - [Default Constructor](#default-constructor)
  - [Class Methods](#class-methods)
- [Getter and Setter](#getter-and-setter)
  - [getter](#getter)
  - [setter](#setter)
- [Static Method](#static-method)
- [Inheritance](#inheritance)
- [Overriding Methods](#overriding-methods)

# Classes

Ta đã biết cách tạo một Object đơn thuần mà không cần tạo lớp đối tượng như C++. Một Object như vậy được gọi là **Singleton Pattern** (Sẽ học trong Design Pattern). Nói một cách dễ hiểu, đó là các lớp đối tượng mà chỉ có một sự thể hiện duy nhất.

Tuy nhiên, nhiều khi ta cần tạo lớp đối tượng để có thể tạo ra nhiều đối tượng cùng loại lặp đi lặp lại.

JS là một ngôn ngữ OOP, mọi thứ trong JS đều là đối tượng, vì thế nó cũng hỗ trợ tạo ra các lớp đối tượng.

## Defining A Class

Định nghĩa một class trong JS tương tự C++, đều sử dụng từ khóa `keyword`. Tên của class sử dụng **CamelCase**.

```js
class Person {
  // code goes here
}
```

## Class Instantiation

Để khởi tạo một đối tượng, hay biểu diễn một lớp đối tượng dưới dạng một đối tượng bất kỳ, ta sử dụng từ khóa `new`:

```js
class Person {
  // code goes here
}

const lmq = new Person();
```

## Class Constructor

Một lớp đối tượng trong JS không nhất thiết phải khai báo các thuộc tính ở dạng private. Ta có thể thiết lập một constructor để vừa thêm thuộc tính vừa khởi tạo giá trị của chúng.

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

Chú ý rằng `this` xem như là bản thân đối tượng được khởi tạo. Khác với C++ khi `*this` mới được xem là bản thân đối tượng.

## Default Constructor

Tương tự C++, cũng có thể thiết lập default constructor cho lớp đối tượng.

```js
class Person {
  constructor(
    firstName = "Asabeneh",
    lastName = "Yetayeh",
    age = 250,
    country = "Finland",
    city = "Helsinki"
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
}

const person1 = new Person();
// it will take the default values
const person2 = new Person("Lidiya", "Tekle", 28, "Finland", "Espoo");
```

## Class Methods

Có thuộc tính thì phải có phương thức, phương thức của lớp đối tượng trong JS cũng có nguyên lý hoạt động tương tự C++:

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
}

const person1 = new Person("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
const person2 = new Person("Lidiya", "Tekle", 28, "Finland", "Espoo");

console.log(person1.getFullName());
// => Asabeneh Yetayeh
console.log(person2.getFullName());
// => test.js:19 Lidiya Tekle
```

Chú ý rằng method không sử dụng từ khóa `function` hay mũi tên `=>`.

# Getter and Setter

## getter

Một getter trong lớp đối tượng tương tự như method thông thường nhưng có từ khóa `get` phía trước.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
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

const person1 = new Person("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
console.log(person1.getScore);
// We do not need parenthesis to call a getter method
console.log(person1.getSkills);
```

Lưu ý là ta không cần sử dụng dấu ngoặc `()` để sử dụng getter, và cả setter.

## setter

Có getter thì phải có setter, cũng tương tự, nó là method đi kèm với từ khóa `set`.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
  get getScore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
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
const person1 = new Person("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
person1.setScore = 1;`
person1.setSkill = "HTML";
person1.setSkill = "CSS";
person1.setSkill = "JavaScript";
```

# Static Method

**Static Method** (phương thức tĩnh) là các phương thức chỉ có thể gọi thông qua lớp đối tượng chứ không phải đối tượng. Chẳng hạn `Date.now()` là một static method, vì nó được gọi trực tiếp thông qua lớp đối tượng `Date` thay vì một object nào đó cụ thể.

```js
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
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

# Inheritance

Để kế thừa từ một lớp cơ sở, sử dụng từ khóa `extends`, thay vì dùng `: access modifier` như C++.

```js
class Student extends Person {
  saySomething() {
    console.log("I am a child of the person class");
  }
}

const s1 = new Student("Asabeneh", "Yetayeh", "Finland", 250, "Helsinki");

console.log(s1.saySomething());
// => I am a child of the person class
console.log(s1.getFullName());
// => Asabeneh Yetayeh
```

Có thể sử dụng và truy cập các thuộc tính cũng như phương thức của lớp cơ sở từ đối tượng của lớp dẫn xuất.

# Overriding Methods

Từ khóa `super` dùng để truy cập và gọi hàm của lớp cơ sở bên trong lớp dẫn xuất.

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
