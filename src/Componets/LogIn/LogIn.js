import { faEnvelopeOpenText, faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import swal from 'sweetalert';
import { useLocation, useNavigate } from 'react-router-dom';
import smartPhone from '../../images/smartPhone1.jpg'
import { faFacebookF, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../Firebase/FirebaseConfig';



const LogIn = () => {

    //All State Here
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Page Navigate 
    const navigate = useNavigate();
    const navigateSign = useNavigate();
    const handleGoSignIn = () => {
        navigateSign('/signup');
    }


    const [
        signInWithEmailAndPassword,
        user,
        loadning,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    // All Sign In Mathods
    const [signInWithFacebook] = useSignInWithFacebook(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);




    //Handle Email 
    const handleEmail = e => {
        setEmail(e.target.value);

    }

    //Handle Password 
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    // Redirect User After Login 
    //===============================================================================================
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
        swal("Login Done!", "Login Successfully Done !", "success")
    }

    //================================================================================================

    //handle Forget Password
    const handleForgetPassword = async () => {
        await sendPasswordResetEmail(email);
        swal("Check Email!", "Please Chcek your email !", "success")
    }






    //===========================================================================================================
    //Handle Form Submit Action
    const handleFormSubmit = event => {
        signInWithEmailAndPassword(email, password)
        event.preventDefault();
    }

    //========================================================================================================




    //Register Style 
    const resStyle = {
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
    }


    return (
        <div className='container mt-5 mb-5'>
            <div className="row">
                <div className="col-lg-7">
                    <div className="Signup-logo">
                        <img src={smartPhone} alt='logo'></img>
                    </div>
                </div>
                <div className="col-lg-5 pb-4" style={resStyle}>
                    <div className="register-from">
                        <h2 className='text-center pt-4 pb-4 fw-bold fs-4'>Please Login Now</h2>
                        <form onSubmit={handleFormSubmit}>
                            <div className="row gy-2">
                                <div className="col-lg-12">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text bg-primary" id="basic-addon1"><FontAwesomeIcon icon={faEnvelopeOpenText} className='text-light'></FontAwesomeIcon></span>
                                        <input type="email" class="form-control form-control-lg fs-6" placeholder="Email address" aria-label="Username" aria-describedby="basic-addon1" required onBlur={handleEmail} />
                                    </div>
                                    {/* You Have no account  */}
                                    <p className='text-danger m-0' style={{ fontWeight: '500' }}>{error?.message?.includes('user-not') ? 'You have no account.Please create new account' : ''}</p>
                                </div>
                                <div className="col-lg-12">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text bg-primary" id="basic-addon1"><FontAwesomeIcon icon={faUnlockKeyhole} className='text-light'></FontAwesomeIcon></span>
                                        <input type="password" class="form-control form-control-lg fs-6" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" required onBlur={handlePassword} />
                                    </div>
                                    {/* Wrong Password */}
                                    <p className='text-danger m-0 text-center' style={{ fontWeight: '500' }}>{error?.message?.includes('wrong-password') ? 'Wrong Password..Please try again' : ''}</p>
                                </div>
                                <div className="forget-pass text-end">
                                    <p className='text-secondary' style={{ fontSize: '15px', fontWeight: '500', cursor: 'pointer' }} onClick={handleForgetPassword}>Forget Password?</p>
                                </div>
                                <div className="col-lg-12">
                                    <input type="submit" class="form-control form-control-lg fs-6 fw-bold bg-primary text-light" value='Login Now' />
                                </div>
                                {/* Extra Login Details Start Form Here */}
                                <div className="extra-signup mt-3">
                                    <p className='text-center text-secondary'>Or Sign Up Using</p>
                                    <ul className='d-flex justify-content-center'>
                                        <li className='ms-0'><FontAwesomeIcon icon={faFacebookF} style={{ height: '30px', width: '30px', padding: '5px', cursor: 'pointer' }} className='rounded-circle  text-light bg-primary' onClick={() => signInWithFacebook()}></FontAwesomeIcon></li>
                                        <li className='ms-2'><FontAwesomeIcon icon={faGoogle} style={{ height: '30px', width: '30px', padding: '5px', cursor: 'pointer' }} className='rounded-circle  text-light bg-danger' onClick={() => signInWithGoogle()}></FontAwesomeIcon></li>
                                        <li className='ms-2'><FontAwesomeIcon icon={faGithub} style={{ height: '30px', width: '30px', padding: '5px', cursor: 'pointer' }} className='rounded-circle  text-light bg-success' onClick={() => signInWithGithub()}></FontAwesomeIcon></li>
                                    </ul>
                                </div>
                                <div className="account text-center mt-2">
                                    <p className='text-secondary'>have not account yet? <span className='text-primary fw-bold' style={{ cursor: 'pointer' }} onClick={handleGoSignIn}>SignUp Now</span></p>
                                </div>
                            </div>
                            {/* network Error  */}
                            <p className='text-danger text-center m-0' style={{ fontWeight: '500' }}>{error?.message?.includes('network') ? 'Please Check Your Internet Conection' : ''}</p>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LogIn;