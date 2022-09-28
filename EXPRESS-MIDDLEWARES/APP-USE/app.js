const express = require("express");
const app = express();
const chalk = require("chalk");
/****** app.use with first url parameter or not *****/
// app.use((req, res, next) => {
//   console.log(chalk.yellowBright("in first app.use!"));
//   next();
// });

// app.use("/", (req, res, next) => {
//   console.log(chalk.yellowBright("in second app.use!"));
//   next();
// });

/****** app.use next *****/
// app.use(
//   "/",
//   (req, res, next) => {
//     console.log(chalk.yellowBright("one"));
//     next();
//   },
//   (req, res, next) => {
//     console.log(chalk.redBright("two"));
//     next();
//   },
//   (req, res, next) => {
//     console.log(chalk.magentaBright("three"));
//   }
// );

/****** middleware method beside app.use *****/
// app.get("/", (req, res, next) => {
//   console.log(chalk.yellowBright("in get method!!!"));
//   next();
// });

// app.post("/", (req, res, next) => {
//   console.log(chalk.yellowBright("in post method!!!"));
//   next();
// });

// app.patch("/", (req, res, next) => {
//   console.log(chalk.yellowBright("in patch method!!!"));
//   next();
// });

// app.put("/", (req, res, next) => {
//   console.log(chalk.yellowBright("in put method!!!"));
//   next();
// });

// app.delete("/", (req, res, next) => {
//   console.log(chalk.yellowBright("in delete method!!!"));
//   next();
// });

// /****** response object *****/
// app.get("/", (req, res, next) => {
//   res.send({ name: "david" });
// });

// app.get("/", (req, res, next) => {
//   res.send({ name: "david" });
//   setTimeout(() => console.log("in send"), 2000);
// });

// app.get("/", (req, res, next) => {
//   res.status(500).send("problem in server!!!!!");
// });

// app.get("/", (req, res, next) => {
//   res.send(false);
// });

// app.get("/", (req, res, next) => {
//   res.send(undefined);
// });

// app.get("/", (req, res, next) => {
//   res.send(null);
// });

// app.get("/", (req, res, next) => {
//   res.json({ name: "david" });
//   setTimeout(() => console.log("in json"), 2000);
// });

/****** request object *****/
// app.use((req, res, next) => {
//   console.log(chalk.yellowBright("request headers: "), req.headers);
//   next();
// });

/*  req.params */
// app.use("/:id", (req, res, next) => {
//   console.log(chalk.yellowBright("request params: "), req.params);
//   next();
// });

// app.use("/:id/:number", (req, res, next) => {
//   console.log(chalk.yellowBright("request params: "), req.params);
//   next();
// });

/*  req.query */
// app.use((req, res, next) => {
//   console.log(chalk.yellowBright("request query params: "), req.query);
//   next();
// });

/* custom req.key */
// app.use((req, res, next) => {
//   req.user = { name: "user", _id: 123456 };
//   console.log("request new key to request object named user: ", req.user);
//   next();
// });

/* req.body */
// app.use((req, res, next) => {
//   console.log(chalk.yellowBright("request body:"), req.body);
//   next();
// });

// app.use(express.json());
// app.use(express.text());

// app.use((req, res, next) => {
//   console.log(chalk.yellowBright("request body:"), req.body);
//   next();
// });

/* error handling */
// app.use((req, res, next) => {
//   throw new Error("testing error middleware!!!");
// });

// app.use((err, req, res, next) => {
//   console.error(chalk.redBright(err.message));
//   res.status(500).send(err.message);
// });

/* static files */
// app.use(express.static("./public"));

const PORT = 8181;
app.listen(PORT, () =>
  console.log(chalk.blueBright("Listening on: http://localhost:8181"))
);
