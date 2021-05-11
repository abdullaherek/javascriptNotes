const person = {

    name:"Abdullah",
    age:25,
    salary:3000
};

const langs = ["apo", "berke", "ahmet"];

const isim = "Faruk";


//For in

for(let prop in person){

    console.log(prop,person[prop]);
}

for (let index in langs ){
    console.log(index, langs[index]);
}

// For of - daha çok kullanılır ama objede çalışmaz.

for (let value of langs){

    console.log(value); // Değerleri direkt alır. İndisi almaz
}

for (let karakter of isim){
    console.log(karakter);
    
}