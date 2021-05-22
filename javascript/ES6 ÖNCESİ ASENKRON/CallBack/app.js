//Callback Fonksiyonlar -- Eski ancak kullanılıyor.

// const langs = ["Python", "Java", "C++"];
// langs.forEach(function(lang){

//     console.log(lang);
// });

// document.getElementById("btn").addEventListener("click", function(){
//     console.log("tıkladınız");


// });


// function process1(callback){
//     setTimeout(() => {
//         console.log("process 1");
//         callback();
//     }, 3000);
// }
// function process2(){ //Asenkron çalışır beklemez.
//     console.log("process 2");
// }

// process1(process2);

const langs = ["Python", "Java", "C++"];

function addLang(lang, callback){
    setTimeout(() => {
        langs.push(lang);
        console.log("Eklendi");
        callback();
    }, 2000);
}

function getAllLangs(){
    setTimeout(() => {
        langs.forEach(function(lang){
            console.log(lang);


        });
    }, 1000);
}

addLang("Javascript", getAllLangs);

