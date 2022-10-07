const addItem = () => {
    const nameField = document.getElementById('product-name');
    const name = nameField.value;
    displayProducts(name);
    

    addItem1.value = '';
};
const displayProducts = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerHTML = product,name;
    ul.appendChild(li)    
};
// console.log('Hello World')


  