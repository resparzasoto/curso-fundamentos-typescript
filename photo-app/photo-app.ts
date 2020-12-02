export enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

abstract class Item {
    constructor(
        public readonly id: number,
        protected title: string
    ) {}
}

export class User {
    private album: Album[] = [];

    constructor(
        private id: number,
        private username: string,
        private firstName: string,
        private isPro: boolean
    ) {}

    addAlbum(album: Album) {
        this.album.push(album);
    }
}

export class Album extends Item {
    private pictures: Picture[] = [];

    constructor(
        id: number,
        title: string
    ) {
        super(id, title);
    }

    addPicture(picture: Picture) {
        this.pictures.push(picture);
    }
}

export class Picture extends Item {
    constructor(
        id: number,
        title: string,
        private _date: string,
        private _orientation: PhotoOrientation
    ) {
        super(id, title);
    }

    toString() {
        return `[   id: ${this.id}
                    title: ${this.title},
                    date: ${this._date},
                    orientation: ${this._orientation}
                ]`;
    }
}