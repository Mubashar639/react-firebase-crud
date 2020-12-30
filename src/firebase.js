import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAy7njTMTITaJE4DdW7RL1DHLKxgpvp9tw",
    authDomain: "react-crud-f940e.firebaseapp.com",
    projectId: "react-crud-f940e",
    storageBucket: "react-crud-f940e.appspot.com",
    messagingSenderId: "342707273595",
    appId: "1:342707273595:web:d530da15ab29c0be8687de"
};
// Initialize Firebase
const firebaseApp=firebase.initializeApp(firebaseConfig);
const firestore=firebase.firestore();

export {firebaseApp, firestore};