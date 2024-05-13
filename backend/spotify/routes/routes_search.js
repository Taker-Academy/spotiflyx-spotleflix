const express = require("express");
const router = express.Router();
const { setGetSearch } = require("../controls/control_getSearch");
const { setGetPop } = require("../controls/control_getPop");

router.get("/search", setGetSearch);

router.get("/popular", setGetPop);

module.exports = router;