import { faEnvelopeOpenText, faUnlockKeyhole, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import smartPhone from '../../images/smartPhone1.jpg'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../Firebase/FirebaseConfig';
import swal from 'sweetalert';


const SignUp = () => {

    //All State Declear Here
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agree, setAgree] = useState(false);
    const [customError, setCustomError] = useState('');
    const [success, setSuccess] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loadning,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: 'true' });

    // Navigate All 
    const navigate = useNavigate();
    const navigateGoHome = useNavigate();

    //Handle Name Fill
    const handleFullName = e => {
        setName(e.target.value);
    }

    //Handle Email 
    const handleEmail = e => {
        setEmail(e.target.value);

    }

    //Handle Password 
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    //Handle Confirm Password 
    const handleConfirmPassword = e => {
        setConfirmPassword(e.target.value);

    }

    //Page Navigate 

    const handleGoSignIn = () => {
        navigate('/login');
    }


    if (user) {
        navigateGoHome('/');
        swal("Registration Done!", "Register Successfully Done !", "success")
    }


    //===========================================================================================================
    //Handle Form Submit Action
    const handleFormSubmit = event => {
        if (password !== confirmPassword) {
            setCustomError("Password doesn't match..Please Match Your Password");
            event.preventDefault();
            return;
        }
        createUserWithEmailAndPassword(email, password)

        if (success) {
            setSuccess('Registration successfully done');
        }

        event.preventDefault();
        return;
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
                    <div className="signup-logo">
                        <img src={smartPhone} alt='logo'></img>
                    </div>
                </div>
                <div className="col-lg-5 pb-4" style={resStyle}>
                    <div className="register-from">
                        <h2 className='text-center pt-4 pb-4 fw-bold fs-4'>Please Register Now</h2>
                        <form onSubmit={handleFormSubmit}>
                            <div className="row gy-2">
                                <div className="col-lg-12">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text bg-primary" id="basic-addon1"><FontAwesomeIcon icon={faUserAlt} className='text-light'></FontAwesomeIcon></span>
                                        <input type="text" class="form-control form-control-lg fs-6" placeholder="Full Names" aria-label="Username" aria-describedby="basic-addon1" required onBlur={handleFullName} />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text bg-primary" id="basic-addon1"><FontAwesomeIcon icon={faEnvelopeOpenText} className='text-light'></FontAwesomeIcon></span>
                                        <input type="email" class="form-control form-control-lg fs-6" placeholder="Email address" aria-label="Username" aria-describedby="basic-addon1" required onBlur={handleEmail} />
                                    </div>
                                </div>
                                {/* Already have a email */}
                                <p className='text-danger text-center m-0' style={{ fontWeight: '500' }}>{error?.message?.includes('already') ? 'You already use this email.Please use another account' : ''}</p>
                                <div className="col-lg-12">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text bg-primary" id="basic-addon1"><FontAwesomeIcon icon={faUnlockKeyhole} className='text-light'></FontAwesomeIcon></span>
                                        <input type="password" class="form-control form-control-lg fs-6" placeholder="Create New Password" aria-label="Username" aria-describedby="basic-addon1" required onBlur={handlePassword} />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text bg-primary" id="basic-addon1"><FontAwesomeIcon icon={faUnlockKeyhole} className='text-light'></FontAwesomeIcon></span>
                                        <input type="password" class="form-control form-control-lg fs-6" placeholder="Confirm Password" aria-label="Username" aria-describedby="basic-addon1" required onBlur={handleConfirmPassword} />
                                    </div>
                                </div>
                                {/* Password did not match */}
                                <p className='text-danger text-center m-0' style={{ fontWeight: '500' }}>{customError}</p>
                                <div className="col-lg-12">
                                    <input type="checkbox" name="" id="check" className='pe-2' onClick={() => setAgree(!agree)} />
                                    <label htmlFor="check" className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'}>I agree to the terms and conditions</label>
                                </div>
                                <div className="col-lg-12">
                                    <input type="submit" class="form-control form-control-lg fs-6 fw-bold bg-primary text-light" disabled={!agree} value='Register Now' />
                                </div>
                                <div className="account text-center mt-4">
                                    <p className='text-secondary'>Already have an account ? <span className='text-primary fw-bold' style={{ cursor: 'pointer' }} onClick={handleGoSignIn}>Login Now</span></p>
                                </div>
                                <p className='text-danger text-center m-0' style={{ fontWeight: '500' }}>{error?.message?.includes('network') ? 'Please Check Your Internet Conection' : ''}</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;