const { storageModel } = require("../models");
const PUBLIC_URL = process.env.PUBLIC_URL

/**
 * Obtener lista de la Base de Datos
 * @param {*} req 
 * @param {*} res 
 */

const getItems = async (req, res)=>{
    //const data = ["Hola", "mundo"];
    const data = await storageModel.find({});
    res.send({data});
};
/**
 * Obtener un Detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res)=>{};
/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res)=>{
    const { body, file } = req
    console.log(file)
    const fileData={
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData)
    res.send({data})
};
/**
 * Actualizar Registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res)=>{};
/**
 * Eliminar Registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res)=>{};

module.exports = {getItems, getItem, createItem, updateItem, deleteItem};