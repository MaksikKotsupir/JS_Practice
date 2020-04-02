console.log('Request data...')
const p = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Preparing data...')
        const backendData = {
            server: 'aws',
            port: 500,
            status: 'working'
        }
        resolve(backendData)
    }, 2000)
})

p.then((data) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)  //reject(data) - error
        }, 2000)
    })
})
.then(clientData => {
    clientData.fronPromise = true
    return clientData
})
.then(data => {
    console.log('Modifies data:', data)
})
.catch(err => console.error('Error', err))
.finally(() => console.log('Finally')) // буде виводитись не зважаючи як виводяться дані

/////=======

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(),ms)
    })
}

// sleep(5000).then(() => console.log('After 5 sec'))
// sleep(6000).then(() => console.log('After 6 sec'))

// виведе, коли останній проміс буде виконаний
Promise.all([sleep(5000), sleep(7000)]).then(() => {
    console.log('All promises')
})

// виведе, коли перший проміс буде виконаний
Promise.race([sleep(5000), sleep(7000)]).then(() => {
    console.log('Race promises')
})