import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBcjN2p7hQDUGINzcY--M5dwsKDG8l0s5g",
  authDomain: "disneyplus-clone-26c15.firebaseapp.com",
  projectId: "disneyplus-clone-26c15",
  storageBucket: "disneyplus-clone-26c15.appspot.com",
  messagingSenderId: "78160473141",
  appId: "1:78160473141:web:ea6c66844b555895a8957c",
  measurementId: "G-B5RGG4TJBN"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;