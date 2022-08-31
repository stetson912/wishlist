import { useState, useEffect } from 'react'
//firebase imports
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
//hooks
import { useAuthContext } from '../hooks/useAuthContext'

export const useLogin = () => {
    const [isPending, setIsPending] = useState(false)
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        setError(null)
        setIsPending(true)

        try {
            const res = await signInWithEmailAndPassword(auth, email, password)

            if (!res) {
                throw new Error("Could not login user")
            }

            // dispatch action
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
    return { login, error }
}
