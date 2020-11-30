export {};

// <Type> Angle brackets syntax
let usernameAngleBrackets: any;
usernameAngleBrackets = 'resparzasoto';
usernameAngleBrackets = 'rube';

// tenemos una cadena, TS confia en mí!
let messageAngleBrackets: string = (<string>usernameAngleBrackets).length > 5 ?
    `Welcome ${usernameAngleBrackets}` :
    'Username is too short!';
console.log('messageAngleBrackets', messageAngleBrackets);

let usernameWithIdAngleBrackets: any = 'resparzasoto 1';
// Cómo obtener el usernameAngleBrackets?
usernameAngleBrackets = (<string>usernameWithIdAngleBrackets).split(' ')[0];
console.log(usernameAngleBrackets);

// Sintaxis as
let username: any;
username = 'resparzasoto';
username = 'rube';

// tenemos una cadena, TS confia en mí!
let message: string = (username as string).length > 5 ?
    `Welcome ${username}` :
    'Username is too short!';
console.log('message', message);

let usernameWithId: any = 'resparzasoto 1';
// Cómo obtener el username?
username = (usernameWithId as string).split(' ')[0];
console.log(username);
