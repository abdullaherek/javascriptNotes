//ES6'DAN SONRA GENELDE KULLANILMIYOR.
//kalıtım - inheritance 

function Person(name,age){
    this.name = name;
    this.age = age;

}
Person.prototype.showInfos = function(){
    console.log("İsim: " + this.name + "Yaş: " +this.age);
}
const person = new Person("Abdullah", 22);
// console.log(person);

function Employee(name,age,salary){
    // this.name = name;
    // this.age = age;
    Person.call(this, name,age);
    this.salary = salary;
}


Employee.prototype = Object.create(Person.prototype); //miras işlemi
//Overriding - İptal Etme
Employee.prototype.showInfos = function(){
    console.log("İsim: " + this.name + "Yaş: " +this.age+ "Maaş: " + this.salary);
}

const emp = new Employee("Abdullah", 24, 4000);
console.log(emp);
emp.showInfos();
Employee.call("faruk", 22, 500);
