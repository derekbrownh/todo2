import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDO_K_x9tcBZW6PUMyIlQyIqtGubKmkWEE",
  authDomain: "todo2-5889f.firebaseapp.com",
  databaseURL: "https://todo2-5889f.firebaseio.com",
  projectId: "todo2-5889f",
  storageBucket: "todo2-5889f.appspot.com",
  messagingSenderId: "257726328410",
  appId: "1:257726328410:web:05b400c3f28c1548bf7263"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
