import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAKTrcd64-tySmKRt_ilFwz2niH1JBEpA",
  authDomain: "kancherasydivertidas.firebaseapp.com",
  projectId: "kancherasydivertidas",
  storageBucket: "kancherasydivertidas.appspot.com",
  messagingSenderId: "278648604812",
  appId: "1:278648604812:web:3636bd86cc7b0c650e53a9"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
