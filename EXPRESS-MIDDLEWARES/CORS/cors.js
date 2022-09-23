const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://example.com",
    optionsSuccessStatus: 200,
  })
);

// app.use(
//   cors({
//     origin: "http://127.0.0.1:5500",
//     optionsSuccessStatus: 200,
//   })
// );

// app.use(
//   cors({
//     origin: ["http://example.com", "http://127.0.0.1:5500"],
//     optionsSuccessStatus: 200,
//   })
// );

// app.use(cors()); // כשמעלים לשרת אמיתי חייבים לא להעלות את זה בצורה הזאת!!!!!

app.get("/", (req, res, next) => {
  res.json({ message: "success" });
});

app.listen(3001, function () {
  console.log("Listening on: http://localhost:3001");
});
