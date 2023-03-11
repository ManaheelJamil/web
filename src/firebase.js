import {initializeApp} from 'firebase/app'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDo46YQexD3RsGNCSiL7HjCDZNMRaqcyfY",
    authDomain: "my-web-app-c15e3.firebaseapp.com",
    projectId: "my-web-app-c15e3",
    storageBucket: "my-web-app-c15e3.appspot.com",
    messagingSenderId: "773308454575",
    appId: "1:773308454575:web:1dcc11e23e6c9ecb45665a",
    measurementId: "G-N2PYH35ZRW"
  };
  const app = initializeApp(firebaseConfig)
  export const auth = getAuth()
