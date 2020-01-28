import { ProductArray } from './ProductArray.js';
import { productData } from './store.js';
import generateThreeRandomProducts from './generateThreeRandomProducts.js';
import renderProduct from './renderProduct.js';

// const optionButtons = document.querySelectorAll('button');
// const productImageTags = document.querySelectorAll('input');

// pass treeData into new ProductArray class and store as "products"
const products = new ProductArray(productData);

generateThreeRandomProducts(products);


const initializeNewProductButtons = () => {
// get three random products
    generateThreeRandomProducts(products);
    renderProduct(randomProduct);
};

initializeNewProductButtons();