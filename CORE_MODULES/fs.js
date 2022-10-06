// const FileSystem = require("fs");

/********* יצירת תיקייה חדשה **********/
// FileSystem.mkdir("./test", { recursive: true }, (error, path) => {
//   if (error) return console.log(error.message);
//   console.log("fs made a file in: \n" + path);
// });

/********* מחיקת תיקייה **********/
// FileSystem.rmdir("./test", error => {
//   if (error) return console.log(error.message);
//   console.log("directory removed!");
// });

/********* יצירת קובץ  **********/
// FileSystem.mkdir("./test", { recursive: true }, (error, path) => {
//   if (error) return console.log(error.message);
//   console.log("fs made a file in: \n" + path);
// });

// FileSystem.writeFile(
//   __dirname + "/test/testing.txt", // file
//   "writing some text in the file", //data
//   error => {
//     if (error) return console.log(error.message);
//     console.log("created the testing file in the test folder!");
//   }
// );

/***** דוגמה שמראה כי לא ניתן למחוק תיקייה שיש בתוכה קבצים *****/
// FileSystem.rmdir("./test", error => {
//     if (error) return console.log(error.message);
//     console.log("directory removed!");
// });

/********* מחיקת קובץ מתוך תיקייה **********/

// FileSystem.unlink(__dirname + "/test/testing.txt", error => {
//   if (error) return console.log(error.message);
//   console.log("file deleted successfully!");
// });

/********* הכנת תשתית ליצירת מערך של שמות קבצים בתיקייה **********/

/* יצירת התיקייה מחדש ויצירת מספר קבצים בתוכה */
// FileSystem.mkdir(__dirname + "/test", error => {
//   if (error) return console.log(error.message);
//   for (i = 0; i < 3; i++) {
//     FileSystem.writeFile(
//       __dirname + `/test/testing-${i}.txt`,
//       `file no. ${i}`,
//       error => {
//         if (error) return console.log(error.message);
//         console.log(`file created!`);
//       }
//     );
//   }
// });

// /* יצירת המערך של שמות הקבצים בתיקייה */
// FileSystem.readdir(__dirname + "/test", (error, files) => {
//   if (error)
//     return console.log(
//       `Opss... an Error accrued in readdir method: ${error.message}`
//     );
//   console.log(files);
// });

/********* יצירת מערך עם שמות הקבצים שנמצאים בתוך תיקייה בצורה אסינכרונית **********/

// const { mkdir, readdir, writeFile, rmdir, unlink } = require("fs/promises");

// const fn = async () => {
//   try {
//     await mkdir(`${__dirname}/test`);

//     for (i = 0; i < 3; i++)
//       await writeFile(
//         `${__dirname}/test/testing-${i + 1}.txt`,
//         `file no. ${i + 1}`
//       );

//     const filesArray = await readdir(__dirname + "/test");
//     console.log(filesArray);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// fn();

/********* מחיקת כל הקבצים שנמצאים בתוך תיקייה ואת תיקייה עצמה **********/

// const remove = async () => {
//   try {
//     const files = await readdir(__dirname + "/test");
//     files.forEach(async file => await unlink(`${__dirname}/test/${file}`));
//     await rmdir(`${__dirname}/test`);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// remove();

/********* בדיקה אם נתיב קיים **********/
// const isExists = FileSystem.existsSync(`${__dirname}/test`);
// console.log(isExists);

/********* משימת יצירת מספר קבצים עם שמות דינאמיים בתוך תיקייה **********/
// const fs = require("fs");
// const { mkdir, readdir, writeFile, rmdir, unlink } = require("fs/promises");
// const path = require("path");

// const users = [
//   { name: "first", last: "user" },
//   { name: "second", last: "user" },
//   { name: "third", last: "user" },
// ];

// const makeAndRemoveFilesAndFolder = async () => {
//   const isExists = fs.existsSync(`${__dirname}/users`);
//   if (!isExists) {
//     try {
//       await mkdir(`${__dirname}/users`);
//       users.forEach(async user => {
//         await writeFile(
//           __dirname + `/users/${user.name}-${user.last}.txt`,
//           `User name is: ${user.name} ${user.last}`
//         );
//       });

//       await writeFile(__dirname + `/users/test.doc`, `Test file`);
//     } catch (error) {
//       console.log(error.message);
//     }
//   }

//   setTimeout(async () => {
//     try {
//       const files = await readdir(__dirname + "/users");
//       files.forEach(async file => {
//         if (path.extname(file) == ".txt") {
//           await unlink(`${__dirname}/users/${file}`);
//         }
//       });
//       await rmdir(__dirname + "/users");
//     } catch (error) {
//       console.log(error.message);
//     }
//   }, 5000);
// };

// makeAndRemoveFilesAndFolder();
const fs = require("fs");
const { mkdir, readdir, writeFile, rmdir, unlink } = require("fs/promises");

const users = [
  {
    name: "yinon",
    last: "perets",
  },
  {
    name: "yossi",
    last: "perets",
  },
  {
    name: "yarin",
    last: "perets",
  },
];

const removeFilesAndFolders = async () => {
  try {
    const users = await mkdir(`${__dirname}/users`);
    users.forEach(async user => await unlink(`${__dirname}/users/${user}`));
    await rmdir(`${__dirname}/users`);
  } catch (err) {
    console.log(err.message);
  }
};

const makeAndRemoveFilesAndFolder = async () => {
  try {
    const isExists = fs.existsSync(`${__dirname}/users`);
    if (isExists) return removeFilesAndFolders();
    await mkdir(`${__dirname}/users`);
    for (let i = 0; i < 4; i++) {
      await writeFile(
        `${__dirname}/users/${users[i].name} ${users[i].last}.txt`,
        `The username is: ${users[i].name} ${users[i].last}`
      );
    }
  } catch (err) {
    console.log(err.message);
  }
};
makeAndRemoveFilesAndFolder();

const setTimeoutOfusers = setTimeout(async () => {
  await removeFilesAndFolders();
}, 8000);
