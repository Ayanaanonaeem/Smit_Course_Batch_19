// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAHYESyivsfieKJ1RFzIOI3tihDodofmAY",
  authDomain: "authentication-fbea0.firebaseapp.com",
  projectId: "authentication-fbea0",
  storageBucket: "authentication-fbea0.firebasestorage.app",
  messagingSenderId: "54870530890",
  appId: "1:54870530890:web:60ce54e169a89f9b52bfb3",
  measurementId: "G-L78M7K10V5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)

export {
    app,auth
}