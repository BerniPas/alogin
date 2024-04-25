

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const URL_LOCAL = process.env.MONGO_LOCAL;
const URL_ATLAS = process.env.MONGO_ATLAS;

console.log('======================================');
console.log(URL_LOCAL);
console.log(URL_ATLAS);
console.log('======================================');

const conectarDB = mongoose.connect(URL_ATLAS)
    .then(
        () => {
            console.log(`Base de datos conectada correctamente a escualadanza y la URL es ${URL_ATLAS}`)
        },
        error => {
            console.log('Error al conectar a la base de datos', error)
        });

export default conectarDB;