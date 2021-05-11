//Form seçme
const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


//Tüm eventleri yükleme
 addEventListener();

function addEventListener(){
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function(){
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);

    });

    cardbody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearAllFilms);
}

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === ""){

        //Hata mesajı
        UI.displayMessages("Tüm alanları doldurunuz!", "danger");
    }

    else{
        // Yeni film oluşturmak
        const newFilm = new Film(title,director,url);

        UI.addFilmToUI(newFilm); //Ara yüze film ekleme
        Storage.addFilmToStorage(newFilm); //Storage'a film ekleme
        //Başarılı ekleme mesajı
        UI.displayMessages("Film başarıyla eklendi!", "success");
    }

    UI.clearInputs(titleElement,urlElement,directorElement);

    e.preventDefault();
}

function deleteFilm(e){
    // console.log(e.target); neye bastığımızı gösterir.

    if(e.target.id === "delete-film"){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
     
        UI.displayMessages("Silme İşlemi Başarılı", "success")
    }

    
}

function clearAllFilms(){
    if(confirm("Emin Misiniz?")){

        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();

    }
    
    

}
