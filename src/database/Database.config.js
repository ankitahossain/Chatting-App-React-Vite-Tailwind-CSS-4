// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDOl-trBbckwniF9dNuxI2h_mGrdRTpaGg",
  authDomain: "mern-2403.firebaseapp.com",
  projectId: "mern-2403",
  storageBucket: "mern-2403.firebasestorage.app",
  messagingSenderId: "38864365847",
  appId: "1:38864365847:web:c414532dcabf94c61eaf52",
  measurementId: "G-W9L8ZFQXYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app ;