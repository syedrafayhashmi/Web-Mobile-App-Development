function pushData(){
    var name  = document.getElementById("name");
    var roll  = document.getElementById("roll");
    var student = {
        name : name.value,
        roll : roll.value
    }
    console.log(student)    
}