const express = require("express");
const { setGetSearch } = require("../controls/search/control_getSearch");
const router = express.Router();

router.get("/search", setGetSearch);

module.exports = router;