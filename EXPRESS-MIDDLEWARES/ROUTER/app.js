const express = require("express");
const app = express();
const router = express.Router();
const chalk = require("chalk");

router.get("/", (req, res, next) => {
  console.log("in cards!");
  next();
});

app.use("/cards", router);

app.use((err, req, res, next) => {
  console.error(chalk.redBright(err.message));
  res.status(500).send(err.message);
});

const PORT = 8181;
app.listen(PORT, () =>
  console.log(chalk.blueBright("Listening on: http://localhost:8181"))
);

// console.log(router);
