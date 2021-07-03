var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var addressInput = document.getElementById('address');
var addPetButton = document.getElementById('addPetBtn');
var submit = document.getElementById('submit');

var name = "";
var email = "";
var address = "";
var pet = "";

nameInput.addEventListener('input', (e) => {
    name = e.target.value;
})

emailInput.addEventListener('input', (e) => {
    email = e.target.value;
})

addressInput.addEventListener('input', (e) => {
    address = e.target.value;
})

addPetButton.addEventListener('click', (e) => {
    pet = "Dog";
})

submit.addEventListener('click', (e) => {
    console.log(name, email, address, pet);
})

