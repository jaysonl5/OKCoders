

var pets = {
    type: "",
    name: "",
    weight: 0,
    age: 0
}

var customer = {

        name: "Jayson Lewis",
        email: "jayson.lewis5@gmail.com",
        address: "555 West Lake Blvd",
        city: "Oklahoma City",
        state: "OK",
        zip: 73142,
        pets: [
            {
                type: "dog",
                name: "bandit",
                weight: 65,
                age: 8
            }
        ]
    }


var user = document.getElementById('user');
var email = document.getElementById('email');
var address = document.getElementById('address');

var elementArr = [user, email, address];


for(const property in customer){
    for(var i = 0; i < elementArr.length; i++){
        elementArr[i].innerHTML = `${property}: ${customer[property]}`;
    }
}

// for (const property in customer) {
//     console.log(`${property}: ${customer[property]}`);
//     for(const property in pets){
//         console.log($)()
//     }
//   }

document.createElement('p');