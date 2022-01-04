// Exercise 1

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
console.log(itCompanies.length)
console.log('First: ', itCompanies[0])
console.log('Last: ', itCompanies[itCompanies.length - 1])
console.log('Middle: ', itCompanies[Math.floor((itCompanies.length - 1) / 2)])

console.log('Amazon'.split(/o/i)) // Tách chuỗi có 1 chữ 'o' được mảng 2 phần tử
console.log('Google'.split(/o/i)) // Tách chuỗi có 2 chữ 'o' được mảng 3 phần tử
// Như vậy với nếu mảng tách chuỗi có 3 phần tử trở lên 
// thì chuỗi sẽ có 2 chữ 'o' trở lên
for (let i = 0; i < itCompanies.length; i++) {
    if (itCompanies[i].split(/o/i).length >= 3)
        itCompanies.splice(i--, 1)
}
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i])
}

// Exercise 2

import { countries as _countries } from './countries.js'
import { webTechs as _webTechs } from './webTechs.js'
console.log(_countries)
console.log(_webTechs)

