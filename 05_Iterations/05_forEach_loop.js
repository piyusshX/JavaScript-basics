// <---------------------------------------------- for-each ---------------------------------------------------->

// for-Each -> The forEach() method of Array instances executes a provided function once for each array element.

// Syntax 1 -> arrName.forEach( function (element, index, array) { function defination } ) // Normal function
// Syntax 2 -> arrName.forEach( (element, index, array) => { function defination } ) // Arrow function
// Syntax 3 -> arrName.forEach( funName ) // Already defined function

const hero = ["Deku", "Kazuma", "Shoto", "Bakago", "Saitama"]

hero.forEach( function (arr){
    // console.log(arr);
} )

hero.forEach( (arr) => {
    // console.log(arr);
} )

function printHeroes(arr){
    // console.log(arr);
}

hero.forEach(printHeroes);

// We also take other parameters in forEach loop that are given in the Syntax

hero.forEach( (val, idx, arr) => {
    // console.log(val, idx, arr);
})

// Accessing object values in an array with forEach loop

const KonoSuba = [
    {
        characterName: "Kazuma",
        job: "thief",
        race: "Human"
    },
    {
        characterName: "Aqua",
        job: "Priest",
        race: "Goddess"
    },
    {
        characterName: "Darkness",
        job: "Cruseder",
        race: "Human"
    },
    {
        characterName: "Kazuma",
        job: "Mage",
        race: "Human/Crimsom-Demon"
    },
    
]

KonoSuba.forEach( (anime) => {
    console.log(`${anime.characterName} is a ${anime.race} and works as ${anime.job}`);
} )