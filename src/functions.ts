// Crear una fotografiá
// function createPicture(title, date, size) {
//     // logic
// }

type SquareSize = '100x100' | '500x500' | '1000x1000';

// Usamos TS, definimos tipos para parámetros
function createPicture(title?: string, date?: string, size?: SquareSize) {
    // se crea la foto
    console.log('create picture using', title, date, size);
}

createPicture('My birthday', '2020-11-30', '500x500');
createPicture('Colombia trip', '2020-11-30');
createPicture('Colombia trip');
createPicture();

// Fat array function
let createPic = (title: string, date: string, size: SquareSize): object => {
    return { title, date, size };
};

console.log('createPic', createPic('Platzi session', '2020-11-30', '100x100');

// Función con parámetros opcionales
function createOptionalPicture(title: string = 'Optional title', date: string = '2020-11-30', size: SquareSize = '100x100'): object {
    return { title, date, size };
}

console.log('createOptionalPicture', createOptionalPicture());
