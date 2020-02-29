import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyH1CAV3URjYrsxqzJKg9FKwtj1tcHxhM",
  authDomain: "ninja-chat-b9737.firebaseapp.com",
  databaseURL: "https://ninja-chat-b9737.firebaseio.com",
  projectId: "ninja-chat-b9737",
  storageBucket: "ninja-chat-b9737.appspot.com",
  messagingSenderId: "344441258527",
  appId: "1:344441258527:web:4742a2c554d1f819bb4b2a"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
