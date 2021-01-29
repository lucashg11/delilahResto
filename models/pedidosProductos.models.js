module.exports= (sequelize, DataTypes)=>{
    return sequelize.define('pedidosProductos' , {
     cantidad:{
            type: DataTypes.INTEGER,
            allowNull: false
        }    
    });
}