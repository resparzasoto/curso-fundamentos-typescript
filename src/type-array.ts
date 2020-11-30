// Corchetes []

//  Tipo explícito
let users: string[];
users = [ 'primerUsername', 'segundoUsername', 'tercerUsername' ];
// users = [ 1, true, 'test' ]; // error

// Tipo Implícito
let otherUsers = [ 'primerUsername', 'segundoUsername', 'tercerUsername' ];
// otherUsers = [ 1, true, 'test' ]; // error 

// Array<Type> -> usando genéricos
let pictureTitles: Array<string>; 
pictureTitles = [ 'primerTitle', 'segundoTitle', 'tercerTitle' ];

// Accediendo a los valores en un Array
console.log('firstUser', users[0]);
console.log('firstTitle', pictureTitles[0]);

// Propiedades en Array
console.log('users.length', users.length);

// Uso de funciones en Arrays
users.push('usuarioInsertado');
users.sort();
console.log('users', users);
