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


const copyPerson = Object.assign({}, person)
const keys = Object.keys(copyPerson);
const address = Object.keys(copyPerson.address)
const entries = Object.entries(copyPerson)
console.log(entries[0])

