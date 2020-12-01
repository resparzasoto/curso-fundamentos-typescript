export {};

// Función para mostrar una fotografía
enum PhotoOrientation {
     Landscape,
     Portrait,
     Square,
     Panorama
}

interface Picture {
    title: string,
    date: string,
    orientation: PhotoOrientation
}

function showPicture(picture: Picture) {
    // console.log(
    //     `
    //     [
    //         title: ${picture.title},
    //         date: ${picture.date},
    //         orientation: ${picture.orientation}
    //     ]
    //     `
    // );
    console.log({ picture });
    
}


let myPic = {
    title: 'Test title',
    date: '2020-11-30',
    orientation: PhotoOrientation.Landscape
};

showPicture(myPic);
showPicture({
    title: 'Otro test title',
    date: '2020-11-30',
    orientation: PhotoOrientation.Square,
    // extra: 'test' // error
});

interface PictureConfig {
    title?: string,
    date?: string,
    orientation?: PhotoOrientation
}

function generatePicture(config: PictureConfig) {
    const pic = { title: 'Default', date: '2020-11-30' };
    
    if (config.title) {
        pic.title = config.title;
    }

    if (config.date) {
        pic.date = config.date;
    }

    return pic;
}

let picture = generatePicture({});
console.log('picture', picture);
picture = generatePicture({title: 'Travel pic'});
console.log('picture', picture);
picture = generatePicture({title: 'Travel pic', date: '2021-01-01'});
console.log('picture', picture);

// Interface: Usuario
interface User {
    readonly id: number;
    readonly username: string;
    isPro: boolean;
}

let user: User;
user = { id: 10, username: 'resparzasoto', isPro: true };
console.log('user', { user });
// user.username = 'otro user';
console.log('user', { user });
