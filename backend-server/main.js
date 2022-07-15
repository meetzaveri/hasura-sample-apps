import { sendMail } from "./controllers";

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World (from hasura backend) !");
});

app.post("/sendMail", sendMail);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
