function UI() {

}

UI.prototype.addFilmToUI = function (newFilm) {
    /* <tr>
     <td><img src="" class="img-fluid img-thumbnail"></td>
     <td></td>
     <td></td>
     <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
   </tr> 
     */

    const filmList = document.getElementById("films");
    filmList.innerHTML += ` <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
</tr> `;

}

UI.prototype.clearInputs = function(elements1,elements2,elements3){
    elements1.value = "";
    elements2.value = "";
    elements3.value = "";
    

}

UI.prototype.displayMessages = function(message, type){
    const cardBody = document.querySelectorAll(".card-body")[0];
    //Alert divi oluşturuyoruz.
    const div = document.createElement("div");

    div.className=`alert alert-${type}`;
    div.textContent = message;

    //Cardboyd altına child olarak ekledik.
    cardBody.appendChild(div);

    //Bir süre sorna gitmesi için
    setTimeout(function(){
        div.remove();
    },1000);

    
}

UI.prototype.loadAllFilms  = (films) =>{
    const filmList = document.getElementById("films");

    films.forEach(function(film){
        filmList.innerHTML += ` <tr>
        <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
        <td>${film.title}</td>
        <td>${film.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
</tr> `;
    });
}

UI.prototype.deleteFilmFromUI = function(element){
    element.parentElement.parentElement.remove();
}

UI.prototype.clearAllFilmsFromUI = function(){
    const filmList = document.getElementById("films");
    // filmList.innerHTML = ""; yavaş çalışıyor.

    while(filmList.firstElementChild !== null){
        filmList.firstElementChild.remove();
    }
}
