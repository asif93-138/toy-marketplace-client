// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUMTtEHB7y1GZ7maOFMbGmlJCka_pEgxs",
  authDomain: "toy-marketplace-bc8c1.firebaseapp.com",
  projectId: "toy-marketplace-bc8c1",
  storageBucket: "toy-marketplace-bc8c1.appspot.com",
  messagingSenderId: "952296174580",
  appId: "1:952296174580:web:67722e437c73d42b65bfa1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;