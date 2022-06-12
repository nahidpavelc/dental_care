import './Login.css';
import initializeAuthentication from '../../firebase/firebase.init';
import useAuth from '../../hooks/useAuth';

initializeAuthentication();


const Login = () => {
    const {signInUsingGoogle, isLogin, handleRegistration, handleEmailChange, handlePasswordChange, error, handleResetPassword, toggleLogin } = useAuth();
    
    return (

        < >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>

                            <div className="card-body p-5 text-center">
                                <h3 className="mb-5 text-success">Please {isLogin ? 'Login' : ' Signup'}</h3>
                                <form onSubmit={handleRegistration}>
                                    <input onBlur={handleEmailChange} type="text" name="username" className="form-control mb-4" placeholder="Username" required />
                                    <input onBlur={handlePasswordChange} type="password" name="password" className="form-control mb-4" placeholder="Password" required />

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
                                <button onClick={signInUsingGoogle} className="btn btn-lg btn-block btn-warning mb-3 " type="submit"><i className="fab fa-google me-2"></i> Sign up with google</button>
                                <button className="btn btn-lg btn-block btn-primary mb-2" type="submit"><i className="fab fa-facebook-f me-2"></i>Sign up with facebook</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;