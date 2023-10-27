//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAX1lHo3Hutey3cvpfbXe-ZhiEoCo4V2Lc",
    authDomain: "net1-b50ca.firebaseapp.com",
    databaseURL: "https://net1-b50ca-default-rtdb.firebaseio.com",
    projectId: "net1-b50ca",
    storageBucket: "net1-b50ca.appspot.com",
    messagingSenderId: "268019906670",
    appId: "1:268019906670:web:66e3527467232b5c3a0e7f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var username=localStorage.getItem("user_name")
  document.getElementById("display").innerHTML="welcome " + username + "!" 


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
   row= "<div class='room_name' id= '" + Room_names + "' onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div> <hr>";
   console.log(row)
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function roomplus(){
  var room_name=document.getElementById("room_name").value

  firebase.database().ref("/").child(room_name).update({
    purpose:"Hello world"
})

localStorage.setItem("Groups", room_name)
window.location="chatpage.html"
}        
    
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("Groups", name);
  window.location = "chatpage.html";

}

function logout(){
    window.location="index.html"
}
