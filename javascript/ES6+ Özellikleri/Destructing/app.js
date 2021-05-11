
 let number1, number2;

 arr = [100,200,300,400];

 number1= arr[0];
 number2= arr[1];  // Eski yapı

// Destructing

 [number1,number2] = arr;
 console.log(number1,number2);



 //Obje Destructing

 const numbers ={

     a:10,
     b:20,
     c: 30,
     d:40,
     e:50
 };

 const {a:sayi1,c:sayi2,e:sayi3} = numbers;
 console.log(sayi1,sayi2,sayi3);


 //Function Destructing

const getLangs = () => ["Python", "Java"];

const [lang1,lang2] =getLangs();
console.log(lang1);
  