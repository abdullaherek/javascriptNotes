// async function test(data){
//     //Promise return new Promise -  data promise olarak döner.
//       //return data;
//       let promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Bu bir değerdir");

//         },5000);

//       });

//       let response = await promise; // 5sn bekler.
//       console.log(response);
//       console.log("Deneme");
// }

// test("Merhaba").then(response => (console.log(response)));

async function test(data){
    let promise = new Promise((resolve,reject)=>{
               setTimeout(()=>{
                   if (typeof data === "string"){
                       resolve(data);
                   }
                   else {
                       reject(new Error("Lütfen string giriniz"));
                   }
        
                },5000);
        
           });

       const response = await promise;

       return response; 


}

test("thriller")
.then(data => console.log(data))
.catch(err => console.log(err));
