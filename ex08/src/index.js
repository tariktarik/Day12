var contacts = [
    {
        "firstName": "John",
        "lastName": "Doe",
        "number": "1236549528",
        "likes": ["C", "C++", "C#"]
    },
    {
        "firstName": "Jane",
        "lastName": "Doe",
        "number": "4568295761",
        "likes": ["Python", "Swift", "R"]
    },
    {
        "firstName": "Richard",
        "lastName": "Roe",
        "number": "6938257149",
        "likes": ["React", "Angular", "Vue"]
    },
    {
        "firstName": "Jane",
        "lastName": "Roe",
        "number": "unknown",
        "likes": ["JavaScript", "Node", "HTML & CSS"]
    }
];

function lookUpProfile(name, prop) {
    // Only change code below this line
    for (var i = 0; i < contacts.length; i++) {
        if (name === contacts[i].firstName && contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop];
        }
    }
    for (var i = 0; i < contacts.length; i++) {
        if (name === contacts[i].firstName && !contacts[i].hasOwnProperty(prop)) {
            return "No such property";
        }
    }
    for (var i = 0; i < contacts.length; i++) {
        if (name !== contacts[i].firstName) {
            return "No such contact";
        }
    }
    // Only change code above this line
}

console.log(lookUpProfile("John", "likes")); //Change this line
console.log(lookUpProfile("Jane", "lastName")); //Change this line
console.log(lookUpProfile("Richard", "likes")); //Change this line
console.log(lookUpProfile("Rob", "number")); //Change this line
console.log(lookUpProfile("Rob", "JavaScript")); //Change this line
console.log(lookUpProfile("John", "address")); //Change this line
module.exports = lookUpProfile;