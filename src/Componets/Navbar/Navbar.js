import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import auth from '../Firebase/FirebaseConfig';
import './Navbar.css'




const Navbar = () => {
    const [user, error] = useAuthState(auth);

    const handleLogOut = () => {
        signOut(auth);
        swal("Logout Done!", "you are logout finish!", "success")
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid ps-5 pe-5">
                <Link className="navbar-brand fw-bold text-light fs-2 fst-italic" to="#">Amazon Store</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ms-5">
                            <Link className="nav-link text-light active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item ms-5">
                            <Link className="nav-link text-light" to="/">Shop</Link>
                        </li>
                        <li className="nav-item ms-5">
                            <Link className="nav-link text-light" to="/review">Review Order</Link>
                        </li>
                        <li className="nav-item ms-5">
                            <Link className="nav-link text-light" to="/checkout">Inventory</Link>
                        </li>
                        <li className="nav-item ms-5">
                            <Link className="nav-link text-light" to="/signup">Register</Link>
                        </li>
                        <li className="nav-item ms-5">
                            <Link className="nav-link text-light" to="/match">NoMatch</Link>
                        </li>
                        <li className="nav-item ms-5">
                            {
                                user?.uid ? <button className='logout' onClick={handleLogOut}>LogOut</button> : <Link className="nav-link text-light" to="/login">Login</Link>
                            }
                        </li>
                        <li className="nav-item ms-5">
                            <p className='text-light mt-2'> {user?.email}</p>
                        </li>
                        <li className="nav-item ms-5">
                            <img src={user?.photoURL} alt="" className='rounded-circle mt-2 border-none' style={{ height: '30px', width: '30px' }} />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;