//Fetch API - Ajax yerine promise - fetch yapısı daha çok kullanılır.
function getTextFile(){
    //console.log(this.fetch);
    fetch("example.txt")
    .then(response => response.text())
    .then (data => console.log(data))  
    .catch(err => console.log(err));  
        
}
getTextFile();

function getJsonFile(){
    fetch("example.json")
    .then(response => response.json())
    .then (data => console.log(data))  
    .catch(err => console.log(err));  

}

getJsonFile();

function getExternalAPI(){
    fetch("http://api.exchangeratesapi.io/v1/latest?access_key=8726a85725930b2c0484e36eb07d2f67&symbols=")
    .then(response => response.json())
    .then (data => console.log(data.rates.TRY))  
    .catch(err => console.log(err)); 
}

getExternalAPI();