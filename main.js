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

  get getAge(){
    return this.age;
  }
}
class Student extends Person {
  constructor(firstName, lastName, age, gender) {
    super(firstName, lastName, age);
    this.gender = gender;
  }
}

const lmq = new Student("Quân", "Lê Minh", 20, "male");
console.log(lmq);
console.log(lmq.getAge);
console.log(lmq.age); // output: 21
