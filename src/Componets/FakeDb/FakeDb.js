const addToLocalStorage = id => {

    let shoppingCart = {};

    const storeCart = localStorage.getItem('shopping-cart');
    if (storeCart) {
        shoppingCart = JSON.parse(storeCart);
    }
    //Add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}
//Get All Product form DB
const getAllProductFromDb = () => {
    let shoppingCart = {};

    const storeCart = localStorage.getItem('shopping-cart');
    if (storeCart) {
        shoppingCart = JSON.parse(storeCart);
    }
    return shoppingCart;
}

//Remove Product From Database
const removeProductFromDb = id => {
    const storeCart = JSON.parse(localStorage.getItem('shopping-cart'));
    if (storeCart) {
        if (id in storeCart) {
            delete storeCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(storeCart));
        }
    }
}

//Delete All Product 
const deleteAllProduct = () => {
    localStorage.removeItem('shopping-cart')
}
export { addToLocalStorage, removeProductFromDb, deleteAllProduct, getAllProductFromDb }