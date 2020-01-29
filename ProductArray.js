// export ProductArray class
export class ProductArray {
    // pass products in as argument for constructor; remove item from and create new products array
    constructor(products) {
        this.products = products.slice();
    }

    // get new products by their id from the array
    getProductsById(someItems, someId) {
        let productMatch;

        this.products.forEach(product => {
            // compare id from array with every product id
            if (someId === product.id) {
                productMatch = product;
            }
        });
        return productMatch;
    }


    // get random products
    getRandomProduct() {
        const randomProductIndex = Math.floor(Math.random() * this.products.length);

        return this.products[randomProductIndex];
    }

}


    // remove product from array?