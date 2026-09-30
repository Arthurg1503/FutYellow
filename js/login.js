import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { auth } from "./firebase.js";

const form = document.getElementById("loginform");

form.addEventListener("submit", async (event)=> {
     event.preventDefault();

     const email = document.getElementById("email").Value;
     const password = document.getElementById("senha").value;

     try{

        const result = await signInWithEmailAndPassword(auth, email, password);
        console.log ("Usuário logado:", result.user.uid);
        window.location.href ="./index.html";
     } catch (error) {
        console.error(error);
        document.getElementById("mensagem").textContent = "E-mail ou senha invalidos";
    }
});

