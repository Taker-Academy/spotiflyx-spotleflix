const express = require("express");
const router = express.Router();
const { setPostFavoris } = require("../controls/favorite/control_PostFav");

router.post("/post", setPostFavoris);

module.exports = router;