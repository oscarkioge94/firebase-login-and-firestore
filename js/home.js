document.getElementById("submit").onclick = ()=>{
    var title = document.getElementById("title").value;
    var blog = document.getElementById("blog").value;
    console.log(title);
    console.log(blog);
    firebase.firestore().collection("blogs").doc().set({
        name: title,
        body:blog,
      })
}