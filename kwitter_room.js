
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyC8FqBRn0wN51VtBsgy2KMBdnU2vK1RvVk",
      authDomain: "kwitter-52d9c.firebaseapp.com",
      projectId: "kwitter-52d9c",
      storageBucket: "kwitter-52d9c.appspot.com",
      messagingSenderId: "190625990080",
      appId: "1:190625990080:web:a5627d431e4e09dbe37425"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
