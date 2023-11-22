const express = require("express");
const router = express.Router();
const controller = require('../controller');

router.post("/api/signup", (req, res) => {
    controller.authController.signup(req, res);
});

router.post("/api/login", (req, res) => {
    controller.authController.login(req, res);
});

module.exports = router;