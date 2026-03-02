const { Router } = require("express");
const { createMsg } = require("../controllers/msgController");
const messages = require("../db.js");
const msgRouter = Router();

msgRouter.get("/", (req, res) =>
  res.render("index", { title: "Mini Messageboard", messages: messages }),
);

msgRouter.get("/new", (req, res) => res.render("form"));

msgRouter.post("/new", createMsg);

module.exports = msgRouter;
