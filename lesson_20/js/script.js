// вставляє вузли або рядки перед або після елемента 
ol.before('before');
ol.after('after');


// вставляє вузли або рядки на початок або вкінець 
let liFirst = document.createElement('li');
  liFirst.innerHTML = 'prepend';
  ol.prepend(liFirst); 

let liLast = document.createElement('li');
  liLast.innerHTML = 'append';
  ol.append(liLast); 

// заміняє елемент іншим елементом
liFirst.replaceWith('Yess')

// видалити елемент
liLast.remove()

// для вставки html, тексту і цілого елемента
elem.insertAdjacentHTML(where, html)
elem.insertAdjacentText(where, text) 
elem.insertAdjacentElement(where, elem) 

//"beforebegin" – вставляет html прямо перед elem,
//"afterbegin" – вставляет html в elem в начало,
//"beforeend" – вставляет html в elem в конец,
//"afterend" – вставляет html сразу после elem.

