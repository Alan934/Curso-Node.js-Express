const mongoose = require('mongoose');

const TracksScheme = new mongoose.Schema({
    name: {
        type: String,
    },
    album: {
        type: String,
    },
    cover: {//objeto
        type: String,
        validate: (req)=>{
            return true;
        },
        message: "ERROR_URL",
    },
    artist: { //el artista es un tipo de dato compuesto por otros tipos de datos
        name: {
            type: String,
        },
        nickname: {
            type: String,
        },
        nacionality: {
            type: String,
        },
    },
    duration: {
        start:{
            type: Number,
        },
        end: {
            type: Number,
        },
    },
    mediaId: {
        type: mongoose.Types.ObjectId, //tipo de string que debe conformar un cierto patron de numeros de caracteres 
    },
},{
    timestamps: true, //TODO cratedAt, updateAt (Fecha de creacion y actualizacion)
    versionKey: false 
});

module.exports = mongoose.model('tracks', TracksScheme);//Exportar el nombre  de la coleccion "tabla en MySQL"