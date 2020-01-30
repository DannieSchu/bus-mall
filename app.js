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


// get current data of button
const form = document.querySelector('form');


// display three random products
const displayThreeProducts = () => {
    // generate three random products
    const randomlyGeneratedProducts = generateThreeRandomProducts(productData);

    // get three random products
    randomlyGeneratedProducts.forEach(item => {
        const labelElement = renderProduct(item);
        form.appendChild(labelElement);
    
    });
    // generate button
    const button = document.createElement('button');
    button.textContent = 'Vote!';
    form.appendChild(button);
};

displayThreeProducts();



// Add event listener to button
form.addEventListener('submit', (e) => {
    // prevent default behavior (form reset)
    e.preventDefault();

    // get form data
    const formData = new FormData(form);

    // get data for generated product
    const selectedProductId = formData.get('product');
    
    // When user selects, update total votes
    allProductsVotes++;
    
    // if the user has selected an item before, increase votes
    const productsInVotesArray = findById(selectedProductVotes, selectedProductId);

    // if something exists in this array, then increment votes for that product; if it's empty, push an item
    if (productsInVotesArray) {
        productsInVotesArray.votes++;
    } else {
        selectedProductVotes.push({
            id: selectedProductId,
            votes: 1,
        });
    }

    localStorage.setItem('votes', JSON.stringify(selectedProductVotes));
    

    if (allProductsVotes === 10) {
        window.location = './results/index.html';
    } else {
        // display three new products
        while (form.firstChild) {
            form.removeChild(form.firstChild);
        }

        displayThreeProducts();
    }
});


export { initializeState };