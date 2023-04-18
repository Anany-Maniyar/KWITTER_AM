// Your web app's Firebase configuration

https://classtest-53ede-default-rtdb.firebaseio.com/child
var firebaseConfig = {
    apiKey: "AIzaSyB92hgwwGXk0z_HIU8MR3B1Jh_0AhZk3hM",
    authDomain: "classtest-53ede.firebaseapp.com",
    databaseURL: "https://classtest-53ede-default-rtdb.firebaseio.com",
    projectId: "classtest-53ede",
    storageBucket: "classtest-53ede.appspot.com",
    messagingSenderId: "923636080601",
    appId: "1:923636080601:web:6318ac5eec23fa1b6943c8"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "Welcome " + user_name + "!";

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    console.log(room_name);
    firebase.database().ref("/").child(room_name).update({
        purpose : "Adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
  }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_names = childKey;
      //Start code
      console.log("Room Name:" + room_names);
      row = "<div class='room_name' id="+room_names+" onclick='redirectToRoomName(this.id)'>#"+room_name+"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function redirectToRoomName (name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}