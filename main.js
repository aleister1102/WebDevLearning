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

console.log(Object.keys(person));
// output: ['firstName', 'age', 'country', 'city', 'skills', 'title', 'address', 'getPersonInfo']
console.log(Object.keys(person.address));
// output: ['street', 'ward', 'city']