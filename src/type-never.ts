// Tipo: Never
function handleError(code: number, message: string): never {
    // Process your code here
    // Generate a message
    throw new Error(`${message}. Code: ${code}`);
}

try {
    handleError(404, 'Not Found');
} catch (error) {
}

function sumNumbers(limit: number): never {
    let sum = 0;
    while (true) {
        sum++;
    }
    // return sum;
}

sumNumbers(10);
// Ciclo infinito, programa que nunca va a terminar