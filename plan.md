**Plan**

Render productData from store.js
// Plug that data into ProductArray
// Import ProductArray from ProductArray.js

**Variables:** 
Get DOM:
* productImageTags
* productImageButton
<!-- * productName -->
  
Other variables:
* products: new ProductArray taking in productData

Tracking state:
* remainingProducts
* numTimesDisplayed
* numTimesSelected


**Initial State:**
* let remainingProducts = 25;
* let numTimesDisplayed;
* let numTimesSelected;


**Event:**
Update state: remainingProducts--;

generateRandomNumber()

For each button...
  * Update state: numTimesDisplayed
  * removeProductsById(product.value)
  * add event listener and... 
    * If item is selected, update state:
      * numTimesSelected

If there are no products remaining, display results; else, initializeNewProductButtons.


**Functions**

Randomize indices:
generateRandomProducts()
* Generate random number between 0 and 3
* Assign to index
* Ensure that there are no duplicates
  * Create first item; compare second to first item; compare third to first and to second

renderProducts()
* Create an input element in the DOM
* Append to it with id and image

getProductById();

compareProductsIdsToRadioTags();

removeProductById();

initializeNewProductButtons();

calculateClickPercentage();

displayResults();


How do I remove items for just two rounds? Push them to the end of an array and then generate random product using only the first 14 items?
Or should I be slicing and splicing?