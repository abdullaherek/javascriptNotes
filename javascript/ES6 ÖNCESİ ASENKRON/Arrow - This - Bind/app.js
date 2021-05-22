// const person = {
//     age:22,

//     tellAge : function(){
//         //this person objesini gösterir
//         console.log(this.age); 
//     }.bind(this)

//     //buradaki this - globaldeki window objesini gösterir.


// }


// person.tellAge();

const person = {

    age:22,

    tellAge: () => { //arrow - bind bağlamışsın gibi gösterir.
        console.log(this);
        console.log(this.age); //undefined olarak gözükür.

    }
}

person.tellAge();