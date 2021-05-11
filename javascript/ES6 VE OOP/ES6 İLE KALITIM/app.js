class Person { //Sıperclass, Baseclass
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showInfos() {
        console.log("İsim:" + this.name + "Yaş:" + this.age);

    }
}

class Employee extends Person { //DerivedClass, Subclass, Childclass
    constructor(name, age, salary) {
        // this.name = name;
        // this.age = age;

        super(name,age);
        this.salary = salary;
    }
    showInfos(){
        console.log("İsim:" + this.name + "Yaş:" + this.age + "Maaş:" +this.salary);
        //override işlemidir.
    }
    toString(){ //overriding
        console.log("employe");
    }

}

const emp = new Employee("Mustafa", 25, 4000);
console.log(emp);
emp.showInfos();
emp.toString();
