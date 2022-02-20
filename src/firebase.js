import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeC-8SHtMHWGR3VaOPctNda1n24uqcBo0",
  authDomain: "authentication-c45d8.firebaseapp.com",
  projectId: "authentication-c45d8",
  storageBucket: "authentication-c45d8.appspot.com",
  messagingSenderId: "366355668973",
  appId: "1:366355668973:web:46c6b8934787ef565f91e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider1 = new GoogleAuthProvider();
export const provider2 = new FacebookAuthProvider();
