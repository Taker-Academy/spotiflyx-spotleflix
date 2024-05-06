const express = require("express");
const router = express.Router();
const { setPostVideo } = require("../controls/video/control_PostVideo");
const { setGetAllVideos } = require("../controls/video/control_getAllVideo");
const { setGetVideosUser } = require("../controls/video/control_getVideoUser");
const { setPostFavoris } = require("../controls/favorite/control_PostFav");
const { setDelVideoId } = require("../controls/video/control_delVideoId");


router.post("/post", setPostVideo);

router.get("/", setGetAllVideos);

router.get("/me", setGetVideosUser);

router.delete("/:id", setDelVideoId);

module.exports = router;