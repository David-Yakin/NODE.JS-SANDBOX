const path = require("path");

console.log(path.join(__dirname, "/path.js"));

// console.log(path.dirname(`${__dirname}/path.js`)); // returns the directory (folder) name of a path

// console.log(path.extname(`${__dirname}/path.js`)); // returns the extension of the path

// const urlObj = path.parse(`${__dirname}/path.js`)
// console.table(urlObj); // returns an object whose properties represent significant elements of the path

/* ---------------------- */
// console.log(path.basename(`${__dirname}/path.js`)); // returns the last portion of a path

// console.log(path.dirname(`${__dirname}/path.js`)); // returns the directory (folder) name of a path

// console.log(path.extname(`${__dirname}/path.js`)); // returns the extension of the path

// console.log(path.join(__dirname, "/path.js")); //  joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.

// const urlObj = path.parse(`${__dirname}/path.js`)
// console.table(urlObj); // returns an object whose properties represent significant elements of the path
