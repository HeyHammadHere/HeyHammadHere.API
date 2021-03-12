const express = require("express");
const app = express();
const mysql = require("mysql");
const path = require("path");
const port = 3000 || process.env.PORT;
app.use(express.static(__dirname));
app.get("/", (req, resp) => {
  resp.sendFile(path.join(__dirname, "index.html"));
});
app.listen(port);
