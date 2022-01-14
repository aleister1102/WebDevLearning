const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

if (webTechs.includes('Sass') === false) {
  webTechs.push('Sass')
  console.log(webTechs)
}
else
  console.log('Sass is a CSS preprocess')

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)