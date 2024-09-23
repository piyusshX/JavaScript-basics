const name = "kazuma"
const marks = 89
// outdated syntax 
// console.log(name + " got 100 out of " + marks + " marks"); // kazuma got 100 out of 89 marks

// Modern Syntax by using Backticks(``) -> String Interpolation
// Syntax :- `write_any_text_ for injecting variable use -> ${varName} _text`
console.log(`In the exam ${name} got ${marks} marks`); // In the exam kazuma got 89 marks


// Declare String with new Keyword
const gameName = new String('Blank') // we have strictly declared that gameName is string
// console.log(gameName[1]); // l -> this is not array its object

// We can also use many inbulit string functions 
// we can view inbulit string function in console of inspect element by declaring a string with new Keyword in it

// console.log(gameName.length); // 5
// console.log(gameName.toUpperCase()); // BLANK -> this does not change the original string bcz of Stack Memory 
// console.log(gameName.toLowerCase()); // blank
// console.log(gameName.charAt(3)); // n -> tell us which char at 3rd idx
// console.log(gameName.indexOf("a")); // 2 -> gives us the first index of given char

// Some More Functions


// <-------------------------------------- substring -------------------------------------------------------------> 
// Syntax :- strName.substring(stIdx,edIdx);
// substring me ending Idx se ek pahale tak hi store hoga
// Ex -> KonoSuba -> stIdx = 0, edIdx = 3 -> Kon

const newSubString = gameName.substring(0,3);
// console.log(newSubString); // Bla


// <-------------------------------------- slice -------------------------------------------------------------> 
// Syntax :- strName.slice(stIdx,edIdx);
// slice me bhi ending Idx se ek pahale tak hi store hoga
const newSubString2 = gameName.slice(0,3);
// console.log(newSubString2); // Bla

// In slice you can also give -ve value in stIdx by giving -ve stIdx the slice will starts from 
// last nth element (not including 0 -> means starts from 1) to the given ending index
// Ex :- KonoSuba -> stIdx = -4, edIdx = 7 -> Sub
const newSubString3 = gameName.slice(-4,5);
// console.log(newSubString3); // lank


// <-------------------------------------- trim -------------------------------------------------------------> 
// Syntax :- strName.trim();
// Trim is used for mainly removing spaces from a string
const str = "    Piyush      "
// console.log(str); //    Piyush      
// console.log(str.trim()); // Piyush
// we also have other trim functions read about them on MDN

// <-------------------------------------- replace -------------------------------------------------------------> 
// Syntax :- strName.replace('str_to_be_replace', 'str_replace_by');
const url = "https://piyush.com/piyush%20jain/"
console.log(url.replace('%20', '-')); // https://piyush.com/piyush-jain/

// <-------------------------------------- includes -------------------------------------------------------------> 
// Syntax :- strName.includes('keyword/string'); returns boolean value
console.log(url.includes('piyush')); // true

// <-------------------------------------- split -------------------------------------------------------------> 
// Syntax :- strName.split('separator', 'limit'); 
// it splits the string based on separator and make an array of the substrings
// separator -> Symbol/Space/Char/Number/Anything , limit -> how many splits after we stop
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
const naam = new String('Piyush-Jain');
console.log(naam.split('-'));