// comparisions ->  > < >= <= ==

// comaprision with same dataType -> best and always give correct result

console.log(2 > 5);
console.log(2 >= 2);
console.log(2 < 5);
console.log(2 <= 5);
console.log(2 == 5);
console.log(2 != 5);




// we avoid the type of conversions that are given below

// comparision with different dataTypes -> predictable results nhi aate

console.log("2" >= 1);
console.log(2 > "1");

// special conversions
console.log(null > 0); // false
console.log(null == 0); // false 
console.log(null >= 0); //true 
// reason -> equality check(==) and comparision(>,<,>=,<=) works differently, In comparision
// null is converted to a number treating it as 0, That's whys (1) is false and (3) is true

console.log(undefined > 0); // false
console.log(undefined == 0); // false 
console.log(undefined >= 0); //false
// undefined always gives false 


// strict check(===) -> it not only checks the value but also dataType
console.log("1" === 1); // false -> dataType is different 
