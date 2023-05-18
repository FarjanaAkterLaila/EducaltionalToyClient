// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcgX71McfWH0kXE3vdLlBngN-DmGI4O74",
  authDomain: "edu-ler-toys.firebaseapp.com",
  projectId: "edu-ler-toys",
  storageBucket: "edu-ler-toys.appspot.com",
  messagingSenderId: "166935948576",
  appId: "1:166935948576:web:73c033413fb8577b96bb45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;