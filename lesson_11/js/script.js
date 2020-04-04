const people = [
    { name: 'Max', age: 20, budget: 30000},
    { name: 'Ivan', age: 22, budget: 21000},
    { name: 'Nazar', age: 13, budget: 14000},
    { name: 'Taras', age: 16, budget: 42000},
    { name: 'Vova', age: 19, budget: 44000},
    { name: 'Oleh', age: 25, budget: 31000},
]

// for (let i=0; i<people.length; i++){
//     console.log(people[i])
// }

// for (let person of people) {
//     console.log(person)
// }

people.forEach(function(person, index, peopleArr) {
    console.log(person)
})