const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
// 2.4
const COUNTRIES = []
for (let i = 0; i <= countries.length - 1; i++) {
    COUNTRIES.push(countries[i].toUpperCase())
}

// 2.5
const countryLen = []
for (let i = 0; i <= countries.length - 1; i++) {
    countryLen.push(countries[i].length)
}

// 2.6
const arrOfarr = []

for (let i = 0; i <= countries.length - 1; i++) {
    const arr = []
    const country = countries[i]
    arr.push(country, country.substring(0, 4).toUpperCase(), country.length)

    arrOfarr.push(arr)
}

for (let i = 0; i < arrOfarr.length; i++) {

    console.log(arrOfarr[i])
}

// 2.7
const land = []
let flag = false
for (let i = 0; i < countries.length; i++) {
    const element = countries[i];

    if (element.includes('land')) {
        land.push(element)
        flag = true
    }
}

if (flag === true)
    console.log(land)
else
    console.log('All these countries are without land')


// 2.8
const ia = []
flag = false
for (let i = 0; i < countries.length; i++) {
    const element = countries[i];

    if (element.includes('ia')) {
        ia.push(element)
        flag = true
    }
}

if (flag === true)
    console.log(ia)
else
    console.log('These are countries ends without ia')



// 2.9
let max = 0
let biggest = ""
for (let i = 0; i < countries.length; i++) {
    const element = countries[i];

    if(element.length > max)
    {
        max = element.length
        biggest = element
    }
}
console.log(biggest)


// 2.10
const five = []
for (let i = 0; i < countries.length; i++) {
    const element = countries[i];
    
    if(element.length === 5)
    {
        five.push(element)
    }
}
console.log(five)

// Exercise 3
//3.1 
const countries2 = []
for (let i = 0; i < countries.length; i++) {
    const element = countries[i];
    countries2.push(element)
}

console.log(countries)

// 3.2 
const sortedCountries = countries.slice(0,countries.len).sort()
console.log(sortedCountries)

console.clear()
// 3.4