// Set Timeout 

setTimeout(function(){

console.log("Selam");


}, 5000);


//Set Interval - saniye aralığıyla fonksiyonu çalıştırır.

let i = 0;
let value = setInterval(() => {
    i++;
    console.log("Sayi:", i);
}, 1000);


//Clear İnterval

document.getElementById("btn").addEventListener("click", function(){
    clearInterval(value);
});

