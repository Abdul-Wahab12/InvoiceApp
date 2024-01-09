import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCR5tTmQP5OqNxM0ezSxCtmKvGxpRIHxxA",
    authDomain: "invoiceapp-dc2bb.firebaseapp.com",
    projectId: "invoiceapp-dc2bb",
    storageBucket: "invoiceapp-dc2bb.appspot.com",
    messagingSenderId: "4686165544",
    appId: "1:4686165544:web:fa191a0f1399a360e8271d"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();

  