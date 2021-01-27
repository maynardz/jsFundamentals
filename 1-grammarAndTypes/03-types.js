/*
BOOLEANS
************
    - a boolean has two possible vaules of either true or false
*/

let on = true;
console.log(on);

let off = false;
console.log(off);

/*
NULL
************
    - null is an empty value. Think of it like an empty container: nothing is in it, but it still exists as a space to fill
*/

let empty = null;
console.log(empty);

/*
UNDEFINED
************
    - no value is assigned and does not act as an empty container
*/

let undef = undefined; // instead of assigning our undef variable a datatype of undefined, we can simply just declare the varaible.
console.log(undef); // undefined

let correct; // write like this instead
console.log(correct); // undefined

/*
NULL vs. UNDEFINED
************
    - Null is like a container with nothing in it
    - Undefined is when a variable has never been initialized, or hasnt been created yet.

    think of variables with null and undefined as packages coming out of UPS
    Null packages are packages that were intentionally packed up with nothing, but have been assembled
    Undefined packages are basically boxes that need to be assembled and given something to ship
*/

/*
NUMBERS
************
    - numbers are literally just numbers. In JS, you dont need anything special to write them.
*/

let degrees = 90;
console.log(degrees);

let precise = 999999999999999; // 15 9's
console.log(precise); // 999999999999999

let rounded = 9999999999999999; // 16 9's: JS gives you space for 15 9s before it rounds up
console.log(rounded); // 10000000000000000

let notQuite = 0.2 + 0.1;
console.log(notQuite); // 0.30000000000000004// JS rounds out at a certain number, so if math is needed, be aware

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10; // we can still do math with JS, though
console.log(numbersAreHard); // 0.3

// Quick Discussion :
let a = Number('123') // turns strings into numbers.
console.log(a);

/*
STRINGS
************
    - strings are Datatypes used to represent text and are wrapped in either single or double quotes
    - strings are Primative Datatype. This also includes Numbers, Booleans, Null, Undefined and others
*/

let stringOne = "double quotes";
let stringTwo = 'single quotes';

console.log(stringOne, stringTwo); // double quotes single quotes

// Numbers vs. Strings
let first = 1050 + 100;
let second = '1050' + '100';

console.log(first); // 1150
console.log(second); // 1050100

console.log(typeof first); // number
console.log(typeof second); // string

/*
OBJECTS
************
    - objects are used to store many values instead of a singular value
*/

let frodo = {
    race: 'hobbit',
    rings: 1,
    cloak: true,
}

console.log(frodo);
console.log(typeof frodo);

/*
ARRAYS
************
    Arrays are containers that hold lists of items

    let list =  [  'item1',   'item2',    'item3'];
                     (1)        (2)         (3)

    1- name of the Array, or list;
    2- The Array is inside of these square brackets
    3- each item, regardless of datatype, is separated by commas

    Denoted by []
*/

let burritos = ['large', 4, true];
console.log(burritos); // ['large', 4, true]

console.log(typeof burritos); // OBJECT

/*
    - when JS sees that we're trying to combine two or more numbers, it adds the values together using the built in math functionality
    - when JS sees us trying to add together one or more strings, instead of using the built in math functionality, it combines the two strings instead without synthesizing the values.
*/

let example = 1050 + '100'; // coersion. JS assumes that the user made a mistake and that we're trying to concatenate two strings, instead of trying to do math with the values.
console.log(example);
console.log(typeof example);

/*
    Challenge:
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode

    Set each variable to its respective type.

    console.log your whole address (with a space between variables).
*/

let firstName = 'Zach';
let lastName = 'Maynard';
let houseNumber = 4600;
let street = 'Sunset Ave';
let city = 'Indianapolis';
let state = 'IN';
let zipcode = 46208;

console.log(firstName, lastName + ',', houseNumber, street + ',', city + ',', state, zipcode); // string concatenation
console.log(`${firstName} ${lastName}, ${houseNumber} ${street}, ${city}, ${state} ${zipcode}`); // string interpolation
console.log(`Hello, my name is ${firstName}`);

/*
    String Properties
    - properties are qualities that are associated with a datatype
*/

let myName = 'Zach';
console.log(myName.length); // 4

/*
    String Methods
    - methods are tools that help us manipulate the data
        - .properties / .methods()
            *no parentheses for properties*
*/

let myNameIs = 'Zach';
console.log(myNameIs.toUpperCase()); // method  that changes a string to uppercase

let hometown = 'my hometown is greenwood';
console.log(hometown.includes('Greenwood')); // method that checks if a certain string is included in another string. Case sensitive

// Challenge: Use google, find MDN documentation or W3Schools docs for Strings, research and use the split method to get an array back from this string

let sent = 'This sentence will be split into individual parts';
console.log(sent.split(" ", 7));