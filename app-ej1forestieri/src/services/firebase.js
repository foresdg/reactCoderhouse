// import * as firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAnHCtNB6DjymexKJAEKJdrKxQkQu2W9ho",
  authDomain: "tiendareact-b9a68.firebaseapp.com",
  projectId: "tiendareact-b9a68",
  storageBucket: "tiendareact-b9a68.appspot.com",
  messagingSenderId: "423917578541",
  appId: "1:423917578541:web:a6c8abf1dc9db148404ba4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)