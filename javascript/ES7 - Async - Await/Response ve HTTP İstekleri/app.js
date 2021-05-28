// async function getCurrency(url){
//     const response = await fetch(url); //Response object


//     const data = await response.json(); //data =  json object
//     return data;
// }

// getCurrency("http://api.exchangeratesapi.io/v1/latest?access_key=8726a85725930b2c0484e36eb07d2f67&symbols=")
// .then(response => console.log(ahmet));

class Request {
  
    async get(url){ //GET Request

      
    const response = await fetch(url);
    const data = await response.json();
    return data;
    
    }
   async post(url,uploadData){

       
        const response = await fetch(url,{
                    method: 'POST',
                    body: JSON.stringify(uploadData),
                    headers: {
                        "Content-type" : "application/json; charset = UTF-8"
                    }

                }); //Response objesi

            const data = await response.json();
            return data;

        }
        

   async put (url,uploadData){
    

       const response = await  fetch(url,{
                method: 'PUT',
                body: JSON.stringify(uploadData),
                headers: { "Content-type" : "application/json; charset = UTF-8" }


        });  //Resolve ettiğinde response objesi döner.
      const data = await response.json();
      return data; 


    }
  async delete(url){
  
    const response = await fetch("https://jsonplaceholder.typicode.com/albums/1", {
        method:'DELETE'

        });
        // const data = await response.json();
        // return data;

        return "Veri Silme İşlemi Başarılı";
    }
    
}

const request = new Request();



request.get("https://jsonplaceholder.typicode.com/albums")
.then(albums => {
    
    console.log(albums);
})
.catch(err => console.error(err));


request.post("https://jsonplaceholder.typicode.com/albums", {
    userId:1, title:"Thriller"
})
.then(newAlbum => console.log(newAlbum))
.catch(err => console.log(err));

request.put("https://jsonplaceholder.typicode.com/albums/1",{
    userId:10,title:"Sezen Aksu"
})
.then(updateAlbums => console.log(updateAlbums))
.catch(err => console.log(err));

request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(message => console.log(message))
.catch(err => console.error(err));