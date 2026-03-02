const { Router } = require("express");

const msgRouter = Router();

msgRouter.get("/", (req, res) => res.send("Hello!"));
msgRouter.get("/new", (req, res) => res.send("Hello!"));

module.exports = msgRouter;
