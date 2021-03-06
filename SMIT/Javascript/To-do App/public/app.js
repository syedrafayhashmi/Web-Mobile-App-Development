var list = document.getElementById("item");


function addTodo(){
    var div = document.createElement('div');
    var todoValue = document.getElementById("todo-value");
    var disIp = document.createElement('input');
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

    
    var updateButton = document.createElement('button');
    updateButton.className = "btn text-white btn-warning";
    updateButton.setAttribute("onclick","updateItem(this)");
    updateButton.style.width = "30%";
    updateButton.style.float = "left"; 
    var updateText = document.createTextNode("Update");
    updateButton.appendChild(updateText);
    updateButton.style.display = "none";
    
    
    editButton.appendChild(editText);
    deleteButton.appendChild(delText);
    div.appendChild(disIp);
    div.appendChild(editButton);
    div.appendChild(updateButton)
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
    console.log(e.sibling)

    e.parentNode.firstChild.removeAttribute("disabled");
    e.parentNode.firstChild.focus();                       
    e.parentNode.children[1].style.display = "none";
    e.parentNode.children[2].style.display = "";
    

}

function updateItem(e){
    e.parentNode.firstChild.setAttribute("disabled","");
    e.parentNode.children[1].style.display = ""; 
    e.parentNode.children[2].style.display = "none"; 

}

var input = document.getElementById("todo-value");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("add").click();
  }
});