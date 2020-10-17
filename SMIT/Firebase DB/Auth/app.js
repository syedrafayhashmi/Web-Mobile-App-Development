let signup = () =>{
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((result) => {
        console.log(result);
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorMessage);
      });email-password.html
}