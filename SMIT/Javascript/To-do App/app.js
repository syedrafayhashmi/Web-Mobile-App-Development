var list = document.getElementById("item");


function addTodo(){
    var todoValue = document.getElementById("todo-value");
    var disIp = document.createElement('input');
    var div = document.createElement('div');
    var deleteButton = document.createElement('button');
    var editButton = document.createElement('button');

    div.style.display = "inline";
    div.className = "list-group";
    disIp.className  = "form-control";
    deleteButton.className  = "btn text-white btn-danger";
    editButton.className  = "btn text-white btn-warning";

    div.id = "list_in"
    disIp.id = "disabledInput"

    disIp.type = "text"

    deleteButton.setAttribute("onclick","deleteItem(this)");
    editButton.setAttribute("onclick","editItem(this)");
    disIp.setAttribute("disabled","");

    disIp.style.float = "left"; 
    disIp.style.width = "40%";
    deleteButton.style.width = "30%";
    deleteButton.style.float = "left";
    editButton.style.width = "30%";
    editButton.style.float = "left";

    var delText = document.createTextNode("Delete");
    var editText = document.createTextNode("Edit");

    disIp.value = todoValue.value;

    editButton.appendChild(editText);
    deleteButton.appendChild(delText);
    div.appendChild(disIp);
    div.appendChild(editButton);
    div.appendChild(deleteButton);
    
    if(todoValue.value !== ""){
        list.appendChild(div);
    }
   

    todoValue.value = "";
}

function deleteItem(e){
    list.removeChild(e.parentNode)
}
function deleteAll(){
    list.innerHTML = ""
}
function editItem(e){
  e.parentNode.firstChild.removeAttribute("disabled");
  e.parentNode.firstChild.focus();

}

var input = document.getElementById("todo-value");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("add").click();
  }
});