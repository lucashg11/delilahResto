const jwt = require('jsonwebtoken')
const config = require('../config')
const db = require('../models/index')
const bcrypt = require('bcrypt')
const {salt} = require('../config')

const usuariosController = {
    createUsuarios: async (req, res) =>{
        const claveSinEncriptar = req.body.clave;
        const claveEncriptada = await bcrypt.hash(claveSinEncriptar, parseInt(config.salt));
        const usuario = db.usuarios.build({
            nombre: req.body.nombre, apellido:req.body.apellido, usuario: req.body.usuario, correoElectronico: req.body.correoElectronico,
            telefono: req.body.telefono, direccionDeEnvio: req.body.direccionDeEnvio, clave: claveEncriptada, isAdmin: req.body.isAdmin
        })
        if (!usuario.validate()){
                res.status(400).json();
            }
            if(!validateCorreoElectronico (usuario.correoElectronico)){
            res.status(400).json({
                isSucces: false,
                error:'El correo Electronico ya existe'
            })
        }
        try {
            await usuario.save()
            res.status(201).json();
        }
        catch (error) {
            res.status(500).json({
                isSucces: false,
                error: error
            })
        }
    },
    authenticate: async (req, res) => {
        const {usuario, clave} = req.body
        if (usuario == null || clave == null) {
            res.status(400).json({
                isSucces: false,
                error: 'usuario y clave son requeridos'
            })
            return
        }
        const usuarioDb = await db.usuarios.findOne({
            where: {
                usuario: usuario,
            }
        })
        if (usuarioDb == null) {
            res.status(404).json({
                isSucces: false,
                error: 'usuario no encontrado.'
            })
            return
        }

        const isValid = await validateUsernameAndPassword (usuarioDb, clave);
        if (!isValid) {
            res.status(401).json({
                isSucces: false,
                error: 'Usuario y/o clave incorrectos',
            })
            return
        }
        const token = jwt.sign ({id: usuarioDb.id, usuario: usuarioDb.usuario, isAdmin: usuarioDb.isAdmin }, config.jwtSecret);
            res.json(token);
    },
    
    getUsuarios: async (req, res) => {
        let usuarios = await db.usuarios.findAll()
        if (usuarios.length > 0)
            res.json(usuarios)
        else
            res.status(204).json()
    }
}


async function validateCorreoElectronico (email) {
    const result = await db.usuarios.findAll({
        where: {
            correoElectronico: email,
        }
    })
    if (result.length > 0)
        return false
    return true;
}
async function validateUsernameAndPassword (usuario, clave) {
    const compareResult = await bcrypt.compare(clave, usuario.clave)
    if (!compareResult){
        return false;
    }
    return true;
}

module.exports = usuariosController