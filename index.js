const express = require("express");
const app = express();
const path = require("path");
const mysql = require("mysql");
app.use(express.static(__dirname));
app.get("/", (req, resp) => {
  resp.sendFile(path.join(__dirname, "index.html"));
  resp.end();
});
app.listen(process.env.PORT);
