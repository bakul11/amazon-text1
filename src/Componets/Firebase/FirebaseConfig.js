import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCUd7vABs0qhpYEvZEiJq3r8X-UTCg_iks",
    authDomain: "pro-756c0.firebaseapp.com",
    projectId: "pro-756c0",
    storageBucket: "pro-756c0.appspot.com",
    messagingSenderId: "565470181340",
    appId: "1:565470181340:web:ef3f53a50b9166f02bc119"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;