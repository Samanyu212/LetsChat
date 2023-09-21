
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDKAw7M0--zFlifyH5D9qTn2YtJp35_a94",
      authDomain: "twitter-91f3a.firebaseapp.com",
      databaseURL: "https://twitter-91f3a-default-rtdb.firebaseio.com",
      projectId: "twitter-91f3a",
      storageBucket: "twitter-91f3a.appspot.com",
      messagingSenderId: "277415306696",
      appId: "1:277415306696:web:224b899bcbd217a6294cfd"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name: ",Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="WELCOME "+user_name+"!";

function addRoom(){
      room_name=document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";

}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      window.location="index.html";

      
}