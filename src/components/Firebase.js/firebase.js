import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7Zn1p5qlQLfxcBqIJKlOnDPQamg80Smc",
  authDomain: "fish-ecomm.firebaseapp.com",
  projectId: "fish-ecomm",
  storageBucket: "fish-ecomm.appspot.com",
  messagingSenderId: "147021862870",
  appId: "1:147021862870:web:7c482722ec8f7a0a9cf677",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
