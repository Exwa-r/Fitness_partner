const express = require("express");
const { addlogin, verifylogin } = require("../controller/logincontroller");

const router = express.Router();

router.patch("/", verifylogin);
router.post("/", addlogin);

module.exports = router;
