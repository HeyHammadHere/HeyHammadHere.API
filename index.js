const express = require("express");
const app = express();
const mysql = require("mysql");
const path = require("path");
app.use(express.static(__dirname));
app.get("/", (req, resp) => {
  resp.sendFile(path.join(__dirname, "index.html"));
  resp.end();
});
app.listen(process.env.PORT);
