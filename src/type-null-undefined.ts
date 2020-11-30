// Explícita
let nullVariable: null;
nullVariable = null;
// nullVariable = 1; // error

// Implícito
let otherVariable = null;
otherVariable = 'test';

console.log('nullVariable', nullVariable);
console.log('otherVariable', otherVariable);

// Undefined
let undefinedVariable: undefined = undefined;
// undefinedVariable = 'test'; // error

let otherUndefined = undefined;
otherUndefined = 1;

console.log('undefinedVariable', undefinedVariable);
console.log('otherUndefined', otherUndefined);

// Null y Undefined: Como subtipos

// --strictNullChecks
let albumName: string;
// albumName = null;
// albumName = undefined;
