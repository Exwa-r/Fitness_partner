const user = require("../model/usermodel");

async function verifylogin(req, res) {
  try {
    const { mail, password } = req.body;

    if (!mail || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const finduser = await user.findOne({ mail });
    if (!finduser) {
      return res.status(404).json({ message: "User not found" });
    }

    if (finduser.password !== password) {
      return res.status(400).json({ message: "Password is incorrect" });
    }

    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function addlogin(req, res) {
  try {
    const { mail, password } = req.body;
    if (!mail || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }
    const newUser = await user.create({ mail, password });
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

module.exports = { verifylogin, addlogin };
