const mongoose = require('mongoose');

const StorageScheme = new mongoose.Schema({
    url: {
        type: String,
    },
    filename:{
        type: String,
    },
},{
    timestamps: true, //TODO cratedAt, updateAt (Fecha de creacion y actualizacion)
    versionKey: false 
});

module.exports = mongoose.model('storage', StorageScheme);//Exportar el nombre  de la coleccion "tabla en MySQL"