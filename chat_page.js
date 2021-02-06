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
  room_name = localStorage.getItem("Room_Name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    console.log(firebase_message_id);
    console.log(message_data);
    name_data = message_data['Name'];
    console.log(name_data);
    message = message_data['Message'];
    console.log(message)
    like = message_data['Like'];
    console.log(like);
    name_tag = " <h4>"+  name_data + " <img id = 'user_tick' src = 'tick.jpg'> </h4>";
    message_tag = "<h4 class = 'message_h4'>" + message + "<h4>";
    like_button = "<button class = 'btn btn-warning' id = " + firebase_message_id + "value =" + like + "onclick = 'updateLike(this.id)'>";
    span_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> Like " + like + "</span> </button> <hr>";
    row = name_tag + message_tag + like_button + span_tag ;
    document.getElementById("output").innerHTML += row ;
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
    firebase.database().ref(room_name).push({
          like : 0,
          message : msg,
          name : username
    });
    document.getElementById("msg").value = "";
}
function updateLike(message_id){
    console.log(message_id);
    button_id = message_id;
    number_of_like = document.getElementById(button_id).value;
    update_like = Number(number_of_like) + 1;
    console.log(update_like);
    document.getElementById(update_like).value
    firebase.database().ref(room_name).child(message_id).update({
          like : update_like
    });
}