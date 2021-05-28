function Translate(word,language){
    this.apikey = "trnsl.1.1.20210527T212519Z.f443293fb594c1eb.862a7b3049fbcb0fc16cdb9c6a119cea06d0e9a9";
    this.word = word;
    this.language = language;


    // Xhr object

    this.xhr = new XMLHttpRequest();
    

}

Translate.prototype.translateWord = function(callback){
    //Ajax işlemleri
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`
    this.xhr.open("GET", endpoint, true);

    this.xhr.onload = () => {

        if (this.xhr.status == 200){
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];
            callback(null,text);

        }
        else{
            callback("Bir hata oluştu", null);
        }

    }

    this.xhr.send();
    
    
};
Translate.prototype.changeParameters = function(newWord, newLanguage){
    this.word= newWord;
    this.language = newLanguage;
}