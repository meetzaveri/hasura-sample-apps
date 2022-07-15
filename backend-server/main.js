import { getUserId } from "./controllers";

const cors = require("cors");
const express = require("express");
const app = express();
const port = 3000;

require("dotenv").config();

// import { createUser } from './controllers/hasuraCreateUser'

app.use(cors());

app.use(express.json());
const router = express.Router();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "./"));
app.get("/", (req, res) => {
  res.send("Hello World (from hasura backend) !");
});

app.post("/getUserId", getUserId);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
