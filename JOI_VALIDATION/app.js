const Joi = require("joi");

/***** valid schema *****/
// const schema = Joi.object({ name: Joi.string() });

// const user = { name: "David" };

// const { error } = schema.validate(user);

// if (error) return console.log(error.details[0].message);

// console.log("valid!");

/***** invalid schema *****/
// const schema = Joi.object({ name: Joi.string() });

// const user2 = { name: "David", last: "Yakin" };

// const { error } = schema.validate(user2);

// if (error) return console.log(error.details[0].message);

// console.log("valid!");

/***** schema's keys main types *****/
// const schema = Joi.object({
//   string: Joi.string(),
//   number: Joi.number(),
//   bool: Joi.boolean(),
//   notUndefined: Joi.required(),
//   object: Joi.object().keys({
//     key: Joi.string(),
//   }),
//   array: Joi.array().items(Joi.string()),
//   arrayOfObjects: Joi.array().items(
//     Joi.object().keys({
//       key: Joi.string(),
//     })
//   ),
//   objectWithArray: Joi.object().keys({
//     array: Joi.array().items(Joi.number()),
//   }),
// });

// const obj = {
//   string: "David",
//   number: 5,
//   bool: false,
//   notUndefined: "not undefined",
//   object: {
//     key: "value",
//   },
//   array: ["string"],
//   arrayOfObjects: [{ key: "string" }],
//   objectWithArray: { array: [5] },
// };

// const { error } = schema.validate(obj);
// if (error) return console.log(error.details[0].message);
// console.log("valid!");

/***** chain of validation functions *****/
// const schema = Joi.object({
//   key: Joi.string().min(2).max(5).required(),
// });
// const obj = { key: "test" };
// const { error } = schema.validate(obj);

// if (error) return console.log(error.details[0].message);
// console.log("valid!");

/***** regex *****/

// const schema = Joi.object({
//   key: Joi.string().regex(/david/),
// });
// const obj = { key: "david" };
// // const obj = { key: "shlomi" };
// const { error } = schema.validate(obj);

// if (error) return console.log(error.details[0].message);
// console.log("valid!");

/***** custom messages *****/
// const schema = Joi.object({
//   key: Joi.string()
//     .ruleset.regex(/david/)
//     .rule({ message: "key mast be david!" }),
// });
// const obj = { key: "shlomi" };
// const { error } = schema.validate(obj);

// if (error) return console.log(error.details[0].message);
// console.log("valid!");

/***** validation function *****/
// const validationFunction = obj => {
//   const schema = Joi.object({
//     name: Joi.string().required(),
//   });
//   return schema.validate(obj);
// };

// const obj = { name: "David" };

// const { error } = validationFunction(obj);

// if (error) return console.log(error.details[0].message);
// console.log("valid!");

/***** allow *****/
// const validationFunction = obj => {
//   const schema = Joi.object({
//     name: Joi.string().min(2).allow(""),
//   });
//   return schema.validate(obj);
// };

// const obj = { name: "" };

// const { error } = validationFunction(obj);

// if (error) return console.log(error.details[0].message);
// console.log("valid!");
