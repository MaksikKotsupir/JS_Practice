const people = [
    { name: 'Max', age: 20, budget: 30000},
    { name: 'Ivan', age: 22, budget: 21000},
    { name: 'Nazar', age: 13, budget: 14000},
    { name: 'Taras', age: 16, budget: 42000},
    { name: 'Vova', age: 19, budget: 44000},
    { name: 'Oleh', age: 25, budget: 31000},
]

for (let i=0; i<people.length; i++){
    console.log(people[i])
}

for (let person of people) {
    console.log(person)
}

////////  forEach - звичайний цикл по масиву який приймає 3 параметри: один елемент масиву, індекс і сам масив
people.forEach(function(person, index, peopleArr) {
    console.log(person)
})

people.forEach(person => console.log(person))

///////  Map - створює новий масив, але яким ми можемо маніпулювати його створення 
const newPeople = people.map(person => `${person.name} (${person.age})`)
console.log(newPeople)

//////  Filter - фільтрує масив за певнимим параметрами 
const adults = people.filter(person => person.age >= 18)
console.log(adults)

//////  Reduce - вертає якесь кінцеве значення (total = 0 - це певне початкове значення)
const amount = people.reduce((total, person) => total + person.budget, 0)
console.log(amount)

////// Find - слугує, щоб за умовою знайти якийсь елемент
const Name = people.find(person => person.name === 'Max')
console.log(Name)

/////  FindIndex - повертає індекс шуканого елемента
const NameIndex = people.findIndex(person => person.name === 'Max')
console.log(NameIndex)