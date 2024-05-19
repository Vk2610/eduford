
// Your web app's Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDMMNwOds7NxunD_97CDbFdzC8s69XibYs",
    authDomain: "eduford-46796.firebaseapp.com",
    projectId: "eduford-46796",
    storageBucket: "eduford-46796.appspot.com",
    messagingSenderId: "946536913559",
    appId: "1:946536913559:web:a6d79e682a7cd68ca7a7d2",
    measurementId: "G-Z2E1MKXVV9"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// Function to get the value of an input element by its id
function getElementVal(id) {
  return document.getElementById(id).value;
}

// Function to handle form submission
function submitForm(e) {
  e.preventDefault();
  alert('Your message has been submitted. Thank you!');

  let name = getElementVal('fullname');
  let email = getElementVal('email');
  let subject = getElementVal('subject');
  let message = getElementVal('message');

  saveInfo(name, email, subject, message);
  console.log('submitted');
}

// Function to push data to Firebase
async function saveInfo(name, email, subject, message) {
  const objData = {
    name: name,
    email: email,
    subjectNo: subject,
   message: message
  };

  await addUser(objData);
}

// Function to add user data to Firestore
async function addUser(obj) {
  try {
    await addDoc(collection(db, "users"), obj);
    console.log("Document added successfully");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

document.getElementById('contact-form').addEventListener('submit', submitForm);