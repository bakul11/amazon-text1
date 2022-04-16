import { useEffect, useState } from "react";
import { getAllProductFromDb } from "../FakeDb/FakeDb";

const useCart = (product) => {
    const [cart, setCart] = useState([]);

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
    return [cart, setCart];
}
export default useCart;