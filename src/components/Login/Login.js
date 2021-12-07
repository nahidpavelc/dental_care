import { initializeApp } from '@firebase/app';
import './Login.css';
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification,sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import initializeAuthentication from '../../Firebase/firebase.init';
import useFirebase from '../../hooks/useFirebase';

initializeAuthentication();


const Login = () => {
    const {signInUsingGoogle} = useFirebase()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const auth = getAuth();

    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }

    const handleEmailChange = e => {   //get value from email
        setEmail(e.target.value);
    }
    const handlePasswordChane = e => {  //gget value from password
        setPassword(e.target.value);
    }

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
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
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

    // Reset password 
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
        .then(result =>{ } )
        return;
    }


    return (

        <div >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>

                            <div className="card-body p-5 text-center">
                                <h3 className="mb-5 text-success">Please {isLogin ? 'Login' : ' Signup'}</h3>
                                <form onSubmit={handleRegistration}>
                                    <input onBlur={handleEmailChange} type="text" name="username" className="form-control mb-4" placeholder="Username" required />
                                    <input onBlur={handlePasswordChane} type="password" name="password" className="form-control mb-4" placeholder="Password" required />

                                    <div className="text-danger">{error}</div>

                                    <button onClick={handleResetPassword} type="button" class="btn btn-outline-success resetbtn">Reset Password</button>

                                    {/* <!-- Checkbox --> */}
                                    <div className="form-check d-flex justify-content-start mb-4">
                                        <input
                                            onChange={toggleLogin}
                                            className="form-check-input "
                                            type="checkbox"
                                            value=""
                                            id="form1Example3"
                                        />
                                        <label className="form-check-label" htmlFor="form1Example3">Already Registered? </label>
                                    </div>

                                    <button className="btn btn-success btn-lg btn-block" type="submit">{isLogin ? 'Login' : 'Register'}</button>
                                </form>
                                <hr className="my-4" />
                                <button onClick={signInUsingGoogle} className="btn btn-lg btn-block btn-primary mb-3" type="submit"><i className="fab fa-google me-2"></i> Sign up with google</button>
                                <button className="btn btn-lg btn-block btn-primary mb-2" type="submit"><i className="fab fa-facebook-f me-2"></i>Sign up with facebook</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;