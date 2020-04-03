const person = Object.create(
    {
        calculateAge() {
            console.log('Age:', new Date().getFullYear() - this.birthYear)
        }
    },
    {
        name: {
            value: 'Max',
            enumerable: true, //дає можливість перегляду у циклі 
            writable: true, //дає можливість зміни значення ключа(person.name = 'Ivan')
            configurable: true // дає можливість маніпулювати ключами обєкта(видаляти, додавати)
        },
        birthYear: {
            value: 2000,
            enumerable: false,
            writable: false,
            configurable: false
        },
        age: {
            get() {
                return new Date().getFullYear() - this.birthYear
            },
            set(value) {
                document.body.style.background = 'red'
                console.log('Set age', value)
            }
        }
    }
)
for (let key in person){
    if(person.hasOwnProperty(key)){
        console.log('KEY:', key, person[key])
    }
}