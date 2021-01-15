const router = require('express').Router();
const pedidosController = require('../controllers/pedidos.crontroller');
const productosController = require('../controllers/productos.controller');
const usuariosController = require('../controllers/usuarios.controller');
const usersValidation = require('../validations/users.validation');


//Usuariios
router.post('/usuarios', usuariosController.createUsuarios);
router.post('/usuarios/login', usuariosController.authenticate);
router.get('/usuarios', usersValidation.isAuthorized, usersValidation.isAdmin, usuariosController.getUsuarios)

//Productos
router.post('/productos',usersValidation.isAuthorized,usersValidation.isAdmin, productosController.createProductos);
router.get('/productos', usersValidation.isAuthorized, productosController.getProductos);
router.get('/productos/:id', usersValidation.isAuthorized, productosController.getProductoById);
router.put('/productos/:id', usersValidation.isAuthorized, usersValidation.isAdmin, productosController.updateProducto);
router.delete('/productos/:id', usersValidation.isAuthorized, usersValidation.isAdmin, productosController.deleteProducto);


//Pedidos
router.post('/pedidos', usersValidation.isAuthorized, pedidosController.createPedidos);
router.get('/pedidos', usersValidation.isAuthorized, pedidosController.getPedidos);
router.get('/pedidos', usersValidation.isAuthorized, usersValidation.isAdmin, pedidosController.getPedidos);
router.get('/pedidos/:id', usersValidation.isAuthorized, usersValidation.isAdmin, pedidosController.getPedidoById);
router.put('/pedidos/:id', usersValidation.isAuthorized, usersValidation.isAdmin, pedidosController.updatePedidos);
router.delete('/pedidos/:id', usersValidation.isAuthorized, usersValidation.isAdmin, pedidosController.deletePedido);


module.exports = router