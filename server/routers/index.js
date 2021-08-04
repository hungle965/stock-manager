const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await db.all();
    res.json(result);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { id } = req.body;
    if (!id) {
      res.json({ err: "syntax error" });
      return;
    }

    const result = await db.detail(id);
    if (!result.length) {
      res.sendStatus(404);
      return;
    }

    res.json(result);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
