const express = require('express');
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const {createItem } = require("../controllers/storage");
//TODO http://localhost:3001/api/storage

router.post("/", uploadMiddleware.single('myfile'), createItem);//con .single solo acepta un archivo, con .multiple acepta multiples archivos

module.exports = router; //Acordate de colocar el exports