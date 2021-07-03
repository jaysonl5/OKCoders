var pet = document.getElementById('petButton');
pet.addEventListener('click', (e) => {
    console.log(e.target.value);
})