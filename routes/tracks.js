const express = require('express');
const router = express.Router();//manejador de rutas de express
const customHeader = require('../middleware/customHeader');
const { validatorCreateItem, validatorGetItem } = require('../validators/tracks');
const { getItems, getItem, createItem, updateItem } = require('../controllers/tracks');

//TODO https://localhost/tracs GET, POST, DELETE, PUT

router.get("/", getItems);
router.get("/:id", validatorGetItem, getItem);
router.post("/", validatorCreateItem, createItem);
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);


module.exports = router //Colocarlo siempre al principio para no olvidarse