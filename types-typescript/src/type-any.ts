// Tipo explícito
let idUser: any;
idUser = 1; // number
idUser = '1'; // string
console.log('idUser', idUser);

// Tipo implícito
let otherId;
otherId = 1;
otherId = '1';
// otherId = true;
console.log('otherId', otherId);
// surprise.sayHello(); // error
let surprise: any = 'hello typescript';
const result = surprise.substring(6); // esto es susceptible a error en tiempo de ejecución
console.log('result', result);
