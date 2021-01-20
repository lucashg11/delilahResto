const { pedidos } = require('../models/index');
const db = require('../models/index');

const pedidosController = {
    //Create action
    createPedidos: async (req, res) => {
        if (req.body.estado == null ||  req.body.total == null || req.body.formaDePago == null || req.body.direccion == null || req.body.productos == null){
            res.status(400).json({
                isSucces: false,
                error: "Error para armar el pedido por falta de datos requeridos"
            });
            return
        }
        try {
            let pedido = await db.pedidos.create({
                estado: req.body.estado, 
                total: req.body.total, 
                formaDePago: req.body.formaDePago,
                direccion: req.body.direccion,
                usuarioId: req.user.id
            })
            req.body.productos.forEach(async element => {
                   let producto = await db.productos.findOne({
                       where: {
                           id: element.id
                       }
                    })
                   await pedido.setProductos(producto)
            })
            res.status(201).json();  
            return
        }
        catch(error){
            res.status(500).json({
                isSucces: false,
                error: error
            })
            return
        }
    },
    //Get action
    getPedidos: async (req, res) => {
        let pedidos = await db.pedidos.findAll({include:[{model: db.usuarios, attributes: ['nombre', 'apellido', 'usuario', 'correoElectronico', 'telefono']}, {model:db.productos}], attributes: {exclude: ['usuarioId']}})
        if (pedidos.length > 0) 
            res.json(pedidos)
        else 
            res.status(204).json()        
    },
    //Get by id action
    getPedidoById: async (req, res) => {
        let pedido = await db.pedidos.findOne({
            where:{
                id: req.params.id
            },
            include: db.productos
        })
        if (pedido !== null)
            res.json(pedido)
        else 
            res.status(404).json()
    },
    //Update action
    updatePedidos: async (req, res) => {
        let pedido = await db.pedidos.findOne({
            where: {
                id: req.params.id
            }
        })
        if (pedido == null) {
            res.status(400).json({
                isSuccess: false,
                error: "Pedido inexistente"
            });
            return
        }
        try {
            await pedido.update({
                estado: req.body.estado,
                total: req.body.total,
                formaDePago: req.body.formaDePago,
                direccion: req.body.direccion
            })
            var productos = req.body.productos.map(element => {
                return parseInt(element.id)
            })
            await pedido.setProductos(productos)
            res.status(204).json();
            return
        }
        catch (error) {
            res.status(500).json({
                isSuccess: false,
                error: error
            })
            return
        }
    },
    //Delete action
    deletePedido: async (req, res) => {
        let pedido = await db.pedidos.findOne({
            where:{
                id: req.params.id
            }
        })
        if (pedido == null) 
            res.status(404).json();
        await pedido.destroy();
        res.status(204).json() 
    }
}
module.exports = pedidosController