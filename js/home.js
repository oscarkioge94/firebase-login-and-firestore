firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user.uid)
    document.getElementById("signOut").onclick= ()=>{
      firebase.auth().signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    }
    document.getElementById("bookFlight").onclick = ()=>{
      var selectDate = document.getElementById("selectDate").value;
      var selectTime = document.getElementById("SelectTime").value;
      var passengers = document.getElementById("passengers").value;
      var seatNo = document.getElementById("seatNo").value;
      console.log(selectDate)
      console.log(selectTime)
      console.log(passengers)
      console.log(seatNo)


      // Add a new document in collection "cities"
firebase.firestore().collection("flights").doc("LA").set({
  flightDate: selectDate,
  flightTime:selectTime,
  flightSeat: seatNo,
  userId: user.uid,
  passenger:passengers,
})
.then(() => {
  console.log("Document successfully written!");
})
.catch((error) => {
  console.error("Error writing document: ", error);
});
// document.querySelector(".main").style.display="none";
// document.location.href = "succesfulBooking.html"
    }

    // User is signed in.
    // pulling all data from the database
    firebase.firestore().collection("users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var userId = doc.data().userId;
        // printing all uids in console log
        console.log(userId)
        // condition to compare the logged in users id with the one on the list above 
        if (user.uid == userId){
          // picking the username of the logged in user
          var userName = doc.data().identity;
          console.log(userName)
          document.getElementById("userName").innerHTML = userName;
        }
          // doc.data() is never undefined for query doc snapshots
      //     console.log(doc.id, " => ", doc.data());
      });
  });
  } else {
    // No user is signed in.
    window.location.href = "index.html"
  }
});