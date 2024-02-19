import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import {  getAuth,updateProfile } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyAjefXczdser26PZjJA-XYrA2DetCK7hSc",
    authDomain: "hub-blog.firebaseapp.com",
    projectId: "hub-blog",
    storageBucket: "hub-blog.appspot.com",
    messagingSenderId: "181808398303",
    appId: "1:181808398303:web:074b194125ee056c11ce6a",
    measurementId: "G-5R71RL6KKE"
  };

// <<--------CLOSE------->>



  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

// <<--------CLOSE------->>





let updatePro =(e)=>{
e.preventDefault()
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let photo = document.getElementById("photo").file;
    console.log(photo)
    
    let fullNmae = firstName + " " + lastName;




    updateProfile(auth.currentUser, {
        displayName: `${fullNmae}`, photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
   }

  

   let updateBtn = document.getElementById("update")
   updateBtn && updateBtn.addEventListener("click",updatePro)