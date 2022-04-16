import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    //Shopping Cart Calculation
    let total = 0;
    let shipping = 0;
    let tax = 0;
    let quantity = 0;

    for (const product of cart) {
        total = total + product.price * product.quantity;

        //Shipping Calculate
        if (total > 1500) {
            shipping = 5;
        } else if (total > 500) {
            shipping = 10;
        }

        //tax 
        tax = total * 0.1;
        quantity = quantity + product.quantity;


    }
    const subTotal = total + tax + shipping;


    return (
        <div className='position-sticky top-0 shadow-lg ps-4 pb-3'>
            <h2>Oder Summmary</h2>
            <p className='text-primary fw-bold'>==============================</p>
            <h3>Total Add items : {quantity}</h3>
            <h5>Product Price : ${total}</h5>
            <h5>Shipping Cost: ${shipping}</h5>
            <h5>Tax & vat: ${tax}</h5>
            <p className='text-danger fw-bold'>==============================</p>
            <h5><span className='text-primary fw-bold'>SubTotal Price</span> : ${subTotal}</h5>
            {props.children}
        </div>
    );
};

export default Cart;