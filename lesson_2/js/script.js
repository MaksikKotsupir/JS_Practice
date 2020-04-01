// this - вказує на той об'єкт, в контексті якого було викликано ==== завжди вказує на елемент який знаходиться зліва від виклику
// bind() - створює нову функцію, яка в момент виклику має певне присвоєне значення this, а також може містити послідовність аргументів, що передаються у функцію
// call - задає певний контекст функції, одразу її викликає
// apply - відрізняється від call способом передачі параметрів


function hello() {
    console.log('Hello', this)
}

const person = {
    name: 'Max',
    age: 20, 
    sayHello: hello,
    sayHelloWindow: hello.bind(window),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const man = {
    name: 'Taras',
    age: 23
}
person.logInfo.bind(man,'Frontend', '0677372833')()
person.logInfo.call(man,'Frontend', '0677372833')
person.logInfo.apply(man,['Frontend', '0677372833'])

//==========

const array = [1, 2, 3, 4, 5]

Array.prototype.multBy = function(n){
    return this.map(function(i){
        return i * n
    })
}
console.log(array.multBy(10))