import dotenv from 'dotenv'
// firebase imports
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
dotenv.config()

const firebaseConfig = process.env.FIREBASE_CONFIG

//init app
initializeApp(firebaseConfig)

//init services
const db = getFirestore()
const auth = getAuth()

export { db, auth }