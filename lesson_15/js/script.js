const myNumber = 42

console.log(localStorage.getItem('number')) 
localStorage.setItem('number', myNumber.toString())
console.log(localStorage.getItem('number')) 

localStorage.removeItem('number')
localStorage.clear()

const obj = {
    name: 'Max',
    age: 20
}
localStorage.setItem('person', JSON.stringify(obj))
const raw = localStorage.getItem('person')
const person = JSON.parse(raw)
person.name = 'Ivan'
console.log(person)

window.addEventListener('storage', event => {
    console.log(event)
})