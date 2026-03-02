const { Router } = require("express");
const {
  createMsg,
  renderForm,
  renderIndex,
  renderMessages,
} = require("../controllers/msgController");

const msgRouter = Router();

msgRouter.get("/", renderIndex);

msgRouter.get("/new", renderForm);

msgRouter.get("/messages/:index", renderMessages);

msgRouter.post("/new", createMsg);

module.exports = msgRouter;
