// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxlaQFHoBaPRTsMErRjNc_NqF8THUakz8",
  authDomain: "lms-project-60b68.firebaseapp.com",
  projectId: "lms-project-60b68",
  storageBucket: "lms-project-60b68.appspot.com",
  messagingSenderId: "696421605886",
  appId: "1:696421605886:web:d1cf93816b517a5b5460af",
  measurementId: "G-NRLE5R4NFG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
