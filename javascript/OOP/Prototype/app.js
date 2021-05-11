function Employee(name,age){
    this.name = name;
    this.age = age;
    // this.showInfos = function(){
    //     console.log("bilgi gösteriliyor");
    // }
}
Employee.prototype.showInfos = function(){
    
        console.log("isim: "+this.name + "Yaş: "+ this.age);
    
}

const emp1 = new Employee("Apo", 22);
const emp2 = new Employee("adam", 34);

console.log(emp1);
console.log(emp2);

