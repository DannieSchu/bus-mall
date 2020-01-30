export default function renderProduct(product) {
    // Render elements in the DOM
    const labelElement = document.createElement('label');
    const inputElement = document.createElement('input');
    inputElement.type = 'radio';
    inputElement.value = product.id;
    inputElement.name = 'product';
    inputElement.checked = false;

    const imageElement = document.createElement('img');
    imageElement.src = './assets/' + product.image;

    const pElement = document.createElement('p');
    pElement.textContent = product.name;

   
    labelElement.append(imageElement, pElement, inputElement);

    return labelElement;
}