var list = document.getElementById("item");


function addTodo(){
    var todoValue = document.getElementById("todo-value");
    var li = document.createElement('li');
    var div = document.createElement('div');
    var deleteButton = document.createElement('button');
    var editButton = document.createElement('button');

    div.style.display = "inline";
    div.className = "list-group";
    li.className  = "list-group list-group-item list-group-item-action list-group-item-success";
    deleteButton.className  = "btn text-white btn-danger";
    editButton.className  = "btn text-white btn-warning";

    deleteButton.setAttribute("onclick","deleteItem(this)");
    editButton.setAttribute("onclick","editItem(this)");


    li.style.float = "left"; 
    li.style.width = "40%";
    deleteButton.style.width = "30%";
    deleteButton.style.float = "left";
    deleteButton.style.marginTop  = "5px";
    editButton.style.width = "30%";
    editButton.style.float = "left";
    editButton.style.marginTop  = "5px";

    var delText = document.createTextNode("Delete");
    var editText = document.createTextNode("Edit");
    var liText = document.createTextNode(todoValue.value);

    editButton.appendChild(editText);
    deleteButton.appendChild(delText);
    li.appendChild(liText);
    div.appendChild(li);
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
    e.parentNode.firstChild.innerText = "rafay"
}

var input = document.getElementById("todo-value");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("add").click();
  }
});