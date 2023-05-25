const Producto = require('../models/productos.model');
let response = { 
    msg: "",
    exito: false
}

exports.create = function(req, res) {
    let producto = new Producto({
       id_producto: req.body.id_producto,
       nombre: req.body.nombre,
       descripcion: req.body.descripcion,
       precio: req.body.precio,
       imagen: req.body.imagen
    })

    producto.save(function(err){
        if (err) {
            console.error(err),
            response.exito = false,
            response.msg = "Error al guardar el producto"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "el producto se guardo correctamente"
        res.json(response)
    })
}

exports.find = function(req, res){
    Producto.find(function(err, producto){
        res.json(producto)
    })
}

exports.findOne = function(req, res){
    Producto.findOne({_id: req.params.id}, function (err,producto){
        res.json(producto)
    })
}

exports.update = function(req, res){
    let producto = ({
        id_producto: req.body.id_producto,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        imagen: req.body.imagen
    })
    Producto.findByIdAndUpdate(req.params.id,{$set:producto},function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al modificar producto"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "El producto se actualizo correctamente."
        res.json(response)
    })
}

exports.remove = function(req,res){
    Producto.findByIdAndRemove({_id: req.params.id},function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al producto un empleado"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "El producto se elimino correctamente."
        res.json(response)
    })
}