const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}

const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodos() {
//     console.log('Fetch todo started...')
//     return delay(3000)
//         .then(() => fetch(url))
//         .then(response => response.json())
// }

// fetchTodos()
//     .then(data => {
//         console.log('Data:', data)
//     })
//     .catch(e => console.error(e))

async function fetchAsyncTodos() { // якшо всередині ф-ї буде await перед ф-єю пишем async //// все перетворюється на Promise
    console.log('Fetch todo started...')
    try{
        await delay(3000)
        const response = await fetch(url)
        const data = await response.json()
        console.log('Data:', data)
    } catch(e) {
        console.error(e)
    } finally {

    }
}

fetchAsyncTodos()