const generateThreeRandomProducts = (someProducts) => {
    // get three random someProducts
    const randomProduct = someProducts.getRandomProduct();
    let randomProduct2 = someProducts.getRandomProduct();
    let randomProduct3 = someProducts.getRandomProduct();

    // while the second product has the same id as the first product, generate a new item for the second product
    while (randomProduct.id === randomProduct2.id) {
        randomProduct2 = someProducts.getRandomProduct();
    }

    // while the third product has the same id as the first OR second product, generate a new item for the third product
    while ((randomProduct.id || randomProduct2.id) === randomProduct3.id) {
        randomProduct3 = someProducts.getRandomProduct();
    }

    return randomProduct;
    return randomProduct2;
    return randomProduct3;
};

export default generateThreeRandomProducts();