const express = require("express");
const app = express();
const chalk = require("chalk");
const cors = require("cors");
const morgan = require("morgan");

app.use(
  morgan(
    chalk.cyanBright("[:date[clf]] :method :url :status :response-time ms")
  )
);

// app.use(
//   cors({
//     origin: "http://127.0.0.1:5500",
//     optionsSuccessStatus: 200,
//   })
// );

app.use(
  morgan((tokens, req, res) => {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      "-",
      tokens["response-time"](req, res),
      "ms",
    ].join(" ");
  })
);

app.get("/", (req, res, next) => {
  res.status(200).json({ message: "success" });
});

app.use((err, req, res, next) => {
  console.error(chalk.redBright(err.message));
  res.status(500).send(err.message);
});

const PORT = 3002;
app.listen(PORT, function () {
  console.log(chalk.blueBright("Listening on: http://localhost:3002"));
});
