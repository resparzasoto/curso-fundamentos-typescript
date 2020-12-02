export {}; // debido a que TypeScript nos está indicando como error la re-utilización del nombre de una variable

// [1, 'username']
let user: [number, string];
user = [1, 'resparzasoto'];

console.log('user', user);
console.log('username', user[1]);
console.log('username.length', user[1].length);
console.log('id', user[0]);

// Tuplas con varios valores
// id, username, isPro
let userInfo: [number, string, boolean];
userInfo = [2, 'resparzasoto', true];
console.log('userInfo', userInfo);

// Arreglo de tuplas
let arrayOfTuples: [number, string][] = [];
arrayOfTuples.push([1, 'firstUsername']);
arrayOfTuples.push([2, 'secondUsername']);
arrayOfTuples.push([3, 'thirdUsername']);
console.log('arrayOfTuples', arrayOfTuples);

// Uso de funciones Array
arrayOfTuples[2][1] = arrayOfTuples[2][1].concat('001');
console.log('arrayOfTuples', arrayOfTuples);

