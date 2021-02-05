//Firebase links//

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
  
  username = localStorage.getItem("User_Name");
  room_Name = localStorage.getItem("Room_Name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout(){
    localStorage.removeItem("User_Name");
    localStorage.removeItem("Room_Name");
    window.location = "index.html";
}
function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_Name).push({
          Like : 0,
          Message : msg,
          Name : username
    });
    document.getElementById("msg").value = "";
}