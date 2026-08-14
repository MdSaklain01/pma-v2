const express = require("express");
const router = express.Router();

const { jwtAuthMiddleware } = require("../authetication/jwt.auth");
const prescriptionController = require("../controllers/prescription.controller");

// All prescription routes require login
// router.use(jwtAuthMiddleware);

router.get(
    "/:appointmentId/download",
    prescriptionController.downloadPrescription
);

module.exports = router;

//6a59bb03e76413347ea0d6ed