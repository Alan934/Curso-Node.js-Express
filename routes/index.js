const express = require('express');
const fs = require('fs'); //filesystem 
const router = express.Router();//manejador de rutas de express

const PATH_ROUTES = __dirname;

const removeExtension = (fileName)=>{
    return fileName.split(".").shift()
}

fs.readdirSync(PATH_ROUTES).filter((file)=>{
    const name = removeExtension(file);//TODO users, storage, tracks
    if(name !== 'index'){//omitir archivo index
        console.log(`Cargando ruta ${name}`)
        router.use(`/${name}`, require(`./${file}`)) //TODO https://localhost:3000/api/(users, tracks, storage)
    }

});

module.exports = router