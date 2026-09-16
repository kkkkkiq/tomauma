// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCK3GllJATXLb4xXA3UfPVVn0o4bouKHc",
  authDomain: "tomar-uma-b4eb1.firebaseapp.com",
  projectId: "tomar-uma-b4eb1",
  storageBucket: "tomar-uma-b4eb1.firebasestorage.app",
  messagingSenderId: "637521049777",
  appId: "1:637521049777:web:285a9ff789e8d9140dca90",
  measurementId: "G-NH9N7ZQB12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
