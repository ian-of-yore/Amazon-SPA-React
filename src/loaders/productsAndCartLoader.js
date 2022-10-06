import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {

    // Getting products data
    const productsData = await fetch('products.json');
    const products = await productsData.json();
    // console.log(products)


    // Getting savedCart data from the Local Storage
    const storedCart = getStoredCart();
    // console.log(savedCart);

    const initialCart = [];
    for (const id in storedCart) {
        const addedProducts = products.find(product => product.id === id);
        if (addedProducts) {
            addedProducts.quantity = storedCart[id];
            initialCart.push(addedProducts)
        }

    }
    return { products, initialCart };
}