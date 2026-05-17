import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCP_DtlEp34bxhIQ9vi40kHPNb9-M5ULAg",
  authDomain: "maddes-chat.firebaseapp.com",
  projectId: "maddes-chat",
  storageBucket: "maddes-chat.firebasestorage.app",
  messagingSenderId: "590499179638",
  appId: "1:590499179638:web:962e96cdaea44d4f21c357",
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export default db