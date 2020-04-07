function check() {
    let input = document.getElementsByName('r1');
    input.forEach((item, index) => {
        if(item.checked){
            alert('Вибраний ' +index+ ' елемент')
        }
    })
}