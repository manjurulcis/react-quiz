const express = require("express");
const model = require("./models/QuizModels");

const app = express();
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:19006");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", function (req, res) {
  model.selectTable(res);
});

app.post("/storedata", function (req, res) {
  model.insertData(req, res);
});

app.listen(process.env.PORT, function () {
  console.log(`App listening at ${process.env.PORT} `);
});
