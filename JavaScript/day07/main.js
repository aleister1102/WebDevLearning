
//Exercise 1
//1.2
function fullName(firstName, lastName) {
    return `Full name is ${firstName} ${lastName}`
}

console.log(fullName(`Quân`, `Lê Minh`))

//1.4
function recArea(length, width) {
    return length * width
}

console.log(recArea(5, 7)) // 35

//1.12
function convertCelciusToFahrenheit(Cdegree) {
    return (Cdegree * 9 / 5) + 32
}

console.log(convertCelciusToFahrenheit(100))

//1.13
function bmi(weight, height) {
    let bmi = weight / (height * height)
    let result = ""
    if (bmi < 18.5)
        result = 'Underweight'
    else if (18.5 <= bmi <= 24.9)
        result = 'Normal weight'
    else if (25 <= bmi <= 29.9)
        result = 'Overweight'
    else
        result = 'Obese'
    return result
}

console.log(bmi(63, 1.72))

//1.15
function findMax() {
    let max = arguments[0]
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        if (element > max)
            max = element
    }
    return max
}

console.log(findMax(0, -7, 0, -1))

//Exercise 2
//2.1
function solveLinEquation(a, b, c, x) {
    return -a / b * x - c
}

console.log(solveLinEquation(1, 2, 3, 4))

//2.2
function solveQuadEquation(a, b, c) {
    const solution = []
    let delta = b * b - 4 * a * c
    if (a === 0 || delta < 0)
        solution.push(0)

    else if (delta === 0)
        solution.push(-b / (2 * a))
    else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a)
        let x2 = (-b - Math.sqrt(delta)) / (2 * a)
        solution.push(x1, x2)
    }
    return solution
}

console.log(solveQuadEquation(1, -1, -2))

//2.4
function showDateTime() {
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const date = now.getDate()

    const hours = now.getHours()
    const minutes = now.getMinutes()

    let str = `${date}/${month}/${year} ${hours}:${minutes}`
    console.log(str)
}

//2.5
function swapValues(a, b) {
    let temp = a
    a = b
    b = temp
}

//2.6
function reverseArray() {
    const reversed = []
    for (let i = arguments.length - 1; i >= 0; i--) {
        const element = arguments[i];
        reversed.push(element)
    }
    return reversed
}

console.log(reverseArray(1, 2, 2, 34, 5))

//2.7
function capitalizeArray(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase()
    }
    return array
}

console.log(capitalizeArray(['1231', 'asdasdas', 'asdasdas', 'asdadkasgduw', 'asdad']))

//2.14
function sum() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum += element
    }
    return sum
}

console.log(sum(1, 2, 3))

//2.15
function randomUserIp(n) {
    let str = ""
    for (let i = 0; i < n; i++) {

        let randomCharCode = 97 + Math.floor(Math.random() * 62)
        if (randomCharCode >= 133)
            randomCharCode -= 68
        else if (randomCharCode >= 123)
            randomCharCode -= 75

        let randomChar = String.fromCharCode(randomCharCode)
        str += randomChar
    }
    return str
}

console.log(randomUserIp(10))

//2.16
function randomMacAddress() {
    let MAC = ""
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 2; j++) {
            let randomCharCode = 48 + Math.floor(Math.random() * 16)
            if (randomCharCode >= 58)
                randomCharCode += 7
            let randomChar = String.fromCharCode(randomCharCode)
            MAC += randomChar
        }
        MAC += ":"
    }

    return MAC.substring(0, MAC.length - 1)
}

console.log(randomMacAddress())

//2.17
function randomHexaNumberGenerator() {
    let hexa = ""
    for (let i = 0; i < 6; i++) {
        let randomCharCode = 48 + Math.floor(Math.random() * 16)
        if (randomCharCode >= 58)
            randomCharCode += 39
        let randomChar = String.fromCharCode(randomCharCode)
        hexa += randomChar
    }
    return "#" + hexa
}

console.log(randomHexaNumberGenerator())

//Exercise 3
//3.1
function userIdGeneratedByUser() {
    let str = ""
    // let a = +prompt('How many characters?')
    // let b = +prompt('How many id?')
    // for (let i = 0; i < b; i++) {
    // str += randomUserIp(a) + "\n"
    // }
    console.log(str)
}
userIdGeneratedByUser()
//3.2

function rgbColorGenerator() {

    let str = "rgb("
    for (let i = 0; i < 3; i++) {
        let randomNumber = Math.floor(Math.random() * 256)
        str += `${randomNumber},`
    }
    str = str.substring(0,str.length - 1) + ")"
    console.log(str)
}
rgbColorGenerator()