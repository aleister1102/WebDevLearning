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