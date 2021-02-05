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

  user_name = localStorage.getItem("User_Name");
  document.getElementById("User_name").innerHTML = "Welcome  " + user_name;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("Room Names =" + Room_names);
      row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToNextRoom(this.id)' > " + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function logout(){
      localStorage.removeItem("User_Name");
      window.location = "index.html";
}
function addRoomName(){
  room_name = document.getElementById("roomName").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("Room_Name", room_name);
  window.location = "chat_page.html";
}
function redirectToNextRoom(name){
  console.log(name);
  localStorage.setItem("Room_Name",name);
  window.location = "chat_page.html";
}