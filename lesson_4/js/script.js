console.log('start') //1
console.log('start 2') //2
setTimeout(function(){
    console.log('start 3') //3
},7000)
console.log('end') //4
//спочатку викликається //1 в call stack і зникає, потім викликається //2 в call stack і зникає
//потім викликається анонімна функція //3 в call stack, бо її треба зареєструвати
// і оскільки це settimeout ця функція потрапляє в web api і очікується її виконання(зникає з call stack)
//потім викликається //4 в call stack і зникає
//і коли проходить 7 секунд в цього стороннього web api, вона потрапляє в callback queue і там працює цикл(Event Loop), який закидує все знову в call stack

console.log('1')
setTimeout(function(){
    console.log('2')
},0)
console.log('3')