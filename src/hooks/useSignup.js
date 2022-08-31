import { useState, useEffect } from 'react'
//firebase imports
import { auth, db } from '../firebase/config'
import { doc, setDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
//hooks
import { useAuthContext } from '../hooks/useAuthContext'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isCancelled, setIsCancelled] = useState(false)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const signup = async (email, password, displayName, birthday) => {
        setError(null)
        setIsPending(true)
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            if (!res) {
                throw new Error('Could not complete signup')
            }

            // add user to firestore
            await setDoc(doc(db, 'users', res.user.uid), {
                displayName,
                birthday,
                friends: [],
                wishLists: []
            })
            //update profile to add display name
            if (displayName) {
                await updateProfile(auth.currentUser, { displayName })
            }
            //dispatch login action
            dispatch({ type: 'LOGIN', payload: res.user })


            if (!isCancelled) {
                setIsPending(false)
                setError(null)
            }
        } catch (err) {
            if (!isCancelled) {
                setError(err.message)
                setIsPending(false)
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])
    return { error, signup, isPending }
}