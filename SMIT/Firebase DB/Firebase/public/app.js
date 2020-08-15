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

  firebase.database().ref('student/'+key).set(student)

}

function getFirebaseData(){
    firebase.database().ref('student').once('value', function(data){
        console.log(data.val())
    })
}
//getFirebaseData()
function getFirebaseDataRealTime(){
    firebase.database().ref('student').on('child_added', function(data){
        console.log(data.val())
    })
}
//getFirebaseDataRealTime()

function removeFirebaseData(){
    firebase.database().ref('student/-MElX6PhlcA8XY7Aa9ow').remove()  // can also just put student in ref to delete the whole data

}
//removeFirebaseData()

function editFirebaseData(){
    firebase.database().ref('student/-MElWp55BjGYn98io619').set({
        key: '-MElWp55BjGYn98io619',
        name : 'rafay',
        roll:'98'
    })
}
editFirebaseData()