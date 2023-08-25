// Declare UI Variables
const btn = document.querySelector('#menu-btn');   
const nav = document.querySelector('#menu');
// Mobile UI vars...
const product = document.querySelector('#product');
const company = document.querySelector('#company');
const connect = document.querySelector('#connect');
const productMenu = document.querySelector('#productMenu');
const companyMenu = document.querySelector('#companyMenu');
const connectMenu = document.querySelector('#connectMenu');

// Desktop UI Vars...
const productDesk = document.querySelector('#productDesk');
const productList = document.querySelector('#productList');
const span = document.querySelectorAll('#span');



// add event listener
btn.addEventListener('click', ()=> {
    btn.classList.toggle('open');
    nav.classList.toggle('hidden');
});

// Mobile Dropdowns

// product event listener
product.addEventListener('click', () => {
    product.classList.toggle('active');
    productMenu.classList.toggle('hidden');
});

// company event listener
company.addEventListener('click', () => {
    company.classList.toggle('active');
    companyMenu.classList.toggle('hidden'); 
});

// connect event listener
connect.addEventListener('click', () => {
    connect.classList.toggle('active');
    connectMenu.classList.toggle('hidden');
});

// Desktop Dropdowns

// product event listener
productDesk.addEventListener('click', () => {
    productDesk.classList.toggle('active');
    productList.classList.toggle('hidden'); 
});

// company event listener
companyDesk.addEventListener('click', () => {
    companyDesk.classList.toggle('active');
    companyList.classList.toggle('hidden'); 
});

// connect event listener
connectDesk.addEventListener('click', () => {
    connectDesk.classList.toggle('active');
    connectList.classList.toggle('hidden');
});