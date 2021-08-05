import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCiAEvU3_KZN2Ag2EZNEnEYje-YjE1X1jg",
    authDomain: "unichat-5c9c6.firebaseapp.com",
    projectId: "unichat-5c9c6",
    storageBucket: "unichat-5c9c6.appspot.com",
    messagingSenderId: "203906559171",
    appId: "1:203906559171:web:7999c84b0ebc03e96c4676"
  }).auth();