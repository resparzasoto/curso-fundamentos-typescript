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


// Tipo de retorno con TypeScript
function handleError(code: number, message: string): string | never {
    if (message === 'error') {
        throw new Error(`message: ${message}. Code: ${code}`);
    } else {
        return 'An error has ocurre';
    }
}

try {
    console.log('handleError', handleError(400, 'one simple error')); // string
    console.log('handleError', handleError(404, 'error')); // never
} catch (error) {
    console.error(error);
}

// Utilizando funciones como parámetros
function utilizandoFuncionComoParametro(cb:(code: number, message: string) => string | never): () => string {
    return () => 'Hola Mundo';
}

console.log(utilizandoFuncionComoParametro(() => 'un string')());
