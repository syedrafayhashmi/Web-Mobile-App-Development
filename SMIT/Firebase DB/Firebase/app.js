function pushData(){
    var name  = document.getElementById("name");
    var roll  = document.getElementById("roll");
    var key = firebase.database().ref('student').push().key
    var student = {
        name : name.value,
        roll : roll.value,
        key : key
    }
 //firebase.database().ref('student').set(student)
 //firebase.database().ref('student').child('student1').set(student) 
 //or firebase.database().ref('student/student1').set(student)
 //firebase.database().ref('student').push(student)

  firebase.database().ref('student').push(student)

}