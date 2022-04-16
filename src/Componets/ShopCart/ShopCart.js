import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const ShopCart = ({ product, handleAddToCart }) => {
    const { name, photo, price } = product;


    return (
        <div className='col-lg-6'>
            <div className="card shadow-lg text-center p-3">
                <img src={photo} alt="" style={{ height: '200px' }} />
                <div className="card-body">
                    <h2 className='fs-5 fw-bold'>{name}</h2>
                    <h5 className='text-success fs-6'>Price : ${price}</h5>
                    <button className="btn btn-primary fw-bold mt-2" onClick={() => handleAddToCart(product)}>Add To Cart <FontAwesomeIcon icon={faShoppingCart} className='ps-3'></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default ShopCart;