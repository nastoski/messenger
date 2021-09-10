import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB6n_8eDHkbZc3jOFantDx0Dr3wFa7o8L0",
  authDomain: "chatx-next.firebaseapp.com",
  projectId: "chatx-next",
  storageBucket: "chatx-next.appspot.com",
  messagingSenderId: "74020922461",
  appId: "1:74020922461:web:ecf5ce5c0875a2c38859b4",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
