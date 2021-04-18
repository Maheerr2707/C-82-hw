import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCrHS6vpGcPtyDUhtermquLciAlhuKKhCc",
  authDomain: "bartersystem-bcd08.firebaseapp.com",
  projectId: "bartersystem-bcd08",
  storageBucket: "bartersystem-bcd08.appspot.com",
  messagingSenderId: "1013350726700",
  appId: "1:1013350726700:web:cf93c91d6c74044b06a589"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
