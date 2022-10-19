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

/********** Mongoose Queries **********/
// const express = require("express");
// const app = express();
// const chalk = require("chalk");
// const mongoose = require("mongoose");

// app.use(express.json());

// const PORT = 8989;
// app.listen(PORT, () => {
//   console.log(chalk.blueBright(`Listening on: http://localhost:${PORT}`));
//   mongoose
//     .connect("mongodb://localhost:27017/mongoose-sandbox")
//     .then(() => console.log(chalk.magentaBright("connected to MongoDb!")))
//     .catch(error =>
//       console.log(
//         chalk.redBright.bold(`could not connect to mongoDb: ${error}`)
//       )
//     );
// });

// const schema = new mongoose.Schema({
//   string: String,
//   number: Number,
//   bool: Boolean,
//   date: { type: Date, default: Date.now },
// });

// const Test = mongoose.model("test", schema);

// const handleError = (res, error) => {
//   console.log(chalk.redBright(`Mongoose Error: ${error.message}`));
//   res.status(400).send(`Mongoose Error: ${error.message}`);
// };

/***** save return instance or error *****/
// app.post("/", async (req, res) => {
//   try {
//     const dataFromReqBody = req.body;
//     let instance = new Test(dataFromReqBody);
//     instance = await instance.save();
//     res.send(instance);
//   } catch (error) {
//     handleError(res, error);
//   }
// });

/***** find return instance or error *****/
// app.get("/", async (req, res) => {
//   try {
//     const instance = await Test.find();
//     res.send(instance);
//   } catch (error) {
//     handleError(res, error);
//   }
// });

// app.get("/query", async (req, res) => {
//   try {
//     // const instance = await Test.find({ number: { $gte: 2, $lt: 3 } });
//     // const instance = await Test.find({ string: { $eq: "string"} });
//     // const instance = await Test.find({
//     //   date: { $eq: "2022-10-19T08:47:53.346+00:00" },
//     // });
//     res.send(instance);
//   } catch (error) {
//     handleError(res, error);
//   }
// });

// app.get("/filter", async (req, res) => {
//   try {
//     const instance = await Test.find({}, { string: 0, number: 0, _id: 0 });
//     res.send(instance);
//   } catch (error) {
//     handleError(res, error);
//   }
// });

// /***** findOne return instance or null *****/
// app.get("/findOne/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const instance = await Test.findOne({ _id: id });
//     if (!instance)
//       throw new Error("Could not find this instance in the database");
//     res.send(instance);
//   } catch (error) {
//     handleError(res, error);
//   }
// });

/* find methods */
// app.get("/count", async (req, res) => {
//   try {
//     const count = await Test.find().count();
//     res.send({ count });
//   } catch (error) {
//     handleError(res, error);
//   }
// });

// app.get("/select", async (req, res) => {
//   try {
//     const select = await Test.find().select(["string", "number", "-_id"]);
//     res.send(select);
//   } catch (error) {
//     handleError(res, error);
//   }
// });

// app.get("/sort", async (req, res) => {
//   try {
//     const sort = await Test.find().sort({ number: 1 });
//     res.send(sort);
//   } catch (error) {
//     handleError(res, error);
//   }
// });

// app.get("/selectAndSort", async (req, res) => {
//   try {
//     const select = await Test.find()
//       .select(["number", "-_id"])
//       .sort({ number: 1 });
//     res.send(select);
//   } catch (error) {
//     handleError(res, error);
//   }
// });

/***** findById return instance or null *****/
// app.get("/findById/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const instance = await Test.findById(id);
//     if (!instance)
//       throw new Error("Could not find this instance in the database");
//     res.send(instance);
//   } catch (error) {
//     handleError(res, error);
//   }
// });

/***** findByIdAndUpdate return instance or null  *****/
// app.put("/findByIdAndUpdate/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const instance = await Test.findByIdAndUpdate(id, req.body, {
//       new: true,
//     });
//     if (!instance)
//       throw new Error("Could not find this instance in the database");
//     res.send(instance);
//   } catch (error) {
//     handleError(res, error);
//   }
// });

/***** findByIdAndDelete return instance or null  *****/
// app.delete("/findByIdAndDelete/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const instance = await Test.findByIdAndDelete(id);
//     if (!instance)
//       throw new Error(
//         "Could not delete this instance because a card with this ID cannot be found in the database"
//       );
//     res.send(instance);
//   } catch (error) {
//     handleError(res, error);
//   }
// });

// const lodash = require("lodash");

// const generateUniqueNumber = async () => {
//   const random = lodash.random(1, 4);
//   const instance = await Test.findOne(
//     { number: random },
//     { number: 1, _id: 0 }
//   );

//   console.log(instance);
//   if (instance) return generateUniqueNumber();

//   console.log(random);
// };
// generateUniqueNumber();

// app.use((err, req, res, next) => {
//   console.error(chalk.redBright(err.message));
//   res.status(500).send(err.message);
// });
