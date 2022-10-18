import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAIBUPdMABIIBQKCsBzByyYy28I313JrB8",
    authDomain: "meuapp2-22e50.firebaseapp.com",
    databaseURL: "https://meuapp2-22e50-default-rtdb.firebaseio.com",
    projectId: "meuapp2-22e50",
    storageBucket: "meuapp2-22e50.appspot.com",
    messagingSenderId: "106141866414",
    appId: "1:106141866414:web:dce3991be0e5c835f9503f",
    measurementId: "G-T0XZE78MB9"
  };
  
if(!firebase.apps.length){
    //abrir minha conecção
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
  