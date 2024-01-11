// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1enNxE3L_KFOELksQCFNFnkZeyGzp-YM",
    authDomain: "volunteer-network-client-f1841.firebaseapp.com",
    projectId: "volunteer-network-client-f1841",
    storageBucket: "volunteer-network-client-f1841.appspot.com",
    messagingSenderId: "730282933284",
    appId: "1:730282933284:web:8d4229d10d92b063b02cb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;