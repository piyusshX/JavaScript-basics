document.querySelector(".dec").addEventListener('click', function(){
    let num = Number(document.querySelector('.num').innerHTML)
    num--
    document.querySelector('.num').innerHTML = `${num}`
})

document.querySelector(".inc").addEventListener('click', function(){
    let num = Number(document.querySelector('.num').innerHTML)
    num++
    document.querySelector('.num').innerHTML = `${num}`
})