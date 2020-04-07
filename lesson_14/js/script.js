//// Massives
function calcValues(a, b) {
    return [
        a + b,
        a - b,
        a * b,
        a / b
    ]
}
const [sum, sub = 'Вирахування нема', mult, ...other] = calcValues(42, 10)
console.log(sum, mult, ...other, sub)

//// Objects
const person = {
    name: 'Max',
    age: 20,
    address: {
        country: 'Ukraine',
        city: 'Lviv'
    }
}
// const {name: firstName = 'without name', age} = person
const {name, ...info} = person
console.log(name, info)