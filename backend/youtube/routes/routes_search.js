const express = require("express");
const router = express.Router();
const { setGetSearch } = require("../controls/search/control_getSearch");
const { setGetPop } = require("../controls/search/control_getPop");

router.get("/search", setGetSearch);

router.get("/popular", setGetPop);

module.exports = router;