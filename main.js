function addUser(){
     add_user = document.getElementById("userName").value;
     localStorage.setItem("Username",add_user);
     window.location = "chat_room.html";
}