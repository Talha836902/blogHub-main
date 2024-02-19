




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

let currentPage = window.location.pathname.split('/').pop();

console.log(currentPage)





let checkLogin =()=>{
    
  onAuthStateChanged(auth, (user) => {
    if (user) {
     
      const uid = user.uid;
      console.log(uid)
      if(currentPage !== "createpost.html"){
        window.location.href ="createpost.html"
        console.log("heloo")
      }
     
      // ...
    } else {
      if(currentPage !== "login.html"){
        window.location.href ="login.html"
      }
    }
  });
}
checkLogin()






// <-------LOG OUT FUNCTION------->


let logout = (e)=>{
  e.preventDefault()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      if(currentPage !== "index.html"){
        window.location.href="index.html"
        
      }
      console.log("hello")
      // ...
    } else {
      // User is signed out
      // ...
      if(currentPage !== "index.html"){
        window.location.href="index.html"
      }

    }
  });

  
}

let logoutBtn = document.getElementById("logoutBtn");
logoutBtn && logoutBtn.addEventListener("click",logout)

// <-------CLOSE------->


