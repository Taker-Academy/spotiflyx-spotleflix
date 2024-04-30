const express = require("express");
const router = express.Router();
const { setRegister } = require("../controls/auth/control_register");
const { setLogin } = require("../controls/auth/control_login");

router.post("/register", setRegister);

router.post("/login", setLogin);

module.exports = router;
