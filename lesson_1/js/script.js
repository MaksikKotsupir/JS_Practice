const person = {
    name: 'Max',
    age: '20',
    greet: function(){
        console.log('Greet!');
    }
}
const person = new Object({
    name: 'Max',
    age: '20',
    greet: function(){
        console.log('Greet!');
    }

})
Object.prototype.sayHello = function() {
    console.log('Hello!');
}

const smth = Object.create(person);
smth.name = "Some";