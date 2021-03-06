/// push() - додає елемент вкінець масива
const arr = [1, 2, 3, 4]
arr.push(5)
console.log(arr)

/// pop() - видаляє останній елемент масива
const del = arr.pop()
console.log(arr)
console.log(del) // - повертає значення яке було видалене

/// shift() - видаляє перший елемент масива
arr.shift()
console.log(arr)

/// unshift() - додає елемент на початок масиву
arr.unshift('Hi')
console.log(arr)

/// split() - дозволяє розбити строку в масив 
const str = 'hello beautiful world'
const mass = str.split(' ')
console.log(mass)

/// join() - перетворює масив в строку
const strJoin = mass.join(' ')
console.log(strJoin)

/// slice() - створює новий масив куда копіює елементи з джерела, починаючи з елемента під номером А і до елемента під номером Б
const massSlice = mass.slice(0,2)
const strSlice = str.slice(0,6)
console.log(massSlice, strSlice)

/// splice() - дозволяє додавати і видаляти елемент( перший параметр - це індекс елемента в масиві, другий означає скільки елементів потрібно видалити, а третій параметр це елемент який потрібно додати)
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);
console.log(removed)
console.log(myFish)
var removed = myFish.splice(3, 0, 'Shark');
console.log(myFish)