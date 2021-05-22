// function getData(data) { //Promise objesi döndüren function
//     return new Promise(function (fullfiled,reject) {
//         //resolve -fullfiled olumlu dönüş - reject hatalar
//         setTimeout(function () {
//              // fullfiled("Olumlu Sonuç");
//             // reject("olumsuz sonuç");

//             if (typeof data === "string"){
//                 //Olumlu 
//                 fullfiled(data);

//             }
//            else {
//                reject(new Error("Lütfen String bir değer giriniz"));
//            }

//         },5000)
        
//     });
// }



//  getData(24)
// .then = (response => console.log("Gelen değer " + response))
// .catch = (err =>  console.error(err));
 

function addTwo(number){
    return new Promise((fullfiled, reject) => {
        setTimeout (function(){

            if (typeof number === "number") {
                fullfiled(number+2);
            }

             else {
                 reject(new Error("Lütfen bir sayı girin"));
             }

            },3000);
        });

    }
    


addTwo(10)
.then(response =>{
    console.log(response);
    return response +2; //then içinde bir promise yapısı (promise chain)
}).then(response2 => console.log(response2))
.catch(err => console.error(err)); 
//sadece bir defa catch kullanılır.
