import { getAuth} from "firebase/auth"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_pLWqosUXneh957oE3tGI0_LBg7M0MW4",
  authDomain: "fir-login-d7ee3.firebaseapp.com",
  projectId: "fir-login-d7ee3",
  storageBucket: "fir-login-d7ee3.appspot.com",
  messagingSenderId: "640997324713",
  appId: "1:640997324713:web:1116284ed336ebc036b6b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };