const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// 2.11
let max = 0
let biggest = ""
for (let i = 0; i < webTechs.length; i++) {
    const element = webTechs[i];

    if (element.length > max) {
        max = element.length
        biggest = element
    }
}
console.log(biggest)

// 2.12
const arrOfarr = []
for (let i = 0; i < webTechs.length; i++) {
    const element = webTechs[i];
    const arr = []
    arr.push(element, element.length)
    arrOfarr.push(arr)
}

for (let i = 0; i < arrOfarr.length; i++) {
    const element = arrOfarr[i];
    console.log(element)
}

// 2.13
let mern = ""
for (let i = 0; i < mernStack.length; i++) {
    const element = mernStack[i];
    mern += element.substring(0, 1);
}

console.log(mern)


// 2.15
const fruit = ['banana', 'orange', 'mango', 'lemon']
let len = fruit.length
for (let i = 0; i < len / 2; i++) {
    let temp = fruit[i]
    fruit[i] = fruit[len - 1 - i]
    fruit[len - i - 1] = temp
}

console.log(fruit)

// 2.16
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

for (let i = 0; i < fullStack.length; i++) {
    const element = fullStack[i];
    for (let j = 0; j < element.length; j++) {
        console.log(element[j])        
    }
}

console.clear()
// Exercise 3
// 3.3 
webTechs.sort()
console.log(webTechs)
mernStack.sort()
console.log(mernStack)
