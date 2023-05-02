// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhafYgV566sYfe50gMGlPF6XDo74Ttb_U",
  authDomain: "b7a10-chef-recipe-hunter-a7cc1.firebaseapp.com",
  projectId: "b7a10-chef-recipe-hunter-a7cc1",
  storageBucket: "b7a10-chef-recipe-hunter-a7cc1.appspot.com",
  messagingSenderId: "206611213588",
  appId: "1:206611213588:web:34d6bbca071e6b99a86601"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;