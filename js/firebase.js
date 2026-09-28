 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
  //importa a função de autenticação do firebase

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";
//importa a função de banco de dados da firebase

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCkXg5SZ465B1BQeKz8jFh5YJ3XUN73MPI",
    authDomain: "futyelllow.firebaseapp.com",
    projectId: "futyelllow",
    storageBucket: "futyelllow.firebasestorage.app",
    messagingSenderId: "30259683122",
    appId: "1:30259683122:web:0c38f8556687de5922412b"
  };


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //exportar a autenticação
  export const auth = getAuth(app);

  //exportar o nosso odb
  export const db = getFirestore(app);
