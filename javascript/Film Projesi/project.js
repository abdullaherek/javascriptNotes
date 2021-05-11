//Form seçme
const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


//UI Objesini Başlatma
const ui = new UI();

//Storage objesi üretme
const storage = new Storage();

//Tüm eventleri yükleme
 addEventListener();

function addEventListener(){
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);

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
        ui.displayMessages("Tüm alanları doldurunuz!", "danger");
    }

    else{
        // Yeni film oluşturmak
        const newFilm = new Film(title,director,url);

        ui.addFilmToUI(newFilm); //Ara yüze film ekleme
        storage.addFilmToStorage(newFilm); //Storage'a film ekleme
        //Başarılı ekleme mesajı
        ui.displayMessages("Film başarıyla eklendi!", "success");
    }

    ui.clearInputs(titleElement,urlElement,directorElement);

    e.preventDefault();
}

function deleteFilm(e){
    // console.log(e.target); neye bastığımızı gösterir.

    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
     
        ui.displayMessages("Silme İşlemi Başarılı", "success")
    }

    
}

function clearAllFilms(){
    if(confirm("Emin Misiniz?")){

        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();

    }
    
    

}
