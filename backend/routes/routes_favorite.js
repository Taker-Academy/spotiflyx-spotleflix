const express = require("express");
const router = express.Router();
const { setPostVideoFav } = require("../controls/favorite/control_PostVideoFav");
const { setGetVideoFav } = require("../controls/favorite/control_GetVideoFav");
const { setDeleteVideoFav } = require("../controls/favorite/control_DeleteVideoFav");

router.post("/video/post", setPostVideoFav);

router.delete("/video/delete", setDeleteVideoFav);

router.get("/video", setGetVideoFav);


module.exports = router;