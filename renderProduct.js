export default function renderProduct(product) {
    // Create input in the DOM
    const buttonElement = document.createElement('button');
    buttonElement.value = product.id;

    const image = document.createElement('img');
    image.src = './assets/' + product.image;

    buttonElement.appendChild(image);
    
    return buttonElement;
}