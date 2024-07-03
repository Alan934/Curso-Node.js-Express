const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){//con cb se ejecuta al finalizar
        const pathStorage = `${__dirname}/../storage`;
        cb(null, pathStorage);
    },
    filename: function(req, file, cb){
        //TODO: mi-cv.pdf mi-foto.png mi-video.mp4, se reemplaza el archivo si tiene el mismo nombre
        const ext = file.originalname.split('.').pop(); //TODO ["name", "png"], .pop agarra el ultimo
        const filename = `file-${Date.now()}.${ext}`; //devuelve numero aleatorio que cambia cada segundo 156415641
        cb(null, filename);
    },
});

const uploadMiddleware = multer({ storage });

module.exports = uploadMiddleware;