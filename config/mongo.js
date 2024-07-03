const mongoose = require('mongoose');

const dbConnect = async ()=>{
    try {
        await mongoose.connect(process.env.DB_URI/*,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }*/);
        console.log('Conectado a la base de datos');
    } catch (error) {
        console.log("Error al conectar con la base de datos",error);
        process.exit(1);
    }
};

module.exports = dbConnect