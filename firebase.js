// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDzCngjNvwip48Re2b3ncvVBWwGiWgSlUc",
    authDomain: "origin-95656.firebaseapp.com",
    projectId: "origin-95656",
    storageBucket: "origin-95656.appspot.com",
    messagingSenderId: "308555886202",
    appId: "1:308555886202:web:329c4b2e46894cb8a0d5c3",
    measurementId: "G-6ZLW767KCK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, storage, provider };