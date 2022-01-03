// Exercise 1
// 1.1
// let userAge = +prompt('Enter year of birth: ')
// let msg = `You are ${userAge}\n`
// if(userAge >= 18)
//     msg += 'You are old enough to drive'
// else
//     msg += `You will be allowed to drive after ${18 - userAge}`

// confirm(msg)

// 1.2
// let myAge = 19
// let yourAge = +prompt('Enter your age')
// if(myAge > yourAge)
//     console.log(`Me are ${myAge - yourAge} older than you`)
// else if(myAge < yourAge)
//     console.log(`You are ${yourAge - myAge} older than me`)
// else
//     console.log(`We have same age`)

// 1.3
// let a = 4
// let b = 5
// if(a > b)
//     console.log(`${a} is greater than ${b}`)
// else
//     console.log(`${b} is greater than ${a}`)

// console.log(`${a > b ? `${a} is greater than ${b}`: `${b} is greater than ${a}`}`)

// 1.4
// let num = +prompt('Enter a number: ')
// if(num % 2 == 0)
//     console.log(`${num} is an even number`)
// else
//     console.log(`${num} is an odd number`)

// Exercise 2

// 2.1
// let grade = +prompt('Enter a grade: ')
// if(grade >= 80 && grade <= 100)
//     console.log('A')
// else if (grade >= 70 && grade <= 89)
//     console.log('B')
// else if (grade >= 60 && grade <= 69)
//     console.log('C')
// else if (grade >= 50 && grade <= 59)
//     console.log('D')
// else
//     console.log('F')

// 2.2
// let month = prompt('Enter month: ')
// let msg = 'Season: '
// if (month == 'September' || month == 'October' || month == 'November')
//     msg += 'Autumn'
// else if(month == 'December' || month == 'January' || month == 'February')
//     msg += 'Winter'
// else if(month == 'March' || month == 'April' || month == 'May') 
//     msg += 'Spring'
// else if(month == 'June' || month == 'July' || month == 'August')
//     msg += 'Summer'
// else
//     msg = 'Cannot regconize'

// confirm(msg)

// 2.3
// let day = prompt('Enter day: ').toLowerCase()
// let formalDay = day.substring(0,1).toUpperCase() + day.substring(1,day.length + 1)
// let msg = `${formalDay} is a `
// if(day == 'saturday' || day == 'sunday')
//     msg += 'weekend day'
// else if(day = 'monday' || day == 'tuesday' || day == 'wednesday' || day == 'thursday' || day == 'friday' || day == 'saturday')
//     msg += 'working day'
// else
//     msg = 'Cannot regconize'

// confirm(msg)

// Exercise 3

let month = prompt('Enter month: ').toLowerCase()
let year = +prompt('Enter year: ')
month = month.substring(0, 1).toUpperCase() + month.substring(1, month.length + 1)
let day = 0

switch (month) {
    case 'January': case 'March': case 'May': case 'July': case 'August': case 'October': case 'December':
        day = 31
        break
    case 'April': case 'June': case 'September': case 'November':
        day = 30
        break
    case 'February':
    {
        if (((year % 4 == 0) && (year % 100 != 0)) ||
            (year % 400 == 0))
            day = 29
        else
            day = 28
        break
    }
    default:
        day = 0
}

if (day == 0)
    confirm('Cannot regconize that month')
else
    confirm(`${month} has ${day} days`)


