const db = require("../db/queries");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

async function createMsg(req, res) {
  const { text, user } = req.body;
  const added = Intl.DateTimeFormat("en-US", {
    timeStyle: "short",
    dateStyle: "short",
  }).format(new Date());

  await db.insertPost(text, user, added);
  res.redirect("/");
}

const renderForm = (req, res) => res.render("form");

async function renderIndex(req, res) {
  const messages = await db.getAllPosts();

  console.log(messages);

  res.render("index", {
    title: "Mini Messageboard",
    messages: messages.rows,
  });
}

const renderMessages = (req, res) => {
  if (!messages[Number(req.params.index)]) {
    throw new CustomNotFoundError("Message index out of bounds");
  }

  res.render("details", {
    message: messages[Number(req.params.index)],
  });
};

const renderError = (req, res) => {
  res.send("Invalid URL. Try localhost:3000 to get back to home.");
};

module.exports = {
  createMsg,
  renderForm,
  renderIndex,
  renderMessages,
  renderError,
};
