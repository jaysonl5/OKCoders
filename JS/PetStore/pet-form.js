var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var addressInput = document.getElementById('address');
var addPetButton = document.getElementById('addPetBtn');
var submit = document.getElementById('submit');
var petInputContainer = document.getElementById('pet-inputs')

var customer = {
    name: "",
    email: "",
    address: "",
    dogs: [
        {
            name: "", age: 0, weight: 0
        }
    ]
}



function inputHandler(event, propertyToUpdate){
    customer[propertyToUpdate] = event.target.value

}

nameInput.addEventListener('input', e => inputHandler(e, 'name'));
emailInput.addEventListener('input', e => inputHandler(e, 'email'));
addressInput.addEventListener('input', e =>  inputHandler(e, 'address'));

function submitHandler(){
    console.log(customer);
}

submit.addEventListener('click', submitHandler);


addPetButton.addEventListener('click', (e) => {
    
    var currentDogPosition = customer.dogs.length;
    customer.dogs.push("");

    var div = document.createElement('div');
    var label = document.createElement('label');
    var dogInput = document.createElement('input');
    var removePetButton = document.createElement('button');
    removePetButton.innerText = "Remove Pet";

    label.innerText = (currentDogPosition + 1) + 
                      setNumberAccent(currentDogPosition+1) + " Dog Name: "

    removePetButton.id = currentDogPosition+1;

    dogInput.addEventListener('input', (event) => {
        customer.dogs[currentDogPosition] = event.target.value;
    })
    dogInput.type="text";

    removePetButton.addEventListener('click', (e) => {
        console.log("THIS BUTTON: " + e.target.id)
        div.parentNode.removeChild(div);
    })
    
    div.appendChild(label);
    div.appendChild(dogInput);
    div.appendChild(removePetButton);
    petInputContainer.appendChild(div);

})


function setNumberAccent(num){
    if(num == 1){
        return "st";
    } else if(num == 2){
        return "nd";
    } else if(num == 3){
        return "rd";
    } else{
        return "th";
    }
}



