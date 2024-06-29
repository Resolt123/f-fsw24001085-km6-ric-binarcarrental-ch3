const express = require("express");
const route = require("./route");

const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static("public"));

app.use("/", route);

app.use("*", (req, res) => {
  res.status(201).json({
    message: null,
  });
});

app.use((err, req, res, next) => {
  let statusCode = 500;
  let message = "internal server error";

  if (err.statusCode) {
    statusCode = err.statusCode;
  }
  if (err.message) {
    message = err.message;
  }

  res.status(statusCode).json({
    data: null,
    message,
  });
});

app.listen(port, () => {
  console.log(`Server running on ${port}!`);
});
