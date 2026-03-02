const { Router } = require("express");
const {
  createMsg,
  renderForm,
  renderIndex,
} = require("../controllers/msgController");
const messages = require("../db.js");
const msgRouter = Router();

msgRouter.get("/", renderIndex);

msgRouter.get("/new", renderForm);

msgRouter.post("/new", createMsg);

module.exports = msgRouter;
