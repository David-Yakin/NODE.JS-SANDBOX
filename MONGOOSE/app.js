const express = require("express");
const app = express();
const chalk = require("chalk");
const mongoose = require("mongoose");

app.use(express.json());

const PORT = 8989;
app.listen(PORT, () => {
  console.log(chalk.blueBright(`Listening on: http://localhost:${PORT}`));
  mongoose
    .connect("mongodb://localhost:27017/mongoose-sandbox")
    .then(() => console.log(chalk.magentaBright("connected to MongoDb!")))
    .catch(error =>
      console.log(
        chalk.redBright.bold(`could not connect to mongoDb: ${error}`)
      )
    );
});

// const schema = new mongoose.Schema({}); // בחלק הזה אציב את הסכמות המשתנות

// const Test = mongoose.model("test", schema);

// app.post("/", async (req, res) => {
//   try {
//     const dataFromReqBody = req.body;
//     const user = new Test(dataFromReqBody);
//     await user.save();
//     res.send(user);
//   } catch (error) {
//     console.log(chalk.redBright(`Mongoose Schema Error: ${error.message}`));
//     res.status(400).send(error.message);
//   }
// });

// app.use((err, req, res, next) => {
//   console.error(chalk.redBright(err.message));
//   res.status(500).send(err.message);
// });

/***** Schema Values Types *****/
// const schema = new mongoose.Schema({
//   string: String,
//   number: Number,
//   bool: Boolean,
//   date: Date,
//   id: mongoose.Types.ObjectId,
//   array: [String],
// });

// const Test = mongoose.model("test", schema);

// app.post("/", async (req, res) => {
//   try {
//     const dataFromReqBody = req.body;
//     const user = new Test(dataFromReqBody);
//     await user.save();
//     res.send(user);
//   } catch (error) {
//     console.log(chalk.redBright(`Mongoose Schema Error: ${error.message}`));
//     res.status(400).send(error.message);
//   }
// });

// app.use((err, req, res, next) => {
//   console.error(chalk.redBright(err.message));
//   res.status(500).send(err.message);
// });

/***** Schema in Schema *****/
// const nameSchema = new mongoose.Schema({
//   first: String,
//   last: String,
// });

// const schema = new mongoose.Schema({
//   name: nameSchema,
// });

// const Test = mongoose.model("test", schema);

// app.post("/", async (req, res) => {
//   try {
//     const dataFromReqBody = req.body;
//     const user = new Test(dataFromReqBody);
//     await user.save();
//     res.send(user);
//   } catch (error) {
//     console.log(chalk.redBright(`Mongoose Schema Error: ${error.message}`));
//     res.status(400).send(error.message);
//   }
// });

// app.use((err, req, res, next) => {
//   console.error(chalk.redBright(err.message));
//   res.status(500).send(err.message);
// });

/***** Schema validate key *****/
// const schema = new mongoose.Schema({
//   title: {
//     type: String,
//     trim: true,
//     lowercase: true,
//     minLength: 2,
//     maxLength: 256,
//     default: "did not enter title",
//     required: true,
//   },
// });

// const Test = mongoose.model("test", schema);

// app.post("/", async (req, res) => {
//   try {
//     const dataFromReqBody = req.body;
//     const user = new Test(dataFromReqBody);
//     await user.save();
//     res.send(user);
//   } catch (error) {
//     console.log(chalk.redBright(`Mongoose Schema Error: ${error.message}`));
//     res.status(400).send(error.message);
//   }
// });

// app.use((err, req, res, next) => {
//   console.error(chalk.redBright(err.message));
//   res.status(500).send(err.message);
// });

/***** Schema validate unique *****/
// const schema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//     unique: true,
//   },
// });

// const Test = mongoose.model("test", schema);

// app.post("/", async (req, res) => {
//   try {
//     const dataFromReqBody = req.body;
//     const user = new Test(dataFromReqBody);
//     await user.save();
//     res.send(user);
//   } catch (error) {
//     console.log(chalk.redBright(`Mongoose Schema Error: ${error.message}`));
//     res.status(400).send(error.message);
//   }
// });

// app.use((err, req, res, next) => {
//   console.error(chalk.redBright(err.message));
//   res.status(500).send(err.message);
// });

/***** Schema validate regex *****/
// const schema = new mongoose.Schema({
//   password: {
//     type: String,
//     match: RegExp(
//       /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
//     ),
//   },
// });

// const Test = mongoose.model("test", schema);

// app.post("/", async (req, res) => {
//   try {
//     const dataFromReqBody = req.body;
//     const user = new Test(dataFromReqBody);
//     await user.save();
//     res.send(user);
//   } catch (error) {
//     console.log(chalk.redBright(`Mongoose Schema Error: ${error.message}`));
//     res.status(400).send(error.message);
//   }
// });

// app.use((err, req, res, next) => {
//   console.error(chalk.redBright(err.message));
//   res.status(500).send(err.message);
// });
