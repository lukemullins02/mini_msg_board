const messages = require("../db.js");

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
  res.render("index", { title: "Mini Messageboard", messages: messages });

module.exports = { createMsg, renderForm, renderIndex };
