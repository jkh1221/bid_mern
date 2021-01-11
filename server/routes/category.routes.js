const express = require('express');
const router = express.Router();
const categories = require("../controllers/category.controller.js");

router.get("/findAll", categories.findAll);

module.exports = router;

// module.exports = app => {
//   const customers = require("../controllers/category.controller.js");

//   // Retrieve all Customers
//   app.get("/findAll", customers.findAll);

// };