module.exports = (sequelize, Sequelize) => {
    const Products = sequelize.define("products", {
      nombre: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.INTEGER 
      },
      imagen: {
        type: Sequelize.STRING
      },
      id_categoria: {
        type: Sequelize.INTEGER
      },
      precio:{
        type: Sequelize.FLOAT    
      },
      fecha_v :{
        type: Sequelize.DATE    
      },
      stock :{
        type: Sequelize.INTEGER    
      },
      unidad_medida :{
        type: Sequelize.INTEGER    
      },
      cantidad :{
        type: Sequelize.INTEGER    
      },

    });
  
    return Products;
  };
  