/*class Product{
    constructor(_name, _price, _year){
        this.name = _name;
        this.price = _price;
        this.year = _year;
    }
}

class UI{//User Interface
    addProduct(product){
        const productList = document.getElementById('product-list')
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product Name</strong>: ${product.name}
                    <strong>Product Price</strong>: ${product.price}
                    <strong>Product Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
        //this.resertForm();
    }
    
    deleteProduct(element){
        if(element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove();//para ver el elemento padre del boton eliminar
            this.showMessage('Product Deleted Sucessfully','info');
        }
    }

    showMessage(message,cssClass){
        console.log(message);
        console.log(cssClass);
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        //showing in DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div,app);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000);//function do execute the function of parameter after of the time in milisegundos 
    }

    resertForm(){
        document.getElementById('product-form').reset();
    }
}

//DOM (Document Object Model) events

document.getElementById('product-form').addEventListener('submit',function(e){//el parametro e es de event
    //alert('Enviando Formulario');
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;
    const product = new Product(name,price,year);
    const ui = new UI();
    if( name === '' || price === '' || year === ''){
        return ui.showMessage("Complete Fields Please","danger");
    }
    ui.addProduct(product);
    ui.resertForm();
    ui.showMessage('Product Added Sucessfully','sucess');
    e.preventDefault();
});

document.getElementById('product-list').addEventListener('click',function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);
});*/
class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

// UI Constructor
class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong>: ${product.name} -
                    <strong>Price</strong>: ${product.price} - 
                    <strong>Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
    }

    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.remove();
            this.showMessage('Product Deleted Succsssfully', 'success');
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        // Show in The DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        // Insert Message in the UI
        container.insertBefore(div, app);
        // Remove the Message after 3 seconds
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

// DOM Events
document.getElementById('product-form')
    .addEventListener('submit', function (e) {

        const name = document.getElementById('name').value,
            price = document.getElementById('price').value,
            year = document.getElementById('year').value;

        // Create a new Oject Product
        const product = new Product(name, price, year);

        // Create a new UI
        const ui = new UI();

        // Input User Validation
        if (name === '' || price === '' || year === '') {
            ui.showMessage('Please Insert data in all fields', 'danger');
        }

        // Save Product
        ui.addProduct(product);
        ui.showMessage('Product Added Successfully', 'success');
        ui.resetForm();

        e.preventDefault();
    });

document.getElementById('product-list')
    .addEventListener('click', function (e) {
        const ui = new UI();
        ui.deleteProduct(e.target);
        e.preventDefault();
    });