function* numGen(n) {
    for (let i=0; i<n; i++){
        yield i
    }
}
const num = numGen(7) //num.next()

// const iterator = {
//     [Symbol.iterator](n=10) {
//         let i = 0
//         return {
//             next() {
//                 if (i < n){
//                     return { value: ++i, done: false}
//                 }
//                 return { value: undefined, done: true}
//             }
//         }
//     }
// }

// for( let k of iterator) {
//     console.log(k)
// }

// for( let l of 'iterator') {
//     console.log(l)
// }

function* iter(n) {
    for (let i = 0; i < n; i++){
        yield i
    }
}
for( let n of iter(10)) {
        console.log(n)
}