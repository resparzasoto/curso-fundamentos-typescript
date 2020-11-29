// Tipo: Void

// Tipo explícito
function showInfo(user: any): any {
    console.log('user', user.id, user.username, user.firstName);
    // return 'hola';
}

showInfo({ id: 1, username: 'resparzasoto', firstName: 'Jesús' });

//Tipo implícito
function showFormattedIndo(user:any) {
    console.log(
        'user',
        `
            id: ${user.id},
            username: ${user.username},
            firstName: ${user.firstName}
        `
    );
}

showFormattedIndo({ id: 1, username: 'resparzasoto', firstName: 'Jesús' });

// tipo void, como tipo de dato en una variable
let unusable: void;
// unusable = null; // error en modo strict
unusable = undefined;