// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBIiqoYrkgTWKgwsEEC4B4CnVRY8yMwwsk",
    authDomain: "clone-270ee.firebaseapp.com",
    projectId: "clone-270ee",
    storageBucket: "clone-270ee.appspot.com",
    messagingSenderId: "962581944034",
    appId: "1:962581944034:web:2a24aaf07db28bc29d70bb",
    measurementId: "G-KRDQG3PF47"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};
