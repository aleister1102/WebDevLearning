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

// 2.2
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text = text.replace(/[.,]/g,'')
let words = text.split(' ')
console.log(words)
console.log(words.length)

// 2.3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
if(shoppingCart.includes('Milk') === false)
    shoppingCart.push('Milk')
let pos = shoppingCart.indexOf('Honey')
shoppingCart.splice(pos,1)
shoppingCart.splice(2,1,'Green tea')
console.log(shoppingCart)

// Exercise 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let len = ages.length

ages.sort()
console.log(`max: ${ages[len - 1]}`)
console.log(`min: ${ages[0]}`)

if(len % 2 === 0)
{
    let middleOne = ages[Math.floor((len - 1)/2)]
    let middleTwo = ages[Math.ceil((len - 1)/2)]
    console.log('middle items: ',middleOne,middleTwo)
}
else
{
    let middle = ages[(len - 1)/2]
    console.log('middle item: ',middle)
}

let sum = 0
for(let i = 0; i < len; i++)
{
    sum += ages[i];
}
console.log(sum/len)
console.log(`range = ${ages[len - 1] - ages[0]}`)



