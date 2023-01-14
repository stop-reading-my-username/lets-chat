room_name=localStorage.getItem("room_name");
user_name=localStorage.getItem("username");
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
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
myname = message_data['name']
mymessage=message_data['message'];
mylike=message_data['like'];
name_with_tag="<h4>"+ myname +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag= "<h4 class='message_h4'>"+ mymessage+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+mylike+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+mylike+" </span></button><hr>";

row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("username");
      window.location="index.html";
}
function Send(){
      msg=document.getElementById("msg").value;
      console.log(room_name);
      console.log(user_name)
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0,
      })
      document.getElementById("msg").value="";
}
function updateLike(message_id){
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      })
}