// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAWuaYUIaVeGiSUN1Hmk_sTP9PSesPidVg',
  authDomain: 'netflix-clone-76fdc.firebaseapp.com',
  projectId: 'netflix-clone-76fdc',
  storageBucket: 'netflix-clone-76fdc.appspot.com',
  messagingSenderId: '352654515560',
  appId: '1:352654515560:web:6afad4b506b0b26bd18add',
  measurementId: 'G-MJMDJNV942'
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
