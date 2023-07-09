import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css"
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB81KV4vOsSMbF5cptyjtpLJZo691BnPEE",
  authDomain: "pepe-react.firebaseapp.com",
  projectId: "pepe-react",
  storageBucket: "pepe-react.appspot.com",
  messagingSenderId: "275776291145",
  appId: "1:275776291145:web:5b29585282a381afc0da98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

