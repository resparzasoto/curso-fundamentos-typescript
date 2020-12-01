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
