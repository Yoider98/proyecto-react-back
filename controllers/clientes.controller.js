const Cliente = require('../models/clientes.model');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

exports.login = function (req, res, next) { 
    let hashedpass = crypto.createHash("sha512").update(req.body.pass).digest("hex");
    console.log(hashedpass);

    Cliente.findOne({ usuario: req.body.usuario, pass: hashedpass }, function (err,cliente){
        let response = {
            token:null
            
        }
        if(cliente !== null){
            
            response.token = jwt.sign({
                id: cliente._id,
                usuario: cliente.usuario,
               
            },"_recret_",
            {expiresIn: '12h'},
            )
        }
        res.json(response);
    })

}
