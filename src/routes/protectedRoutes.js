const express = require("express");
const { auth, adminOnly } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/dashboard", auth, (req, res) => {
  res.json({
    message: "Protected dashboard accessed",
    user: req.user
  });
});

router.get("/admin", auth, adminOnly, (req, res) => {
  res.json({
    message: "Admin route accessed",
    user: req.user
  });
});

module.exports = router;
