import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyBCK3GllJATXLb4xXA3UfPVVn0o4bouKHc",
    authDomain: "tomar-uma-b4eb1.firebaseapp.com",
    projectId: "tomar-uma-b4eb1",
    storageBucket: "tomar-uma-b4eb1.firebasestorage.app",
    messagingSenderId: "637521049777",
    appId: "1:637521049777:web:285a9ff789e8d9140dca90",
    measurementId: "G-NH9N7ZQB12"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
