import firebase from 'firebase'

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDZU4WDB0jNVfuyIn19k4aegtVNzr-bbGo",
    authDomain: "taxpromarket.firebaseapp.com",
    databaseURL: "https://taxpromarket.firebaseio.com",
    projectId: "taxpromarket",
    storageBucket: "taxpromarket.appspot.com",
    messagingSenderId: "547835682748"
  };
  const fire = firebase.initializeApp(config);
  export default fire;
