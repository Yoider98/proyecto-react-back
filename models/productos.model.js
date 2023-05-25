const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductoSchema = new Schema({
    id_producto: {type: String, required: true, max:60},
    nombre: {type: String, required: true, max:60},
    descripcion: {type: String, required: true, max:160},
    precio: {type: Number, required: true},
    imagen: {type: String, required: true, max:560},
})
module.exports = mongoose.model("productos", ProductoSchema);