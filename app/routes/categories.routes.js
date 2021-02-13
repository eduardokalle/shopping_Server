module.exports = app => {
    const categories = require("../controllers/categories.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all categories
    router.get("/", categories.findAll);

    // Create a new categories
    router.post("/", categories.create);

    // Retrieve all published categories
    router.get("/published", categories.findAllPublished);
  
    // Retrieve a single categories with id
    router.get("/:id", categories.findOne);
  
    // Update a categories with id
    router.put("/:id", categories.update);
  
    // Delete a categories with id
    router.delete("/:id", categories.delete);
  
    // Delete all categories
    router.delete("/", categories.deleteAll);
  
    app.use('/api/categories', router);
  };
  