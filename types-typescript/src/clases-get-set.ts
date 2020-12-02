export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

// Modificadores de acceso
// get y set

class Picture {
    // Properties
    private _id: number;
    private _title: string;
    private _orientation: PhotoOrientation;

    public constructor(
        id: number,
        title: string,
        orientation: PhotoOrientation
    ) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get title(): string {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    get orientation(): PhotoOrientation {
        return this._orientation;
    }

    set orientation(orientation: PhotoOrientation) {
        this._orientation = orientation;
    }

    //Comportamiento
    public toString() {
        return `[id: ${this._id},
                title: ${this._title},
                orientation: ${this._orientation}]`;
    }
}

class Album {
    private _id: number;
    private _title: string;
    private _pictures: Picture[] = [];

    public constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
    }

    
    get id() : number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    
    get title() : string {
        return this._title;
    }

    set title(title : string) {
        this._title = title;
    }

    get pictures(): Picture[] {
        return this._pictures;
    }

    set pictures(pictures: Picture[]) {
        this._pictures = pictures;
    }

    public addPicture(picture: Picture) {
        this._pictures.push(picture);
    }
}

const album: Album = new Album(1, 'personal pictures');
const picture: Picture = new Picture(1, 'mi picture', PhotoOrientation.Square);
album.addPicture(picture);

console.log('album',  album);

// Accediendo a los miembros públicos de nuestras clases
console.log('picture.id', picture.id);

picture.id = 100; // private, set id(100);s
picture.title = 'another title'; // private
album.title = 'personal activities'; // private
console.log('album', album);
