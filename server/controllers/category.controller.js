const Category = require("../models/category.model.js");

module.exports = {
  findAll,
}

// Retrieve all Categorys from the database.
function findAll (req, res) {
  Category.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Categorys."
      });
    else res.send(data);
  });
};
