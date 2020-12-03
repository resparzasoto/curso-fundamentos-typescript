// import { Album, PhotoOrientation, Picture, User } from "./photo-app";

import { Album } from "./src/album";
import { PhotoOrientation } from "./src/photo-orientation";
import { Picture } from "./src/picture";
import { User } from "./src/user";

const user = new User(1, 'resparzasoto',  'rubén', true);
const album = new Album(1, 'example album');
const picture = new Picture(1, 'TypeScript course', '2020-12-1', PhotoOrientation.Landscape);
// Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);

console.log('user', user);

// Borramos album
user.removeAlbum(album);
console.log('user', user);
