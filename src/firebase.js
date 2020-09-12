import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTh6xFankA87DhSp8ETw7A7pHk6MO3O7Q",
  authDomain: "clone-react-133ca.firebaseapp.com",
  databaseURL: "https://clone-react-133ca.firebaseio.com",
  projectId: "clone-react-133ca",
  storageBucket: "clone-react-133ca.appspot.com",
  messagingSenderId: "144258064791",
  appId: "1:144258064791:web:c320833809d512aebc24d2",
  measurementId: "G-S1NEXQ0GMK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
