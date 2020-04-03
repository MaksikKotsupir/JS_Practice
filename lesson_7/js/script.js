// class Animal {
//     static type = 'ANIMAL'// доступна тільки при зверненні до батька

//     constructor(option){
//         this.name = option.name
//         this.age = option.age
//         this.hasTail = option.hasTail
//     }

//     voice() {
//         console.log('I am animal')
//     }
// }

// class Cat extends Animal { // клас Cat наслідується від класу Animal
//     constructor(option) {
//         super(option) // викликається батьківський конструктор і передаєм набір опцій
//         this.color = option.color
//     }

//     voice() {
//         super.voice() //викликає і батьківський метод
//         console.log('I am cat')
//     }

//     get ageInfo(){
//         return this.age * 7
//     }

//     set ageInfo(newAge){
//         this.age = newAge
//     }
// }
// const cat = new Cat({
//     name: 'Cat',
//     age: 5,
//     hasTail: true,
//     color: 'black'
// })

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = 'none'
    }

    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)

        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100, 
    color: 'red'
})
const box2 = new Box({
    selector: '#box2',
    size: 120, 
    color: 'blue'
})

class Circle extends Box {
    constructor(options) {
        super(options) 

        this.$el.style.borderRadius = '50%'
    }
}

const c = new Circle({
    selector: '#circle',
    size: 100,
    color: 'green'
})