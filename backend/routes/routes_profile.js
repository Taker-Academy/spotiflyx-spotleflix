const express = require("express");
const router = express.Router();
const { delUser } = require("../controls/profile/control_delUser");
const { putModPassword } = require("../controls/profile/control_modPassword");
const { setGetUser } = require("../controls/profile/control_setGetUser");

router.put("/password/modify", putModPassword);

router.delete("/delete", delUser);

router.get("/", setGetUser);

module.exports = router;