let value;
value = document.all;


const elements = document.all; //Html collection
// for(let i=0; i<elements.length;i++){
//     console.log(elements[i]);
// }



// const collections = Array.from(document.all);
// console.log(typeof collections);

// collections.forEach(function(collection)){
//     console.log(collection);
// }

value = document.head;
value = document.body;
value = document.location.port;

value = document.getElementById("cards");
value =document.getElementsByClassName("container");


//Query Selecter - ilk bulduğunu seçer - tek element döner

value = document.querySelector("#cards"); //id zaten bir tane böyle kullanabilir.
value = document.querySelector(".container");
value = document.querySelector("div");


// Query selecterAll - hepsini seçer 

value=document.querySelectorAll("li");

value.forEach(function(element){
    console.log(element);
});



console.log(value);