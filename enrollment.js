// Your web app's Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMMNwOds7NxunD_97CDbFdzC8s69XibYs",
    authDomain: "eduford-46796.firebaseapp.com",
    projectId: "eduford-46796",
    storageBucket: "eduford-46796.appspot.com",
    messagingSenderId: "946536913559",
    appId: "1:946536913559:web:ac8f223769e61b05a7a7d2",
    measurementId: "G-EJ5RZVLK7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to get the value of an input element by its id
function getElementVal(id) {
    return document.getElementById(id).value;
}

// Function to handle form submission
async function submitForm(e) {
    e.preventDefault();

    let name = getElementVal('fullname');
    let email = getElementVal('email');
    let mobile = getElementVal('mobile');
    let dob = getElementVal('dob');
    let cs = getElementVal('cs');

    try {
        await saveInfo(name, email, mobile, dob, cs);
        alert('Thank you for enrollment in our course!');
        window.location.href = "course.html";
    } catch (error) {
        console.error('Error submitting the form: ', error);
        alert('There was an error submitting the form. Please try again.');
    }
    console.log('submitted');
}

// Function to push data to Firebase
async function saveInfo(name, email, mobile, dob, cs) {
    const objData = {
        name: name,
        email: email,
        mobileNo: mobile,
        dob: dob,
        course: cs
    };

    await addUser(objData);
}

// Function to add user data to Firestore
async function addUser(obj) {
    try {
        await addDoc(collection(db, "Enrollment"), obj);
        console.log("Document added successfully");
    } catch (error) {
        console.error("Error adding document: ", error);
        throw error;
    }
}

document.getElementById('enrollment').addEventListener('submit', submitForm);
