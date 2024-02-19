
// --------NAVBAR-------


let humburger = document.getElementById("humburger");

let buttonsDiv = document.querySelector(".buttons")
buttonsDiv.classList.add("menuShow")


humburger.addEventListener("click",()=>{
    buttonsDiv.classList.toggle("menuShow")
})

// --------FireBase Initilization-------


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyAjefXczdser26PZjJA-XYrA2DetCK7hSc",
    authDomain: "hub-blog.firebaseapp.com",
    projectId: "hub-blog",
    storageBucket: "hub-blog.appspot.com",
    messagingSenderId: "181808398303",
    appId: "1:181808398303:web:074b194125ee056c11ce6a",
    measurementId: "G-5R71RL6KKE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);



// --------GET ELEMENTS-------

  let writeBtn = document.getElementById("writeBtn");
  let loginBtn = document.getElementById("loginBtn");
  let currentPage = window.location.pathname.split('/').pop();

console.log(loginBtn)


let checkLogin =()=>{
    
  onAuthStateChanged(auth, (user) => {
    if (user) {
     
      const uid = user.uid;
    loginBtn.href="index.html"
      // ...
    } else {
     
    }
  });
}
checkLogin()


// writeBtn && writeBtn.addEventListener("click",checkLoginAndwrite)








// <-------LOG OUT FUNCTION------->


let logout = (e)=>{
  e.preventDefault();
  onAuthStateChanged(auth, (user) => {
    if (user) {
  
      const uid = user.uid;
     
      loginBtn.innerHTML ="Login"
      // ...
    } else {
      // User is signed out
      // ...
  
    }
  });

  
}






loginBtn && loginBtn.addEventListener("click",logout)

