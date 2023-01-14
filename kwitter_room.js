const firebaseConfig = {
      apiKey: "AIzaSyCM96ZkcNGUZx0l8dtgpDgk9cAfIHSqVp4",
      authDomain: "kwitterj-b8c9f.firebaseapp.com",
      databaseURL: "https://kwitterj-b8c9f-default-rtdb.firebaseio.com",
      projectId: "kwitterj-b8c9f",
      storageBucket: "kwitterj-b8c9f.appspot.com",
      messagingSenderId: "453636234303",
      appId: "1:453636234303:web:16758e7a8fa6e94b05ec8a",
      measurementId: "G-MZ18P6ZGKW"
    };
    
    // Initialize Firebasejjjj
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class=room_name id= "+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+ "</div><hr>"
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function addRoom(){
      room_name=document.getElementById("room_name").value
      localStorage.setItem("room_name",room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      window.location="kwitter_page.html";

}
function redirectToRoomName(room_name){
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("username");
      window.location="index.html";
}
username=localStorage.getItem("username")
document.getElementById("user_name").innerHTML="welcome "+ username;
