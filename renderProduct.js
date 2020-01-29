export default function renderProduct(product) {
    // Create buttons in the DOM
    const labelElement = document.createElement('label');
    const inputElement = document.createElement('input');
    inputElement.type = 'radio';
    inputElement.value = product.id;
    console.log(product);

    const imageElement = document.createElement('img');
    imageElement.src = './assets/' + product.image;

    const pElement = document.createElement('p');
    pElement.textContent = product.name;

    // create a div, attach each button 
    inputElement.appendChild(imageElement);
    inputElement.appendChild(pElement);
    labelElement.appendChild(inputElement);

    return labelElement;
}