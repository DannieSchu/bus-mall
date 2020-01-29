const getRandomProduct = (someArray) => {
    const randomProductIndex = Math.floor(Math.random() * someArray.length);

    return someArray[randomProductIndex];

};

export const generateThreeRandomProducts = (someProducts) => {
    // get three random products
    const randomProduct1 = getRandomProduct(someProducts);
    let randomProduct2 = getRandomProduct(someProducts);
    let randomProduct3 = getRandomProduct(someProducts);

    // generate new items for the second and third products if there are duplicates
    while (randomProduct1.id === randomProduct2.id 
        || randomProduct2.id === randomProduct3.id 
        || randomProduct3.id === randomProduct1.id
    ) {
        randomProduct2 = getRandomProduct(someProducts);
        randomProduct3 = getRandomProduct(someProducts);
    }

    // return array of three non-duplicated products
    return [randomProduct1, randomProduct2, randomProduct3];
};