const messages = require("../db.js");

const createMsg = async (req, res) => {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });

  res.redirect("/");
};

module.exports = { createMsg };
