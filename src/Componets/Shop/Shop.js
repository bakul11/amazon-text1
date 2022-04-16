import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { addToLocalStorage, getAllProductFromDb } from '../FakeDb/FakeDb';
import { useProduct } from '../Hooks/useProduct';
import ShopCart from '../ShopCart/ShopCart';

const Shop = () => {
    const [product, setProduct] = useProduct();
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storeProduct = getAllProductFromDb();
        const saveCart = [];
        for (const id in storeProduct) {
            const alreadyAddedProduct = product.find(pro => pro.id === id);
            if (alreadyAddedProduct) {
                const quantity = storeProduct[id];
                alreadyAddedProduct.quantity = quantity;
                saveCart.push(alreadyAddedProduct);
            }
        }
        setCart(saveCart);
    }, [product])

    //Handle Add to Cart
    const handleAddToCart = product => {
        let newCart = [];
        const exists = cart.find(pro => pro.id === product.id)
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        } else {
            const rest = cart.filter(pro => pro.id !== product.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToLocalStorage(product.id);
    }

    const handleReviewPages = () => {
        navigate('/review');
    }

    return (
        <div className='mt-5 mb-5 container'>
            <div className="row gy-5">
                <div className="col-lg-7">
                    <div className="row gy-5">
                        {
                            product.map(product =>
                                <ShopCart product={product}
                                    handleAddToCart={handleAddToCart}
                                    key={product.id} ></ShopCart>)
                        }
                    </div>
                </div>
                <div className="col-lg-5">
                    <Cart cart={cart}>
                        <button className='fw-bold mt-3 btn btn-danger w-100' onClick={handleReviewPages}>Review Product</button>
                    </Cart>
                </div>
            </div>
        </div >
    );
};

export default Shop;