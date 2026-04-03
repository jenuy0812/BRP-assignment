const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  res.status(200).json({ message: "REGISTER ROUTE WORKS" });
});

router.post("/login", (req, res) => {
  res.status(200).json({ message: "LOGIN ROUTE WORKS" });
});

module.exports = router;