const { Sequelize, DataTypes} = require('sequelize');
const config = require('../config')



const sequelize = new Sequelize({
    dialect: config.database.dialect,
    username: config.database.username,
    password: config.database.password,
    host: config.database.host,
    port: config.database.port,
    database: config.database.database
});


const init = async () => {
    console.log('Conectando con la DB...');
    return await sequelize.authenticate(); 
}

const db = {}
db.init = init;
db.DataTypes = DataTypes;
db.sequelize = sequelize;
db.productos = require('./product.models')(sequelize, DataTypes);
db.pedidos = require('./pedidos.models')(sequelize, DataTypes);
db.usuarios = require('./usuarios.models')(sequelize, DataTypes);
db.pedidosProductos = require('./pedidosProductos.models')(sequelize, DataTypes);

db.pedidos.belongsTo(db.usuarios, {foreingKey: "usuarioId"});
db.usuarios.hasMany(db.pedidos, {foreingKey: "usuarioId", foreingKeyConstraint: true});

db.pedidos.belongsToMany(db.productos, {through: db.pedidosProductos});
db.productos.belongsToMany(db.pedidos, {through: db.pedidosProductos});

module.exports = db;


