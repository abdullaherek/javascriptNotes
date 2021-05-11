// Call, Apply ve Bind

const obj1 = {

    number1:10,
    number2:20
};
const obj2 = {

    number1:30,
    number2:40
};

function addNumbers (number3,number4){
    // call ve apply yoksa this window'u gösterir. 
    console.log(this.number1); // call kullanmazsak undefined olacaktır.

    console.log(this.number1+this.number2 + number3 + number4);
}

// addNumbers(100, 200);
addNumbers.call(obj1, 100, 200);

addNumbers.apply(obj2, [100,200]); 

//Bind

function getNumbersTotal(number3,number4){
    return this.number1+this.number2 + number3 + number4;
    //kopya fonksiyon oluşturur.
    //eventlerde kullanılır.
}

const copyFunc1 = getNumbersTotal.bind(obj1); // bound yazar.
console.dir(copyFunc1);

console.log(copyFunc1(600,200));