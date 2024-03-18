const express = require("express");
const router = express.Router();
const carsRoute = require("./cars.js");

// /students
router.use("/cars", carsRoute);

module.exports = router;
