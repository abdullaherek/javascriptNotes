// Sets = Kümeler

const mySet = new Set();
mySet.add(100);
mySet.add(3.14);
mySet.add(100);
mySet.add("Abdullah");
mySet.add(true);
mySet.add([1,2,3]);
mySet.add({a:1,b:2});

console.log(mySet);


const mySet2 = new Set([100, 3.14, "Faruk"]);
console.log(mySet2);


//Has Metodu - Var mı bakar

console.log(mySet.has(3.14));
console.log(mySet.has([1,2,3])); //false

