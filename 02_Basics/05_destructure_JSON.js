// <--------------------------------- Destructuring of Object ------------------------------------------------->

const Anime = {
    name: "KonoSuba",
    genre: "Isekai, Fantasy, Comedy",
    rating: 8,
    mainCharacter: "Kazuma",
    femaleMainCharacter: "Aqua, Darkness, Megumin",
}
 
// To solve this problem we can destructure the object

// Syntax -> varType {key: newName} = objName; -> we can access key with (newName) instead of (objName.key)
// Syntax -> varType {key} = objName; -> we can access key with (key) instead of (objName.key)

const {mainCharacter: mc} = Anime; // We can access mainCharacter as mc instead of Anime.mainCharacter
const {name} = Anime // 
// console.log(mc); // Kazuma
// console.log(name); // KonoSuba

// <---------------------------------- Brief Intro about API and JSON ----------------------------------------->

// API -> Application Programming Interface
// In simple words API is nothing but is a way of writing the value that we recived from the backend
// and communicating with client and server.

// We get data from APIs in JSON format 

// JSON -> JavaScript Object Notation -> 

// JSON Syntax :-

// mostly we get data in object type
// {
//     "name": "Deku",
//     "quirk": "One For All",
// }

// But sometime we also get array
// [
//     {},
//     {},
//     {}
// ]