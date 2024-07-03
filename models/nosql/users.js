const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({
    name: {
        type: String,
    },
    age:{
        type: Number,
    },
    email:{
        type: String,
        unique:true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type:["user", "admin"],
        default: "user"
    },
},{
    timestamps: true, //TODO cratedAt, updateAt (Fecha de creacion y actualizacion)
    versionKey: false 
});

module.exports = mongoose.model('user', UserScheme);//Exportar el nombre  de la coleccion "tabla en MySQL"