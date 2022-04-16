import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import './ReviewDetails.css'

const ReviewDetails = ({ pro, handleDeleteProduct }) => {
    const { name, photo, price, quantity } = pro;
    return (
        <div className="row">
            <div className='col-lg-12 mb-3'>
                <div className="card shadow-lg ps-5 pe-5">
                    <div className="d-flex justify-content-around align-items-center">
                        <img src={photo} alt="" className='img-fluid' style={{ height: '120px', width: '120px' }} />
                        <div className="card-body">
                            <h2 className='fs-5 fw-bold'>{name}</h2>
                            <h5 className='text-success fs-6'>Price : ${price}</h5>
                            <h5 className='text-primary fs-6'>Quantity : {quantity}</h5>
                        </div>
                        <div className="div">
                            <FontAwesomeIcon icon={faTrashAlt} className='text-danger' style={{ cursor: 'pointer' }} size='2x' onClick={() => handleDeleteProduct(pro)}></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ReviewDetails;