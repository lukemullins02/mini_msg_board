const { Router } = require("express");
const {
  createMsg,
  renderForm,
  renderIndex,
  renderMessages,
  renderError,
} = require("../controllers/msgController");

const msgRouter = Router();

msgRouter.get("/", renderIndex);

msgRouter.get("/new", renderForm);

msgRouter.get("/messages/:index", renderMessages);

msgRouter.post("/new", createMsg);

msgRouter.get("/{*splat}", renderError);

module.exports = msgRouter;
