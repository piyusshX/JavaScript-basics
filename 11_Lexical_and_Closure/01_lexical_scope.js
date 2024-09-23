// Lexical Scope -> An inner function will have access of all the variables of an outer function. In simple
// words jab koi bhi function ke ander ek aur function hoga to jo inner function hai jo uss ke pass outer
// function ke sare variables ka access hoga.


function outer() {
    let name = "Blank"; 
    function inner() {
        console.log(name); 
    }
    inner();
}
outer();