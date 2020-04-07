///Spread
const citiesUkraine = ['Lviv', 'Kyiv', 'Odessa', 'Dnipro', 'Lutsk', 'Cherkasy']
const citiesEurope = ['Praha', 'London', 'Milan', 'Barcelona']

const allCities = [...citiesEurope, ...citiesUkraine]
console.log(allCities)

const UkrPopulation = {
    Lviv: 5,
    Kyiv: 10,
    Odessa: 3,
    Lutsk: 1
}
const EuroPopulation = {
    Berlin: 7,
    London: 15,
    Rome: 9,
    Praha: 2
}
console.log({...UkrPopulation, ...EuroPopulation})

const numbers = [5, 1, 9, 32, 66]
console.log(Math.max(...numbers))


//// Rest
function sum(a, b, ...rest) {
    return a + b + rest.reduce((a, i) =>a + i, 0)
}
const numberss = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(sum(...numberss))