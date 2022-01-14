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

if(countries.includes('Ethiopia') === false)
  countries.push('Ethiopia')
else
  console.log('ethiopia'.toUpperCase())

console.log(countries.slice(0,9))

let len = countries.length
if(len % 2 === 0)
{
    let middleOne = countries[Math.floor((len - 1)/2)]
    let middleTwo = countries[Math.ceil((len - 1)/2)]
    console.log('middle items: ',middleOne,middleTwo)
}
else
{
    let middle = countries[(len - 1)/2]
    console.log('middle item: ',middle)
}

