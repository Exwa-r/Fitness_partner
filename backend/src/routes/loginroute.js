const express = require("express");
const { addlogin, verifylogin } = require("../controller/logincontroller");

const router = express.Router();

router.patch("/login", verifylogin);
router.post("/login", addlogin);

module.exports = router;
