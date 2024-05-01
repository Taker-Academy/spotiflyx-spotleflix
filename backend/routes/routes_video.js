const express = require("express");
const { setPostVideo } = require("../controls/video/control_PostVideo");
const router = express.Router();


router.post("/post", setPostVideo);

module.exports = router;