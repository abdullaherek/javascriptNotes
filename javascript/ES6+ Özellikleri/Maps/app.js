//Maps - Key - Value

let myMap = new Map(); //typeof = object

const key1= "Abdullah";
const key2= {a:10,b:20};
const key3 = () => 2;


//set
myMap.set(key1, "String değerdir");
myMap.set(key2, "Object");
myMap.set(key3, "function");


//get
console.log(myMap.get(key1));


const cities = new Map();

cities.set("Ankara", 5);
cities.set("istanbul", 15);

//For each

// cities.forEach(function(value,key){
// console.log(key,value);

//key,value })


//For of
// for(let [key,value] of cities){ //Destructing yapısı

//     console.log(key,value);
// }


//Map Keys - Values
// for(let key of cities.keys()){
//     console.log(key);
// }



//Array ile Map oluşturma

const array = [["key1", "value1"],["key2" ,"value2"]];

const lastMap = new Map(array);

console.log(lastMap);

//Mapten Array Oluşturma
// [["Ankara", 5], ["İstanbul", 15]]
// const array = Array.from(cities);
