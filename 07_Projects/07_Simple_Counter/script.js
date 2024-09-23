document.querySelector("button").addEventListener('click', function(e){
    let num = document.querySelector(".num").innerHTML;
    num = Number(num);
    num++;
    document.querySelector(".num").innerHTML = `${num}`
})