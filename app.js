const express = require("express");
const app = express();
const msgRouter = require("./routes/msgRouter");

app.use("/", msgRouter);

const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Listening on port ${PORT}`);
});
