// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFGCvIVrYcJPYylK-jeQVY8wFyLSH-XU0",
  authDomain: "chill-cafe-26cdc.firebaseapp.com",
  projectId: "chill-cafe-26cdc",
  storageBucket: "chill-cafe-26cdc.appspot.com",
  messagingSenderId: "185477698503",
  appId: "1:185477698503:web:b8036392b2c12d4e073fe2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getStorage } from "firebase/storage";
const storage = getStorage(app);

export { storage }