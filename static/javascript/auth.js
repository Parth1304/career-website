console.log("Hello world")
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebase/10.7.2/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration  
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyCfRNrTXQGxvEudlIh_4CAqBLk06nPIbH0",
   authDomain: "authenticatepy-eed22.firebaseapp.com",
   projectId: "authenticatepy-eed22",
   storageBucket: "authenticatepy-eed22.appspot.com",
   messagingSenderId: "1069713415101",
   appId: "1:1069713415101:web:fb35bfab41ada7d1e250d4",
   measurementId: "G-CX9KDBLZGV"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig); 
 const analytics = getAnalytics(app);
 const auth = getAuth(app);

 //inputs
const email_login = document.getElementById("signin-username").value;
const password_login = document.getElementById("signin-password").value;

const submit = document.getElementById('signup');
submit.addEventListener("click",function(event){
    event.preventDefault();
    
    //inputs
    const username = document.getElementById("signup-username").value;
    const email_signup = document.getElementById("signup-email").value;
    const password_signup = document.getElementById("signup-password").value;
    createUserWithEmailAndPassword(auth, username, email_signup, password_signup)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creating Account...")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage)
  });
})

console.log("auth.js file is connected!");
