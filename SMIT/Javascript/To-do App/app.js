var list = document.getElementById("item");


function addTodo(){
    var todoValue = document.getElementById("todo-value");
    var li = document.createElement('li');
    var deleteButton = document.createElement('button');
    deleteButton.className  = "btn text-white btn-danger";
    var delText = document.createTextNode("Delete");
    deleteButton.appendChild(delText)
    li.className  = "list-group-item list-group-item-action list-group-item-success";
    var liText = document.createTextNode(todoValue.value);
    li.appendChild(liText);
    list.appendChild(li);
    list.appendChild(deleteButton);

    todoValue.value = "";
}