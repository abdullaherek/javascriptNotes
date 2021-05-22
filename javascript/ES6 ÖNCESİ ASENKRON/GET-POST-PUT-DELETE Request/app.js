// Ajax, callback, http requests

class Request {

    constructor() {

        this.xhr = new XMLHttpRequest();

    }
    //GET Request

    get(url, callback) {
        this.xhr.open("GET", url); //Bağlantı açıldı

        this.xhr.onload = () => { // Arrow function bind işlemi yapar.
            //this.xhr.status === 200 kullanmak this karışıklığına yol açar.
            if (this.xhr.status === 200) {

                callback(null, this.xhr.responseText);
                //İstek bittiğinde callback'e gönderilir.
            }

            else {
                //Hata durumları
                callback("Hata oluştu!", null)
            }
        }

        this.xhr.send();

    }//veya .bind(this); eklenebilir, this requesti göstermesi için.

     post(url, data, callback) {
         this.xhr.open("POST", url);
         this.xhr.setRequestHeader("Content-type", "application/json"); //JSON gönderiyoruz.
         this.xhr.onload = () => {
             if (this.xhr.status === 201) { //201 = Created

                callback(null, this.xhr.responseText);
                 //İstek bittiğinde callback'e gönderilir.
            }

            else {
                //Hata durumları
                callback("Hata oluştu!", null)
            }
        }
         this.xhr.send(JSON.stringify(data));
     }

    put(url, data, callback) {
        this.xhr.open("PUT", url);
        this.xhr.setRequestHeader("Content-type", "application/json"); //JSON gönderiyoruz.
        this.xhr.onload = () => {
            if (this.xhr.status === 200) { //200 = Updated

                callback(null, this.xhr.responseText);
                //İstek bittiğinde callback'e gönderilir.
            }

            else {
                //Hata durumları
                callback("Hata oluştu!", null)
            }
        }
        this.xhr.send(JSON.stringify(data));
    }

    delete(url, callback) {
        this.xhr.open("DELETE", url); //Bağlantı açıldı
    
        this.xhr.onload = () => { // Arrow function bind işlemi yapar.
            //this.xhr.status === 200 kullanmak this karışıklığına yol açar.
            if (this.xhr.status === 200) {
    
                callback(null, "Veri Silme Başarılı");
                //İstek bittiğinde callback'e gönderilir.
            }
    
            else {
                //Hata durumları
                callback("Delete Request Hata oluştu!", null)
            }
        }
    
        this.xhr.send();
    
    }
}

const request = new Request();

request.get("https://jsonplaceholder.typicode.com/albums", function (err, response) {
    if (err === null) {
        console.log(response);
    }
    else console.log(err);

});


 request.post("https://jsonplaceholder.typicode.com/albums", {userId:102, title:"Abdullah"}, function (err,album) {
     if(err===null){
         console.log(album);
     }
     else{
         //Hata
         console.log(err);
     }

 });

request.put("https://jsonplaceholder.typicode.com/albums/10", {userId:104, title:"Tarkan"}, function (err,album) {
    if(err===null){
        console.log(album);
    }
    else{
        //Hata
        console.log(err);
    }

});

request.delete("https://jsonplaceholder.typicode.com/albums/5", function (err, response) {
    if (err === null) {
        console.log(response);
    }
    else console.log(err);

});

