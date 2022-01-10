import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";
import { attachCustomCommands } from "cypress-firebase";

firebase.initializeApp({
  projectId: 'retro-board-f7506',
  appId: '1:716269987550:web:c90719b6bc7d3d79c3c44f',
  storageBucket: 'retro-board-f7506.appspot.com',
  apiKey: 'AIzaSyDAlHzMK0kUESNOQQyd1iSnyEwl8HKQNFo',
  authDomain: 'retro-board-f7506.firebaseapp.com',
  messagingSenderId: '716269987550',
});

attachCustomCommands({Cypress, cy, firebase});
