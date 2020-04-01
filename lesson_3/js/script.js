function createIncrementor(n){
    return function(num) {
        return n + num
    }
}
const addOne = createIncrementor(1)// == addOne()-це функція,вона замкнула в собі значення 1 і весь час додає одиницю до іншого значення.
// тобто це значення буде замкнуте всередині функції
console.log(addOne(10))
console.log(addOne(45))

function urlGenerator(domain){
    return function(url) {
        return `https://${url}.${domain}`
    }
}
const comUrl = urlGenerator('com')
console.log(comUrl('google'))
console.log(comUrl('netflix'))


