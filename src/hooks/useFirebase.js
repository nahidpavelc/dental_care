import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "@firebase/auth";
import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init"

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside state Change', user);
                setUser(user);
            }
        })
    }, [])

    return {
        logout,
        user,
        error,
        signInUsingGoogle
    }
}
export default useFirebase;