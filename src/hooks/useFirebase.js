import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signOut } from "@firebase/auth";
import { useEffect, useState } from "react"
import initializeAuthentication from "../firebase/firebase.init"

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    //Email login
    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }

    //get value from email/password
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    //Email Registration
    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password must be at least 6 character long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contain 2 upper case');
            return;
        }
        isLogin ? loginProcess(email, password) : registerNewUser(email, password);
    }
    const loginProcess = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false)); //
    }
    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                return;
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => { })
            .catch(error => {
                setError(error.message);
            });
        return;
    }
    //Google Login
    const signInUsingGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    // logOut 
    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    }

    // observe user state change
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                // console.log('inside state Change', user);
                setUser(user);
            }
            setIsLoading(false);
        })
    }, [])

    return {
        isLogin,
        logout,
        user,
        error,
        signInUsingGoogle,
        handleRegistration,
        handleEmailChange,
        handleResetPassword,
        error,
        toggleLogin,
        handlePasswordChange,
        isLoading

    }
}
export default useFirebase;