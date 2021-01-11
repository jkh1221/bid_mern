const express = require('express');
const router = express.Router();
const cars = require("../controllers/car.controller.js");

router.get("/getCarousel", cars.getCarousel);
router.get("/getList", cars.getList);
router.get("/getYears", cars.getYears);
router.get("/getFilter0", cars.getFilter0);
router.get("/getFilters", cars.getFilters);

module.exports = router;