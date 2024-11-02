import {initializeApp} from "firebase/app"
// import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyA4Syy5HnBB_8gLQ5g53zYjOpAYaChkTEY",
    authDomain: "form-5437b.firebaseapp.com",
    projectId: "form-5437b",
    storageBucket: "form-5437b.firebasestorage.app",
    messagingSenderId: "1066721287085",
    appId: "1:1066721287085:web:4cfdfd64352cd91e091f24",
    databaseURL:"https://form-5437b-default-rtdb.firebaseio.com"
  };

//   our firbase app connected to firebase account
  export  const app=initializeApp(firebaseConfig)
  // export const imageDb=getStorage(app)
