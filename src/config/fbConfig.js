import firebase from "firebase/app";
import "firebase/firestore";

import "firebase/auth";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDJQAnW_-buBu2Im1dqYg9h_qgBE96AMWA",
  authDomain: "projects-management-4ff1a.firebaseapp.com",
  databaseURL: "https://projects-management-4ff1a.firebaseio.com",
  projectId: "projects-management-4ff1a",
  storageBucket: "projects-management-4ff1a.appspot.com",
  messagingSenderId: "105932682086",
  appId: "1:105932682086:web:5a7e1deaeee3bbfdbb0ea7",
  measurementId: "G-EDXKC4KPLG",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

const db = firebase.firestore();
export { db };
export default firebase;
