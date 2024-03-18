const express = require("express");
const router = express.Router();
const carsController = require("../controller/cars.js");

/* Add routes */
router.get("/", carsController.getcars);
router.get("/:id", carsController.getdetailcar);
router.post("/", carsController.addcar);
router.put("/:id",carsController.editcar);
router.delete("/:id", carsController.deletecar);

module.exports = router;
