const express = require("express");
const ViteExpress = require("vite-express");
const cors = require("cors");
const user =require('./routes/user');
require("./db/ConnectDB");
require("dotenv").config();

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", user);

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on http://localhost:${port}`)
);