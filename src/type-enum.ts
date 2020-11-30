// Type: Enum

// Orientación para fotografiás
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

enum PhotoOrientation {
    Landscape = 0, // 0
    Portrait = 1, // 1
    Square, // 2
    Panorama // 3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('landscape', landscape);
console.log('landscape', PhotoOrientation[landscape]); // by index

enum PictureOrientation {
    Landscape = 10,
    Portrait, //11
    Square, //12
    Panorama //13
}

console.log('portrait', PictureOrientation.Portrait);

enum Country {
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex',
    EUA = 'usa',
    Espana = 'esp'
}

const country: Country = Country.Colombia;
console.log('country', country);
