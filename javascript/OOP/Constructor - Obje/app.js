//Constructor - Yapıcı Fonksiyon

// const emp1 = { //Object Literal

//     name:"Abdullah",
//     age:22,
//     showInfos:function() {console.log("Bilgiler gösteriliyor");}
// };
// emp1.salary=1500;
// const emp2 = {

//     name:"Faruk",
//     age:22
// };

// function Employee(){ // Yapıcı Fonksiyon / Constructor
//    this.name="Abdullah";
// }

// const emp1 = new Employee();



//Doğru constructor yöntemi

function Employee(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.showInfos = function(){
        console.log(this.name,this.age,this.salary);
    }
}

const emp1 = new Employee("Abdullah", 25, 4000);

emp1.showInfos();