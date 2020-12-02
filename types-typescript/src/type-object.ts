// Type: object
let user: object;
user = {}; //Object

user = {
    id: 1,
    username: 'resparzasoto',
    firsName: 'Jesús',
    isPro: true
};

console.log('user', user);
// console.log('user.username', user.username); // error, el tipo object de TS no es igual al tipo Object de JavaScript

// Object vs object
const myObj = {
    id: 1,
    username: 'resparzasoto',
    firstName: 'Rubén',
    isPro: true
};

const isInstance = myObj instanceof Object; // clase Object de JavaScript
console.log('isInstance', isInstance);
console.log('user.username', myObj.username);
