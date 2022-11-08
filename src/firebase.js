// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBPSzXovMQ9Eiw7KrrSsLmDQ0Fb3I-Pm6U',
  authDomain: 'superheroes-e0588.firebaseapp.com',
  projectId: 'superheroes-e0588',
  storageBucket: 'superheroes-e0588.appspot.com',
  messagingSenderId: '892863085542',
  appId: '1:892863085542:web:2be40973a58c7373de7427'
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
