
import mongoose from "mongoose";
import { Schema } from "mongoose";

//esta es la estructura de un documento en la colección de usuarios
//máximo es de 16 megas
const usuarioSchema = new Schema({
    nombre:{
        type: String, //varchar(50)
        required: true //not null
    },
    email:{
        type: String,
        required: true,
        unique: true //no puede existir otro usuario con el mismo email
    },
    password:{
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: new Date()
    }
});

export default mongoose.model('Usuario', usuarioSchema); //exportar el modelo de usuario

