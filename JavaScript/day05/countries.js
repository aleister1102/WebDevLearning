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

if (countries.includes('Ethiopia') === false)
  countries.push('Ethiopia')
else
  console.log('ethiopia'.toUpperCase())

console.log(countries.slice(0, 10))

let len = countries.length
let middle = null
let subArr1 = []
let subArr2 = []
if (len % 2 === 0) {
  middle = Math.floor((len - 1) / 2)
}
else {
  middle = (len - 1) / 2
}
subArr1 = countries.slice(0, middle)
subArr2 = countries.slice(middle + 1,len)
console.log(subArr1)
console.log(subArr2)

