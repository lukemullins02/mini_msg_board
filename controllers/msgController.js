const db = require("../db/queries");
const CustomNotFoundError = require("../errors/CustomNotFoundError");
const { body, validationResult, matchedData } = require("express-validator");

const textErr = "must be 200 characters or less.";
const userErr = "must only contain letters.";
const lengthErr = "must be between 1 and 20 characters.";

const validateUser = [
  body("text").isLength({ max: 200 }).withMessage(`Text ${textErr}`),
  body("user")
    .trim()
    .isAlpha()
    .withMessage(`User ${userErr}`)
    .isLength({ min: 1, max: 20 })
    .withMessage(`User ${lengthErr}`),
];

const createMsg = [
  validateUser,
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).render("form", {
        errors: errors.array(),
      });
    }

    const { text, user } = matchedData(req);
    const added = Intl.DateTimeFormat("en-US", {
      timeStyle: "short",
      dateStyle: "short",
    }).format(new Date());

    await db.insertPost(text, user, added);
    res.redirect("/");
  },
];

const renderForm = (req, res) => res.render("form");

async function renderIndex(req, res) {
  const messages = await db.getAllPosts();

  res.render("index", {
    title: "Mini Messageboard",
    messages: messages.rows,
  });
}

const renderMessages = async (req, res) => {
  const index = req.params.index;

  if (!index) {
    throw new CustomNotFoundError("Message doesn't exist");
  }

  const message = await db.getPost(index);

  res.render("details", {
    message: message.rows[0],
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
