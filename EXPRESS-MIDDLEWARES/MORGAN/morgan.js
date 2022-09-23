const express = require("express");
const app = express();
const chalk = require("chalk");
const cors = require("cors");
const morgan = require("morgan");

app.use(morgan(chalk.cyanBright(":method :url :status :response-time ms")));
app.use(cors());

app.get("/", (req, res, next) => {
  res.status(200).json({ message: "success" });
});

const PORT = 3002;
app.listen(PORT, function () {
  console.log("Listening on: http://localhost:3002");
});
