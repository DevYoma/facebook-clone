import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBJzdgpTfgG3x8xtRwx6Ui7bQzJ0r29PLU",
    authDomain: "facebook-clone-cd2e8.firebaseapp.com",
    databaseURL: "https://facebook-clone-cd2e8.firebaseio.com",
    projectId: "facebook-clone-cd2e8",
    storageBucket: "facebook-clone-cd2e8.appspot.com",
    messagingSenderId: "386330406850",
    appId: "1:386330406850:web:ef1d0a1a67ad018fd9f05b",
    measurementId: "G-D8VMX76VKF"
  };


  // initializing the firebase configurations 😁
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //making an instance of the firebaseApp constant and storing it in the db constant
  const db = firebaseApp.firestore();
  
  //authentication...
  const auth = firebase.auth();