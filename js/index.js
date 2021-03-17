document.getElementById("submit").onclick = function(){
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value; 
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    console.log(name);
    console.log(number);
    console.log(email);
    console.log(password);

    

    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    
      window.location.href = "home.html"
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
  firebase.firestore().collection("users").doc().set({
    identity:name,
    phone:number,
    mail: email,
    passkey:password,
  })

    
   
}
    

