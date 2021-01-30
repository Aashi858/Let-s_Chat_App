  //ADD YOUR FIREBASE LINKS HERE

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCAyRo8lGW3xt43bnJ5rJMC3CaBlHll_HI",
    authDomain: "let-s-chat-e0e3a.firebaseapp.com",
    databaseURL: "https://let-s-chat-e0e3a-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-e0e3a",
    storageBucket: "let-s-chat-e0e3a.appspot.com",
    messagingSenderId: "759695109158",
    appId: "1:759695109158:web:9de34f07dfc84fa97c8ae7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function logout(){
      localStorage.removeItem("Username");
      window.location = "index.html";
}