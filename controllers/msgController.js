const messages = require("../db.js");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const createMsg = (req, res) => {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });

  res.redirect("/");
};

const renderForm = (req, res) => res.render("form");

const renderIndex = (req, res) =>
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
  });

const renderMessages = (req, res) => {
  if (!messages[Number(req.params.index)]) {
    throw new CustomNotFoundError("Message index out of bounds");
  }

  res.render("details", {
    title: "Details",
    message: messages[Number(req.params.index)],
  });
};

module.exports = {
  createMsg,
  renderForm,
  renderIndex,
  renderMessages,
};
