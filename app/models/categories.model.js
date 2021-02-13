module.exports = (sequelize, Sequelize) => {
    const Categories = sequelize.define("categories", {
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
      }
    });
  
    return Categories;
  };
  