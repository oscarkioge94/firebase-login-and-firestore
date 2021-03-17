document.getElementById("submit").onclick = function(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(email);
    console.log(password);

    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    firebase.firestore().collection("users").doc().set({
        mail: email,
        passkey:password,
      })
      window.location.href = "home.html"
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

    
   
}
    

