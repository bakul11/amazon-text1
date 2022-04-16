import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { removeProductFromDb } from '../FakeDb/FakeDb';
import useCart from '../Hooks/useCart';
import { useProduct } from '../Hooks/useProduct';
import ReviewDetails from '../ReviewDetails/ReviewDetails';


const Review = () => {
    const [product, setProduct] = useProduct();
    const [cart, setCart] = useCart(product);

    const navigate = useNavigate();
    const handleReviewPages = () => {
        navigate('/checkout');
    }

    const handleDeleteProduct = pro => {
        const res = cart.filter(pd => pd.id !== pro.id);
        setCart(res)
        removeProductFromDb(pro.id);

    }



    return (
        <div className='mt-5 container'>
            <div className="row">
                <div className="col-lg-8">
                    {
                        cart.map(pro => <ReviewDetails pro={pro} key={pro.id} handleDeleteProduct={handleDeleteProduct}></ReviewDetails>)
                    }
                </div>
                <div className="col-lg-4">
                    <Cart cart={cart}>
                        <button className='fw-bold mt-3 btn btn-danger w-100' onClick={handleReviewPages}>Process to CheckOut <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon></button>
                    </Cart>
                </div>
            </div>

        </div>
    );
};

export default Review;