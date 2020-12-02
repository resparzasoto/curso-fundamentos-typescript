console.log('Hola TypeScript con Platzi');


// Tipo: Number
// Explícito
let phone: number;
phone = 1;
phone = 554612398;
// phone = 'hola'; // error

// Inferido
let phoneNumber = 554612398;
phoneNumber = 123;
// phoneNumber = true; // error por tipo

let hex: number = 0xf00d;
let binary: number = 0b1110;
let octal: 0o744;

// Tipo: Boolean
// Tipado Explícito
let isPro: boolean;
isPro = true;
// isPro = 1; // error por tipo

// Inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 10; // error por tipo

// Tipo: String
let username: string = 'Rubén Esparza';
username = "Jesús Esparza";
// username = true; // error por tipo

// Template String
// Uso de back-tick `
let userInfo: string;
userInfo =  `
    User info:
    username: ${username}
    firstName: ${username + 'Esparza'}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log('userInfo', userInfo);
