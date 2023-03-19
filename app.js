var myName = 'Eric';
// States my name
var numStates = 50;
// Shows how many states there are in the US, which does not change
var sum = (5 + 4);
// Computes the result of adding 5 and 4, and stores it in a variable
function sayHello() {
    alert('Hello World!');
}
sayHello();
function checkAge(name, age) {
    if (age < 21) {
        alert('Sorry ' + name + ", you aren't old enough to view this page!");
    }
}
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);
var favVeggies = [
    'broccoli', 'tomato', 'carrot', 'zucchini', 'bok choy', 'green beans'
];
for (var i = 0; i < favVeggies.length; i++) {
    console.log(favVeggies[i]);
}
;
;
var pet = {
    name: 'Toby',
    breed: 'Domestic short-haired cat'
};
console.log(pet.name + ': ' + pet.breed);
;
var list = [
    {
        name: 'Sam',
        age: 22
    },
    {
        name: 'Greg',
        age: 40
    },
    {
        name: 'Shelly',
        age: 19
    },
    {
        name: 'Beth',
        age: 25
    },
    {
        name: 'Cooper',
        age: 20
    }
];
for (var i = 0; i < list.length; i++) {
    checkAge(list[i].name, list[i].age);
}
;
function getLength(word) {
    return word.length;
}
;
getLength('Hello World');
var wordLength = getLength('Hello World');
if (wordLength % 2 == 0) {
    console.log('The world is nice and even!');
}
else {
    console.log('The world is an odd place!');
}
;
