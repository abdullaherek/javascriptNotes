document.getElementById("change").addEventListener("click", change);


function change(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api.exchangeratesapi.io/v1/latest?access_key=8726a85725930b2c0484e36eb07d2f67");

    xhr.onload = function(){

        if(this.status){
            const response = JSON.parse(this.responseText);

            const rate = response.rates.USD;
            const amount = Number(document.getElementById("amount").value);

            document.getElementById("tl").value = amount * rate;
        

        }
    }

    xhr.send();


}