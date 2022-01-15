// Exercise 1

let str = ""
for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= i; j++) {
        str += "#"
    }
    str += "\n"
}

console.log(str)

for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`)
}

console.log('i\ti^2\ti^3')
for (let i = 0; i < 10; i++) {
    console.log(`${i}\t${i * i}\t${i * i * i}`)
}

for (let i = 0; i <= 100; i++) {
    let sum = 0
    for (let j = 1; j <= i; j++) {
        if (i % j === 0)
            sum += 1;
    }
    if (sum === 2)
        console.log(i)
}

// random unique number
const arr = []
for (let i = 0; i < 5; i++) {
    let randomNum = Math.random(); // generates 0 to 0.999
    let num = randomNum * (100 + 1)
    if (arr.includes(num) === false)
        arr.push(Math.round(num))
}


// Exercise 2
// random id
let str2 = ""
for (let i = 0; i < 100; i++) {

    let randomCharCode = 97 + Math.floor(Math.random() * 36)
    if (randomCharCode >= 123)
        randomCharCode -= 75

    let randomChar = String.fromCharCode(randomCharCode)
    str2 += randomChar
}

// random hexadecimal number
let str3 = "#"
for (let i = 0; i < 6; i++) {
    let randomCharCode = 97 + Math.floor(Math.random() * 16)
    if (randomCharCode >= 103)
        randomCharCode -= 55

    let randomChar = String.fromCharCode(randomCharCode)
    str3 += randomChar
}

// random RGB color
let str4 = "RGB("

for (let i = 0; i <= 2; i++) {
    let randomNum = Math.floor(Math.random() * 256).toString()
    str4 += randomNum + ","
}
str4 = str4.substring(0, str4.length - 2)


