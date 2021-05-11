//HTTPS STATUS
//200: OK
//403: FORBİDDEN
//404: NOT FOUND
//505: INTERNAL SERVER ERROR
/*Holds the status of the XMLHttpRequest.
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready
*/



document.getElementById("btn").addEventListener("click", function () {

    //XMLHttpsRequest

    const xhr = new XMLHttpRequest();
    //Bu kısım eski yöntemdir.
    // xhr.onreadystatechange = function(){

    //     if(this.status == 200 && this.readyState == 4){
    //         //Response hazır
    //         console.log(this.responseText);
    //     }
    // }

    //Yeni Yöntem
   // xhr.onprogress ifadesi 3.durumda çalışır.

    xhr.onload = function () {
        if (this.status === 200) {
            document.getElementById("ajax").textContent = this.responseText;

        }
    }

    //Sabit kısım
    xhr.open("GET", "example.txt", true);

    xhr.send();


});

