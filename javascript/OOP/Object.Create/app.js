//Bir objenin prototipini başka objeden alıcaksak object.create kullanırız
//Kalıtım işlemlerinde kullanılır.

// const obj = {
//     test1:function(){
//         console.log("test1");
//     },

//     test2:function(){
//         console.log("test2");
//     },
// }

// console.log(obj);

// const emp = Object.create(obj);
// emp.name = "abdullah";
// emp.age= 25;
// console.log(emp);

function Person(){ //Constructor

}

Person.prototype.test1=function(){
    console.log("Test1");
}
Person.prototype.test2=function(){
    console.log("Test2");
}

function Employee(name,age){
    this.name = name;
    this.age = age;
}

Employee.prototype = Object.create(Person.prototype);
const emp = new Employee("Abdullah", 22);

console.log(emp);
emp.test1();
