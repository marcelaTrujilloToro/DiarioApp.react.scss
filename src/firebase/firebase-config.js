
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDnVKHE_m9nGTIW3n7yD_f02z04wBTsW70",
    authDomain: "react-app-cursos-86ba5.firebaseapp.com",
    projectId: "react-app-cursos-86ba5",
    storageBucket: "react-app-cursos-86ba5.appspot.com",
    messagingSenderId: "724183623399",
    appId: "1:724183623399:web:e7c5b2e57bbb6d0aa32442"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//base de datos
const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db, 
    googleAuthProvider,
    firebase
}