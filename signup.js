// --------FireBase Initilization-------


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import {  getAuth, createUserWithEmailAndPassword ,signInWithPopup, GoogleAuthProvider ,updateProfile } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
 
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

// --------FUNCTION FOR SHOW PASSWORD-------

const showPassword =()=>{
    if(passwordEl.type !== "password"){
        passwordEl.type ="password"
    }
    else{
        passwordEl.type ="text"
    }  }

    let passwordEl = document.getElementById("password")
    let showPass = document.getElementById("showPass");
showPass && showPass.addEventListener("click",showPassword)

// <<--------CLOSE------->>

// <<--------SIGN UP WITH EMAIL AND PASSWORD------->>





let signupWithPass = (e)=>{

e.preventDefault();

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let emailErr = document.querySelector(".emailErr");
let passErr = document.querySelector(".passErr"); 

    const emailValidation = ()=>{
        let email = document.getElementById("email").value;
        const regx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
         
              if(email !== ""){
                if(regx.test(email)){
                    console.log("sucuss")
                 }
                 else{
                     emailErr.style.display ="block"
                 }}
             else{
                 emailErr.style.display ="block"
             }
        }
       
    emailValidation()


    const passwordValidate =()=>{
        
        if(password.length < 6){
          
          passErr.style.display ="block"
        }
    }
passwordValidate()

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    window.location.href ="updateprofile.html"
  alert("Successfully Signed up")
updatePro();



    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


}



let signupWithEmail = document.getElementById("signupBtn");
signupWithEmail && signupWithEmail.addEventListener('click',signupWithPass)





// <<--------CLOSE------->>






// <<--------SIGN UP WITH GOOGLE------->

let signupWithGoogle = (e) =>{

     e.preventDefault();
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }
  
  
  let signGoogleBtn = document.getElementById("signBtnGoogle");
  
  signGoogleBtn && signGoogleBtn.addEventListener("click",signupWithGoogle)
  
  
  // <<--------CLOSE------->>