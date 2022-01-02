//Exercise 1

let firstName = 'Lê Minh'
let lastName = 'Quân'
let country = 'Việt Nam'
let city = 'HCM'
let age = 19
let isMarried = false
let year = 2022

console.log(typeof '10' == 10)
console.log(parseInt('9.8') == 10)

let truthy = 5 > 4
let truthy2 = 'Quân' != 'quân'
let truthy3 = 'béo' < 'ốm'
console.log(truthy, truthy2, truthy3)

let falsy = 19 > 20
let falsy2 = 'HCMUS' == 'US'
let falsy3 = 'xấu' > 'đẹp'
console.log(falsy, falsy2, falsy3)

console.log('python'.length > 'jargon'.length)
console.log(!'python'.includes('on'))
console.log(!'jargon'.includes('on'))

const now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth() + 1)
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())

//Exercise 2

// 2.1
// let base = prompt('Enter base: ', 'base here')
// let height = prompt('Enter height: ', 'height here')

// // base và height đã bị ép kiểu về Number khi nhân với 0.5
// console.log('The area of the triangle is', 0.5 * base * height)

// 2.2
// let a = +prompt('Enter a: ')
// let b = +prompt('Enter b: ')
// let c = +prompt('Enter c: ')

// // a, b, c cùng kiểu nên xem như nối chuỗi, cần chuyển sang number trước
// console.log('The perimeter of the triangle is', a + b + c)

// 2.3
// let length = +prompt('Length?')
// let height = +prompt('Height?')
// let area = length * height
// let perimeter = (length + height) * 2
// console.log('Area is ',area,' and perimeter is ', perimeter)

// 2.4
// let radius = +prompt('Radius?')
// let area = radius * radius * Math.PI
// let circumference = 2 * radius * Math.PI
// console.log('Area: ',area,'\nCircumference: ',circumference)

// 2.5
// let a = +prompt('a?')
// let b = +prompt('b?')
// console.log(`slope: ${a}\nx-intercept: ${b}\ny-intercept: ${-1.0*b/a}`)

// 2.6
// let x1 = +prompt('x1')
// let y1 =  +prompt('y1')
// let x2 = +prompt('x2')
// let y2 =  +prompt('y2')

// console.log(`Slope: ${(y2 - y1)/(x2 - x1)}`)

