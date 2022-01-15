
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

//2.3
function showDateTime()
{
    const now = new Date()
    console.log(now.getDate())
}