const Car = require("../models/car.model.js");

module.exports = {
  getCarousel,
  getList,
  getYears,
  getFilter0,
  getFilters,
}

// Retrieve all Categorys from the database.
function getCarousel (req, res) {
  Car.getCarousel((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Categorys."
      });
    else res.send(data);
  });
};

function getList (req, res) {
  Car.getList((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving List."
      });
    else res.send(data);
  });
};

function getYears (req, res) {
  Car.getYears((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Years."
      });
    else res.send(data);
  });
};

function getFilter0 (req, res) {
  Car.getFilter0((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Years."
      });
    else res.send(data);
  });
};

function getFilters (req, res) {
  Car.getFilters((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Years."
      });
    else res.send(data);
  });
};
