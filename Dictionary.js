//dictionary.js
// //a dictionary is used to store pairs of data
// //eg name:james,  age:40, weapon:bow
// // dictionary => json
// //(json->javascript object notation)

let hero = {
    "name"   : "spiderman",
    "powers" : "swings webs",
    "city"   : "new york",
    "hobby"  : "jumping",
}

console.log(hero)

//  keys : values
console.log( Object.keys(hero) )
//  keys : values
console.log( Object.values(hero) )

console.log(hero["name"]);
console.log(hero.name);

//Deleting an item
delete hero.name
console.log(hero)

//Changing an item
hero.hobby = "drinking water"
console.log(hero)

let character = {
  "name" : "mario",
  "health": 100,
  "weapon": "sword",
  "transport" : "horse"
}

console.log("********************");
console.log(character);

for(let key in character){
    console.log(key)
}

Object.entries(character).forEach((key, value)=>{
    console.log(key, value

      
    )
})
