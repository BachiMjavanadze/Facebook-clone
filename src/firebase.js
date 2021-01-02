import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJgsE7xSHLRpQGVx2QrUUz3v_2jbf2vdo",
  authDomain: "facebook-clone-d4888.firebaseapp.com",
  databaseURL: "https://facebook-clone-d4888.firebaseio.com",
  projectId: "facebook-clone-d4888",
  storageBucket: "facebook-clone-d4888.appspot.com",
  messagingSenderId: "873034047217",
  appId: "1:873034047217:web:08fee7459960c9b98e9350",
  measurementId: "G-TNK6N1SHG3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;