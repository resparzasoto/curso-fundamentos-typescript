// import { Album, PhotoOrientation, Picture, User } from "./photo-app";

import { Album } from "./album";
import { PhotoOrientation } from "./photo-orientation";
import { Picture } from "./picture";
import { User } from "./user";

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
