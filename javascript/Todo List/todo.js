const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");


eventListeners();

function eventListeners(){
 
 form.addEventListener("submit" , addTodo);
 document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
 secondCardBody.addEventListener("click", deleteTodo);
 filter.addEventListener("keyup", filterTodos);
 clearButton.addEventListener("click", clearAllTodos);

}

function clearAllTodos(e){
    //Arayüzden Kaldırma
    if(confirm("Tüm Todolar Silinecektir, Onaylıyor Musunuz?")) {
        //todoList.innerHTML = ""; //Yavaş
        while(todoList.firstChild != null){
            todoList.removeChild(todoList.firstElementChild);
        }

    }

    localStorage.removeItem("todos");
    

}
function filterTodos(e){
    // console.log(e.target.value);
   const filterValue = e.target.value.toLowerCase();
   const listItems = document.querySelectorAll(".list-group-item");

   listItems.forEach(function (listItem){
    const text = listItem.textContent.toLowerCase();
    if (text.indexOf(filterValue) === -1){
        //Bulamadı
        listItem.setAttribute("style", "display:none !important");
    }
    else {
        listItem.setAttribute("style", "display:block");
    }

   });
}

function deleteTodo(e){
    if (e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success", "Todo Başarıyla Silindi");
    }
    
     // console.log(e.target); //Nereye Basıldığını verir

}

function deleteTodoFromStorage(deleteTodo){
 let todos = getTodosFromStorage();
 todos.forEach(function(todo, index){
     if (todo === deleteTodo){
        todos.splice(index,1); //Arraydan değer silme
     }
 });

 localStorage.setItem("todos", JSON.stringify(todos));
}

function loadAllTodosToUI(){ //Local Storage'dan arayüze getirir.
    let todos = getTodosFromStorage();

    todos.forEach(function(todos) {
        addTodoToUI(todos);


    })

}


function addTodo(e){

    const newTodo = todoInput.value.trim();
    if(newTodo === ""){
        
        

        showAlert("danger", "Lütfen Bir Todo Girin!");
    }
    else{
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success", "Todo Girildi!");
    }
    


    e.preventDefault();

}

function showAlert(type,message){
   

    const alert = document.createElement("div");
    alert.className =`alert alert-${type}`;
    alert.textContent = message;
    firstCardBody.appendChild(alert);
    
    //setTimeOut

    setTimeout(function(){
        alert.remove();
    },2000)
  
}

function addTodoToUI(newTodo){
    
 
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";


    listItem.className = "list-group-item d-flex justify-content-between";

    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    

    //Todo List'e listItem'ı ekleme
    
    todoList.appendChild(listItem);
    todoInput.value="";
  
}
function getTodosFromStorage(){ // Storage'dan todoları alır.
    let todos;

    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;

}

function addTodoToStorage(newTodo){
 
  let todos = getTodosFromStorage();
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));


}




