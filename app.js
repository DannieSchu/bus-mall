// import { ProductArray } from './ProductArray.js';
import { productDataArray } from './store.js';
import { generateThreeRandomProducts } from './generateThreeRandomProducts.js';
import renderProduct from './renderProduct.js';
import findById from './findById.js';

// make copy of data
const productData = productDataArray.slice();

// keep track of total votes
let allProductsVotes;

// keep track of votes for a given product
let selectedProductVotes;

// set votes array and total votes to initial states
const initializeState = () => {
    allProductsVotes = 0;
    selectedProductVotes = [];
};

initializeState();


// display three random products
const displayThreeProducts = () => {
    // generate three random products
    const randomProducts = generateThreeRandomProducts(productData);
    // get three random products
    randomProducts.forEach(randomProduct => renderProduct());
};

displayThreeProducts();




// get current data of button

// Add event listener to each button to select one of the three products

  // When user selects, update total votes

  // see if the user has selected the clicked item before

  // if something exists in this array, then increment votes for that product


