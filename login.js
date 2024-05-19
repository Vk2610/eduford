import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDMMNwOds7NxunD_97CDbFdzC8s69XibYs",
  authDomain: "eduford-46796.firebaseapp.com",
  projectId: "eduford-46796",
  storageBucket: "eduford-46796.appspot.com",
  messagingSenderId: "946536913559",
  appId: "1:946536913559:web:ce46afb3a2c868d5a7a7d2",
  measurementId: "G-2GMJ2Q6DDT"
};

const app = initializeApp(firebaseConfig);

const submit = document.getElementById("submit");
submit.addEventListener("click", function(e){
  e.preventDefault();
  const auth = getAuth();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("User logged in successfully");
      window.location.href = "index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = "Invalid email or password";
      alert(errorMessage);
      // Handle errors
    });
});
