import { collection, getDocs } from "https://www.gstatic.com"
import {db } from "./firebase.js";

async function quickstartListen(db) {
    // [START firestore-setup_datareset_read]
    //const snapshot = await db.collection ('users').get();
    const snapshot = await getDocs(collection(db, 'users'));
    snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
    });
    // [END firestore-setup_datareset_read]
}


quickstartListen(db)